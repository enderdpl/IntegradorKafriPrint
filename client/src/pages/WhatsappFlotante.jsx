import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import '../style/floating-wpp.css';
import '../style/floating-wpp.min.css';

const WhatsAppFloating = () => {
    const handleSendMessage = () => {
        const phoneNumber = '56993910921'; // Número de teléfono de destino (sin el signo de +)
        const message = encodeURIComponent('¡Hola! Quiero consultar por un producto.'); // Mensaje a enviar
    
        // Genera el enlace de WhatsApp con el número y mensaje
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    
        // Abre una nueva ventana o pestaña con el enlace de WhatsApp
        window.open(whatsappLink, '_blank');
      };
    
      return (
        <div className="floating-wpp">
          <FloatingWhatsApp
            phoneNumber="56993910921"
            accountName="Krafri-Print"
            chatMessage="¿Hola, en qué podemos ayudarte?"
            allowEsc
            allowClickAway
            notification
            notificationSound
            onSubmit={handleSendMessage} // Llamada a la función para enviar mensajes
            statusMessage="Activo(a) ahora"
            placeholder="Quiero consultar por un producto"
            chatboxClassName="chat-box" // Cambia esto a la clase CSS que desees aplicar
          />
        </div>
  );
};

export default WhatsAppFloating;
