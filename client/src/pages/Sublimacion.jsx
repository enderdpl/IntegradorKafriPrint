import img1 from "../img/desktop-computer_1792525.png";
import img2 from "../img/plotter_7404119.png";
import img3 from "../img/scanner_2587404.png";
import img4 from "../img/t-shirt_7404135.png";
import imgCarusel1 from "../img/polera1.jpg.jpg";
import imgCarusel2 from "../img/polera2.jpg.jpg";
import imgCarusel3 from "../img/tiktok.jpg.jpg";

import '../style/sublimacion.css'
function Sublimacion() {
  return (
    <div>
      <>
        <header className="masthead text-center text-white">
          <div className="container px-5">
            <h1 className="display-3">Sublima tus prendas en Krafi Print</h1>
          </div>
        </header>
        {/* Subtitulo */}
        <br />
        <h5 className="explain">CONOCE EL PROCESO</h5>
        {/* Iconos imágenes proceso sublimacion*/}
        <div className="icon-container">
          <div className="icon-item">
            <a href="https://www.freepik.es/icono/ordenador-sobremesa_1792525#position=0&page=1&term=computador&fromView=search">
              <img src={img1} alt="buscar" />
            </a>
            <p>Busca tu diseño</p>
          </div>
          <div className="icon-item">
            <a href="https://www.freepik.es/icono/trazador_7404119#position=5&fromView=resource_detail">
              <img src={img2} alt="imprimir" />
            </a>
            <p>Lo imprimimos</p>
          </div>
          <div className="icon-item">
            <a href="https://www.freepik.es/icono/esc%C3%A1ner_2587404#position=23&page=1&term=sublimar&fromView=search">
              <img src={img3} alt="Estampar" />
            </a>
            <p>Lo estampamos</p>
          </div>
          <div className="icon-item">
            <a href="https://www.freepik.es/icono/camiseta_7404135#position=1&fromView=resource_detail">
              <img src={img4} alt="Final" />
            </a>
            <p>¡Nueva prenda personalizada!</p>
          </div>
        </div>
        {/* Fotos redondas de los productos 
  <section className="section-container">
  <img className="round-image" src={imgCarusel1} alt="polera1" />
  <img className="round-image" src={imgCarusel2} alt="polera2" />
  <img className="round-image" src={imgCarusel3} alt="tiktok" />
    <div className="circle" />
    <div className="circles" />
    <div className="circles2" />
  </section>
  */}
        <p className="te-gustaria">
          ¿Te gustaría tener una prenda única y original, que refleje tu personalidad y estilo?
          ¿Quieres sorprender a alguien con un regalo especial y diferente? Entonces, te invitamos
          a conocer nuestro servicio de estampado personalizado, donde podrás crear tu propio diseño
          y nosotros lo imprimiremos y lo estamparemos en la prenda que elijas.
        </p>
        <div className="container d-flex justify-content-center align-items-center vh-100 principal">
          <div className="row">
            <div className="col-md-6">
              <img
                src={imgCarusel1}
                alt="Imagen"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <div className="text-container">
                <div className="text-center">

                  {/* <p>
                    ¿Te gustaría tener una prenda única y original, que refleje tu personalidad y estilo?
                    ¿Quieres sorprender a alguien con un regalo especial y diferente? Entonces, te invitamos
                    a conocer nuestro servicio de estampado personalizado, donde podrás crear tu propio diseño
                    y nosotros lo imprimiremos y lo estamparemos en la prenda que elijas.
                  </p> */}
                  <p>
                    El proceso es muy sencillo: solo tienes que <strong>buscar tu diseño</strong> entre las opciones
                    que te ofrecemos o subir tu propia imagen o texto. Puedes elegir el tamaño, el color, la posición
                    y la orientación del diseño. Luego, selecciona la prenda que quieres estampar: tenemos camisetas,
                    poleras, polerones, chaquetas, gorros, bolsos y más. Elige el modelo, el color y la talla que más te guste.
                  </p>
                  <p>
                    Una vez que tengas tu pedido listo, solo tienes que confirmarlo y pagarlo. Nosotros nos encargamos de
                    <strong> imprimir</strong> tu diseño con la mejor calidad y <strong>estamparlo</strong> en la prenda que escogiste,
                    usando técnicas profesionales que garantizan un resultado duradero y resistente. Te enviaremos un correo de
                    confirmación cuando tu pedido esté listo para ser enviado o retirado.
                  </p>
                  {/* <p>
    Así de fácil es crear tu propia prenda personalizada con nuestro servicio de estampado.
    No esperes más y anímate a darle un toque único y original a tu vestuario.
    Estamos seguros de que quedarás satisfecho con el <strong>final</strong> de tu creación.
    ¡Nueva prenda personalizada!
  </p> */}
                </div>



              </div>
            </div>
          </div>
        </div>


      </>

    </div>
  )
}

export default Sublimacion