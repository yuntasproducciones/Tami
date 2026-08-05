/**
 * @file useUsuariosActions.ts
 * @description Este archivo contiene los hooks para las acciones de los Usuarios.
 */

import { config } from "config"; // importa la configuración de la API
import type Usuario from "../../../models/Users"; // importa el modelo de Usuario
import createEntityActions from "../shared/createEntityActions";

const useUsuarioAcciones = () => {
  const { add, update, remove } = createEntityActions<Usuario, Partial<Usuario>>(
    config.endpoints.users
  );

  return {
    addUsuario: add,
    updateUsuario: update,
    deleteUsuario: remove,
  };
};

export default useUsuarioAcciones;
