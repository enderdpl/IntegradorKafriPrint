import React from 'react';
import '../style/footer.css'; // Asegúrate de que este import esté en la parte superior del archivo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function footer() {
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/fontawesome.min.css" rel="stylesheet" />

<section id="footer">
  <div className="container-fluid">
    <footer className="py-1 my-1 border-top">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-12 col-sm-6 text-center text-sm-start">
          <p>© 2023</p>
        </div>
        <div className="col-12 col-sm-6 text-center text-sm-end">
          <ul className="list-unstyled d-flex justify-content-center justify-content-sm-end">
            <li className="ms-3">
              
            </li>
            <li className="ms-3">
              
            </li>
            <li className="ms-3">
              
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
  {/* Iconos RRSS */}
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="social-icons text-center">
          <p />
          <a href="https://www.facebook.com/KrafiPrint" target="_blank">
          <FontAwesomeIcon icon={faFacebook} id="facebook" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=56993910921&text=g" target='_blank'>
          <FontAwesomeIcon icon={faWhatsapp} id="whatsapp" />
          </a>
          <a href="https://www.instagram.com/krafiprint/?hl=es" target="_blank">
          <FontAwesomeIcon icon={faInstagram} id="instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default footer