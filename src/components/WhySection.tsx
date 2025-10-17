import { motion } from 'framer-motion';
import { DollarSign, Clock, MapPin, ShieldCheck, CheckCircle, Heart } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const reasons = [
    {
      icon: DollarSign,
      title: 'Precios Reducidos',
      description: 'Ahorra hasta un 50% en comida de calidad',
      color: '#FFCD59',
    },
    {
      icon: Clock,
      title: 'Horario Flexible',
      description: 'Recoge tu comida en el horario que mejor te convenga',
      color: '#E6651A',
    },
    {
      icon: MapPin,
      title: 'Geolocalización',
      description: 'Encuentra restaurantes cerca de ti fácilmente',
      color: '#FFCD59',
    },
    {
      icon: ShieldCheck,
      title: 'Reserva Segura',
      description: 'Código de seguridad para cada reserva',
      color: '#E6651A',
    },
    {
      icon: CheckCircle,
      title: 'Calidad Garantizada',
      description: 'Alimentos frescos de establecimientos verificados',
      color: '#FFCD59',
    },
    {
      icon: Heart,
      title: 'Responsabilidad Social',
      description: 'Contribuye a reducir el desperdicio alimentario',
      color: '#E6651A',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCD59] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6651A] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          style={{ fontFamily:'Brasika' }}
        >
          <h2 className="text-4xl md:text-5xl text-[#0D156B] mb-4">
            ¿Por qué elegir{' '}
            <span className="text-[#E6651A]">Hartazone</span>?
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="glass-morphism-dark bg-white rounded-2xl p-6 h-full border-2 border-gray-100 hover:border-opacity-0 hover:shadow-xl transition-all duration-300">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md"
                  style={{ backgroundColor: reason.color }}
                >
                  <reason.icon size={28} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl text-[#0D156B] mb-2"
                    style={{ fontFamily: 'Brasika' }}
                  >
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed"
                   style={{ fontFamily: 'CalpsSans' }}
                >
                  {reason.description}
                </p>

                {/* Animated border on hover */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl origin-left"
                  style={{ backgroundColor: reason.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="inline-block text-[#0D156B] text-xl px-8 py-4 rounded-full glass-morphism-dark bg-gray-50"
            style={{ fontFamily: 'CalpsSans' }}
          >
            Apoya contra el desperdicio de alimentos
          </motion.p>
        </motion.div>
      </div>

      {/* Parallax Decorative Elements */}
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
        className="absolute top-40 left-10 text-5xl opacity-10 hidden lg:block"
      >
        ⭐
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-40 right-10 text-5xl opacity-10 hidden lg:block"
      >
        💚
      </motion.div>
    </section>
  );
}
