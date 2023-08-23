import "../style/preguntas.css"
import LogoKafri from "../img/KafriLogo.png";

function Preguntas() {
  return (
  
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Preguntas frecuentes</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/krafiPrintStyles.css" />
        <link rel="stylesheet" href="floating-wpp.min.css" />
        <link rel="stylesheet" href="/css/preguntas.css" />
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/fontawesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark" />
        <div className="floating-wpp" />
 
        <header className="masthead text-center text-white">
          <div className="container px-5">
            <h1 className="display-3">Preguntas Frecuentes</h1>
          </div>
        </header>
        <div className="preg"> <i className="fas fa-question" />
          <span className="icon-label">¿Puedo hacer pedidos al por mayor?</span></div><br />
        <h4>¡Claro!, puedes hacer click en <a href="/cotizacion.html">este link</a> y contactarnos para pedidos especiales</h4>
        <div className="preg"> <i className="fas fa-question" />
          <span className="icon-label">¿Cómo puedo hacer un pedido?</span></div><br />
        <h4>Escribenos via Whatsapp o en la sección  `Contacto ` o  `Cotizacion ` en nuestra página.</h4>
        <div className="preg"> <i className="fas fa-question" />
          <span className="icon-label">¿Tienen opciones de envio?</span></div><br />
        <h4>¡Claro!, enviamos por empresas de transportes tales como: Starken, Correos de Chile, Chevalier y Varmontt.</h4>
        <div className="preg"> <i className="fas fa-question" />
          <span className="icon-label">¿Con que tipo de estampado trabajan?</span></div><br />
        <h4>Trabajamos con sublimación y vinilo sobre tela algodon, poliester, mascarillas, bolsas de género, entre otras cosas.</h4>
        <div className="preg"> <i className="fas fa-question" />
          <span className="icon-label">¿Puedo ver los productos de forma presencial?</span></div><br />
        <h4>Por el momento no contamos con local físico, sin embargo, en nuestras RR.SS avisamos cada vez que participamos<br /> en una exposicion presencial, o en ferias artesanales.</h4>

        {/* pie de pagina*/}
        <section id="contact">
          <div className="container-fluid">
            <footer className="py-5 ">
              <div className="row ">
                <div> <img src={LogoKafri}  className="rounded float-start mb-3" alt="logo" style={{width: '100pt'}} href="#" /></div>
                <div className="col-6 col-md-2 mb-2">
                </div>
                {/* Pie de página */}
                <section id="contact">
                  <div className="container-fluid">
                    <footer className="py-1 my-1 border-top">
                      <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-12 col-sm-6 text-center text-sm-start">
                          <p>© 2023</p>
                        </div>
                        <div className="col-12 col-sm-6 text-center text-sm-end">
                          <ul className="list-unstyled d-flex justify-content-center justify-content-sm-end">
                            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
                            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
                            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
                          </ul>
                        </div>
                      </div>
                    </footer>
                  </div>
                  {/* Iconos RRSS */}
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12">
                        <div className="social-icons text-center">
                          <p />
                          <a href="https://www.facebook.com/KrafiPrint" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-2x" id="facebook" /></a>
                          <a href="#"><i className="fa-brands fa-whatsapp fa-2x" id="whatsapp" /></a>
                          <a href="https://www.instagram.com/krafiprint/?hl=es" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x" id="instagram" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Carga de scripts de JavaScript al final del documento */}
              </div></footer></div></section></div>



  )
}

export default Preguntas