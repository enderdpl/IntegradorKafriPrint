function CarProducts({ product }) {
    return (
      <div class="product">
      <div class="product-image-container">
          <img class="product-image" src={product.url} alt={product.title} />
      </div>
      <div class="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p class="product-price">Price: ${product.price}</p>
          <p class="product-category">Category: {product.category}</p>
          <div class="button-container">
            <button class="btn-add-cart">Add to Cart</button>
        </div>
      </div>
  </div>
  
    
      
    )
  }
  
  export default CarProducts