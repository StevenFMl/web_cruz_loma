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
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: -20, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md p-10 text-center bg-[#1a1512] border-2 border-[#d97706]/20 rounded-sm relative shadow-2xl"
            style={{
               backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z\\' fill=\\'%23d97706\\' fill-opacity=\\'0.02\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')"
            }}
          >
            {/* Ornate Top Divider */}
            <div className="flex items-center justify-center gap-4 mb-6 opacity-60">
               <div className="w-12 h-px bg-[#d97706]"></div>
               <svg className="w-4 h-4 text-[#4d7c0f]" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /> {/* Placeholder hop shape */}
               </svg>
               <div className="w-12 h-px bg-[#d97706]"></div>
            </div>
            
            <h2 className="mb-2 text-4xl sm:text-5xl text-[#d97706] font-vintage drop-shadow-md">
              CRUZ LOMA
            </h2>
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[#4d7c0f] font-sans font-medium">
              Cerveza Artesanal
            </p>
            
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
