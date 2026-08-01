/**
 * @file useusuarios.ts
 * @description Este archivo contiene el hook para obtener la lista de usuarios.
 * @returns {Object} Un objeto que contiene la lista de usuarios, un estado de carga y un mensaje de error.
 */

import { config } from "config";
import type Usuario from "../../../models/Users";
import usePaginatedList from "../shared/usePaginatedList";

const useUsuarios = (trigger: boolean, page: number = 1) => {
  const { items, totalPages, loading, error } = usePaginatedList<Usuario>(
    config.endpoints.users.list,
    trigger,
    page,
    (data) => data.data?.data || []
  );

  return {
    usuarios: items,
    totalPages,
    loading,
    error,
  };
};

export default useUsuarios;
