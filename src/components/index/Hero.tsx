import { useState, useEffect } from "react";
import heroArray from "@data/hero.data";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  function moveIntoIndexTo() {
    document.getElementById("destino")?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false);
      setTimeout(() => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % heroArray.length);
        setIsTextVisible(true);
      }, 1000);
    }, 7500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black h-96 lg:h-dvh 2xl:h-[90dvh] pt-20 content-center">
      <div className="absolute w-full h-full top-0 z-20 bg-gradient-to-b from-teal-700 to-black opacity-75"></div>
      {heroArray.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          className={`absolute top-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="relative px-8 lg:pl-32 z-30">
        <h1
          className={`mb-8 xl:mb-12 2xl:mb-16 text-white text-3xl md:text-5xl lg:text-7xl 2xl:text-7xl leading-22 font-extrabold whitespace-pre-line transition-all duration-1000 ${
            isTextVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {heroArray[currentSlide].title}
        </h1>
        {heroArray[currentSlide].items && (
          <ul
            className={`mt-3 md:mt-8 transition-all duration-1000 ${
              isTextVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            {heroArray[currentSlide].items.map((item, index) => (
              <li key={index} className="text-sm md:text-lg">
                {item}
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={moveIntoIndexTo}
          className="cursor-pointer mt-6 bg-white rounded-3xl border-2 border-slate-300 font-bold text-teal-700 hover:text-white hover:bg-gradient-to-t hover:from-teal-600 hover:to-teal-800 transition-all ease-in-out duration-500 px-5 py-2 text-lg lg:text-2xl lg:px-8 lg:py-3 xl:text-3xl 2xl:text-5xl 2xl:px-14 2xl:py-6"
        >
          Descubre más
        </button>
      </div>
    </section>
  );
};

export default Hero;
