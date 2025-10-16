import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { LogoNav } from './static/icons/Logo_Navbar';

export function Footer() {
  const quickLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#presentacion' },
    { label: 'Cómo Funciona', href: '#manual' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Negocios', href: '#negocios' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/somoshartazone?igsh=N3VubzFrOTczNHZq' },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ), 
      label: 'TikTok', 
      href: 'https://www.tiktok.com/@somoshartazone?_t=ZM-90afi2kAsxP&_r=1' 
    },
  ];

  return (
    <footer className="bg-[#0D156B] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6651A] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFCD59] opacity-10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <LogoNav width={100} height={50} />
            </motion.div>
            <p className="text-gray-300 max-w-md leading-relaxed" style={{ fontFamily:'CalpsSansLight', fontSize: '1.2rem' }}>
              Conectando restaurantes con consumidores para reducir el desperdicio
              alimentario en Managua.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 text-[#FFCD59]" style={{ fontFamily:'Brasika', fontSize: '1.2rem' }}>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFCD59] transition-colors duration-300"
                    style={{ fontFamily:'CalpsSansLight', fontSize: '1.2rem' }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg mb-4 text-[#FFCD59]" style={{ fontFamily:'Brasika', fontSize: '1.2rem' }}>
              Contacto
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:somoshartazone@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-[#FFCD59] transition-colors duration-300"
                style={{ fontFamily:'CalpsSansLight', fontSize: '1.2rem' }}
              >
                <Mail size={18} />
                <span>somoshartazone@gmail.com</span>
              </a>

              {/* Social Media */}
              <div>
                <p className="text-sm text-gray-400 mb-2" style={{ fontFamily:'CalpsSansLight', fontSize: '1.1rem' }}>Síguenos en:</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-[#FFCD59] text-[#0D156B] rounded-full flex items-center justify-center hover:bg-white hover:text-[#E6651A] transition-all duration-300 shadow-md"
                      aria-label={social.label}
                      target='_blank'
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-10 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm" style={{ fontFamily:'CalpsSansLight', fontSize: '1.1rem' }}>
          <p>© 2025 Hartazone. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ color: '#FFCD59' }}
              className="hover:text-[#FFCD59] transition-colors duration-300"
            >
              Política de Privacidad
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#FFCD59' }}
              className="hover:text-[#FFCD59] transition-colors duration-300"
            >
              Términos de Servicio
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}