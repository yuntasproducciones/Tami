// import { useEffect, useState } from "react";
import { blogData } from "../../data/BlogFakeData";
import { MdOutlineArrowForwardIos } from "react-icons/md";

interface CardBlogProps {
  /* Cambiamos la propiedad apiUrl por data, para testear con datos ficticios
   * apiUrl: string;
   */

  data?: {
    titulo: string;
    descripcion: string;
    imageUrl: string;
    categoria: string;
  }[];
}

/*
 * Comentamos el useEffect para testear con datos ficticios
 */

/* const CardBlog: React.FC<CardBlogProps> = ({ apiUrl }) => {
    const [data, setData] = useState<{ titulo: string; descripcion: string; imageUrl: string }>({
        titulo: "",
        descripcion: "",
        imageUrl: "",
    });

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setData({
                    titulo: data.titulo,
                    descripcion: data.descripcion,
                    imageUrl: data.imageUrl,
                });
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [apiUrl]); */

const CardBlog: React.FC<CardBlogProps> = ({ data = blogData }) => {
  return (
    <div className="flex flex-col gap-4 px-4">
      {" "}
      {/* Añadir margen a los costados */}
      {data.map((data, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center bg-teal-800 text-white shadow-md overflow-hidden"
        >
          <div className="lg:w-1/3 w-full">
            <img
              src={data.imageUrl}
              alt={data.titulo}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-2/3 w-full p-6">
            <div className="flex items-center mb-2">
              <span className="border border-white rounded px-2 py-1 mr-2 ml-3">
                {data.categoria}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2 ml-3">{data.titulo}</h2>
            <div className="flex flex-row items-center gap-2">
            <MdOutlineArrowForwardIos className="text-5xl" />
              <p className="text-gray-300">{data.descripcion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBlog;
