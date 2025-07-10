"use client";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
        <p className="mb-8 text-gray-600">Envíanos un mensaje y nos pondremos en contacto contigo.</p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full p-3 border border-gray-300 rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
