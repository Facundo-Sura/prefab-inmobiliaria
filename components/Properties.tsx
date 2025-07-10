"use client";

import { motion } from "framer-motion";

const properties = [
  { id: 1, title: "Casa Moderna", image: "/property1.jpg", price: "$120,000" },
  { id: 2, title: "Cabaña Rústica", image: "/property2.jpg", price: "$85,000" },
  { id: 3, title: "Villa de Lujo", image: "/property3.jpg", price: "$250,000" },
];

const Properties = () => {
  return (
    <section id="properties" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Propiedades destacadas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <motion.div
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={property.image} alt={property.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600">{property.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
