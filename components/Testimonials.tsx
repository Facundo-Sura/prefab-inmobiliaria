"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "María González", feedback: "Prefab hizo realidad mi sueño de tener una casa moderna y accesible." },
  { name: "Carlos Pérez", feedback: "Excelente servicio y atención al cliente. 100% recomendados." },
  { name: "Lucía Torres", feedback: "Las casas prefabricadas de Prefab son de calidad superior." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Testimonios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <p className="italic mb-4">“{testi.feedback}”</p>
              <h4 className="font-semibold">{testi.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
