import React, { useState } from 'react';
import Card from './Card';

interface CardSliderProps {
  cardList: { title: string; image: { src: string }; paragraph: string }[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cardList }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="relative flex flex-col items-center gap-6 w-full h-full px-16">
      <div className="text-teal-700 text-center w-full text-4xl font-extrabold tracking-widest">
      Optimiza tu Trabajo, Negocio y Hogar
      </div>
      <div className="relative flex gap-6 overflow-hidden w-full h-full justify-center">
      {cardList.map((card, index) => (
        <div
        key={index}
        className={`relative h-full transition-all duration-300 rounded-lg overflow-hidden cursor-pointer p-5 ${
          activeId === index ? 'flex-[3]' : 'flex-[1]'
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
