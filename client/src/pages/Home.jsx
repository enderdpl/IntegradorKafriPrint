import "../style/style.css"
import "../style/responsive.css"
import "../style/bootstrap.min.css"
import ojo from "../img/why1.png"
import bote from "../img/why2.png"
import logo from "../img/logo/logo2P.png"
import sra from "../img/about.png"



function Home() {
  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HOMEPAGE</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <section className="banner_main">
          <div
            id="banner1"
            className="carousel slide banner_slide"
            data-ride="carousel"
          >

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="carousel-caption">
                    <div className="row">
                      <div className="col-md-7 col-lg-5">
                        <div className="text-bg">
                          <h1>Empresa de creación</h1>
                          <span>En Krafi Print volvemos tu idea realidad</span>
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-7">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="ban_track">
                              <figure>
                                <img src={logo} alt="#" />
                              </figure>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="col-md-12 creamos-idea">
                              <span>¡Creamos tu idea!</span>
                              <h3>
                                Bienvenidos a nuestra página, aquí podrás conocer nuestro trabajo y
                                realizar cotizaciones para llevar a cabo tus propias ideas a formato 3D,
                                sublimación, ¡Entre otras!
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="about" className="about ">
          <div className="container">
            <div className="row d_flex">
              <div className="col-md-6">
                <div className="about_right">
                  <figure>
                    <img src={sra} alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-6">
                <div className="titlepage">
                  <h2>Sobre Nosotros</h2>
                  <p className="nosotros">
                    {" "}
                    Somos una empresa fundada por Gloria Moreno, tenemos por objetivo seguir creciendo en el rubro de la papelería, la creación de medios gráficos y la impresión 3D, de la manera mas ecológica posible. Te invitamos a ingresar a la sección <strong>conócenos</strong> de nuestra página para saber más sobre nosotros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="choose">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>¿Por qué elegirnos?</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="choose_box">
                  <i>
                    <img src={ojo} alt="#" />
                  </i>
                  <h3>Nuestra Visión</h3>
                  <p>
                    Trabajamos cada pedido, con la sutileza y los cuidados que cada cliente merece, somos una empresa responsable y nuestro mayor objetivo es la satisfacción de nuestra clientela.
                  </p>
                </div>
              </div>
              <div className="col-md-5 offset-md-2">
                <div className="choose_box">
                  <i>
                    <img src={bote} alt="#" />
                  </i>
                  <h3>Entregas</h3>
                  <p>
                    Desde el encargo del pedido, estaremos en constante contacto con nuestro cliente, cumpliendo los plazos de creación y posteriormente, los plazos de entrega. Éstas pueden ser coordinadas de forma presencial, como también enviadas por agencias de envíos nacionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
  )
}

export default Home