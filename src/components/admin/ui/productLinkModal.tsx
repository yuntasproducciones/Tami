import React from "react";
import { Package } from "lucide-react";
import type Product from "../../../models/Product.ts"; // ajusta la ruta según dónde esté este archivo

interface ProductLinkModalProps {
  isOpen: boolean;
  selectedText: string;
  products: Product[];
  selectedProductId: number | "";
  setSelectedProductId: (id: number | "") => void;
  onClose: () => void;
  onConfirm: () => void;
}

const ProductLinkModal: React.FC<ProductLinkModalProps> = ({
  isOpen,
  selectedText,
  products,
  selectedProductId,
  setSelectedProductId,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 p-6 rounded-2xl w-full max-w-lg shadow-2xl border border-transparent dark:border-slate-700 text-gray-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
            <Package size={18} />
          </div>
          <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400">
            Vincular Producto
          </h3>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 wrap-break-word whitespace-normal">
          ¿Deseas convertir el texto "
          <strong className="font-semibold text-gray-800 dark:text-gray-200 wrap-break-word">
            {selectedText}
          </strong>
          " en un enlace directo a un producto?
        </p>

        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          Selecciona el producto:
        </label>
        <select value={selectedProductId}
          onChange={(e) => setSelectedProductId(e.target.value ? Number(e.target.value) : "")
          }
          className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white p-2.5 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow">
          <option value="" disabled>
            -- Elige un producto --
          </option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombre}
            </option>
          ))}
        </select>

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
            Cancelar
          </button>
          <button type="button" onClick={onConfirm} disabled={!selectedProductId}
            className="px-4 py-2 text-sm font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            Confirmar Enlace
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductLinkModal;