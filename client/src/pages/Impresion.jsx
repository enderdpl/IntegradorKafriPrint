import img1 from "../img/03.jpg.JPG";
import img2 from "../img/imp2.jpg.jpg";
import img3 from "../img/imp3d.jpg.jpg";
import imgCarusel1 from "../img/05.jpg.JPG";
import imgCarusel2 from "../img/08.jpg.JPG";
import imgCarusel3 from "../img/06.jpg.JPG";
import imgCarusel4 from "../img/07.jpg.JPG";
import imgCarusel5 from "../img/10.jpg.JPG";

import '../style/impresion.css'

function Impresion() {
  return (
    <div>
      <>
        <header className="masthead text-center text-white">
          <div className="container px-5">
            <h1 className="display-3"> Impresión 3D</h1>
          </div>
          <div className="bg-circle-1 bg-circle" />
          <div className="bg-circle-2 bg-circle" />
          <div className="bg-circle-3 bg-circle" />
          <div className="bg-circle-4 bg-circle" />
        </header>
        {/* Content section 1*/}
        <section id="scroll">
          <div className="section-background">
            <div className="container px-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6 order-lg-2">
                  <div className="p-5">
                    <img
                      className="img-fluid rounded-circle custom-image-style"
                      src={img1}
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="section-new">
                    <h2 className="display-4">Material ecológico</h2>
                    <p>
                      ¡Trabajamos con PLA y ayudamos al medioambiente!
                      <br /> Este es un filamento ecológico que proviene de fuentes
                      renovables como el maíz o la caña de azúcar, lo que lo convierte
                      en una opción respetuosa con el medio ambiente. Además de ser
                      biodegradable en ciertas condiciones, produce menos emisiones de
                      carbono durante su producción en comparación con otros plásticos
                      convencionales.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Content section 2*/}
        <section id="scroll">
          <div className="section-background">
            <div className="container px-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="p-5">
                    <img
                      className="img-fluid rounded-circle"
                      src={img2}
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="section-new">
                    <h2 className="display-4">Imprimimos tu idea</h2>
                    <p>
                      En Krafi Print, nos apasiona materializar tus proyectos de la
                      manera más óptima y profesional. Envíanos tu idea, y la
                      convertiremos en realidad. Solicita tu cotización{" "}
                      <a
                        href="/cotizacion"
                        style={{ color: "red" }}
                      >
                        aquí{" "}
                      </a>
                      y te responderemos en breve para brindarte la mejor solución.
                    </p>
                    ¡Tu imaginación es nuestro desafío! Juntos haremos que tus diseños
                    cobren vida.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Content section 3*/}
        <section id="scroll">
          <div className="section-background">
            <div className="container px-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6 order-lg-2">
                  <div className="p-5">
                    <img
                      className="img-fluid rounded-circle"
                      src={img3}
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <div className="section-new">
                    <h2 className="display-4">Calidad de nuestros productos</h2>
                    <p>
                      La impresión 3D es una tecnología que te ofrece grandes posibilidades para crear objetos personalizados, originales y funcionales. Estamos aquí para ayudarte a obtener una buena calidad de impresión. Si tienes alguna duda o sugerencia, no dudes en contactarnos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Carrusel con imágenes cuadradas */}
        <section id="image-gallery">
          <div className="container px-5">
            <h2 className="display-4 text-center my-5">Productos referenciales</h2>
            <div id="carouselExampleControls" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={imgCarusel1}
                    className="d-block w-100"
                    alt="Imagen 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={imgCarusel2}
                    className="d-block w-100"
                    alt="Imagen 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={imgCarusel3}
                    className="d-block w-100"
                    alt="Imagen 3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={imgCarusel4}
                    className="d-block w-100"
                    alt="Imagen 4"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={imgCarusel5}
                    className="d-block w-100"
                    alt="Imagen 5"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
        </section>
      </>


    </div>
  )
}

export default Impresion