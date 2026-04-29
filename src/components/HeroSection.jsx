import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center items-center w-full min-h-screen overflow-hidden bg-[#1a1512]">

      {/* Fondo cinematográfico */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "transform, opacity" }}
      >
        {/* Capas de profundidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0807]/70 via-[#1a1512]/60 to-[#1a1512] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1512]/40 via-transparent to-[#1a1512]/40 z-10" />

        {/* Halo cálido pulsante (sutil) */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] max-w-[1100px] h-[700px] z-10 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(196,137,43,0.16) 0%, rgba(196,137,43,0) 65%)',
            willChange: "opacity"
          }}
          animate={{ opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <img
          src="https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=2070&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="object-cover w-full h-full opacity-35 mix-blend-luminosity sepia-[0.4]"
        />
      </motion.div>

      {/* Marco de página minimalista (lateral) */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-8 z-20 origin-left -rotate-90">
        <span className="text-[10px] tracking-[0.6em] uppercase text-[#a89b85]/50 font-medium">
          Est. — Mitad del Mundo
        </span>
      </div>
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-8 z-20 origin-right rotate-90">
        <span className="text-[10px] tracking-[0.6em] uppercase text-[#a89b85]/50 font-medium">
          Edición Artesanal
        </span>
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-6xl mx-auto pt-32 pb-24">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5 mb-10"
        >
          <span className="w-12 h-px bg-[#c4892b]/60" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.5em] uppercase font-semibold text-[#e0a85a]">
            100% Ecuatoriana
          </span>
          <span className="w-12 h-px bg-[#c4892b]/60" />
        </motion.div>

        {/* Titular display imponente */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[#f1e8d6] tracking-tight leading-[0.95] mb-2"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-light">
            Cerveza
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-display-italic text-[#e0a85a] -mt-2 lg:-mt-4">
            artesanal
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-12 text-xs sm:text-sm md:text-base text-[#a89b85] tracking-[0.4em] uppercase font-light max-w-xl"
        >
          El sabor de la mitad del mundo
        </motion.p>

        {/* Hairline */}
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="block w-24 h-px bg-[#c4892b]/40 mt-12 mb-12 origin-center"
        />

        {/* CTA — sin gradientes, tipográfico, refinado */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#cervezas"
            className="group relative inline-flex items-center gap-5 pl-10 pr-7 py-5 text-[11px] sm:text-xs font-semibold tracking-[0.4em] text-[#f1e8d6] uppercase border border-[#c4892b]/50 hover:border-[#e0a85a] transition-all duration-700 overflow-hidden"
          >
            {/* Fondo deslizante en hover */}
            <span className="absolute inset-0 bg-[#c4892b] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#1a1512]">
              Explorar variedades
            </span>
            <span className="relative z-10 flex items-center gap-1 transition-colors duration-500 group-hover:text-[#1a1512]">
              <span className="block w-8 h-px bg-current transition-all duration-500 group-hover:w-12" />
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-[#c4892b]/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-medium hidden sm:block">
          Descubrir
        </span>
        <motion.span
          className="block w-px h-14 bg-gradient-to-b from-[#c4892b] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          style={{ transformOrigin: 'top' }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
