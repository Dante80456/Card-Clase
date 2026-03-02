import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  // Obtenemos el año actual dinámicamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-6">
      {/* CONTENEDOR PRINCIPAL CENTRADO */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* --- COLUMNA 1: INFO DEL PROYECTO --- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">DevMarket</h3>

          <p className="text-sm leading-relaxed">
            Aprende desarrollo FullStack con proyectos reales paso a paso.  
            Este curso está diseñado para que construyas aplicaciones modernas
            usando React, Node.js y buenas prácticas.
          </p>
        </div>

        {/* --- COLUMNA 2: NAVEGACIÓN --- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Navegación</h3>

          {/* Lista de navegación */}
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Inicio</a></li>
            <li><a href="#" className="hover:text-white">Productos</a></li>
            <li><a href="#" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* --- COLUMNA 3: REDES SOCIALES --- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Síguenos</h3>

          <div className="flex items-center space-x-4 text-xl">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* --- LÍNEA DIVISORA HORIZONTAL --- */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © {currentYear} DevMarket — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}