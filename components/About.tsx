"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sobre nosotros
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          En Prefab nos dedicamos a ofrecer soluciones inmobiliarias innovadoras. Nos especializamos en casas prefabricadas, combinando diseño moderno, eficiencia y confort.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
