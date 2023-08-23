import "../style/Papeleria.css"
import Chapita from "../img/chapita.jpg";
import Agenda from "../img/agenda.jpg";
import Sticker from "../img/sticker.jpg";
import Postit from "../img/postit.jpg";
import Tarjeta from "../img/target.jpg";

function Papeleria() {
  return (
    <><div>
      <header className="masthead text-center text-white">
        <div className="container px-5">
          <h1 className="display-3">Papelería</h1>
        </div>
      </header>   </div><div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img src={Chapita} alt="imagen1" className="img-fluid img-chapita" />
            </div>
            <div className="col cuadrado">
              <div className="texto">En la sección de papeleria de Krafi Print nos especializamos en la impresion y medios graficos personalizados. Ofrecemos una amplia gama de productos de papel y suministros de oficina.</div>
            </div>
          </div>
        </div>



        <div className="container-fluid">
          <div className="row">
            <div className="col cuadrado">
              <div className="texto">Los productos que puedes encontrar acá son: agendas, tarjetas, organizadores, calendarios, chapitas y más</div>
            </div>
            <div className="col-md-6">
              <img src={Agenda} alt="imagen2" className="img-fluid img-agenda" />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img src={Sticker} alt="imagen3" className="img-fluid img-sticker" />
            </div>
            <div className="col cuadrado">
              <div className="texto">También ofrecemos servicios de impresión personalizada para artículos como: tarjetas de visita, invitaciones y materiales promocionales.</div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col cuadrado">
              <div className="texto">Contáctanos hoy para obtener más información acerca de nuestros productos en stock y nuestros productos personalizados</div>
            </div>
            <div className="col-md-6">
              <img src={Postit} alt="imagen4" className="img-fluid img-postit" />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img src={Tarjeta} alt="imagen5" className="img-fluid img-target" />
            </div>
            <div className="col cuadrado">
              <div className="texto">¿Tienes una idea en mente? Siempre estamos dispuestos a atenderlos y buscar nuevas formas de satisfacer las necesidades de nuestros clientes.</div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Papeleria;