import { motion } from 'framer-motion';
import { Download, Store, Smartphone } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArturitoHH } from './static/icons/ArturitoH';
import { ArturitoGesto1 } from './static/icons/Icons_HZ';
import { HzNaranja } from './static/icons/Icons_HZ';
import { ArturitoGesto2 } from './static/icons/Icons_HZ';
import { AnimatedCircles } from './backgrounds/AnimatedCircles';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: '50%+', label: 'Ahorro' },
    { value: '100+', label: 'Restaurantes' },
    { value: '24/7', label: 'Disponible' },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0D156B]/5 to-[#E6651A]/5" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-10 right-10 w-64 h-64 bg-[#FFCD59] opacity-10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl text-[#0D156B] leading-tight"
              style={{fontFamily:'Brasika' }}
            >
              Descarga{' '}
              <span className="text-[#E6651A]">Harta-Zone</span> y únete a la
              revolución contra el{' '}
              <span className="text-[#FFCD59]">desperdicio alimentario</span>
            </motion.h2>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-morphism-dark bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-gray-100"
                >
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="text-3xl text-[#E6651A] mb-1"
                    style={{fontFamily:'Brasika' }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-700 text-sm" style={{ fontFamily:'CalpsSans' }}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {/* Google Play Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(230, 101, 26, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#E6651A] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#FFCD59] hover:text-[#0D156B] transition-colors duration-300 shadow-xl"
              >
                <Smartphone size={24} />
                <div className="text-left" style={{ fontFamily:'CalpsSans' }}>
                  <p className="text-xs opacity-90">Descárgalo en</p>
                  <p className="text-lg">Google Play</p>
                </div>
              </motion.button>

              {/* Register Business Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto glass-morphism-dark bg-white text-[#0D156B] px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#0D156B] hover:text-white transition-all duration-300 border-2 border-[#0D156B]"
                style={{ fontFamily:'CalpsSans' }}
              >
                <Store size={20} />
                Registra tu Negocio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Phone mockup placeholder */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              <div className="bg-gradient-to-br from-[#0D156B] to-[#1a2380] rounded-[3rem] p-4 shadow-2xl lg:w-[20rem] mx-auto">
                <div className="bg-white rounded-[2.5rem] aspect-[9/16] flex items-center justify-center relative overflow-hidden">
                  {/* Phone screen content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFCD59] to-[#E6651A] p-6 flex flex-col items-center justify-center">
                    <AnimatedCircles />
                    <div className="mb-2 z-10">
                      <ArturitoHH width={160} height={160} />
                    </div>
                    <p className="text-white text-2xl text-center" style={{ fontFamily:'Brasika' }}>Harta-Zone</p>
                    <p className="text-white text-sm mt-2 text-center" style={{ fontFamily:'CalpsSans', fontSize: '1.2rem'}}>
                      Tu app favorita
                    </p>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-[#0D156B] rounded-b-3xl z-20" />
                </div>
              </div>
            </motion.div>

            {/* Floating elements around phone */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-10 -left-10 glass-morphism-dark bg-white rounded-2xl p-4 shadow-xl z-20"
            >
              <ArturitoGesto2 width={48} height={48} />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-10 -right-10 glass-morphism-dark bg-white rounded-2xl p-4 shadow-xl z-20"
            >
              <ArturitoGesto1 width={48} height={48} />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 -right-16 glass-morphism-dark bg-white rounded-2xl p-4 shadow-xl z-20"
            >
              <HzNaranja width={48} height={48} />
            </motion.div>
          </motion.div>
        </div>

        {/* Additional CTA message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
          style={{ fontFamily:'Brasika' }}
        >
          <p className="text-xl text-gray-700">
            Únete a miles de usuarios que ya están ahorrando y ayudando al planeta
          </p>
        </motion.div>
      </div>

      {/* Parallax decorations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-10 text-6xl opacity-10 hidden lg:block"
      >
        📱
      </motion.div>
    </section>
  );
}
