import { BrowserRouter,Routes,Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductsPage from "./pages/ProductsPage";
import ProductsFormPage from "./pages/ProductsFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Ejemplo from "./components/ejemplo";
import Footer from "./components/footer";
import What from "./components/WhatsappFlotante"


// import './index.css';
// import './App.css';
// Agrega esta línea para importar tus estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from "./context/ProductsContext";
import Navbar from "./components/navbar";
import Conocenos from "./pages/Conocenos";
import Contactos from "./pages/Contactos";
import Cotizacion from "./pages/Cotizacion";
import Impresion from "./pages/Impresion";
import Papeleria from "./pages/Papeleria";
import Sublimacion from "./pages/Sublimacion";
import Preguntas from "./pages/Preguntas";
import Carrito from "./pages/Carrito";
import InicioWeb from "./pages/inicioWeb";
import Home from "./pages/Home";





function App() {
  return (
  <AuthProvider>
    <ProductProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={ < Home /> } />
          <Route path="/login" element={< LoginPage /> } />
          <Route path="/conocenos" element={< Conocenos />} />
          <Route path="/contactos" element={< Contactos />} />
          <Route path="/cotizacion" element={< Cotizacion />} />
          <Route path="/impresion" element={< Impresion />} />
          <Route path="/papeleria" element={< Papeleria />} />
          <Route path="/sublimacion" element={< Sublimacion />} />
          <Route path="/preguntas" element={< Preguntas />} />
          <Route path="/carrito" element={< HomePage />} />
          <Route path="/inicio" element={< InicioWeb />} />




        <Route element= {<ProtectedRoute />}>
        

          <Route path="/products" element={< ProductsPage />} />
          <Route path="/add-product" element={< ProductsFormPage />} />
          <Route path="/products/:id" element={< ProductsFormPage />} />
          <Route path="/profile" element={ < ProfilePage />} />
          <Route path="/ejemplo" element={ < Ejemplo />} />
          <Route path="/register" element={< RegisterPage />} />
          
        </Route>

        </Routes>
        <What />
        <Footer />
      </BrowserRouter>
    </ProductProvider> 
  </AuthProvider>
  )
}

export default App