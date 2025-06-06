import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-blue-400">Cristian</span>Dev
            </h3>
            <p className="mt-2 text-slate-400">
              Creación de experiencias digitales excepcionales.
            </p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-16 mb-6 md:mb-0">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-400">Navegación</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slate-300 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">Acerca de</a></li>
                <li><a href="#projects" className="text-slate-300 hover:text-white transition-colors">Proyectos</a></li>
                <li><a href="#technologies" className="text-slate-300 hover:text-white transition-colors">Tecnologías</a></li>
                <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-400">Conecta</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/carrietadev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/in/cristian-arrieta-850296259" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:carrieta.dev@gmail.com"
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="border-slate-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Cristian Arrieta. Todos los derechos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};