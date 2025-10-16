import { motion, useInView } from 'framer-motion';
import { AlertTriangle, TrendingDown, CheckCircle } from 'lucide-react';
import { useRef } from 'react';
import { AuroraBackground } from './backgrounds/AuroraBackground';

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cards = [
    {
      icon: AlertTriangle,
      highlightText: '1.3 mil millones de toneladas',
      restText: 'de alimentos se desperdician globalmente cada año.',
      color: '#E6651A',
    },
    {
      icon: TrendingDown,
      highlightText: '33% de la producción',
      restText: 'de alimentos termina en la basura sin ser consumida',
      color: '#FFCD59',
    },
    {
      icon: CheckCircle,
      highlightText: 'HartaZone actúa',
      restText: 'Rescatamos alimentos de calidad antes de que se desperdicien',
      color: '#0D156B',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0D156B] to-[#1a2380] relative overflow-hidden">
      {/* Animated Background */}
      <AuroraBackground />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#E6651A] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ fontFamily:'Brasika' }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            El problema que{' '}
            <span className="text-[#FFCD59]">enfrentamos</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="glass-morphism rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300">
                {/* Icon with animation */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg"
                  style={{ backgroundColor: card.color }}
                >
                  <card.icon size={36} className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <p
                    className="text-2xl md:text-2xl"
                    style={{ color: card.color === '#0D156B' ? '#FFCD59' : card.color, fontFamily: 'Brasika' }}
                  >
                    {card.highlightText}
                  </p>
                  <p className="text-white text-lg leading-relaxed"
                     style={{ fontFamily:'CalpsSansLight' }}
                  >
                    {card.restText}
                  </p>
                </div>

                {/* Hover effect border */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-3xl border-2 pointer-events-none"
                  style={{ borderColor: card.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block glass-morphism rounded-full px-8 py-4"
            style={{ fontFamily:'CapsSans' }}
          >
            <p className="text-[#FFCD59] text-xl" style={{ fontFamily:'CalpsSans' }}>
              Es momento de actuar y hacer la diferencia juntos
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 left-10 text-6xl opacity-20 hidden lg:block"
      >
        🌍
      </motion.div>
    </section>
  );
}