
function ProductsCard({ product }) {
  return (
    <div className="product-card">
    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <img className="product-image" src={product.url} alt={product.title} />
    <p>Price: ${product.price}</p>
    <p>Category: {product.category}</p>
    <div className="button-container">
    <button className="btn btn-primary">Edit</button>
    <button className="btn btn-danger">Delete</button>
  </div>
  </div>
  
    
  )
}

export default ProductsCard