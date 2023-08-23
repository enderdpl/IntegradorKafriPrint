import imgBaner from "../img/fondo-banner-1CHICO.png";


function InicioWeb() {
    return (
      <>
        <div className="banner">
          <div className="container-fluid">
            <div>
            <img src={imgBaner} className="d-block w-100" alt="Banner 1" />
            </div>
          </div>
        </div>
  
        <div className="container my-5">
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
                <ul className="lead">
                <li><strong>Impresión:</strong>  Nuestra impresión de alta calidad abarca desde materiales promocionales hasta obras de arte. Desde folletos vibrantes hasta carteles llamativos, damos vida a tus ideas en papel y lienzo.</li>
                <li><strong>Impresión 3D:</strong>  La revolución de la impresión 3D está en pleno apogeo, y en Kafri Print, estamos en la vanguardia. Creamos objetos tridimensionales personalizados, desde prototipos industriales hasta joyería única. ¡El límite es tu imaginación!</li>
                <li><strong>Sublimación:</strong> Agregamos un toque personal a productos cotidianos a través de la sublimación. Tazas, camisetas, cojines: transformamos lo ordinario en extraordinario con colores vivos y duraderos.</li>
               
              </ul>
              <h3>¿Por qué elegirnos?</h3>
              <ul className="lead">
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
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


  export default InicioWeb;  
  