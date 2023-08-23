import React, { useEffect } from "react";

function Formulario() {



    return (
        <div>
            <link href="Carrusel.jsx" />
            <link rel="stylesheet" href="../app.css" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            {/* font awesome */}
            <link rel="stylesheet" href="resenas.css" />
            <div className="floating-wpp" />

            {/*  Imagen del banner*/}
            <section>
                <div className="banner" onclick="redirectTo(event)">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="container-fluid">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="img/fondo-banner-1CHICO.png" className="d-block w-100" alt="Banner 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="img/fondo-banner-2-CHICO.png.png" className="d-block w-100" alt="Banner 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src="img/fondo-banner-3-CHICO.png.png" className="d-block w-100" alt="Banner 3" />
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
                <img src="img/angle-left-solid.svg" alt="Previous" style={{ width: '50px', backgroundColor: 'rgba(201, 201, 201, 0.174)' }} />
            </a>
            <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-bs-slide="next">
                <img src="img/chevron-right-solid.svg" alt="Next" style={{ width: '50px', backgroundColor: 'rgba(201, 201, 201, 0.174)' }} />
            </a>
            {/* Iconos */}
            <section>
                <div className="icon-container">
                    <div className="icon-wrapper">
                        <a href="#sublimacion"><i className="fas fa-tshirt custom-icon" /></a> {/* Icono de Polera */}
                        <span className="icon-label">Sublimación</span>
                    </div>
                    <div className="icon-wrapper">
                        <a href="#papeleria"><i className="fas fa-paperclip custom-icon" /></a> {/* Icono de Papelería */}
                        <span className="icon-label">Papelería</span>
                    </div>
                    <div className="icon-wrapper">
                        <a href="#impresion3d"><i className="fas fa-print custom-icon" /></a> {/* Icono de Print */}
                        <span className="icon-label">Impresión 3D</span>
                    </div>
                    <div className="icon-wrapper">
                        <a href="#otros"><i className="fas fa-sticky-note custom-icon" /></a> {/* Icono de Sticky Note */}
                        <span className="icon-label">Otros</span>
                    </div>
                </div>
            </section>
            {/* Secciones correspondientes a los iconos */}
            <section id="sublimacion">
                {/* Contenido de la sección "Sublimación" */}
            </section>
            <section id="papeleria">
                {/* Contenido de la sección "Papelería" */}
            </section>
            <section id="impresion3d">
                {/* Contenido de la sección "Impresión 3D" */}
            </section>
            <section id="otros">
                {/* Contenido de la sección "Otros" */}
            </section>
            <section id="cotizacion">
                <div className="container pt-3">
                    {/* <h1 class="text-center">Cotización</h1> */}
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <h1 className="text-center mt-2">Cotización</h1>
                            <br />
                            {/* <p>Ingresa los datos en el siguiente formulario, ingresa una descripción clara y adjunta las fotos necesarias
            para un mejor resultado:</p> */}
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis molestiae dicta velit ab placeat
                            quasi alias, ea consequuntur, fugiat minima repellat, neque asperiores culpa enim est quo cupiditate tempora.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis molestiae dicta velit ab placeat
                            quasi alias, ea consequuntur, fugiat minima repellat, neque asperiores culpa enim est quo cupiditate tempora.
                            <br />
                            <br />
                            {/* de aqui */}
                            <div className="carrusel-container">
                                <ul className="reseñas-lista">
                                    <li className="reseña">
                                        <p className="nombre">¿Tienes una idea?</p>
                                        <p className="texto">¡Cué
                                            ntanos!</p>
                                    </li>
                                    <li className="reseña">
                                        <p className="nombre">Contáctate con nosotros</p>
                                        <p className="texto">Rellena los datos del formulario</p>
                                    </li>
                                    <li className="reseña">
                                        <p className="nombre">Listo!</p>
                                        <p className="texto">Espera nuestro email con la cotización</p>
                                    </li>
                                    {/* <li class="reseña">
                <p class="nombre">Descripción 4</p>
                <p class="texto">descripción</p>
              </li>
              <li class="reseña">
                <p class="nombre">Descripción 5</p>
                <p class="texto">descripción</p>
              </li> */}
                                    {/* Agrega más reseñas aquí */}
                                </ul>
                            </div>
                            {/* hasta aqui */}
                            <i className="fa-sharp fa-solid fa-calendar-lines" />
                        </div>
                        <div className="col-lg-6">
                            <form className="p-4">
                                <h2 className="text-center mt-2">Formulario de cotización</h2>
                                <input type="text" className="form-control form-control-lg mt-3" placeholder="Nombre" />
                                <input type="email" className="form-control form-control-lg mt-3" placeholder="ejemplo@ejemplo.com" />
                                <input type="text" className="form-control form-control-lg mt-3" placeholder="Asunto" />
                                <div className="input-group">
                                    <input type="number" className="form-control form-control-lg mt-3" placeholder="Alto (cm)" />
                                    <input type="number" className="form-control form-control-lg mt-3" placeholder="Ancho (cm)" />
                                    <input type="number" className="form-control form-control-lg mt-3" placeholder="Largo (cm)" />
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
            {/* pie de pagina*/}
            <section id="contact">
                <div className="container-fluid">
                    <footer className="py-5 ">
                        <div className="row ">
                            <div> <img src="img/logo/logo2P.png" className="rounded float-start mb-3" alt="logo" style={{ width: '150pt' }} href="#" /></div>
                            <div className="col-6 col-md-2 mb-2">
                            </div>
                            <div className="col-lg-6 offset-md-1 mb-2 text-center">
                                <form className="p-2">
                                    <h3>Contacto</h3>
                                    <p>Para más informacion</p>
                                    <div className="d-flex flex-column ">
                                        <div className="input-group">
                                            <input id="NombreContacto" type="text" className="form-control form-control-lg mt-2" placeholder="Nombre" />
                                            <input id="emailContacto" type="email" className="form-control form-control-lg mt-2" placeholder="ejemplo@ejemplo.com" />
                                        </div>
                                        <textarea className="form-control form-control-lg mt-2" placeholder="Mensaje" id="mensajeContacto" defaultValue={""} />
                                        <button className="btn btn-primary mt-2" type="button" id="ContactoBoton">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row justify-content-between py-1 my-1 border-top">
                            <p>© 2023</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}>
                                    <use xlinkHref="#twitter" />
                                </svg></a></li>
                                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}>
                                    <use xlinkHref="#instagram" />
                                </svg></a></li>
                                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}>
                                    <use xlinkHref="#facebook" />
                                </svg></a></li>
                            </ul>
                        </div>
                    </footer></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className>
                            <div className="social-icons text-center  ">
                                <p />
                                <a href="https://www.facebook.com/KrafiPrint" target="_blank"><i className="fab fa-facebook fa-2x " id="facebook" /></a>
                                <a href="#"><i className="fa-brands fa-whatsapp fa-2x " id="whatsapp" /></a>
                                <a href="https://www.instagram.com/krafiprint/?hl=es" target="_blank"><i className="fab fa-instagram fa-2x" id="instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Formulario