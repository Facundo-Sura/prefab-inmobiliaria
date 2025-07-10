"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Encuentra tu hogar ideal con <span className="text-blue-400">Prefab</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Venta y alquiler de propiedades prefabricadas
        </p>
        <a
          href="#properties"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition"
        >
          Ver propiedades
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
