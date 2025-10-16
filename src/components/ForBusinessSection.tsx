import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, Users, Leaf, Store, PhoneCall, MailCheckIcon } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArturitoCell } from './static/icons/Arturito_cell';
import { AnimatedCircles } from './backgrounds/AnimatedCircles';
import { AuroraBackground } from './backgrounds/AuroraBackground';
import { BusinessRegistrationModal } from './BusinessRegistrationModal';

export function ForBusinessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: DollarSign,
      title: 'Monetiza Excedentes',
      description: 'Convierte alimentos que no se vendieron en ingresos adicionales',
      color: '#FFCD59',
    },
    {
      icon: TrendingDown,
      title: 'Reduce costos',
      description: 'Disminuye pérdidas por desperdicio y mejora tu rentabilidad',
      color: '#E6651A',
    },
    {
      icon: Users,
      title: 'Atrae nuevos clientes',
      description: 'Llega a consumidores conscientes que valoran la sostenibilidad',
      color: '#FFCD59',
    },
    {
      icon: Leaf,
      title: 'Impacto Positivo',
      description: 'Contribuye a la sostenibilidad y mejora tu imagen de marca',
      color: '#E6651A',
    },
  ];

  return (
    <section
      id="negocios"
      className="py-20 bg-gradient-to-br from-[#0D156B] via-[#1a2380] to-[#0D156B] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <AuroraBackground />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#FFCD59] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#E6651A] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Title */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl text-white mb-4"
                style={{ fontFamily:'Brasika' }}
              >
                ¿Tienes un negocio de{' '}
                <span className="text-[#FFCD59]">comida</span>?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-300"
                style={{ fontFamily:"CalpsSans" }}
              >
                Únete a HartaZone y transforma tus excedentes en ingresos mientras
                reduces el desperdicio
              </motion.p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                  className="glass-morphism rounded-2xl p-6 hover:bg-white hover:bg-opacity-20 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                    style={{ backgroundColor: benefit.color }}
                  >
                    <benefit.icon size={24} className="text-white" />
                  </motion.div>
                  <h3
                    className="text-xl mb-2"
                    style={{ color: benefit.color, fontFamily:"Brasika" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed" 
                     style={{ fontFamily:"CalpsSansLight", fontSize: '1.2rem' }}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(255, 205, 89, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FFCD59] text-[#0D156B] px-10 py-4 rounded-full flex items-center gap-2 hover:bg-[#E6651A] hover:text-white transition-colors duration-300 shadow-xl"
            >
              <MailCheckIcon size={20} />
              <span className="text-lg" style={{ fontFamily:"CalpsSans" }}>Contactanos</span>
            </motion.button>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="glass-morphism rounded-3xl p-8 relative z-10 "
            >
              <div className="aspect-square bg-gradient-to-br from-[#E6651A] to-[#FFCD59] rounded-2xl flex flex-col items-center justify-center p-8 space-y-6 relative overflow-hidden">
                <AnimatedCircles />
                <motion.div
                  animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10"
                >
                    
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <ArturitoCell width={350} height={280} />
                    </div>
                  
                </motion.div>
                <div className="text-center text-white space-y-2" style={{ fontFamily: 'Brasika' }}>
                  <p className="text-3xl text-[#0D156B]">
                    Suma 
                    <span className='text-[#fff]'> tu negocio</span> 
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating stats cards */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -right-6 glass-morphism rounded-2xl p-4 z-20"
            >
              <div className="text-center">
                <p className="text-3xl text-[#FFCD59]" style={{ fontFamily:"Brasika" }}>50%+</p>
                <p className="text-sm text-white" style={{ fontFamily:"CalpsSansLight" }}>Más ingresos</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -left-6 glass-morphism rounded-2xl p-4 z-20"
            >
              <div className="text-center">
                <p className="text-3xl text-[#E6651A]" style={{ fontFamily:"Brasika" }}>-80%</p>
                <p className="text-sm text-white" style={{ fontFamily:"CalpsSansLight" }}>Desperdicio</p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-[#FFCD59] border-opacity-20 rounded-full -z-10"
            />
          </motion.div>
        </div>

        {/* Bottom info strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass-morphism rounded-2xl p-8 text-center"
          style={{ fontFamily:"Brasika" }}
        >
          <p className="text-white text-xl">
            Restaurantes, cafeterías y panaderías marcan la diferencia con HartaZone
          </p>
        </motion.div>
      </div>

      {/* Parallax floating elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-40 right-20 text-6xl opacity-20 hidden lg:block"
      >
        🍰
      </motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-40 left-20 text-6xl opacity-20 hidden lg:block"
      >
        ☕
      </motion.div>

      {/* Modal de Registro */}
      <BusinessRegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}