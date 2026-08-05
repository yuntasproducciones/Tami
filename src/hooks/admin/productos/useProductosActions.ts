/**
 * @file useProductosActions.ts
 * @description Este archivo contiene los hooks para las acciones de los productos.
 */

import { config } from "config"; // importa la configuración de la API
import type Producto from "../../../models/Product.ts"; // importa el modelo de producto
import createEntityActions from "../shared/createEntityActions";

const useProductoAcciones = () => {
  const { add, update, remove } = createEntityActions<Producto, FormData>(
    config.endpoints.productos,
    { updateMethod: "post" }
  );

  return {
    addProducto: add,
    updateProducto: update,
    deleteProducto: remove,
  };
};

export default useProductoAcciones;
