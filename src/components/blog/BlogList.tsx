import { useState, useEffect } from "react";
import { getApiUrl, config } from "config"; // Por ahora, tendriamos que buscar la manera en la que importe las API's
import type Blog from "src/models/Blog";
import CardBlog from "./CardBlog";

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://apitami.tami-peru.com/api/v1/blogs"
        );
        if (!response.ok) throw new Error("Error al obtener los blogs");
        const data = await response.json();

        if (data.success && Array.isArray(data.data)) {
          setBlogs(data.data);
        } else {
          setError("No se pudieron obtener los blogs");
        }
      } catch (err) {
        setError(
          "Error al obtener los blogs: " +
            (err instanceof Error ? err.message : "Error desconocido")
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, [setIsLoading]);

  if (isLoading) return <p className="text-center">Cargando blogs...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div>
      {blogs.length > 0 ? (
        blogs.map((blog) => <CardBlog key={blog.id} blog={blog} />)
      ) : (
        <p className="text-center text-teal-800">No hay blogs disponibles.</p>
      )}
    </div>
  );
};

export default BlogList;
