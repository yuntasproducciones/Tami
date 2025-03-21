import { MdOutlineArrowForwardIos } from "react-icons/md";
import type Blog from "src/models/Blog";

interface CardBlogProps {
  blog: Blog;

}

{
  /* añadirle un hover al componente */
}
const CardBlog: React.FC<CardBlogProps> = ({ blog }) => {
  return (

    <a
      href={`/${blog.id}`}
      className="my-5 flex flex-col lg:flex-row items-center transition-transform transform hover:scale-110 bg-teal-800 text-white shadow-md overflow-hidden"
    >
      <div className="lg:w-1/3 w-full">
        <img
          src={blog.imagenPrincipal}
          alt={blog.titulo}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-2/3 w-full p-6">
        <div className="flex items-center mb-2">
          <span className="border border-white rounded px-2 py-1 mr-2 ml-3">
            {blog.titulo}
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-2 ml-3">{blog.titulo}</h2>
        <div className="flex flex-row items-center gap-2">
          <MdOutlineArrowForwardIos className="text-5xl" />
          <p className="text-gray-300">{blog.descripcion}</p>

        </div>
      </div>
    </a>
  );
};

export default CardBlog;
