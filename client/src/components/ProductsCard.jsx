import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function ProductsCard({ product }) {

  const {deleteProduct} = useProducts();

  return (
    <div className="product-card">
    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <img className="product-image" src={product.url} alt={product.title} />
    <p>Price: ${product.price}</p>
    <p>Category: {product.category}</p>
    <div className="button-container">

    <Link className="btn btn-primary" to={`/products/${product._id}`}>Editar</Link>

    <button className="btn btn-danger" onClick={()=>{
      deleteProduct(product._id);
    }}>Eliminar</button>
  </div>
  </div>
  
    
  )
}

export default ProductsCard