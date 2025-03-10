import React, { useState } from "react";
import Card from "./Card";

interface CardSliderProps {
  cardList: { title: string; image: { src: string }; paragraph: string }[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cardList }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

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
            className={`relative h-80 transition-all duration-300 rounded-lg overflow-hidden cursor-pointer p-4 ${
              activeId === index ? "flex-[3]" : "flex-[1]"
            }`}
            onMouseEnter={() => setActiveId(index)}
            onMouseLeave={() => setActiveId(null)}
          >
            <Card
              title={card.title}
              image={card.image.src}
              paragraph={card.paragraph}
              isActive={activeId === index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
