/**
 * @file usePaginatedList.ts
 * @description Hook genérico para obtener una lista paginada (page en query, total en la
 * respuesta) desde la API, con estado de carga y error. Usado por productos y usuarios,
 * que comparten esta forma exacta de paginación server-side.
 */

import { useState, useEffect } from "react";
import apiClient from "../../../services/apiClient";

const DEFAULT_PAGE_SIZE = 10;

function usePaginatedList<T>(
  endpoint: string,
  trigger: unknown,
  page: number = 1,
  unwrap: (data: any) => T[],
  pageSize: number = DEFAULT_PAGE_SIZE
) {
  const [items, setItems] = useState<T[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await apiClient.get(`${endpoint}?page=${page}`);
        const data = response.data;

        setItems(unwrap(data));
        setTotalPages(Math.ceil(data.data?.total / pageSize) || 1);
      } catch (err) {
        console.error(`🚨 Error al obtener ${endpoint}:`, err);
        setError(err instanceof Error ? err.message : "Ocurrió un error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, page]);

  return { items, totalPages, loading, error };
}

export default usePaginatedList;
