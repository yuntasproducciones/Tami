import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

interface PersonFormData {
  name: string;
  celular: string;
  email: string;
}

interface PersonFormErrors {
  name?: string;
  celular?: string;
  email?: string;
}

interface PersonFormModalProps {
  isOpen: boolean;
  title: string;
  submitLabel: string;
  formData: PersonFormData;
  errors?: PersonFormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  namePlaceholder: string;
  celularPlaceholder: string;
  emailPlaceholder: string;
}

const PersonFormModal = ({
  isOpen,
  title,
  submitLabel,
  formData,
  errors,
  onChange,
  onSubmit,
  onClose,
  namePlaceholder,
  celularPlaceholder,
  emailPlaceholder,
}: PersonFormModalProps) => {
  if (!isOpen) return null;

  const fieldClass = (field: keyof PersonFormErrors) =>
    `dark:!bg-gray-800 ${errors?.[field] ? "border-red-500 focus:ring-red-400" : ""}`;

  return (
    <div className="dialog-overlay">
      <div className="dialog w-full max-w-md md:max-w-xl !pt-0">
        <div className="dialog-header sticky top-0 z-10 flex items-center justify-between !mt-0">
          <h4 className="dialog-title flex-1 text-center">{title}</h4>
          <button
            className="text-white hover:text-red-400 transition-all duration-300 hover:cursor-pointer text-3xl md:text-4xl ml-2"
            onClick={onClose}
            aria-label="Cerrar"
            type="button"
          >
            <IoMdCloseCircle />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="card !bg-white dark:!bg-gray-900/40 !border-gray-200 dark:!border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              <div className="form-input">
                <label htmlFor="name">Nombres:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={onChange}
                  required
                  className={fieldClass("name")}
                  placeholder={namePlaceholder}
                />
                {errors && (
                  <p className="text-red-500 text-xs mt-1 min-h-[1rem]">{errors.name || " "}</p>
                )}
              </div>

              <div className="form-input">
                <label htmlFor="celular">Teléfono:</label>
                <input
                  id="celular"
                  name="celular"
                  type="text"
                  value={formData.celular}
                  onChange={onChange}
                  required
                  className={fieldClass("celular")}
                  placeholder={celularPlaceholder}
                />
                {errors && (
                  <p className="text-red-500 text-xs mt-1 min-h-[1rem]">{errors.celular || " "}</p>
                )}
              </div>

              <div className="form-input md:col-span-2">
                <label htmlFor="email">Gmail:</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  className={fieldClass("email")}
                  placeholder={emailPlaceholder}
                />
                {errors && (
                  <p className="text-red-500 text-xs mt-1 min-h-[1rem]">{errors.email || " "}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              type="submit"
              className="admin-act-btn w-full sm:w-auto !text-base !px-6 !py-2"
            >
              {submitLabel}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="neutral-btn w-full sm:w-auto !text-base !px-6 !py-2 !bg-amber-100 !text-amber-900 !border-amber-300 hover:!bg-amber-200 hover:!text-amber-950 dark:!bg-gray-700 dark:!text-gray-100 dark:!border-gray-500 dark:hover:!bg-gray-600"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonFormModal;
