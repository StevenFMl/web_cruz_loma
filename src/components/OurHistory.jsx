import React from 'react';
import { motion } from 'framer-motion';

export default function OurHistory() {
  return (
    <section
      id="historia"
      className="relative bg-wood py-32 md:py-44 border-t border-[#3a2b1f]/60 overflow-hidden"
    >
      {/* Número de capítulo gigante en cobre fantasma */}
      <div className="pointer-events-none absolute -top-10 right-0 lg:right-12 select-none opacity-[0.05] z-0">
        <span className="font-display text-[26rem] leading-none text-[#c8782a]">
          I
        </span>
      </div>

      <div className="container px-6 md:px-10 lg:px-16 mx-auto max-w-[1400px] relative z-10">

        {/* Encabezado de capítulo brewery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 mb-20 md:mb-28"
        >
          <span className="font-mono text-[11px] tracking-[0.45em] uppercase text-[#c8782a] font-bold whitespace-nowrap">
            Capítulo · I
          </span>
          <span className="flex-1 h-px bg-[#3a2b1f]" />
          <span className="font-condensed text-xs tracking-[0.4em] uppercase text-[#8a7a5e] font-bold">
            Las Raíces
          </span>
        </motion.div>

        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-12">

          {/* Texto principal */}
          <motion.div
            className="col-span-12 lg:col-span-6 lg:pr-8 order-2 lg:order-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#ede0c4] leading-[1] mb-12">
              Artesanía<br />
              <span className="text-[#c8782a]">en cada gota.</span>
            </h3>

            <div className="space-y-8 text-[15px] md:text-base text-[#b8a786] leading-[1.85] max-w-xl prose-rustic">
              {/* Drop cap slab */}
              <p>
                <span className="float-left font-display text-7xl leading-[0.8] text-[#c8782a] mr-3 mt-1">
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
              className="mt-14 pl-8 border-l-2 border-[#c8782a]/60"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              <p className="font-slab italic text-2xl md:text-[1.75rem] text-[#ede0c4] leading-[1.35]">
                "El tiempo es nuestro ingrediente menos visible — y el más importante."
              </p>
              <footer className="mt-5 font-mono text-[10px] tracking-[0.4em] uppercase text-[#c8782a] font-bold">
                — Maestro Cervecero
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* Imagen — etiqueta enmarcada con esquinas */}
          <motion.div
            className="col-span-12 lg:col-span-6 order-1 lg:order-2 lg:pt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              <div className="relative overflow-hidden bg-[#0a0604] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] lg:rotate-[-1.5deg] group-hover:rotate-0 border-[6px] border-[#231a14] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)]">
                <img
                  src="https://images.unsplash.com/photo-1614316345674-8b060d4b1a45?q=80&w=2070&auto=format&fit=crop"
                  alt="Ingredientes Cruz Loma"
                  className="w-full object-cover aspect-[4/5] sepia-[0.25] saturate-[0.85] group-hover:sepia-0 group-hover:saturate-100 transition-all duration-[1500ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/60 via-transparent to-transparent" />

                {/* Esquinas cobre */}
                <span className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#c8782a]" />
                <span className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#c8782a]" />
                <span className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#c8782a]" />
                <span className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#c8782a]" />
              </div>

              {/* Caption mono */}
              <div className="mt-5 flex items-start gap-3">
                <span className="text-[#c8782a] text-base mt-0.5">◆</span>
                <p className="font-mono text-[10.5px] tracking-[0.3em] uppercase text-[#8a7a5e] leading-relaxed">
                  Ingredientes seleccionados<br />
                  Mitad del Mundo · Quito
                </p>
              </div>

              {/* Sello "100% Naturales" — etiqueta circular */}
              <motion.div
                className="hidden lg:flex absolute -left-12 top-12 flex-col items-center justify-center gap-2 w-32 h-32 bg-[#c8782a] border-2 border-[#5a280f] rounded-full rotate-[-8deg] shadow-[0_15px_30px_-12px_rgba(0,0,0,0.7)]"
                initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ rotate: -3, scale: 1.05 }}
              >
                <span className="font-display text-3xl text-[#1a1410] leading-none">100%</span>
                <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-[#1a1410] text-center font-bold leading-tight">
                  Naturales
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
