/**
 * @file createEntityActions.ts
 * @description Factory que genera las funciones add/update/delete compartidas por los
 * hooks de acciones de entidades del panel admin (productos, clientes, usuarios).
 */

import apiClient from "../../../services/apiClient";

type EntityId = number | string;

interface EntityEndpoints {
  create: string;
  update: (id: EntityId) => string;
  delete: (id: EntityId) => string;
}

interface EntityActionsOptions {
  /** Verbo HTTP usado para actualizar. Productos usa POST (multipart + spoofing de PUT). */
  updateMethod?: "put" | "post";
  /** Si se debe re-lanzar el error de creación como JSON.stringify(response.data), para que el
   * formulario pueda parsear errores de validación por campo (ver useClienteForm). */
  wrapCreateErrors?: boolean;
  /** Mensaje usado cuando falla la creación sin `error.response.data` disponible. */
  createErrorMessage?: string;
}

function createEntityActions<T, TPayload = Partial<T>>(
  endpoints: EntityEndpoints,
  {
    updateMethod = "put",
    wrapCreateErrors = false,
    createErrorMessage = "Error al crear el registro",
  }: EntityActionsOptions = {}
) {
  const add = async (payload: TPayload): Promise<T> => {
    if (!wrapCreateErrors) {
      const response = await apiClient.post(endpoints.create, payload);
      return response.data.data;
    }

    try {
      const response = await apiClient.post(endpoints.create, payload);
      return response.data.data;
    } catch (error: any) {
      if (error.response?.data) {
        throw new Error(JSON.stringify(error.response.data));
      }
      throw new Error(createErrorMessage);
    }
  };

  const update = async (id: EntityId, payload: TPayload): Promise<T> => {
    const response = await apiClient[updateMethod](endpoints.update(id), payload);
    return response.data.data;
  };

  const remove = async (id: EntityId): Promise<{ message: string }> => {
    const response = await apiClient.delete(endpoints.delete(id));
    return response.data;
  };

  return { add, update, remove };
}

export default createEntityActions;
