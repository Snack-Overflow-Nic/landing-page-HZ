import { motion } from 'framer-motion';
import { Users, Store } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { IconIdk } from './static/icons/Icon_idk';

export function PresentationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cards = [
    {
      icon: IconIdk,
      title: 'Para Consumidores',
      description:
        'Estudiantes, trabajadores y familias con ingresos limitados pueden acceder a alimentos de calidad a precios reducidos',
      color: '#FFCD59',
    },
    {
      icon: Store,
      title: 'Para negocios',
      description:
        'Restaurantes, cafeterías y panaderías pueden monetizar excedentes y reducir el desperdicio.',
      color: '#E6651A',
    },
  ];

  return (
    <section id="presentacion" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFCD59] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E6651A] opacity-10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-5xl text-[#0D156B] mb-6 leading-tight"
            style={{ fontFamily: 'Brasika' }}
          >
            Conectando{' '}
            <span className="text-[#E6651A]">Negocios</span> con{' '}
            <span className="text-[#FFCD59]">Consumidores</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700"
            style={{ fontFamily:'CalpsSansLight', fontSize: '1.5rem' }}
          >
            Hartazone es una plataforma tecnológica y social que responde a dos
            desafíos críticos en Managua: el desperdicio de alimentos en
            establecimientos gastronómicos y la inseguridad alimentaria que afecta a
            la población.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="glass-morphism-dark rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300 bg-white border-2 border-transparent hover:border-opacity-50"
                style={{ borderColor: `${card.color}40` }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
                  style={{ backgroundColor: card.color }}
                >
                  <card.icon size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3
                  className="text-2xl md:text-3xl mb-4"
                  style={{ color: card.color, fontFamily: 'Brasika' }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed"
                  style={{ fontFamily: 'CalpsSans', fontSize: '1.2rem' }}
                >
                  {card.description}
                </p>

                {/* Decorative element */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 rounded-b-3xl"
                  style={{ backgroundColor: card.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Parallax floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-10 text-6xl opacity-20 hidden lg:block"
        >
          🍽️
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-10 text-6xl opacity-20 hidden lg:block"
        >
          🥗
        </motion.div>
      </div>
    </section>
  );
}