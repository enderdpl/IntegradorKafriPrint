import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
    </div>


    <nav>HOLA ESTE ES EL NABVAR</nav>




  </div>
</nav>




    </div>
  );
}
  
  export default Navbar