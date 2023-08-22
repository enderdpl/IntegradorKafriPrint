import "../style/Papeleria.css"
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

              </div>
  )
}

export default Papeleria