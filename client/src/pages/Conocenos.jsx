// import "../style/conocenos.css"
// import imgConocenos from "../img/gallary-conocenos.jpg";
// import imgConocenos2 from "../img/gallary-conocenos1.jpg";
// import imgConocenos3 from "../img/gallary-conocenos2.jpg";
// import WhatsAppFloating from "./WhatsappFlotante";

// function Conocenos() {
//   return (
//     <div>
//       <WhatsAppFloating/>
//          <header className="masthead text-center text-white">
//         <div className="container px-5">
//           <h1 className="display-3">Conocenos</h1>
//         </div>
//       </header>
//       <section id="about">
//         <div className="container mt-4 pt-4">
//           <h3>Sobre nosotros</h3>
//           <h1 className="text-center display-5 fw-bolder">Krafi Print</h1>
//           <div className="row mt-4">
//             <div className="col-lg-4">
//               {/**/}
//               <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                   <div className="carousel-item active">
//                     <img src = {imgConocenos} className="d-block w-100 h-auto" alt="..." />
//                   </div>
//                   <div className="carousel-item">
//                     <img src={imgConocenos2} className="d-block w-100" alt="..." />
//                   </div>
//                   <div className="carousel-item">
//                     <img src={imgConocenos3} className="d-block w-100" alt="..." />
//                   </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//                   <span className="carousel-control-prev-icon" aria-hidden="true" />
//                   <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//                   <span className="carousel-control-next-icon" aria-hidden="true" />
//                   <span className="visually-hidden">Next</span>
//                 </button>
//               </div>
//             </div>
//             <div className="col-lg-8" id="Conocenos-descripcion">
//               <p className="lead">Krafi Print es una pequeña y mediana empresa (PYME) que se especializa en la impresión y creación de medios gráficos personalizados. Nuestros productos incluyen:</p>
//               <ul className="lead">
//                 <li>Llaveros</li>
//                 <li>Piezas de filamento 3D</li>
//                 <li>Poleras</li>
//                 <li>Tazones</li> 
//                 <li>Tarjetas</li> 
//                 <li>Agendas</li> 
//                 <li>¡Y más!</li>
//               </ul>
//               <p className="lead">La historia detrás de Krafi Print es la de una emprendedora que buscaba un nuevo rumbo en su vida. Después de años trabajando en una empresa grande, decidió que era hora de tomar el control de su futuro y crear algo propio. Así nació Krafi Print, una PYME dedicada a proporcionar productos de alta calidad que están personalizados para satisfacer las necesidades de sus clientes.
//                 Nuestra fundadora siempre había sido una apasionada de la impresión y la creación de medios gráficos. Desde joven, disfrutaba experimentando con diferentes técnicas y materiales para crear piezas únicas y originales. Sin embargo, nunca había considerado convertir su pasión en un negocio hasta que se encontró en una encrucijada en su carrera.
//                 Después de mucho reflexionar, decidió dejar su trabajo y dedicarse por completo a su sueño de crear una empresa de impresión. Con mucho esfuerzo y dedicación, logró establecer Krafi Print como una PYME exitosa que ofrece productos personalizados de alta calidad.
//                 Ya sea que necesites un regalo único para una ocasión especial o artículos promocionales para tu negocio, tenemos lo que necesitas. Contáctanos hoy para obtener más información sobre nuestros productos y servicios. ¡Esperamos trabajar contigo!</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Conocenos

import "../style/conocenos.css"
import imgConocenos from "../img/gallary-conocenos.jpg";
import imgConocenos2 from "../img/gallary-conocenos1.jpg";
import imgConocenos3 from "../img/gallary-conocenos2.jpg";
import WhatsAppFloating from "./WhatsappFlotante";

function Conocenos() {
  return (
    <div>
      <WhatsAppFloating />
      <header className="masthead text-center text-white">
        <div className="container px-5">
          <h1 className="display-3">Conócenos</h1>
        </div>
      </header>
      <section className="section1" id="about">
        <br></br>
        <br></br>
        <h2>Sobre nosotros</h2>
        <div className="container mt-4 pt-4">
          <div className="row mt-4">
            <div className="col-lg-4">
              {/**/}
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={imgConocenos} className="d-block w-100 h-auto" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={imgConocenos2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={imgConocenos3} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-lg-8" id="Conocenos-descripcion">
              <p className="lead">Krafi Print es una pequeña y mediana empresa (PYME) que se especializa en la impresión y creación de medios gráficos personalizados. Nuestros productos incluyen:</p>
              <ul className="lead">
                <br>
                </br>
                <br>
                </br>
                <li>🔑 Llaveros 🔑</li>
                <li>⚡ Piezas de filamento 3D ⚡</li>
                <li>👕 Poleras 👕</li>
                <li>☕ Tazones ☕</li>
                <li>📇 Tarjetas 📇</li>
                <li>📓 Agendas 📓</li>
                <li>💡 ¡Y más! 💡</li>
              </ul>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
            <p className="lead-dos">La historia detrás de Krafi Print es la de una emprendedora que buscaba un nuevo rumbo en su vida.</p>
            <p className="lead-dos">Después de años trabajando en una empresa grande, decidió que era hora de tomar el control de su futuro y crear algo propio.</p>
            <p className="lead-dos">Así nació Krafi Print, una PYME dedicada a proporcionar productos de alta calidad que están personalizados para satisfacer las necesidades de sus clientes.</p>
            <p className="lead-dos">Nuestra fundadora siempre había sido una apasionada de la impresión y la creación de medios gráficos.</p>
            <p className="lead-dos">Desde joven, disfrutaba experimentando con diferentes técnicas y materiales para crear piezas únicas y originales.</p>
            <p className="lead-dos">Sin embargo, nunca había considerado convertir su pasión en un negocio hasta que se encontró en una encrucijada en su carrera.</p>
            <p className="lead-dos">Después de mucho reflexionar, decidió dejar su trabajo y dedicarse por completo a su sueño de crear una empresa de impresión.</p>
            <p className="lead-dos">Con mucho esfuerzo y dedicación, logró establecer Krafi Print como una PYME exitosa que ofrece productos personalizados de alta calidad.</p>
            <p className="lead-dos">Ya sea que necesites un regalo único para una ocasión especial o artículos promocionales para tu negocio, tenemos lo que necesitas. Contáctanos hoy para obtener más información sobre nuestros productos y servicios. ¡Esperamos trabajar contigo!</p>
          </div>
        </div>
      </section>
    </div>
  )
}



export default Conocenos