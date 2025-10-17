import { AnimatePresence, motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArturitoGesto1 } from './static/icons/Icons_HZ';
import { HzNaranja } from './static/icons/Icons_HZ';
import { ArturitoGesto2 } from './static/icons/Icons_HZ';
import screenshot1 from './static/assets/i1.webp';
import screenshot2 from './static/assets/i2.webp';
import screenshot3 from './static/assets/i3.webp';
import screenshot4 from './static/assets/i4.webp';

const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4];

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

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
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Main CTA Content */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl text-[#0D156B] leading-tight"
              style={{fontFamily:'Brasika' }}
            >
              Descarga{' '}
              <span className="text-[#E6651A]">HartaZone</span> y apoya a la
              revolución contra el{' '}
              <span className="text-[#FFCD59]">desperdicio alimentario</span>
            </motion.h2>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-morphism-dark bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg border-2 border-gray-100"
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
                className="w-full sm:w-auto bg-[#E6651A] text-white px-6 py-3 rounded-full flex items-center justify-center gap-3 hover:bg-[#FFCD59] hover:text-[#0D156B] transition-colors duration-300 shadow-xl"
              >
                <Smartphone size={24} />
                <div className="text-left" style={{ fontFamily:'CalpsSans' }}>
                  <p className="text-xs opacity-90">Descárgalo en</p>
                  <p className="text-lg">Google Play</p>
                </div>
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
              <div className="bg-gradient-to-br from-[#0D156B] to-[#1a2380] rounded-[2rem] p-3 shadow-2xl w-[18rem] sm:w-[20rem] md:w-[22rem] mx-auto">
                <div className="bg-white rounded-[2rem] aspect-[9/16] relative overflow-hidden">
                  {/* Phone screen content */}
                  <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={screenshots[currentScreenshot]}
                        src={screenshots[currentScreenshot]}
                        alt="Vista previa de HartaZone"
                        className="h-full w-full object-cover"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                      />
                    </AnimatePresence>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
                  </div>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
                    {screenshots.map((_, index) => (
                      <span
                        key={index}
                        className={`h-1.5 w-6 rounded-full transition-all duration-500 ${
                          index === currentScreenshot ? 'bg-white/90' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
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
