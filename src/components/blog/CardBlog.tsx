// import { useEffect, useState } from "react";
import { blogData } from "../../data/BlogFakeData"; // Importamos los datos ficticios

interface CardBlogProps {
  
/* Cambiamos la propiedad apiUrl por data, para testear con datos ficticios
    * apiUrl: string;
 */
    
  data?: {
    titulo: string;
    descripcion: string;
    imageUrl: string;
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((data, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="lg:w-1/3 w-full">
            <img
              src={data.imageUrl}
              alt={data.titulo}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-2/3 w-full p-6">
            <h2 className="text-2xl font-bold mb-2">{data.titulo}</h2>
            <p className="text-gray-700 mb-4">{data.descripcion}</p>
            <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700">
              Descubre mas al respecto!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBlog;
