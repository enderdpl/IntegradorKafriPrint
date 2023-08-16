import { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import CarProducts from "../components/CarProducts";

function HomePage() {
  


const { getProductsNoValidated,products } = useProducts();
  useEffect(() => {
    getProductsNoValidated();
  }, []);
  if(products.length === 0) return <h1>No hay Tareas...</h1>;

  return (
    <div className="product-container">
    {products.map((product) => (
      <CarProducts product={product} key={product._id} />
    ))}
  </div>
  );
  
}

export default HomePage