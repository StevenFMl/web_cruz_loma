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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-md p-6 sm:p-10 flex flex-col items-center text-center bg-[#1a1512] border-2 border-[#d97706]/20 rounded-sm relative shadow-2xl will-change-transform"
            style={{
               backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z\\' fill=\\'%23d97706\\' fill-opacity=\\'0.02\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')"
            }}
          >
            {/* Logo */}
            <div className="relative flex justify-center w-full h-40 sm:h-56 mb-8 mt-2 pointer-events-none">
              <img 
                src="/logo-cruz-loma.svg" 
                alt="Cruz Loma Logo" 
                className="absolute top-1/2 left-[52%] sm:left-[51%] -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[750px] md:w-[900px] max-w-none object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
            </div>
            
            <p className="mb-10 text-base text-gray-300 font-sans tracking-wide leading-relaxed">
              ¿Eres mayor de edad para consumir alcohol en tu país de residencia?
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={handleYes}
                className="px-8 py-3 text-sm font-semibold tracking-widest text-[#1a1512] uppercase transition-all duration-300 bg-[#d97706] border border-[#d97706] hover:bg-amber-500 hover:shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:-translate-y-1"
              >
                Sí, Confirmar
              </button>
              <button
                onClick={handleNo}
                className="px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-300 border border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-white/5"
              >
                No, Salir
              </button>
            </div>
            
            <p className="mt-8 pt-6 border-t border-white/5 text-[10px] text-gray-500 font-sans uppercase tracking-widest mx-auto">
              Disfruta con responsabilidad
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
