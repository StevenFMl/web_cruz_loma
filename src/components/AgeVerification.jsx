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
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0c0807]/85 backdrop-blur-md"
        >
          {/* Halo cálido tras el panel */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] rounded-full bg-[#c4892b]/[0.06] blur-[140px]" />
          </div>

          <motion.div
            initial={{ scale: 0.97, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, y: -10, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg flex flex-col items-center text-center px-8 sm:px-14 py-12 sm:py-16 bg-[#1a1512]/90 border border-white/[0.06] rounded-[2px] backdrop-blur-xl shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]"
          >
            {/* Esquinas decorativas finísimas */}
            <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#c4892b]/40" />
            <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#c4892b]/40" />
            <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#c4892b]/40" />
            <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#c4892b]/40" />

            {/* Logo */}
            <div className="relative flex justify-center w-full h-28 sm:h-36 md:h-44 mb-4 pointer-events-none">
              <img
                src="/logo-cruz-loma.svg"
                alt="Cruz Loma"
                className="absolute top-1/2 left-[52%] sm:left-[51%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[460px] md:w-[620px] max-w-none object-contain"
              />
            </div>

            {/* Eyebrow */}
            <span className="block text-[10px] tracking-[0.5em] uppercase text-[#c4892b] font-medium mb-6">
              Verificación de Edad
            </span>

            {/* Hairline */}
            <span className="block w-12 h-px bg-[#c4892b]/40 mb-8" />

            {/* Pregunta — display serif, peso ligero, generoso */}
            <h2 className="font-display text-2xl sm:text-3xl text-[#f1e8d6] leading-snug tracking-tight mb-3">
              ¿Tienes la edad legal para
              <span className="font-display-italic text-[#e0a85a]"> consumir alcohol</span>?
            </h2>

            <p className="text-[13px] text-[#a89b85] leading-relaxed tracking-wide max-w-sm mx-auto mb-12">
              Por favor, confirma que cumples con la edad mínima de consumo en tu país de residencia.
            </p>

            {/* Botones — tipográficos, sin gradientes */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleYes}
                className="group relative px-10 py-4 text-[11px] font-semibold tracking-[0.3em] text-[#1a1512] uppercase bg-[#e0a85a] hover:bg-[#f1e8d6] border border-[#e0a85a] hover:border-[#f1e8d6] transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">Sí, soy mayor</span>
                <span className="absolute inset-0 bg-[#f1e8d6] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </button>
              <button
                onClick={handleNo}
                className="px-10 py-4 text-[11px] font-semibold tracking-[0.3em] uppercase border border-white/15 text-[#a89b85] hover:text-[#f1e8d6] hover:border-white/30 transition-all duration-500"
              >
                No, salir
              </button>
            </div>

            <div className="mt-12 pt-8 w-full border-t border-white/[0.06]">
              <p className="text-[9px] text-[#7a6e5b] uppercase tracking-[0.4em] leading-relaxed">
                Disfruta con responsabilidad
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
