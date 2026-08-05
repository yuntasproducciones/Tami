import { useEffect } from "react";
import Swal from "sweetalert2";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  entityLabel: string;
  onDelete: () => Promise<unknown>;
  onRefetch: () => void;
}

const ConfirmDeleteModal = ({
  isOpen,
  setIsOpen,
  entityLabel,
  onDelete,
  onRefetch,
}: ConfirmDeleteModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const confirmAndDelete = async () => {
      const result = await Swal.fire({
        title: `¿Eliminar ${entityLabel}?`,
        text: "Esta acción es permanente y no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        try {
          await onDelete();
          await Swal.fire("Eliminado", `El ${entityLabel} ha sido eliminado exitosamente.`, "success");
          onRefetch();
        } catch (error) {
          console.error(`Error al eliminar ${entityLabel}:`, error);
          await Swal.fire("Error", `No se pudo eliminar el ${entityLabel}.`, "error");
        }
      }

      setIsOpen(false);
    };

    confirmAndDelete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return null;
};

export default ConfirmDeleteModal;
