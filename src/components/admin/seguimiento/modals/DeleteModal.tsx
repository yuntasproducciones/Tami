import ConfirmDeleteModal from "../../ui/ConfirmDeleteModal.tsx";
import useClienteAcciones from "../../../../hooks/admin/seguimiento/useClientesActions.ts";

interface DeleteClienteModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  clienteId: number;
  onRefetch: () => void;
}

const DeleteClienteModal = ({
  isOpen,
  setIsOpen,
  clienteId,
  onRefetch,
}: DeleteClienteModalProps) => {
  const { deleteCliente } = useClienteAcciones();

  return (
    <ConfirmDeleteModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      entityLabel="cliente"
      onDelete={() => deleteCliente(clienteId)}
      onRefetch={onRefetch}
    />
  );
};

export default DeleteClienteModal;
