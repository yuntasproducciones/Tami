import React from "react";
import { Link2, X } from "lucide-react";

interface InsertLinkModalProps {
  isOpen: boolean;
  selectedText: string;
  link: string;
  setLink: (value: string) => void;
  onClose: () => void;
  onConfirm: () => void;
}

const InsertLinkModal: React.FC<InsertLinkModalProps> = ({
  isOpen,
  selectedText,
  link,
  setLink,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div  className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[1000] p-4"
          onClick={onClose} >
      <div  className="bg-white dark:bg-slate-800 p-6 rounded-2xl w-full max-w-md shadow-2xl border border-transparent dark:border-slate-700 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()} >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
              <Link2 size={18} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Insertar Enlace
            </h3>
          </div>
          <button type="button" onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            <X size={20} />
          </button>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Enlace para:{" "}
          <strong className="text-gray-700 dark:text-gray-200">
            {selectedText}
          </strong>
        </p>

        <input  type="text" placeholder="https://..." value={link} onChange={(e) => setLink(e.target.value)}
                className="w-full border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white p-2.5 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
                autoFocus
        />

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
            Cancelar
          </button>
          <button type="button" onClick={onConfirm} disabled={!link.trim()}
            className="px-4 py-2 text-sm font-medium bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            Insertar
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsertLinkModal;