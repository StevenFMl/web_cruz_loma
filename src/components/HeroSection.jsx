import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center items-center w-full min-h-screen overflow-hidden bg-[#1a1512]">

      {/* Optimized Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1512]/95 via-[#1a1512]/75 to-[#1a1512] z-10"></div>
        {/* Warmer, tighter glow to avoid massive blur performance hit, with slight pulsing */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-[#d97706]/20 blur-[90px] z-10 rounded-full pointer-events-none"
          animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <img
          src="https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=2070&auto=format&fit=crop"
          alt="Cruz Loma Brewing Background"
          className="object-cover w-full h-full opacity-40 mix-blend-luminosity sepia-[0.3]"
        />
      </motion.div>

      {/* Main Content: Dynamic & Fast & Elegant */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 w-full mt-24">

        {/* Dynamic Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d97706]/70"></span>
            <span className="text-[#d97706] text-[10px] sm:text-xs md:text-sm tracking-[0.4em] uppercase font-bold font-sans">100% Ecuatoriana</span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d97706]/70"></span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-vintage text-stone-100 drop-shadow-[0_0_25px_rgba(217,119,6,0.2)] tracking-wider mb-4 leading-[1.1]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >

            </motion.span>
            <motion.span
              className="block mt-2 lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#fde68a] via-[#fcd34d] to-[#d97706]">CERVEZA</span> ARTESANAL
            </motion.span>
          </h1>
        </motion.div>

        <motion.h2
          className="text-[10px] sm:text-xs md:text-sm lg:text-base text-stone-300 font-sans tracking-[0.5em] uppercase font-light mb-12 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          El Sabor de la Mitad del Mundo
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <a
            href="#cervezas"
            className="group relative inline-flex items-center justify-center overflow-hidden px-8 sm:px-12 py-3.5 sm:py-4 text-xs sm:text-sm font-sans font-bold tracking-[0.2em] text-[#1a1512] uppercase bg-gradient-to-b from-[#fcd34d] to-[#d97706] rounded-sm shadow-[0_0_20px_rgba(217,119,6,0.3)] border border-[#b45309] transition-all duration-500 hover:shadow-[0_0_40px_rgba(217,119,6,0.6)] hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative flex items-center gap-3">
              Explorar Variedades
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#d97706]/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-sans hidden sm:block">Descubrir</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[#d97706] to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
