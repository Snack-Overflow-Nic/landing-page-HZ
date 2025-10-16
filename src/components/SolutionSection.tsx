import { motion } from 'framer-motion';
import { Gift, ListChecks, Check } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const solutions = [
    {
      icon: Gift,
      title: 'Packs Sorpresa',
      description:
        'Combinaciones de alimentos sin descripción exacta, ofrecidas al final del día a un precio único',
      checks: [
        'Máximo ahorro',
        'Sorpresa garantizada',
        'Disponible al cierre del día',
        'Ideal para aventureros culinarios',
      ],
      color: '#FFCD59',
      gradient: 'from-[#FFCD59] to-[#E6651A]',
    },
    {
      icon: ListChecks,
      title: 'Ofertas Específicas',
      description:
        'Platos o combos con descripción clara, disponibles también a menor costo.',
      checks: [
        'Sabes perfectamente qué recibes',
        'Precios reducidos',
        'Disponibles durante el día',
        'Perfecto para planificar tus comidas',
      ],
      color: '#E6651A',
      gradient: 'from-[#E6651A] to-[#FFCD59]',
    },
  ];

  return (
    <section id="soluciones" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background WebGL */}

      {/* Background elements */}
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCD59] opacity-10 rounded-full blur-3xl" />
      
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6651A] opacity-10 rounded-full blur-3xl" />
      
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20" ref={ref}>
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-[#0D156B] mb-4" style={{ fontFamily:'Brasika' }}>
            Dos formas de{' '}
            <span className="text-[#E6651A]">ahorrar</span>
          </h2>
          <p className="text-xl text-gray-700" style={{ fontFamily:'CalpsSansLight', fontSize:'1.6rem' }}>
            Elige la opción que mejor se adapte a ti
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Header with gradient */}
                <div
                  className={`bg-gradient-to-r ${solution.gradient} p-8 relative overflow-hidden`}
                >
                  {/* Animated background circles */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2"
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg relative z-10"
                  >
                    <solution.icon size={32} style={{ color: solution.color }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl text-white mb-2 relative z-10" style={{ fontFamily:'Brasika' }}>
                    {solution.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily:'CalpsSansLight', fontSize:'1.5em' }}>
                    {solution.description}
                  </p>

                  {/* Checks List */}
                  <div className="space-y-3">
                    {solution.checks.map((check, checkIndex) => (
                      <motion.div
                        key={checkIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + checkIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: solution.color }}
                        >
                          <Check size={14} className="text-white" />
                        </motion.div>
                        <p className="text-gray-700 group-hover/item:text-[#0D156B] transition-colors duration-300"
                           style={{ fontFamily:'CalpsSansLight', fontSize:'1.2em' }}
                        >
                          {check}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 rounded-xl text-white transition-all duration-300 shadow-md hover:shadow-xl"
                    style={{ backgroundColor: solution.color, fontFamily:'Brasika' }}
                  >
                    Explorar opciones
                  </motion.button>
                </div>

                {/* Animated border on hover */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                  style={{ backgroundColor: solution.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-700" style={{ fontFamily:'CalpsSans', fontSize:'1.5em' }}>
            ¿No sabes cuál elegir?{' '}
            <span className="text-[#E6651A]">¡Prueba ambas opciones!</span>
          </p>
        </motion.div>
      </div>

      {/* Parallax elements */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-40 left-10 text-6xl opacity-20 hidden lg:block"
      >
        🎁
      </motion.div>

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-40 right-10 text-6xl opacity-20 hidden lg:block"
      >
        📋
      </motion.div>
    </section>
  );
}