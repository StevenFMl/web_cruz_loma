import React from 'react';
import { motion } from 'framer-motion';

export default function OurHistory() {
  return (
    <section
      id="historia"
      className="relative py-32 md:py-44 bg-[#1a1512] border-t border-white/[0.04] overflow-hidden"
    >
      {/* Fondo: número de capítulo gigante, fantasmal */}
      <div className="pointer-events-none absolute -top-10 right-0 lg:right-12 select-none opacity-[0.04] z-0">
        <span className="font-display text-[28rem] leading-none text-[#c4892b]">
          I
        </span>
      </div>

      <div className="container px-6 md:px-10 lg:px-16 mx-auto max-w-[1400px] relative z-10">

        {/* Encabezado de capítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6 mb-20 md:mb-28"
        >
          <span className="font-display text-2xl md:text-3xl text-[#c4892b]/80 italic">
            Capítulo I
          </span>
          <span className="flex-1 h-px bg-white/[0.08]" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#a89b85]/70">
            Las Raíces
          </span>
        </motion.div>

        {/* Layout asimétrico estilo editorial */}
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-12">

          {/* Texto principal — col izquierda, ancho de columna editorial */}
          <motion.div
            className="col-span-12 lg:col-span-6 lg:pr-8 order-2 lg:order-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#f1e8d6] tracking-tight leading-[1] mb-12">
              Artesanía
              <span className="block font-display-italic text-[#e0a85a]">en cada gota.</span>
            </h3>

            <div className="space-y-8 text-[15px] md:text-base text-[#a89b85] leading-[1.85] max-w-xl prose-editorial">
              {/* Drop cap editorial */}
              <p>
                <span className="float-left font-display text-7xl leading-[0.85] text-[#e0a85a] mr-3 mt-2">
                  I
                </span>
                nspirados por la majestuosidad de los Andes y la pureza del agua que desciende de sus cumbres, empezamos con una idea simple: elaborar una cerveza sincera, sin atajos comerciales.
              </p>

              <p>
                Cruz Loma no es solo una bebida. Es paciencia, maltas seleccionadas a mano y lúpulos que despiertan los sentidos. Respetamos los métodos tradicionales para quienes aprecian el verdadero sabor artesanal.
              </p>
            </div>

            {/* Cita destacada */}
            <motion.blockquote
              className="mt-14 pl-8 border-l border-[#c4892b]/40"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.9 }}
            >
              <p className="font-display-italic text-2xl md:text-3xl text-[#f1e8d6] leading-snug">
                "El tiempo es nuestro ingrediente menos visible — y el más importante."
              </p>
              <footer className="mt-4 text-[10px] tracking-[0.4em] uppercase text-[#c4892b]">
                — Maestro Cervecero
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* Imagen — col derecha, ligeramente desplazada */}
          <motion.div
            className="col-span-12 lg:col-span-6 order-1 lg:order-2 lg:pt-16"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              {/* Marco fino con ligera rotación, se endereza al hover */}
              <div className="relative overflow-hidden rounded-[2px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:rotate-[-1.5deg] group-hover:rotate-0">
                <img
                  src="https://images.unsplash.com/photo-1614316345674-8b060d4b1a45?q=80&w=2070&auto=format&fit=crop"
                  alt="Ingredientes Cruz Loma"
                  className="w-full object-cover aspect-[4/5] grayscale-[0.15] saturate-[0.9] group-hover:grayscale-0 group-hover:saturate-100 transition-all duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512]/50 via-transparent to-transparent" />
                <div className="absolute inset-0 border border-white/[0.06]" />
              </div>

              {/* Pie de imagen — caption editorial */}
              <div className="mt-5 flex items-start gap-4">
                <span className="text-[#c4892b] text-xs mt-1">◆</span>
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#a89b85]/70 leading-relaxed">
                  Ingredientes seleccionados<br />
                  Mitad del Mundo · Quito
                </p>
              </div>

              {/* Badge "100% Naturales" — flotante, refinado */}
              <motion.div
                className="hidden lg:flex absolute -left-12 top-12 flex-col items-center gap-3 px-6 py-8 bg-[#0c0807]/80 backdrop-blur-sm border border-[#c4892b]/30 rounded-[2px]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-display text-5xl text-[#e0a85a] leading-none">100</span>
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#a89b85] text-center leading-relaxed">
                  Por ciento<br />Naturales
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
