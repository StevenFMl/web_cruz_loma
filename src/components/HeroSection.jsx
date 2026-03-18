import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center items-center w-full min-h-screen overflow-hidden bg-[#1a1512]">

      {/* Background Image with Warm Amber Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1512]/90 via-[#1a1512]/60 to-[#1a1512] z-10"></div>
        {/* Adds a warm amber light effect from top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-[#d97706]/20 blur-[120px] z-10 rounded-full pointer-events-none"></div>

        {/* Authentic craft brewery image - brewing tanks / golden hour */}
        <img
          src="https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=2070&auto=format&fit=crop"
          alt="Cruz Loma Brewing"
          className="object-cover w-full h-full opacity-60 mix-blend-luminosity sepia-[0.3]"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full mt-20">

        {/* Decorative Leaf/Hop Top icon */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -45 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="mb-6 text-[#4d7c0f]"
        >
          <svg className="w-8 h-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </motion.div>

        {/* Vintage Logo Text */}
        <motion.h1
          className="text-6xl sm:text-8xl md:text-9xl font-vintage text-[#d97706] drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-wide mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
        >
          CRUZ LOMA
        </motion.h1>

        <motion.h2
          className="text-sm md:text-lg text-stone-300 font-sans tracking-[0.4em] uppercase font-medium mb-10 drop-shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
        >
          El Sabor de la Mitad del Mundo
        </motion.h2>

        {/* Vintage Divider */}
        <motion.div
          className="w-48 h-px bg-gradient-to-r from-transparent via-[#d97706]/50 to-transparent mb-12"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.7 }}
        >
          <a
            href="#historia"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-xs font-sans font-bold tracking-[0.2em] text-[#1a1512] uppercase bg-[#d97706] rounded-sm shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-[#b45309] hover:bg-amber-500 transition-colors"
          >
            Nuestra Historia
          </a>
        </motion.div>
      </div>

    </section>
  );
}
