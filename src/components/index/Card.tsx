interface CardProps {
  title: string;
  image: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ title, image, paragraph }) => {
  return (
    <div className="relative w-11/12 h-3/4 lg:w-4/6 lg:h-4/5 flex hover:scale-105 duration-300 transition-all group">
      <img
        src={image}
        alt={`fondo de la tarjeta ${title}`}
        className="absolute rounded-3xl w-full h-full object-cover object-center z-0"
      />
      <div className="relative self-end z-10 text-white w-full h-full flex flex-col justify-end p-4 pb-0 group-hover:pb-4 text-center bg-gradient-to-t from-teal-800 rounded-3xl">
        <div className="translate-y-12 group-hover:-translate-y-1 transition-transform duration-300">
          <h3 className="font-semibold text-lg lg:text-base 2xl:text-4xl mb-0 md:mb-1 ">
            {title}
          </h3>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out font-light text-lg lg:text-sm 2xl:text-3xl lg:whitespace-break-spaces">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
