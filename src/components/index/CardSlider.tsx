import React, { useState, useEffect } from "react";
import Card from "./Card";

interface CardSliderProps {
  cardList: { title: string; image: { src: string }; paragraph: string }[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cardList }) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado según el tamaño de pantalla
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize(); // Comprobación inicial
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative flex flex-col items-center gap-4 w-4/5 mx-auto">
      {/* Arreglar el responsive para que se vea de arriba abajo las cards */}
      {/* Arreglar el parrafo de las cards, mejorar sus estilos */}
      {/* Agregar para que al dar click en cada sección mande a 
        página productos y baje hasta la sección seleccionada */}
      <div className="text-teal-700 text-center py-2 w-full text-lg tracking-wide">
        Optimiza tu Trabajo, Negocio y Hogar
      </div>
      <div className="relative flex flex-col lg:flex-row gap-4 overflow-hidden w-full justify-center">
        {cardList.map((card, index) => (
          <div
            key={index}
            className={`relative h-96 md:h-80 transition-all duration-300 rounded-lg overflow-hidden cursor-pointer p-4 ${
              isDesktop && activeId === index ? "flex-[3]" : "flex-1"
            }`}
            onMouseEnter={() => isDesktop && setActiveId(index)}
            onMouseLeave={() => isDesktop && setActiveId(null)}
          >
            <Card
              title={card.title}
              image={card.image.src}
              paragraph={card.paragraph}
              isActive={activeId === index || !isDesktop}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
