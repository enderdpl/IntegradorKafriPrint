import { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductsCard";

function HomePage() {
  


const { getProducts,products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  if(products.length === 0) return <h1>No hay Tareas...</h1>;

  return (
    <div className="product-container">
    {products.map((product) => (
      <ProductCard product={product} key={product._id} />
    ))}
  </div>
  );
  
}

export default HomePage