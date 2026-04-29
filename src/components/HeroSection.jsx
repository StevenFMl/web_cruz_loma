import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-wood">

      {/* Imagen + capas atmosféricas */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: "transform, opacity" }}
      >
        <img
          src="https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=2070&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="object-cover w-full h-full opacity-30 mix-blend-luminosity sepia-[0.5] saturate-[0.85]"
        />
        {/* Doble gradiente: oscuro abajo, cálido arriba */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/60 via-[#1a1410]/85 to-[#0a0604]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410]/40 via-transparent to-[#1a1410]/40" />

        {/* Halo ámbar pulsante — lento, respirado */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1200px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(200,120,42,0.18) 0%, rgba(168,82,30,0) 65%)',
            willChange: "opacity"
          }}
          animate={{ opacity: [0.45, 0.85, 0.45] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Contenido — grid vertical 3 zonas: top / centro / bottom */}
      <div className="relative z-20 grid grid-rows-[auto_1fr_auto] min-h-screen">

        {/* ZONA TOP — metadata cervecera (espacio reservado para Navbar) */}
        <div className="pt-40 sm:pt-44 md:pt-36" />

        {/* ZONA CENTRO — titular monumental + CTA, todo respira */}
        <div className="flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto w-full">

          {/* Eyebrow con sello */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 mb-12 md:mb-14"
          >
            <span className="block w-10 h-px bg-[#c8782a]/70" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.45em] uppercase text-[#c8782a] font-bold">
              Est. Mitad del Mundo · Ecuador
            </span>
            <span className="block w-10 h-px bg-[#c8782a]/70" />
          </motion.div>

          {/* Titular monumental — Alfa Slab para impacto de letrero */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[#ede0c4] leading-[0.92] tracking-tight"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="block text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[11rem]">
              Cruz Loma
            </span>
            <span className="block font-slab text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#c8782a] mt-6 md:mt-8 tracking-[0.05em] uppercase">
              Cerveza · Artesanal
            </span>
          </motion.h1>

          {/* Subtítulo descriptivo */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-14 max-w-md text-sm md:text-base text-[#b8a786] leading-[1.85]"
          >
            Maltas tostadas a mano, lúpulo de cosecha y agua andina.<br className="hidden md:block" />
            Lote a lote, sin atajos.
          </motion.p>

          {/* CTA — botón sólido tipo barril, sin gradientes Web3 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-14"
          >
            <a
              href="#cervezas"
              className="group relative inline-flex items-center gap-4 pl-10 pr-7 py-5 font-condensed text-xs md:text-sm tracking-[0.4em] text-[#1a1410] uppercase bg-[#c8782a] border-2 border-[#823914] hover:bg-[#ede0c4] hover:border-[#5a280f] transition-all duration-700 overflow-hidden shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]"
            >
              <span className="relative z-10 transition-colors duration-700">
                Conocer las cervezas
              </span>
              <span className="relative z-10 flex items-center gap-1.5 transition-all duration-700">
                <span className="block w-7 h-px bg-current transition-all duration-700 group-hover:w-12" />
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>

        {/* ZONA BOTTOM — indicador de scroll (separado, sin tocar el CTA) */}
        <motion.div
          className="flex flex-col items-center gap-3 pb-10 md:pb-14 text-[#c8782a]/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.4 }}
        >
          <span className="font-mono text-[9px] tracking-[0.45em] uppercase">
            Scroll
          </span>
          <motion.span
            className="block w-px h-12 bg-gradient-to-b from-[#c8782a] to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            style={{ transformOrigin: 'top' }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
