import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgeVerification() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const isVerified = sessionStorage.getItem('ageVerifiedRustic');
    if (isVerified === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleYes = () => {
    sessionStorage.setItem('ageVerifiedRustic', 'true');
    setIsVisible(false);
  };

  const handleNo = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0a0604]/90 backdrop-blur-md"
        >
          {/* Halo cobre tras el panel */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] rounded-full bg-[#c8782a]/[0.08] blur-[140px]" />
          </div>

          <motion.div
            initial={{ scale: 0.96, y: 14, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.97, y: -8, opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg flex flex-col items-center text-center px-8 sm:px-14 py-12 sm:py-16 bg-kraft border-2 border-[#3a2b1f] rounded-[2px] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.85)]"
          >
            {/* Esquinas decorativas estilo etiqueta */}
            <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#c8782a]" />
            <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#c8782a]" />
            <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#c8782a]" />
            <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#c8782a]" />

            {/* Logo */}
            <div className="relative flex justify-center w-full h-28 sm:h-36 md:h-44 mb-6 pointer-events-none">
              <img
                src="/logo-cruz-loma.svg"
                alt="Cruz Loma"
                className="absolute top-1/2 left-[52%] sm:left-[51%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[460px] md:w-[620px] max-w-none object-contain"
              />
            </div>

            {/* Eyebrow mono */}
            <span className="block font-mono text-[10px] tracking-[0.45em] uppercase text-[#c8782a] font-bold mb-6">
              Verificación de Edad
            </span>

            {/* Hairline */}
            <span className="block w-12 h-px bg-[#c8782a]/60 mb-8" />

            {/* Pregunta — slab serif con peso */}
            <h2 className="font-slab text-2xl sm:text-3xl text-[#ede0c4] leading-[1.2] mb-4">
              ¿Tienes la edad legal para
              <span className="block text-[#c8782a] mt-1">consumir alcohol?</span>
            </h2>

            <p className="text-[13.5px] text-[#b8a786] leading-relaxed max-w-sm mx-auto mb-12">
              Por favor, confirma que cumples con la edad mínima de consumo en tu país de residencia.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleYes}
                className="group relative px-10 py-4 font-condensed text-xs tracking-[0.35em] text-[#1a1410] uppercase font-bold bg-[#c8782a] hover:bg-[#ede0c4] border-2 border-[#823914] hover:border-[#5a280f] transition-all duration-700 overflow-hidden"
              >
                <span className="relative z-10">Sí, soy mayor</span>
              </button>
              <button
                onClick={handleNo}
                className="px-10 py-4 font-condensed text-xs tracking-[0.35em] uppercase font-bold border-2 border-[#3a2b1f] text-[#b8a786] hover:text-[#ede0c4] hover:border-[#c8782a]/60 transition-all duration-700"
              >
                No, salir
              </button>
            </div>

            <div className="mt-12 pt-8 w-full border-t border-[#3a2b1f]">
              <p className="font-mono text-[9px] text-[#8a7a5e] uppercase tracking-[0.4em] leading-relaxed">
                Disfruta con responsabilidad
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
