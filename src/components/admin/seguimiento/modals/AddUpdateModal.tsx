/**
 * @file AddUpdateModal.tsx
 * @description Este componente es un modal que se utiliza para añadir o editar clientes.
 * Muestra un formulario con campos para el nombre, teléfono y correo electrónico.
 */

import useClienteForm from "../../../../hooks/admin/seguimiento/useClienteForm.ts";
import type Cliente from "../../../../models/Clients.ts";
import React from "react";
import PersonFormModal from "../../ui/PersonFormModal.tsx";

interface AddDataModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cliente: Cliente | null; // Cliente a editar o null para añadir uno nuevo
  onRefetch: () => void; // Función para actualizar la lista después de agregar o editar
}

const AddUpdateDataModal = ({
  isOpen,
  setIsOpen,
  cliente,
  onRefetch,
}: AddDataModalProps) => {
  const { formData, handleChange, handleSubmit, errors, resetForm } = useClienteForm(
    cliente,
    () => {
      onRefetch();
      setIsOpen(false);
    },
    isOpen
  );

  const handleClose = () => {
    setIsOpen(false);
    resetForm(); // limpia el formulario
  };

  return (
    <PersonFormModal
      isOpen={isOpen}
      title={cliente ? "Editar Cliente" : "Añadir Cliente"}
      submitLabel={cliente ? "Guardar Cambios" : "Añadir Cliente"}
      formData={formData}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onClose={handleClose}
      namePlaceholder="Ej. Juan Pérez"
      celularPlaceholder="Ej. 987654321"
      emailPlaceholder="Ej. cliente@gmail.com"
    />
  );
};

export default AddUpdateDataModal;
