import type HeroSlide from "../models/HeroSlide";
import slide1 from "@images/index/hero/hc_1.webp";
import slide2 from "@images/index/hero/hc_2.webp";
import slide3 from "@images/index/hero/hc_3.webp";

const heroArray: HeroSlide[] = [
  {
    image: slide1.src,
    title: "Innovación y\nsoluciones para\ncada proyecto",
  },
  {
    image: slide2.src,
    title: "Equipos de alta\ntecnología para\nimpulsar tu negocio",
  },
  {
    image: slide3.src,
    title: "Herramientas\ntecnología que\nmarcan la diferencia",
  },
];

export default heroArray;
