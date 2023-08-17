import "../style/papeleria.css"
import LogoKafri from "../img/KafriLogo.png";
import Chapita from "../img/chapita.jpg";
import Agenda from "../img/agenda.jpg";
import Sticker from "../img/sticker.jpg";
import Postit from "../img/postit.jpg";
import Tarjeta from "../img/target.jpg";

function Papeleria() {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Papelería</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/krafiPrintStyles.css" />
    <link rel="stylesheet" href="floating-wpp.min.css" />
    <link rel="stylesheet" href="IntegradorKafriPrint/client/src/style/Papeleria.css" />
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/fontawesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark" />
    <div className="floating-wpp" />

    <header className="masthead text-center text-white">
      <div className="container px-5">
        <h1 className="display-3">Papelería</h1>
      </div>
    </header>

    {/* Background e imagen  */}
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img src={Chapita} alt="imagen1" className="img-fluid img-chapita" />
        </div>
        <div className="col cuadrado">
          <div className="texto">En la sección de papeleria de Krafi Print nos especializamos en la impresion y medios graficos personalizados. Ofrecemos una amplia gama de productos de papel y suministros de oficina.</div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col cuadrado">
        <div className="texto">Los productos que puedes encontrar acá son: agendas, tarjetas, organizadores, calendarios, chapitas y más</div>
      </div>
      <div className="col">
        <img src={Agenda} alt="imagen2" className="img-fluid img-agenda" />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src={Sticker} alt="imagen3" className="img-fluid img-sticker" />
      </div>
      <div className="col cuadrado">
        <div className="texto">Tambien ofrecemos servicios de impresión personalizada para articulos como: tarjetas de visita, invitaciones y materiales promocionales.</div>
      </div>
    </div>
    <div className="row">
      <div className="col cuadrado">
        <div className="texto">Contáçtanos hoy para obtener mas información acerca de nuestros productos en stock y nuestros productos personalizados</div>
      </div>
      <div className="col">
        <img src={Postit} alt="imagen4" className="img-fluid img-postit" />
      </div>
      <div className="row">
        <div className="col">
          <img src={Tarjeta} alt="imagen5" className="img-fluid img-target" />
        </div>
        <div className="col cuadrado">
          <div className="texto">¿Tienes una idea en mente? Siempre estamos dispuestos a atenderlos y buscar nuevas formas de satisfacer las necesidades de nuestros clientes.</div>
        </div>
      </div>
    </div>
{/* pie de pagina*/}
<section id="contact">
  <div className="container-fluid">
    <footer className="py-5">
      <div className="row">
        <div>
        <img src={LogoKafri} className="LogoKafri rounded float-start mb-3" alt="logo" style={{width: '100pt'}} href="#" />
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

export default Papeleria