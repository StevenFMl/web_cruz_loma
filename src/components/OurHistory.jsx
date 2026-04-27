import React from 'react';
import { motion } from 'framer-motion';

export default function OurHistory() {
  return (
    <section className="relative bg-carbon overflow-hidden">

      {/* Massive backdrop numeral — guides the eye, bleeds off-screen */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute z-0 font-slab leading-[0.78] tracking-[-0.06em] text-bone/[0.04] -top-12 md:-top-24 right-[-2rem] md:right-[-5rem] text-[14rem] md:text-[20rem] xl:text-[26rem]"
      >
        II
      </span>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[110rem] mx-auto py-24 md:py-40">

        {/* ─── Masthead ────────────────────────────────────── */}
        <header className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-28">
          <div className="col-span-12 md:col-span-7">
            <p className="editorial-eyebrow mb-6">— Crónica · Origen Nº 01</p>
            <h2 className="font-slab uppercase text-bone text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.5rem] leading-[0.85] tracking-tight">
              Forjado<br />
              en la <span className="text-copper italic font-editorial normal-case">Mitad</span><br />
              del Mundo
            </h2>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end mt-8 md:mt-0">
            <div className="rule-h mb-6 w-20" />
            <p className="font-editorial italic text-bone/75 text-xl md:text-2xl leading-snug">
              Donde el aire se acaba, empezamos nosotros. Una bitácora de quince años, dos hermanos y una obsesión con el agua de altura.
            </p>
          </div>
        </header>

        {/* ─── Spread: image + body ─────────────────────────── */}
        <div className="grid grid-cols-12 gap-4 md:gap-12 items-start">

          {/* Asymmetric image cluster */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="col-span-12 md:col-span-7 relative"
          >
            <div className="group relative">
              <span aria-hidden="true" className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-copper/70 z-20" />
              <span aria-hidden="true" className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-copper/70 z-20" />

              <div className="relative overflow-hidden aspect-[4/5] md:aspect-[5/6] bg-asphalt">
                <img
                  src="https://images.unsplash.com/photo-1614316345674-8b060d4b1a45?q=80&w=2070&auto=format&fit=crop"
                  alt="Cervecería Cruz Loma · Mitad del Mundo"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale sepia-[0.45] brightness-[0.82] contrast-[1.05] group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 transition-[filter] duration-[2200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/85 via-transparent to-transparent pointer-events-none" />

                {/* Overlay caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-bone/70 mb-2">Archivo · 2009</p>
                  <p className="font-editorial italic text-bone text-lg md:text-xl leading-tight max-w-xs">
                    "El primer lote. Doce litros, una olla prestada."
                  </p>
                </div>
              </div>
            </div>

            {/* Tactile metadata strip */}
            <div className="mt-6 flex items-center justify-between border-t border-graphite/60 pt-4">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-ash">N° de archivo · 0001</span>
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper">2.964 m.s.n.m.</span>
            </div>
          </motion.div>

          {/* Body copy column — sits low, breathes */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="col-span-12 md:col-span-4 md:col-start-9 md:pt-32"
          >
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper mb-6">Manifiesto</p>

            <div className="space-y-6 font-editorial text-bone/80 text-lg md:text-xl leading-[1.7]">
              <p className="first-letter:font-slab first-letter:uppercase first-letter:text-6xl first-letter:leading-none first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-copper">
                Inspirados por la majestuosidad de los Andes y la pureza del agua que baja de sus glaciares, empezamos con una idea simple: elaborar una cerveza sincera, sin atajos comerciales.
              </p>
              <p>
                Cruz Loma no es una bebida. Es paciencia, maltas seleccionadas a mano y lúpulos que despiertan los sentidos. Métodos tradicionales, lotes pequeños, sabor verdadero.
              </p>
            </div>

            {/* Tactile twin-stat */}
            <div className="mt-12 grid grid-cols-2 gap-px bg-graphite/60 border border-graphite/60">
              <div className="bg-carbon px-5 py-6">
                <span className="block font-slab text-copper text-4xl md:text-5xl leading-none mb-3">15</span>
                <span className="block font-mono text-[10px] tracking-[0.3em] uppercase text-ash">años de oficio</span>
              </div>
              <div className="bg-carbon px-5 py-6">
                <span className="block font-slab text-copper text-4xl md:text-5xl leading-none mb-3">100%</span>
                <span className="block font-mono text-[10px] tracking-[0.3em] uppercase text-ash">ingredientes naturales</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
