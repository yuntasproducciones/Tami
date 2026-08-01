/**
 * @file useProductos.ts
 * @description Este archivo contiene el hook para obtener la lista de productos.
 * @returns {Object} Un objeto que contiene la lista de productos, un estado de carga y un mensaje de error.
 */

import { config } from "config";
import type Producto from "../../../models/Product.ts";
import usePaginatedList from "../shared/usePaginatedList";

const useProductos = (trigger: boolean, page: number = 1) => {
    const { items, totalPages, loading, error } = usePaginatedList<Producto>(
        config.endpoints.productos.list,
        trigger,
        page,
        (data) => (Array.isArray(data.data) ? data.data : data.data?.productos || [])
    );

    return {
        productos: items,
        totalPages,
        loading,
        error,
    };
};

export default useProductos;
