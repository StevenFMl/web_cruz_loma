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

  useEffect(() => {
    if (isVisible && isMounted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isVisible, isMounted]);

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
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-carbon/80 backdrop-blur-3xl"
          style={{ WebkitBackdropFilter: 'blur(40px)' }}
        >
          {/* Editorial cross-hairs — magazine print marks */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
            <span className="absolute top-8 left-8 text-[9px] font-mono tracking-[0.4em] uppercase text-bone/25">EST · 2.964 m.s.n.m.</span>
            <span className="absolute top-8 right-8 text-[9px] font-mono tracking-[0.4em] uppercase text-bone/25">Nº 01</span>
            <span className="absolute bottom-8 left-8 text-[9px] font-mono tracking-[0.4em] uppercase text-bone/25">Mitad del Mundo</span>
            <span className="absolute bottom-8 right-8 text-[9px] font-mono tracking-[0.4em] uppercase text-bone/25">Cruz Loma</span>
          </div>

          <motion.div
            initial={{ scale: 0.96, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.97, y: -8, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-md will-change-transform"
          >
            {/* Outer copper hairlines — bottle-label seal */}
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper to-transparent" />
            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper to-transparent" />

            <div
              className="relative bg-asphalt/95 border-x border-copper/10"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='lbl'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.05 0 0 0 0 0.04 0 0 0 0 0.03 0 0 0 0.4 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23lbl)'/%3E%3C/svg%3E\")",
                backgroundBlendMode: 'overlay',
              }}
            >
              {/* Inner frame — etched into the label */}
              <div className="m-3 sm:m-4 border border-copper/20 px-6 sm:px-10 py-10 sm:py-12 flex flex-col items-center text-center">

                {/* Top eyebrow */}
                <span className="editorial-eyebrow text-[9px] mb-6">— Verificación de Edad —</span>

                {/* Logo */}
                <div className="relative flex justify-center w-full h-20 sm:h-24 mb-2 pointer-events-none">
                  <img
                    src="/logo-cruz-loma.svg"
                    alt="Cruz Loma"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] max-w-none object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
                  />
                </div>

                {/* Decorative ornament */}
                <div className="flex items-center gap-3 my-6">
                  <span className="h-px w-10 bg-copper/40" />
                  <span className="text-copper/60 text-[10px]">✦</span>
                  <span className="h-px w-10 bg-copper/40" />
                </div>

                {/* Editorial question */}
                <h2 className="font-editorial italic text-bone text-3xl sm:text-4xl leading-[1.05] tracking-tight">
                  ¿Eres mayor de edad?
                </h2>

                {/* Subtitle in mono micro-copy */}
                <p className="mt-5 max-w-[22rem] font-mono text-[10px] sm:text-[11px] text-ash tracking-[0.25em] uppercase leading-relaxed">
                  Para consumir alcohol en tu país de residencia
                </p>

                {/* Minimalist buttons */}
                <div className="mt-10 flex items-center gap-6 sm:gap-10">
                  <button
                    onClick={handleYes}
                    className="group relative py-3 px-1 font-mono text-[11px] tracking-[0.45em] uppercase text-bone transition-colors duration-300 hover:text-copper focus:outline-none focus-visible:text-copper"
                  >
                    Confirmar
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-1 h-px bg-copper origin-left scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-500 ease-out" />
                  </button>

                  <span aria-hidden="true" className="h-4 w-px bg-graphite" />

                  <button
                    onClick={handleNo}
                    className="group relative py-3 px-1 font-mono text-[11px] tracking-[0.45em] uppercase text-ash transition-colors duration-300 hover:text-bone focus:outline-none focus-visible:text-bone"
                  >
                    Salir
                    <span aria-hidden="true" className="absolute inset-x-0 bottom-1 h-px bg-bone/40 origin-left scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-500 ease-out" />
                  </button>
                </div>

                {/* Bottom hairline */}
                <div className="editorial-rule w-full mt-12 opacity-50" />

                {/* Footnote */}
                <p className="mt-5 font-mono text-[9px] text-ash/60 uppercase tracking-[0.55em]">
                  Disfrutar con responsabilidad
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
