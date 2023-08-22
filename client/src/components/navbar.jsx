import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/carrito.css"

function Navbar() {
  const { isAuthenticate, logout,user } = useAuth();

  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link to="/" className="navbar-brand">Products Manager</Link>
    <div className="navbar-nav ms-auto">
      {isAuthenticate ? (
        <>
          <span className="nav-item nav-link">Bienvenido {user.username} </span>
          
          <Link to="/add-product" className="nav-item nav-link">Añadir Producto</Link>
          <Link to="/login" className="nav-item nav-link"
          onClick={()=>{
            logout();
          }}>Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login" className="nav-item nav-link">Login</Link>
          <Link to="/register" className="nav-item nav-link">Register</Link>
        </>
      )}
      <li className="nav-item dropdown">
        <div className="container-icon">
          <div className="container-cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-cart">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <div className="count-products">
              <span id="contador-productos">0</span>
            </div>
          </div>
          <div className="container-cart-products hidden-cart">
            <div className="row-product hidden">
              <div className="cart-product">
                <div className="info-cart-product">
                  <span className="cantidad-producto-carrito">1</span>
                  <p className="titulo-producto-carrito">Zapatos Nike</p>
                  <span className="precio-producto-carrito">$80</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div className="cart-total hidden">
              <h3>Total:</h3>
              <span className="total-pagar">$200</span>
            </div>
            <p className="cart-empty">El carro está vacío</p>
          </div>
        </div>
        <ul className="dropdown-menu ">
        </ul>
      </li>
    </div>

    





  </div>
</nav>




    </div>
  );
}
  
  export default Navbar