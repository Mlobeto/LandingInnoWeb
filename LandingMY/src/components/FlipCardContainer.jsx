// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars

import React from "react";

// Puedes cambiar las rutas de las imágenes por las de tu empresa en /assets
import discoveryImg from "../assets/diseño.png";
import devImg from "../assets/diseño2.png";
import deliveryImg from "../assets/mantenimiento.png";

const steps = [
  {
    title: "Descubrimiento & Diseño",
    img: discoveryImg,
    desc: "Definimos la necesidad de tu negocio, diseñamos y presentamos la mejor solución a medida."
  },
  {
    title: "Desarrollo Multiplataforma",
    img: devImg,
    desc: "Creamos tu sistema en web, móvil y escritorio, asegurando compatibilidad y experiencia óptima en todos los dispositivos."
  },
  {
    title: "Entrega & Mantenimiento",
    img: deliveryImg,
    desc: "Implementamos, entregamos y acompañamos tu sistema en funcionamiento, con soporte y mejoras continuas."
  }
];

const FlipCardContainer = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">
        Somos tu partner en desarrollo de software
      </h2>
      <p className="text-lg md:text-xl text-gray-300 mb-10 text-center max-w-2xl">
        Transformamos ideas en soluciones digitales. Te acompañamos en cada paso: desde la definición de tu necesidad hasta la entrega y el mantenimiento de tu sistema funcionando.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 w-full max-w-6xl px-4">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="flex-1 bg-gray-800 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-32 h-32 object-contain mb-6 rounded-full border-4 border-colors-azul bg-gray-900 shadow-lg"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-azul mb-3 text-center drop-shadow-lg">
              {step.title}
            </h3>
            <p className="text-base md:text-lg text-gray-200 text-center">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlipCardContainer;
