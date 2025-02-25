import { useState } from "react";
import Card from "./Card";

interface CardSliderProps {
  cardList: {
    image: ImageMetadata;
    title: string;
    paragraph: string;
  }[];
}
/* deslizar automatico akspdjapsdawd */
const CardSlider: React.FC<CardSliderProps> = ({ cardList }) => {
  const [currentCard, setCurrentCard] = useState(0);
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center lg:hidden">
        {/* Contenedor de las tarjetas */}
        <div className="relative h-full w-full overflow-hidden">
          {cardList.map((card, index) => (
            <div
              key={index}
              className={`absolute top-0 w-full h-full  flex items-center justify-center transition-transform duration-500 ${
                index === currentCard ? "translate-y-0" : "translate-y-full"
              } ${index < currentCard ? "-translate-y-full" : ""}`}
            >
              <Card
                image={card.image.src}
                title={card.title}
                paragraph={card.paragraph}
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center gap-3">
          {cardList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className="w-4 h-4 rounded-full transition-transform bg-teal-700/45 hover:bg-teal-700 disabled:bg-teal-700 disabled:scale-125 duration-300"
              disabled={index === currentCard}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardSlider;
