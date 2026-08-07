/**
 * @file AddUpdateModal.tsx
 * @description Este componente es un modal que se utiliza para añadir o editar usuarios.
 * Muestra un formulario con campos para el nombre, teléfono y correo electrónico.
 */

import useUsuariosForm from "../../../hooks/admin/usuarios/useUsuariosForm.ts";
import type Usuario from "../../../models/Users.ts";
import React from "react";
import PersonFormModal from "../ui/PersonFormModal.tsx";

interface AddDataModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  Usuario: Usuario | null; // Usuario a editar o null para añadir uno nuevo
  onRefetch: () => void; // Función para actualizar la lista después de agregar o editar
}

const AddUpdateDataModal = ({ isOpen, setIsOpen, Usuario, onRefetch }: AddDataModalProps) => {
  const { formData, handleChange, handleSubmit, resetForm } = useUsuariosForm(
    Usuario,
    () => {
      onRefetch();
      setIsOpen(false);
    },
    isOpen
  );

  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  return (
    <PersonFormModal
      isOpen={isOpen}
      title={Usuario ? "Editar Usuario" : "Añadir Usuario"}
      submitLabel={Usuario ? "Guardar Cambios" : "Añadir Usuario"}
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onClose={handleClose}
      namePlaceholder="Ej. María Gómez"
      celularPlaceholder="Ej. 912345678"
      emailPlaceholder="Ej. usuario@gmail.com"
    />
  );
};

export default AddUpdateDataModal;
