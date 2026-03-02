import { useEffect, useState } from "react";

/*
 - useState([]) -> aqui guardamos los ñproductos 
 - useEffect([]) -> se ejecuta una sola vez al cargar la pagina
 - fetch(url) -> llama la API
 - .then() -> convierte la respuesta en JSON
 - setProducts(data) -> guarda los productos en el estado
*/

export default function Products() {
  const [Product, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);


  return (
    <div className="pt-32 px-6">
      <h1 className="text 3xl font-bold mb-6">Bienvenido a DevMarket</h1>
      
      {/* GRID RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Product.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow rounded-xl p-4 hover:shadow-lg flex flex-col"
        >
      
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto object-contain"
          />
      
          <div className="flex justify-between items-start mt-3">
            <h3 className="text-blue-600 font-bold text-sm line-clamp-1">
              {product.title}
            </h3>
            <span className="text-xs text-gray-500">
              {product.category}
            </span>
          </div>

            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {product.description}
            </p>

            <div className="flex gap-4 text-sm mt-2">
              <span>⭐ {product.rating.rate}</span>
              <span>({product.rating.count})</span>
            </div>

          <div className="flex justify-between items-center mt-auto pt-3">
            <span className="font-bold text-lg">
              ${product.price}
            </span>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
/*
 - map recorre el arreglo de productos
 - cada producto se pinta dentro de una tarjeta
 - grid-cols-1 / sm / md Crean un diseño responsive
 - line-clamp-2 corta textos muy largos -> ver mas leer mas
 - gap agrega espacio a sus hijos
 -
*/