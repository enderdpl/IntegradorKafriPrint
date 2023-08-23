import React, { useEffect } from 'react';
import $ from 'jquery';
import imgBaner from "../img/fondo-banner-1CHICO.png";
import imgBaner2 from "../img/fondo-banner-2-CHICO.png.png";
import imgBaner3 from "../img/fondo-banner-3-CHICO.png.png";
import flechaIz from "../img/angle-left-solid.svg";
import flechaDe from "../img/chevron-right-solid.svg";
import fotoAno from "../img/anonima.img.jpg";
import fotoper from "../img/testimonio4.jpg copy.jpeg";





import "../style/cotizaciones.css"
function Cotizacion() {
  useEffect(() => {
    function animateTestimonios() {
      var carrusel = $('.carrusel');
      var primerTestimonio = carrusel.children().first();

      function animacionLoop() {
        carrusel.animate({ 'margin-left': '-25%' }, 5000, function () {
          carrusel.append(primerTestimonio.clone());
          primerTestimonio.remove();
          carrusel.css('margin-left', 0);
          setTimeout(animacionLoop, 5000);
        });
      }

      animacionLoop();
    }

    animateTestimonios();
  }, []);

  return (
    <div>

      <div>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/fontawesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        {/*  Imagen del banner*/}
        <section>
          <div className="banner" onclick="redirectTo(event)">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="container-fluid">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={imgBaner} className="d-block w-100" alt="Banner 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={imgBaner2} className="d-block w-100" alt="Banner 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={imgBaner3} className="d-block w-100" alt="Banner 3" />
                  </div>
                </div>
              </div>
              {/* Indicadores de la posición del banner */}
              <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to={0} className="active" />
                <li data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to={1} />
                <li data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to={2} />
              </ol>
            </div>
          </div>
        </section>
        {/* Flecha para deslizar el banner */}
        <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-bs-slide="prev">
          <img src={flechaIz} alt="Previous" style={{ width: '50px', backgroundColor: 'rgba(201, 201, 201, 0.174)' }} />
        </a>
        <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-bs-slide="next">
          <img src={flechaDe} alt="Next" style={{ width: '50px', backgroundColor: 'rgba(201, 201, 201, 0.174)' }} />
        </a>
        {/* Iconos  */}
        <section>
          <div className="icon-container">
            <div className="icon-wrapper">
              <a href="/sublimacion.html" className="scale-up-center"><i className="fas fa-tshirt custom-icon esd" /></a> {/* Icono de Polera */}
              <span className="icon-label">Sublimación</span>
            </div>
            <div className="icon-wrapper">
              <a href="/papeleria.html" className="scale-up-center"><i className="fas fa-paperclip custom-icon" /></a> {/* Icono de Papelería */}
              <span className="icon-label">Papelería</span>
            </div>
            <div className="icon-wrapper">
              <a href="./impresion3d.html" className="scale-up-center"><i className="fas fa-print custom-icon" /></a> {/* Icono de Impresión 3D */}
              <span className="icon-label">Impresión 3D</span>
            </div>
            <div className="icon-wrapper">
              <a href="/preguntas.html" className="scale-up-center"><i className="fas fa-question custom-icon asd" /></a> {/* Icono de Preguntas Frecuentes */}
              <span className="icon-label">Preguntas Frecuentes</span>
            </div>
            <div className="icon-wrapper">
              <a href="#user" className="scale-up-center"><i className="fas fa-user custom-icon tes" /></a> {/* Icono de Usuario */}
              <span className="icon-label">Testimonios</span>
            </div>
          </div>
        </section>
        {/* Seccion de testimonios, en esta seccion falta agregar funcionalidad, para que las personas puedan dejar el suyo */}
        <section id="user">
          <div className="container">
            <h6 className="testimonios-title text-center mb-3">Testimonios</h6>
            <h3 className="text-center mt-5">ESTAMOS COMPROMETIDOS CON NUESTROS CLIENTES</h3>
            <p className="text-center mt-3">
              Te invitamos a ser parte de nuestra comunidad, valoramos los testimonios de cada uno de nuestros clientes, <br /> sus
              opiniones son fundamentales para seguir creciendo y ayudarnos <br />a hacerlo de la mejor forma
            </p>
            <div className="carrusel-container">
              <div className="carrusel">
                <div className="reseña testimonial">
                  <div className="testimonial-bg">
                    <img src={fotoAno} alt="Testimonio 1" className="img-fluid" />
                    <p>Krafi print, es un emprendimiento<br />
                      que siempre cumple las expectativas<br />
                      de sus clientes, tanto en calidad <br />
                      como en innovación y puntualidad.</p>
                    <i className="bx bxs-quote-alt-left quote-icon" />
                    <h4>Nuria Cabezas</h4>
                  </div>
                </div>
                <div className="reseña testimonial">
                  <div className="testimonial-bg">
                    <img src={fotoAno} alt="Testimonio 2" className="img-fluid" />
                    <p> La diversidad de productos que ofrece<br />
                      ha satisfecho la busqueda de detalles<br />
                      para acompañar mis dulces en<br />
                      "Dulce Pauli" en la construccion de su<br />
                      imagen y packaging </p>
                    <i className="bx bxs-quote-alt-left quote-icon" />
                    <h4>Paulina Catalán</h4>
                  </div>
                </div>
                <div className="reseña testimonial">
                  <div className="testimonial-bg">
                    <img src={fotoAno} alt="Testimonio 3" className="img-fluid" />
                    <p>Lo recomiendo 100% excelente calidad<br />
                      y muy buena atencion. He comprado<br />
                      varios productos y todos<br />
                      me han encantado.</p>
                    <i className="bx bxs-quote-alt-left quote-icon" />
                    <h4>Kriss Echeverria</h4>
                  </div>
                </div>
                <div className="reseña testimonial">
                  <div className="testimonial-bg">
                    <img src={fotoper} alt="Testimonio 4" className="img-fluid" />
                    <p>La sublimación en mi camiseta<br />  es impecable.<br /> ¡Muy contenta con el resultado!</p>
                    <i className="bx bxs-quote-alt-left quote-icon" />
                    <h4>Anais Valenzuela</h4>
                  </div>
                </div>
                <div className="reseña testimonial">
                  <div className="testimonial-bg">
                    <img src={fotoAno} alt="Testimonio 5" className="img-fluid" />
                    <p>Gracias a Krafi Print, pude regalar<br /> algo único y personalizado a mi amiga<br />
                      <br />
                      <i className="bx bxs-quote-alt-left quote-icon" />
                    </p><h4>Francoise Araneda</h4>
                  </div>
                </div>
                <div className="reseña testimonial">
                  <div className="testimonial-bg">
                    <img src={fotoper} alt="Testimonio 6" className="img-fluid" />
                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.<br /> Nullam fermentum,nunc a <br />facilisis</p>
                    <i className="bx bxs-quote-alt-left quote-icon" />
                    <h4>Gloria Gloria</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="cotizacion">
          <div className="container pt-3">
            <h1 className="text-center">Cotización</h1>
            <div className="row mt-4">
              <div className="col-lg-6">
                <h2 className="text-center mt-2"> Pasos a seguir:</h2>
                <ul className="mt-2">
                  <li>       Completa el formulario con tus datos de contacto y detalles sobre los productos o servicios que te interesan.</li>
                  <li>
                    Proporciona información adicional o especificaciones que puedan ser relevantes para tu solicitud, como la cantidad, tamaño, color o diseño de los productos que deseas pedir.</li>
                  <li>
                    Asegúrate de enviar imágenes en buena calidad en formato JPG, PNG o PDF para papelería y sublimación. Para impresión 3D, asegúrate de enviar el archivo y las dimensiones del objeto que deseas imprimir.</li>
                  <li>
                    Envía el formulario y espera una respuesta de Krafi Print. Ellos revisarán tu solicitud y te proporcionarán una cotización para los productos o servicios que te interesan.</li>
                </ul>
                <p>
                  Es importante proporcionar tanta información como sea posible al solicitar una cotización, ya que esto ayudará a Krafi Print a estimar con precisión el costo de tu pedido. Si tienes alguna pregunta o necesitas ayuda con el proceso, no dudes en contactar a Krafi Print para obtener ayuda.
                </p>
                <i className="fa-sharp fa-solid fa-calendar-lines" />
              </div>
              <div className="col-lg-6">
                <form className="p-4"> <h2 className="text-center mt-2">Formulario de cotización</h2>
                  <input type="text" className="form-control form-control-lg mt-3" placeholder="Nombre" />
                  <input type="email" className="form-control form-control-lg mt-3" placeholder="ejemplo@ejemplo.com" />
                  <input type="text" className="form-control form-control-lg mt-3" placeholder="Asunto" />
                  <div className="input-group">
                    <input type="number" className="form-control form-control-lg mt-3" placeholder="Alto  (cm)" />
                    <input type="number" className="form-control form-control-lg mt-3" placeholder="Ancho  (cm)" />
                    <input type="number" className="form-control form-control-lg mt-3" placeholder="Largo  (cm)" />
                  </div>
                  <div className="input-group">
                    <input type="file" className="form-control mt-3" id="inputArchivo" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                  </div>
                  <input type="text" className="form-control form-control-lg mt-3" placeholder="Añade una descripción" />
                  <button className="btn btn-primary mt-3 ">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>



    </div>
  )
}

export default Cotizacion