"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Compra", description: "Adquiere tu vivienda soñada con asesoramiento profesional." },
  { title: "Venta", description: "Vendemos tu propiedad rápidamente y al mejor precio." },
  { title: "Alquiler", description: "Ofrecemos opciones flexibles para inquilinos y propietarios." },
  { title: "Tasaciones", description: "Valoramos tu propiedad con precisión y confianza." },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Nuestros servicios</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
