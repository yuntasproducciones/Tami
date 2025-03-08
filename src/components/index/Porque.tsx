const Porque: React.FC = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center py-16 px-6">
      {/* Texto */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-teal-700 font-bold text-3xl lg:text-4xl flex items-center justify-center lg:justify-start gap-2">
          ¿POR QUÉ ELEGIR TAMI?
          <img src="" alt="" />
        </h2>
        <p className="text-gray-600 text-lg mt-4">
          Calidad respaldada por nuestra garantía, mostrando nuestro compromiso
          con la satisfacción de nuestros clientes.
        </p>

        {/* Botones */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
          <button className="bg-teal-700 text-white px-4 py-2 rounded-full">
            CALIDAD
          </button>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-full">
            INNOVACIÓN
          </button>
          <button className="bg-cyan-400 text-white px-4 py-2 rounded-full">
            NEGOCIO PROPIO
          </button>
        </div>
      </div>

      {/* Imagen */}
      <img src="" alt="" />
    </section>
  );
};

export default Porque;
