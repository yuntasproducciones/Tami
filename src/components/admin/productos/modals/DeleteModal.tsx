import ConfirmDeleteModal from "../../ui/ConfirmDeleteModal.tsx";
import useProductoAcciones from "../../../../hooks/admin/productos/useProductosActions.ts";

interface DeleteProductoModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  productoId: number;
  onRefetch: () => void;
}

const DeleteProductoModal = ({
  isOpen,
  setIsOpen,
  productoId,
  onRefetch,
}: DeleteProductoModalProps) => {
  const { deleteProducto } = useProductoAcciones();

  return (
    <ConfirmDeleteModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      entityLabel="producto"
      onDelete={() => deleteProducto(productoId)}
      onRefetch={onRefetch}
    />
  );
};

export default DeleteProductoModal;
