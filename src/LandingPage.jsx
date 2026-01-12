import React, { useState } from 'react';
import { Phone, Sprout, Store, Truck, MapPin, ChevronRight, Menu, X } from 'lucide-react';
import logoIcon from './assets/logo.png';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      {/* Navbar Simple */}
      <nav className="bg-navy shadow-sm py-4 relative z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Logo Icon and Text */}
            <img src={logoIcon} alt="PapaConex Icon" className="h-16 w-auto" />
            <span className="text-white text-3xl font-bold tracking-tight">
              Papa<span className="text-celeste">Conex</span>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-orange transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Link */}
          <a href="#registro" className="hidden md:flex items-center text-sm font-semibold text-white hover:text-celeste transition font-quebec tracking-wide">
            <Phone size={16} className="mr-1" /> Contacto
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 flex flex-col gap-4">
            <a href="#como-funciona" className="text-navy font-semibold hover:text-orange" onClick={() => setIsMenuOpen(false)}>
              ¿Cómo funciona?
            </a>
            <a href="#registro" className="flex items-center text-navy font-semibold hover:text-orange" onClick={() => setIsMenuOpen(false)}>
              <Phone size={16} className="mr-2" /> Contacto
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="bg-navy text-white pt-16 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge de Validación Local */}
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 mb-6">
            <span className="text-celeste font-bold text-sm flex items-center gap-1">
              <MapPin size={14} /> Desde Villa Dolores para el país
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-quebec">
            La nueva forma de comercializar la papa en Argentina
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            La primera plataforma digital que conecta directamente a productores, compradores y transportistas.
            <br />
            <strong>Innovación que acerca, transparencia que rinde.</strong>
          </p>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#registro" className="btn-cta bg-celeste text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              Quiero ser Pionero 🚀
            </a>
            <a href="#como-funciona" className="py-4 px-8 rounded-lg border border-gray-600 hover:border-white transition duration-300">
              ¿Cómo funciona?
            </a>
          </div>
        </div>
      </header>

      {/* Valor Segmentado */}
      <section id="como-funciona" className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Productor */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-celeste transform hover:-translate-y-1 transition duration-300">
              <div className="text-celeste mb-4">
                <Sprout size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Productor</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Defendé tu precio. Publicá tu cosecha y accedé a compradores seguros.
              </p>
            </div>

            {/* Comprador (Completed from truncation) */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-blue-600 transform hover:-translate-y-1 transition duration-300">
              <div className="text-blue-600 mb-4">
                <Store size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Comprador</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Asegura tu abastecimiento todo el año de manera eficiente y transparente.
              </p>
            </div>

            {/* Transportista (Added based on context) */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-green-600 transform hover:-translate-y-1 transition duration-300">
              <div className="text-green-600 mb-4">
                <Truck size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Transportista</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tu camión siempre lleno, tu ruta optimizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="registro" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-navy p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-2 font-quebec">¡Sumate a la Revolución!</h2>
              <p className="text-gray-300">Dejanos tus datos y sé parte de los pioneros de PapaConex.</p>
            </div>

            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={() => {
              if (window.submitted) {
                alert("¡Gracias por registrarte! Te contactaremos pronto.");
                window.location.reload();
              }
            }}></iframe>

            <form
              className="p-8 space-y-6"
              action="https://docs.google.com/forms/d/e/1FAIpQLScL0HT145s8MA-_h2pemATPJhBBYcC8_jXhx8Nast6ARLMv2g/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={() => { window.submitted = true; }}
            >

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nombre Completo</label>
                <input name="entry.310610569" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-celeste focus:ring-2 focus:ring-celeste/20 outline-none transition" placeholder="Juan Pérez" required />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Teléfono / WhatsApp</label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 font-semibold">+54</span>
                  <input name="entry.710914644" type="tel" className="w-full px-4 py-3 rounded-r-lg border border-gray-300 focus:border-celeste focus:ring-2 focus:ring-celeste/20 outline-none transition" placeholder="9 11 1234 5678" required />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">¿Cuál es tu rol?</label>
                <select name="entry.2001704798" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-celeste focus:ring-2 focus:ring-celeste/20 outline-none transition bg-white" required>
                  <option value="">Seleccioná una opción</option>
                  <option value="Productor">🥔 Soy Productor</option>
                  <option value="Comprador">🛒 Soy Comprador</option>
                  <option value="Transportista">🚚 Soy Transportista</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Mensaje (Opcional)</label>
                <textarea name="entry.819843279" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-celeste focus:ring-2 focus:ring-celeste/20 outline-none transition" rows="3" placeholder="Contanos de dónde sos o qué necesitás..."></textarea>
              </div>

              <button type="submit" className="w-full btn-cta bg-celeste text-white font-bold py-4 rounded-lg text-lg hover:bg-sky-600 transition flex items-center justify-center gap-2">
                Enviar mis datos <ChevronRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer (Added for completeness) */}
      <footer className="bg-navy text-gray-400 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} PapaConex. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
