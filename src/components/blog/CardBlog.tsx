import React, { useEffect, useState } from "react";

interface CardBlogProps {
    apiUrl: string;
}

const CardBlog: React.FC<CardBlogProps> = ({ apiUrl }) => {
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
    }, [apiUrl]);

    return (
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
            <div className="lg:w-1/3 w-full">
                <img src={data.imageUrl} alt={data.titulo} className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-2/3 w-full p-6">
                <h2 className="text-2xl font-bold mb-2">{data.titulo}</h2>
                <p className="text-gray-700 mb-4">{data.descripcion}</p>
                <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700">
                    Descubre mas al respecto!
                </button>
            </div>
        </div>
    );
};

export default CardBlog;