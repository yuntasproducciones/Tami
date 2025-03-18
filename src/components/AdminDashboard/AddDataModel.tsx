import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const AddDataModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Botón para abrir el modal */}
            <button
                onClick={() => setIsOpen(true)}
                className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-xl flex items-center gap-2"
            >
                <FaPlus /> Añadir dato
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
                    <div className="bg-teal-600 text-white px-10 py-8 rounded-4xl w-3/5">
                        {/* Botón de cerrar */}
                        <button onClick={() => setIsOpen(false)} className="absolute top-50 right-84 text-white">
                            <FaTimes size={20} />
                        </button>

                        <h2 className="text-2xl font-bold mb-4">AÑADIR DATOS</h2>

                        {/* Formulario */}
                        <form className="grid grid-cols-2 gap-4 gap-x-12">
                            <div>
                                <label className="block">Nombres</label>
                                <input type="text" className="w-full bg-white p-2 rounded-md text-black" />
                            </div>

                            <div>
                                <label className="block">Teléfono</label>
                                <input type="text" className="w-full bg-white p-2 rounded-md text-black" />
                            </div>

                            <div className="col-span-2">
                                <label className="block">Gmail</label>
                                <input type="email" className="w-full bg-white p-2 rounded-md text-black" />
                            </div>

                            <div>
                                <label className="block">Sección</label>
                                <input type="text" className="w-full bg-white p-2 rounded-md text-black" />
                            </div>

                            <div>
                                <label className="block">Fecha</label>
                                <input type="date" className="w-full bg-white p-2 rounded-md text-black" />
                            </div>
                        </form>

                        {/* Botón de enviar */}
                        <button className="mt-8 w-1/4 bg-teal-400 py-1.5 rounded-full text-xl hover:bg-teal-500">
                            Añadir dato
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddDataModal;