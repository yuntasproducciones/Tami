interface ProductLinkModalProps {
    isOpen: boolean;
    selectedText: string;
    onClose: () => void;
    onConfirm: () => void;
  }
  
  const ProductLinkModal: React.FC<ProductLinkModalProps> = ({
    isOpen,
    selectedText,
    onClose,
    onConfirm,
  }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]">
        <div className="bg-white p-6 rounded-xl w-96 text-gray-900">
          <h3 className="text-xl font-bold mb-3 text-purple-600">
            Vincular Producto
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            ¿Deseas convertir el texto "<strong>{selectedText}</strong>" en un
            enlace directo al producto seleccionado en la Información General?
          </p>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="px-4 py-2 bg-purple-600 text-white rounded font-semibold hover:bg-purple-700 transition-colors"
            >
              Confirmar Enlace
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductLinkModal;