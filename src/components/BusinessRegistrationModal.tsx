import { motion, AnimatePresence } from 'framer-motion';
import { X, Store, Mail, User, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

interface BusinessRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BusinessRegistrationModal({ isOpen, onClose }: BusinessRegistrationModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Resetear después de 2 segundos
    setTimeout(() => {
      setFormData({ nombre: '', correo: '', mensaje: '' });
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con gradiente */}
              <div className="bg-gradient-to-r from-[#0D156B] to-[#1a2380] p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCD59] rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#E6651A] rounded-full blur-3xl" />
                </div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-12 h-12 bg-[#FFCD59] rounded-xl flex items-center justify-center shadow-lg"
                    >
                      <Store className="text-[#0D156B]" size={24} />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl text-white" style={{ fontFamily:'CalpsSans' }}>
                        Contáctanos
                      </h2>
                      <p className="text-gray-300 text-sm" style={{ fontFamily:'CalpsSansLight', fontSize:'1rem' }}>Únete a Harta-Zone</p>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="text-white hover:text-[#FFCD59] transition-colors duration-200"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
              </div>

              {/* Form */}
              <div className="p-6">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nombre */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="nombre" className="block text-sm mb-2 text-[#0D156B]" style={{ fontFamily:'CalpsSans', fontSize:'1.1rem' }}>
                        Nombre del Negocio
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFCD59] focus:outline-none transition-colors duration-200"
                          placeholder="Ej: Restaurante La Esquina"
                          style={{ fontFamily:'CalpsSansLight' }}
                        />
                      </div>
                    </motion.div>

                    {/* Correo */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="correo" className="block text-sm mb-2 text-[#0D156B]" style={{ fontFamily:'CalpsSans', fontSize:'1.1rem' }}>
                        Correo Electrónico
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="email"
                          id="correo"
                          name="correo"
                          value={formData.correo}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFCD59] focus:outline-none transition-colors duration-200"
                          placeholder="negocio@ejemplo.com"
                          style={{ fontFamily:'CalpsSansLight'}}
                        />
                      </div>
                    </motion.div>

                    {/* Mensaje */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="mensaje" className="block text-sm mb-2 text-[#0D156B]" style={{ fontFamily:'CalpsSans', fontSize:'1.1rem' }}>
                        Mensaje
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          value={formData.mensaje}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFCD59] focus:outline-none transition-colors duration-200 resize-none"
                          placeholder="Cuéntanos sobre tu negocio..."
                          style={{ fontFamily:'CalpsSansLight' }}
                        />
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#E6651A] to-[#FFCD59] text-white py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontFamily:'CalpsSans'}}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Enviar Solicitud
                        </>
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <motion.svg
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="w-10 h-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                    </motion.div>
                    <h3 className="text-2xl text-[#0D156B] mb-2" style={{ fontFamily:'CalpsSans' }}>¡Solicitud Enviada!</h3>
                    <p className="text-gray-600" style={{ fontFamily:'CalpsSansLight' }}>Nos pondremos en contacto contigo pronto.</p>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center" style={{ fontFamily:'CalpsSans', fontSize:'1rem' }}>
                  Al enviar este formulario, aceptas que Harta-Zone se ponga en contacto contigo.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}