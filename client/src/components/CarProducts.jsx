function CarProducts({ product }) {
    return (
      <div>
    <div >
        </div> 
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img className="product-image" src={product.url} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <div className="productos">
      <div className="button-container">
      <button className="btn-add-card">Añadir al carrito</button>
    </div>
    </div> </div>
    
      
    )
  }
  
  export default CarProducts