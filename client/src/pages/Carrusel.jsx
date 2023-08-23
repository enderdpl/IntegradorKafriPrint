// import React, { useState, useEffect } from "react";

// function Carrusel() {
//     const [index, setIndex] = useState(0);
//     const intervalo = 3000; // Cambiar la velocidad del carrusel aquí (en milisegundos)

//     useEffect(() => {
//         const interval = setInterval(siguienteReseña, intervalo);
//         return () => {
//             clearInterval(interval);
//         };
//     }, [index]);

//     function siguienteReseña() {
//         setIndex((prevIndex) => (prevIndex + 1) % reseñas.length);
//     }

//     return (
//         <div className="reseñas-lista">
//             {/* El contenido del carrusel */}
//         </div>
//     );
// }

// export default Carrusel;

import React, { useState, useEffect } from "react";

const reseñas = [
    {
        nombre: "¿Tienes una idea?",
        texto: "¡Cuéntanos!"
    },
    {
        nombre: "Contáctate con nosotros",
        texto: "Rellena los datos del formulario"
    },
    {
        nombre: "Listo!",
        texto: "Espera nuestro email con la cotización"
    }
    // Agrega más reseñas aquí si es necesario
];

function Carrusel() {
    const [index, setIndex] = useState(0);
    const intervalo = 3000; // Cambiar la velocidad del carrusel aquí (en milisegundos)

    useEffect(() => {
        const interval = setInterval(siguienteReseña, intervalo);
        return () => {
            clearInterval(interval);
        };
    }, [index]);

    function siguienteReseña() {
        setIndex((prevIndex) => (prevIndex + 1) % reseñas.length);
    }

    return (
        <div className="reseñas-lista">
            {reseñas.map((res, idx) => (
                <div key={idx} className={`reseña ${idx === index ? "activo" : ""}`}>
                    <p className="nombre">{res.nombre}</p>
                    <p className="texto">{res.texto}</p>
                </div>
            ))}
        </div>
    );
}

export default Carrusel;