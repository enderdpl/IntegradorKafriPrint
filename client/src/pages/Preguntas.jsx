import "../style/preguntas.css"


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
</div>
  )
}

export default Preguntas