import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LogoNav } from './static/icons/Logo_Navbar';


export function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio', href: '#hero' },
    { id: 'nosotros', label: 'Nosotros', href: '#presentacion' },
    { id: 'como-funciona', label: 'Cómo Funciona', href: '#manual' },
    { id: 'soluciones', label: 'Soluciones', href: '#soluciones' },
    { id: 'negocios', label: 'Negocios', href: '#negocios' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['hero', 'presentacion', 'manual', 'soluciones', 'negocios'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            const navMap: { [key: string]: string } = {
              'hero': 'inicio',
              'presentacion': 'nosotros',
              'manual': 'como-funciona',
              'soluciones': 'soluciones',
              'negocios': 'negocios',
            };
            setActiveSection(navMap[section] || 'inicio');
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism-dark shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <LogoNav width={100} height={50} />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="relative text-white hover:text-[#FFCD59] transition-colors duration-300"
                style ={{ fontFamily: 'Brasika' }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFCD59]"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-[#FFCD59] text-[#0D156B] px-6 py-2 rounded-full hover:bg-[#E6651A] hover:text-white transition-colors duration-300"
            style ={{ fontFamily: 'CalpsSans' }}
          >
            Descargar App
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-morphism-dark"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-[#FFCD59] py-2 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-[#FFCD59] text-[#0D156B] px-6 py-2 rounded-full hover:bg-[#E6651A] hover:text-white transition-colors duration-300 mt-4">
              Descargar App
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}