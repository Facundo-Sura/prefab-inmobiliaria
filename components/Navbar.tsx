"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">Prefab</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600">Sobre nosotros</a>
          <a href="#properties" className="hover:text-blue-600">Propiedades</a>
          <a href="#services" className="hover:text-blue-600">Servicios</a>
          <a href="#contact" className="hover:text-blue-600">Contacto</a>
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white p-4 space-y-2">
          <a href="#about" className="block hover:text-blue-600">Sobre nosotros</a>
          <a href="#properties" className="block hover:text-blue-600">Propiedades</a>
          <a href="#services" className="block hover:text-blue-600">Servicios</a>
          <a href="#contact" className="block hover:text-blue-600">Contacto</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
