


import imgBaner from "../img/fondo-banner-1CHICO.png";
import imgBaner2 from "../img/fondo-banner-2-CHICO.png";
import imgBaner3 from "../img/fondo-banner-3-CHICO.png";
import imgFot from "../img/IMG_5168.jpg"

import { Link } from 'react-router-dom';

function InicioWeb() {
    return (
    <div>
       <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/fontawesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        {/*  Imagen del banner*/}
        <section> 
          <div className="banner" onclick="redirectTo(event)">
            <div id="carouselExampleSlidesOnly" className="carousel slide">
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
  <img src={flechaIz} alt="Anterior" style={{ width: '50px', backgroundColor: 'rgba(201, 201, 201, 0.174)' }} />
</a>
<a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-bs-slide="next">
  <img src={flechaDe} alt="Siguiente" style={{ width: '50px', backgroundColor: 'rgba(201, 201, 201, 0.174)' }} />
</a>

        {/* Iconos  */}
        <section>
        <div className="icon-container">
      <div className="icon-wrapper">
        <Link to="/sublimacion" className="scale-up-center">
          <i className="fas fa-tshirt custom-icon esd" />
        </Link>
        <span className="icon-label">Sublimación</span>
      </div>
      <div className="icon-wrapper">
        <Link to="/papeleria" className="scale-up-center">
          <i className="fas fa-paperclip custom-icon" />
        </Link>
        <span className="icon-label">Papelería</span>
      </div>
      <div className="icon-wrapper">
        <Link to="/impresion" className="scale-up-center">
          <i className="fas fa-print custom-icon" />
        </Link>
        <span className="icon-label">Impresión 3D</span>
      </div>
      <div className="icon-wrapper">
        <Link to="/preguntas" className="scale-up-center">
          <i className="fas fa-question custom-icon asd" />
        </Link>
        <span className="icon-label">Preguntas Frecuentes</span>
      </div>
      <div className="icon-wrapper">
        <Link to="#user" className="scale-up-center">
          <i className="fas fa-user custom-icon tes" />
        </Link>
        <span className="icon-label">Testimonios</span>
      </div>
    </div>

    
        </section>
        
        <div className="container my-5 text-container ">
          <div className="row">
            <div className="col-md-6">
              <div className="text-container">
                <h2>¡Bienvenidos a Kafri Print - Donde la Creatividad Toma Forma!</h2>
                <p>
                  En Kafri Print, estamos aquí para llevar tus ideas al siguiente nivel.
                  Somos tu socio confiable en el mundo del emprendimiento y la innovación,
                  especializados en impresión, impresión 3D y sublimación. ¿Tienes una
                  visión en mente? ¡Nosotros la materializamos!
                </p>
                <p>
                Nuestra pasión radica en transformar conceptos en realidades tangibles. Ya sea que estés buscando personalizar productos, crear prototipos impresionantes o dar vida a diseños únicos, Kafri Print es el destino perfecto. Nuestro equipo de expertos combina tecnología de vanguardia con una destreza artesanal incomparable para entregar resultados que superarán tus expectativas.
                </p>
                <h3>¿Qué hacemos?</h3>
                <ul className="lead text-containe">
                <li><strong>Impresión:</strong>  Nuestra impresión de alta calidad abarca desde materiales promocionales hasta obras de arte. Desde folletos vibrantes hasta carteles llamativos, damos vida a tus ideas en papel y lienzo.</li>
                <li><strong>Impresión 3D:</strong>  La revolución de la impresión 3D está en pleno apogeo, y en Kafri Print, estamos en la vanguardia. Creamos objetos tridimensionales personalizados, desde prototipos industriales hasta joyería única. ¡El límite es tu imaginación!</li>
                <li><strong>Sublimación:</strong> Agregamos un toque personal a productos cotidianos a través de la sublimación. Tazas, camisetas, cojines: transformamos lo ordinario en extraordinario con colores vivos y duraderos.</li>
               
              </ul>
              <h3>¿Por qué elegirnos?</h3>
              <ul className="lead text-containe">
                <li><strong>Calidad sin compromisos:</strong> Nuestro compromiso con la excelencia se refleja en cada detalle. Cada proyecto es tratado con la misma atención meticulosa, independientemente de su tamaño.</li>
                <li><strong>Creatividad desbordante:</strong> Tu visión es nuestra inspiración. Colaboramos contigo para refinar tus ideas y llevarlas más allá de lo que imaginaste.</li>
                <li> <strong>Tecnología de punta: </strong>Estamos equipados con las últimas herramientas y tecnologías en el mundo de la impresión y la impresión 3D. Esto nos permite ofrecer resultados de primera clase en tiempo récord.</li>
                <li><strong>Equipo apasionado: </strong> Nuestro equipo está compuesto por apasionados del diseño, la tecnología y la innovación. Juntos, trabajamos para hacer realidad tus sueños.</li>
                <li><strong> Resultados excepcionales:</strong> Los resultados hablan por sí mismos. Echa un vistazo a nuestro portafolio para ver cómo hemos transformado ideas en éxitos tangibles..</li>
                
               
              </ul>
              <p>
              Ya sea que estés comenzando tu viaje emprendedor, necesites prototipos impactantes o desees productos personalizados de alta calidad, Kafri Print es tu socio confiable en cada paso del camino. Únete a nosotros para descubrir un mundo de posibilidades donde la creatividad cobra vida. ¡Juntos, creamos el futuro, capa por capa!
              </p>
                {/* ... (el resto del texto) ... */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-container">
                {/* Coloca aquí la etiqueta de la imagen con estilos */}
                <div>
                <img src = {imgFot}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }


  export default InicioWeb;  
  