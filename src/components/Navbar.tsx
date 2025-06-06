import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a nav link
  const handleNavLinkClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <div className="text-xl font-bold">
          <a href="#home" className="text-blue-600 dark:text-blue-400">
            Cristian<span className="text-slate-800 dark:text-white">Dev</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li><a href="#home" onClick={() => handleNavLinkClick('home')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</a></li>
            <li><a href="#about" onClick={() => handleNavLinkClick('about')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Acerca de</a></li>
            <li><a href="#projects" onClick={() => handleNavLinkClick('projects')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Proyectos</a></li>
            <li><a href="#technologies" onClick={() => handleNavLinkClick('technologies')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tecnologías</a></li>
            <li><a href="#contact" onClick={() => handleNavLinkClick('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contacto</a></li>
          </ul>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg absolute w-full">
          <ul className="py-4 px-6 space-y-4">
            <li><a href="#home" onClick={() => handleNavLinkClick('home')} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Inicio</a></li>
            <li><a href="#about" onClick={() => handleNavLinkClick('about')} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Acerca de</a></li>
            <li><a href="#projects" onClick={() => handleNavLinkClick('projects')} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Proyectos</a></li>
            <li><a href="#technologies" onClick={() => handleNavLinkClick('technologies')} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tecnologías</a></li>
            <li><a href="#contact" onClick={() => handleNavLinkClick('contact')} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contacto</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};