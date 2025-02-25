interface CardProps {
  title: string;
  image: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ title, image, paragraph }) => {
  return (
    <div className="relative w-11/12 h-3/4 lg:w-2/3 lg:h-4/5 flex hover:scale-105 transition-all">
      <img
        src={image}
        alt={`fondo de la tarjeta ${title}`}
        className="absolute rounded-3xl w-full h-full object-cover object-center z-0"
      />
      <div className="relative self-end z-10 text-white w-full h-full lg:h-2/3 flex flex-col justify-end p-4 text-center bg-gradient-to-t from-teal-800 rounded-3xl">
        <h3 className="font-semibold text-lg lg:text-base 2xl:text-4xl mb-0 md:mb-1">
          {title}
        </h3>
        <p className="font-light text-lg lg:text-sm 2xl:text-3xl lg:whitespace-break-spaces">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Card;
