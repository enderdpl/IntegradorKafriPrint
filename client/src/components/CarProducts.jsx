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
      <div className="button-container">
      <button className="btn btn-primary">Añadir a carrito</button>
      <button className="btn btn-danger">Comprar</button>
    </div>
    </div>
    
      
    )
  }
  
  export default CarProducts