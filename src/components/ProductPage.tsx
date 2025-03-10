import { useEffect, useState } from "react";
import type Producto from "src/models/Product";

const ProductPage = ({ id }: { id: string }) => {
  const [producto, setProducto] = useState<Producto | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://tu-api.com/productos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error al obtener el producto:", error));
  }, [id]);

  if (loading)
    return (
      <p className="bg-teal-700 text-white text-4xl font-bold h-dvh pt-32">
        Cargando...
      </p>
    );
  if (!producto)
    return (
      <p className="bg-teal-700 text-white text-4xl font-bold h-dvh pt-32">
        Producto no encontrado
      </p>
    );

  return (
    <div>
      <h1>{producto.nombreProducto}</h1>
      <p>Precio: {producto.precioProducto}</p>
      <p>Stock: {producto.stockProducto}</p>
      <img src={producto.image} alt={producto.nombreProducto} />
    </div>
  );
};

export default ProductPage;
