import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center items-center w-full min-h-screen overflow-hidden bg-[#1a1512]">

      {/* Optimized Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1512]/95 via-[#1a1512]/70 to-[#1a1512] z-10"></div>
        {/* Warmer, tighter glow to avoid massive blur performance hit */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-[#d97706]/15 blur-[80px] z-10 rounded-full pointer-events-none"></div>

        <img
          src="https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=2070&auto=format&fit=crop"
          alt="Cruz Loma Brewing"
          className="object-cover w-full h-full opacity-50 mix-blend-luminosity sepia-[0.4]"
        />
      </motion.div>

      {/* Main Content: Dynamic & Fast */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full mt-24">
        
        {/* Dynamic Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-[#d97706]/50"></span>
            <span className="text-[#d97706] text-xs sm:text-sm tracking-[0.3em] uppercase font-bold font-sans">100% Ecuatoriana</span>
            <span className="w-12 h-[1px] bg-[#d97706]/50"></span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-vintage text-stone-100 drop-shadow-[0_0_20px_rgba(217,119,6,0.2)] tracking-wide mb-4 leading-tight">
            AUTÉNTICA <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#fcd34d] to-[#d97706]">CERVEZA</span> ARTESANAL
          </h1>
        </motion.div>

        <motion.h2
          className="text-xs md:text-base text-stone-400 font-sans tracking-[0.4em] uppercase font-medium mb-12 drop-shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.2 }}
        >
          El Sabor de la Mitad del Mundo
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.3 }}
        >
          <a
            href="#cervezas"
            className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-3.5 sm:py-4 text-xs sm:text-sm font-sans font-bold tracking-[0.2em] text-[#1a1512] uppercase bg-[#d97706] rounded-sm shadow-[0_0_20px_rgba(217,119,6,0.3)] border border-[#b45309] hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] transition-all duration-300"
          >
            Explorar Variedades
          </a>
        </motion.div>
      </div>
    </section>
  );
}
