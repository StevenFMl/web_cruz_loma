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
        {/* Doble gradiente atmosférico */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/55 via-[#1a1410]/85 to-[#0a0604]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410]/40 via-transparent to-[#1a1410]/40" />

        {/* Halo ámbar pulsante — lento, respirado */}
        <motion.div
          className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1200px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(200,120,42,0.18) 0%, rgba(168,82,30,0) 65%)',
            willChange: "opacity"
          }}
          animate={{ opacity: [0.45, 0.85, 0.45] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/*
        ESTRUCTURA: 3 zonas verticales con altura mínima garantizada.
        - Top: reservado para Navbar (160-200px).
        - Centro: contenido (sello + título + subtítulo + CTA), justificado al centro.
        - Bottom: indicador de scroll en su propia fila (no toca el CTA).
        El CTA tiene mb-* de seguridad y la fila bottom es h-* fija → cero solapamiento.
      */}
      <div className="relative z-20 grid grid-rows-[180px_1fr_120px] min-h-screen">

        {/* ZONA TOP — espacio reservado bajo el Navbar (margen asimétrico mayor) */}
        <div aria-hidden="true" />

        {/* ZONA CENTRO — contenido, alineado ligeramente a la izquierda en desktop para romper simetría */}
        <div className="flex flex-col items-center justify-start text-center px-6 max-w-7xl mx-auto w-full pt-2">

          {/* SELLO PREMIUM — origen ecuatoriano */}
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16"
          >
            <span className="origin-seal">
              Orgullosamente 100% Ecuatoriana
            </span>
          </motion.div>

          {/* TITULAR MONUMENTAL — Ganache (con fallback Alfa Slab) */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="font-ganache text-[#ede0c4] leading-[0.92] tracking-tight"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="block text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[11rem]">
              Cruz Loma
            </span>
            <span className="block font-gotham text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#c8782a] mt-7 md:mt-9 tracking-[0.4em] uppercase">
              Cerveza · Artesanal
            </span>
          </motion.h1>

          {/* Subtítulo narrativo — Source Serif */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="font-source mt-12 md:mt-14 max-w-md text-[15px] md:text-base italic text-[#b8a786] leading-[1.85]"
          >
            Maltas tostadas a mano, lúpulo de cosecha y agua andina.<br className="hidden md:block" />
            Lote a lote, sin atajos.
          </motion.p>

          {/* CTA — separación generosa hacia abajo (mb-16) para garantizar respiro */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-16 mb-12"
          >
            <a
              href="#cervezas"
              className="group relative inline-flex items-center gap-4 pl-10 pr-7 py-5 font-gotham text-xs md:text-sm tracking-[0.4em] text-[#1a1410] uppercase bg-[#c8782a] border-2 border-[#823914] hover:bg-[#ede0c4] hover:border-[#5a280f] transition-all duration-700 overflow-hidden shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]"
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

        {/* ZONA BOTTOM — indicador de scroll (fila propia, separada del CTA por completo) */}
        <motion.div
          className="flex flex-col items-center justify-end gap-3 pb-8 text-[#c8782a]/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1.4 }}
        >
          <span className="font-mono text-[9px] tracking-[0.45em] uppercase font-bold">
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
