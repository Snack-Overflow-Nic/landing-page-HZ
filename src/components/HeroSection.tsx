import { motion } from 'framer-motion';
import { Download, Store } from 'lucide-react';
import { HartaZoneText } from './HartaZoneText';
import { HzAmarillo } from './static/icons/Icons_HZ';
import { HzNaranja } from './static/icons/Icons_HZ';
import { AnimatedCircles } from './backgrounds/AnimatedCircles';
import { WaveBackground } from './backgrounds/WaveBackground';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-animated-bg"
    >
      <WaveBackground />
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-[#E6651A] rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFCD59] rounded-full opacity-20 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl leading-tight"
              style={{ fontFamily: 'Brasika' }}
            >
              En Hartazone{' '}
              <span className="text-[#FFCD59]">no se pierde</span>,{' '}
              <span>se saborea</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-200"
              style={{ fontFamily: 'CalpsSans' }}
            >
              Conectamos restaurantes con consumidores para rescatar alimentos de
              calidad que no se vendieron, ofreciéndolos a precios increíbles
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 205, 89, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFCD59] text-[#0D156B] px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#E6651A] hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'CalpsSans' }}
              >
                <Download size={20} />
                Descarga la App
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-morphism text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-[#0D156B] transition-all duration-300"
                style={{ fontFamily: 'CalpsSans' }}
              >
                <Store size={20} />
                Registra tu Negocio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Placeholder for image/illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              {/* Placeholder for hero image/illustration */}
              <div className="glass-morphism rounded-3xl p-8 aspect-square flex items-center justify-center max-w-[30rem] mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-[#E6651A] to-[#FFCD59] rounded-2xl flex items-center justify-center p-4 relative overflow-hidden">
                  <AnimatedCircles />
                  <div className="relative z-10">
                    <HartaZoneText width={280} height={280} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-5 glass-morphism rounded-2xl p-4 z-20"
            >
              <HzAmarillo width={48} height={48} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-5 glass-morphism rounded-2xl p-4 z-20"
            >
              <HzNaranja width={48} height={48} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}