import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Clock, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AuroraBackground } from './backgrounds/AuroraBackground';

export function ManualSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: Search,
      title: 'Descubre ofertas cerca de ti',
      description:
        'Encuentra tu restaurante favorito, filtra por tipo de comida, distancia y precio',
      color: '#FFCD59',
      emoji: '🔍',
    },
    {
      icon: ShoppingBag,
      title: 'Reserva tu pack o plato',
      description: 'Elige y reserva entre packs sorpresa u ofertas específicas',
      color: '#E6651A',
      emoji: '🛒',
    },
    {
      icon: Clock,
      title: 'Recoge en el horario indicado',
      description:
        'Al momento de retirar en el lugar de la reserva, muestra tu código de seguridad y saborea tu retiro.',
      color: '#FFCD59',
      emoji: '⏰',
    },
    {
      icon: Sparkles,
      title: 'Disfruta y ayuda al planeta',
      description:
        '¡A disfrutar tu comida! Has ahorrado dinero, probado algo delicioso y contribuido a reducir el desperdicio alimentario.',
      color: '#E6651A',
      emoji: '✨',
    },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section
      id="manual"
      className="py-20 bg-gradient-to-br from-[#0D156B] to-[#1a2380] relative overflow-hidden"
    >
      <AuroraBackground />
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#FFCD59] opacity-10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'Brasika' }}>
            ¿Cómo usar{' '}
            <span className="text-[#FFCD59]">Harta-Zone</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'CalpsSans', fontSize:'1.6rem' }}>
            Cuatro pasos simples para disfrutar comida deliciosa, ahorrar dinero y
            ayudar al planeta
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto">
          {/* Step Indicators */}
          <div className="flex justify-center items-center gap-2 mb-8">
            {steps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentStep(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep ? 'w-12 bg-[#FFCD59]' : 'w-2 bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Carousel Content */}
          <div className="relative min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="glass-morphism rounded-3xl p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left: Icon and Step Number */}
                    <div className="flex flex-col items-center justify-center space-y-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay: 0.2,
                        }}
                        className="relative"
                      >
                        <div
                          className="w-40 h-40 rounded-full flex items-center justify-center shadow-2xl"
                          style={{ backgroundColor: steps[currentStep].color }}
                        >
                          <span className="text-7xl">
                            {steps[currentStep].emoji}
                          </span>
                        </div>
                        {/* Step Number Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 }}
                          className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                        >
                          <span className="text-[#0D156B] text-xl">
                            {currentStep + 1}
                          </span>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Right: Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-4"
                    >
                      <h3
                        className="text-3xl md:text-4xl"
                        style={{ color: steps[currentStep].color, fontFamily: 'Brasika' }}
                      >
                        {steps[currentStep].title}
                      </h3>
                      <p className="text-white text-lg leading-relaxed" style={{ fontFamily: 'CalpsSansLight', fontSize:'1.4rem' }}>
                        {steps[currentStep].description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevStep}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#FFCD59] transition-colors duration-300"
            >
              <ChevronLeft size={24} className="text-[#0D156B]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextStep}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#FFCD59] transition-colors duration-300"
            >
              <ChevronRight size={24} className="text-[#0D156B]" />
            </motion.button>
          </div>

          {/* Step Labels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-4 gap-4"
          >
            {steps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentStep(index)}
                whileHover={{ scale: 1.05 }}
                className={`p-3 rounded-xl text-center transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-white text-[#0D156B]'
                    : 'glass-morphism text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                <step.icon size={20} className="mx-auto mb-1" />
                <p className="text-xs hidden md:block" style={{ fontFamily:'CalpsSans' }}>{step.title.split(' ')[0]}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating decorations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 text-6xl opacity-20 hidden lg:block"
      >
        📱
      </motion.div>
    </section>
  );
}