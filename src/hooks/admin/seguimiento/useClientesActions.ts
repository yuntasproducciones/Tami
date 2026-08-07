/**
 * @file useClientesActions.ts
 * @description Este archivo contiene los hooks para las acciones de los clientes.
 */

import { config } from "config"; // importa la configuración de la API
import type Clients from "../../../models/Clients.ts"; // importa el modelo de cliente
import createEntityActions from "../shared/createEntityActions";

const useClienteAcciones = () => {
  const { add, update, remove } = createEntityActions<Clients, Partial<Clients>>(
    config.endpoints.clientes,
    { wrapCreateErrors: true, createErrorMessage: "Error al agregar cliente" }
  );

  return {
    addCliente: add,
    updateCliente: update,
    deleteCliente: remove,
  };
};

export default useClienteAcciones;
