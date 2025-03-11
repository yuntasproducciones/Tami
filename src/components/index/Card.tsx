interface CardProps {
  title: string;
  image: string;
  paragraph: string;
  isActive: boolean;
}

const Card: React.FC<CardProps> = ({ title, image, paragraph, isActive }) => {
  return (
    <div className={`relative w-full h-full flex transition-transform duration-300 ${isActive ? 'scale-105' : ''}`}>
      <img
        src={image}
        alt={`fondo de la tarjeta ${title}`}
        className="absolute rounded-3xl w-full h-full object-cover object-center z-0"
      />
      <div className="relative self-end z-10 text-white w-full h-full flex flex-col justify-end p-6 text-center bg-gradient-to-t from-teal-800 rounded-3xl">
        <div className={`transition-transform duration-300 ${isActive ? 'translate-y-0' : ''}`}>
          <h3 className="font-semibold text-lg lg:text-base 2xl:text-4xl mb-0 md:mb-1">
            {title}
          </h3>
          <p className={`opacity-0 transition-opacity duration-700 ease-in-out font-light text-lg lg:text-sm 2xl:text-3xl lg:whitespace-break-spaces ${isActive ? 'opacity-100' : ''}`}>
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
