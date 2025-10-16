import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
  BarChart3,
  Target,
  Zap,
  Heart,
  ShoppingBag
} from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AuroraBackground } from './backgrounds/AuroraBackground';
import {
    PanaderiaIcon, CupcakeIcon, Prot8nClubIcon, PanRepoIcon, CaracenaIcon
} from './static/icons/Icons_HZ';

export function TestimonialsMetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<'metricas' | 'testimonios'>('metricas');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const metrics = [
    {
      icon: Sparkles,
      percentage: '60%',
      label: 'Pioneros en Nicaragua',
      description: 'No conocían plataformas similares',
      color: '#FFCD59',
    },
    {
      icon: TrendingUp,
      percentage: '80%',
      label: 'Alto Interés',
      description: '8 de cada 10 locales quieren unirse',
      color: '#E6651A',
    },
    {
      icon: Users,
      percentage: '100%',
      label: 'Atraer Clientes',
      description: 'Todos buscan nuevos consumidores',
      color: '#FFCD59',
    },
    {
      icon: DollarSign,
      percentage: '70%',
      label: 'Recuperar Costos',
      description: 'Monetizar excedentes de producción',
      color: '#E6651A',
    },
    {
      icon: Heart,
      percentage: '40%',
      label: 'Reducir Desperdicio',
      description: 'Compromiso con el medio ambiente',
      color: '#FFCD59',
    },
    {
      icon: Clock,
      percentage: '70%',
      label: 'Horario Flexible',
      description: 'Tu horario, tus reglas',
      color: '#E6651A',
    },
  ];

  const testimonials = [
    {
      business: 'Panadería_Racachaca',
      quote: 'Nos interesa mostrar foto del producto; eso atrae al cliente.',
      category: 'UI / Catálogo Visual',
      icon: PanaderiaIcon,
    },
    {
      business: 'La_Quequería',
      quote: 'Movimiento de productos, ventas… eso nos ayuda a medir resultados.',
      category: 'Analítica / Beneficios',
      icon: CupcakeIcon,
    },
    {
      business: 'Prote8n Club Ignite',
      quote: 'Trabajar con redes sociales sería clave para llegar a más personas.',
      category: 'Integraciones Sociales',
      icon: Prot8nClubIcon,
    },
    {
      business: 'PENIEL Panadería y Repostería',
      quote: 'Queremos estadísticas de los productos vendidos.',
      category: 'Gestión Inteligente',
      icon: PanRepoIcon,
    },
    {
      business: 'La_Caraceña',
      quote: 'No hay ninguna preocupación logística.',
      category: 'Facilidad de Uso',
      icon: CaracenaIcon,
    },
  ];

  const benefits = [
    {
      icon: ShoppingBag,
      title: 'Más Clientes',
      stat: '100%',
      description: 'de negocios buscan atraer nuevos consumidores',
    },
    {
      icon: DollarSign,
      title: 'Recuperar Costos',
      stat: '70%',
      description: 'quiere monetizar excedentes',
    },
    {
      icon: Target,
      title: 'Menos Desperdicio',
      stat: '40%',
      description: 'comprometidos con reducir basura',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-[#0D156B] relative overflow-hidden">
      {/* Aurora Background */}
      <AuroraBackground />
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFCD59] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#E6651A] opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-white mb-4" style={{ fontFamily:'Brasika' }}>
            Los <span className='text-[#E6651A]'>Números</span> Hablan
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" style={{ fontFamily:'CalpsSans', fontSize:'1.6rem' }}>
            Descubre por qué los negocios nicaragüenses confían en nosotros
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white/10 backdrop-blur-md rounded-full p-2 gap-2">
            <button
              onClick={() => setActiveTab('metricas')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'metricas'
                  ? 'bg-[#FFCD59] text-[#0D156B]'
                  : 'text-white hover:bg-white/10'
              }`}
              style={{ fontFamily:'CalpsSans' }}
            >
              Métricas Clave
            </button>
            <button
              onClick={() => setActiveTab('testimonios')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'testimonios'
                  ? 'bg-[#FFCD59] text-[#0D156B]'
                  : 'text-white hover:bg-white/10'
              }`}
              style={{ fontFamily:'CalpsSans' }}
            >
              Testimonios
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'metricas' ? (
            <motion.div
              key="metricas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Big Stats */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-[#FFCD59] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#FFCD59] to-[#E6651A] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="text-[#0D156B]" size={28} />
                      </div>
                      <div className="flex-1">
                        <div className="text-4xl text-[#FFCD59] mb-2" style={{ fontFamily:'Brasika' }}>{benefit.stat}</div>
                        <h3 className="text-2xl text-white mb-2" style={{ fontFamily:'CalpsSansLight' }}>{benefit.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-300" style={{ fontFamily:'CalpsSansLight', fontSize:'1.2rem' }}>{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Detailed Metrics Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: '0 20px 40px rgba(255, 205, 89, 0.3)',
                    }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${metric.color}40` }}
                      >
                        <metric.icon style={{ color: metric.color }} size={24} />
                      </motion.div>
                      <div className="text-3xl text-white group-hover:scale-110 transition-transform duration-300"
                        style={{ fontFamily:'Brasika' }}>
                        {metric.percentage}
                      </div>
                    </div>
                    <h4 className="text-2xl text-white mb-2" style={{ fontFamily:'CalpsSansLight' }}>{metric.label}</h4>
                    <p className="text-gray-400 text-sm text-xl" style={{ fontFamily:'CalpsSansLight' }}>{metric.description}</p>
                  </motion.div>
                ))}
              </div>

              
            </motion.div>
          ) : (
            <motion.div
              key="testimonios"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {/* Testimonial Carousel */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 relative"
                  >
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      className="absolute -top-6 left-12 w-16 h-16 bg-[#FFCD59] rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Quote className="text-[#0D156B]" size={32} />
                    </motion.div>

                    {/* Emoji */}
                    <div className="flex items-center justify-center mb-6">
                      {(() => {
                        const Icon = testimonials[currentTestimonial].icon as any;
                        return <Icon width={96} height={96} className="mx-auto" />;
                      })()}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-3xl text-white text-center mb-6 italic" style={{ fontFamily:'CalpsSansLight' }}>
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>

                    {/* Business Info */}
                    <div className="text-center">
                      <div className="text-2xl text-[#FFCD59] mb-2" style={{ fontFamily:'CalpsSansLight' }}>
                        {testimonials[currentTestimonial].business}
                      </div>
                      <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm text-gray-300" style={{ fontFamily:'CalpsSans' }}>
                        {testimonials[currentTestimonial].category}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#FFCD59] hover:text-[#0D156B] transition-all duration-300 border border-white/20"
                  >
                    <ChevronLeft size={24} />
                  </motion.button>

                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentTestimonial
                            ? 'w-8 h-3 bg-[#FFCD59]'
                            : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#FFCD59] hover:text-[#0D156B] transition-all duration-300 border border-white/20"
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </div>
              </div>

              {/* All Testimonials Grid (Preview) */}
              <div className="grid md:grid-cols-5 gap-4 mt-12">
                {testimonials.map((testimonial, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-[#FFCD59] text-[#0D156B]'
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-2">
                      {(() => {
                        const Icon = testimonial.icon as any;
                        return <Icon width={48} height={48} className="mx-auto" />;
                      })()}
                    </div>
                    <div className="text-2xs" style={{ fontFamily:'CalpsSansLight' }}>{testimonial.business.split(' ')[0]}</div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}