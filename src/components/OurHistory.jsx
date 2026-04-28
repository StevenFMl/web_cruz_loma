import { motion } from 'framer-motion';

/* Textura de papel kraft viejo — papel de imprenta agrietado */
const kraftTexture = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='kh'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.07' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.06  0 0 0 0 0.04  0 0 0 0 0.025  0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23kh)'/%3E%3C/svg%3E\")",
};

export default function OurHistory() {
  return (
    <section
      className="relative bg-carbon overflow-hidden border-t-2 border-copper"
      style={kraftTexture}
    >
      {/* Capa de oscurecimiento global */}
      <div className="absolute inset-0 bg-carbon/80 pointer-events-none" />

      {/* Sub-hairline cobre superior */}
      <div className="absolute top-3 inset-x-0 h-px bg-copper/45 pointer-events-none" />

      {/* Numeral colosal de fondo — capítulo II estampado en metal */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute z-0 font-display uppercase leading-[0.78] tracking-[-0.06em] text-copper/[0.07] -top-12 md:-top-24 right-[-2rem] md:right-[-5rem] text-[14rem] md:text-[22rem] xl:text-[30rem]"
      >
        II
      </span>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[110rem] mx-auto py-24 md:py-40">

        {/* ─── Masthead ────────────────────────────────────── */}
        <header className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-28">
          <div className="col-span-12 md:col-span-7">
            <p className="editorial-eyebrow mb-6">— Crónica · Origen Nº 01</p>
            <h2 className="font-display uppercase text-bone text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.82] tracking-tight break-words">
              Forjado<br />
              en la <span className="text-copper">Mitad</span><br />
              del Mundo
            </h2>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end mt-8 md:mt-0">
            <div className="h-[2px] w-20 bg-copper mb-6" />
            <p className="font-cond text-bone/85 text-xl md:text-2xl leading-snug uppercase tracking-wide">
              Donde el aire se acaba, empezamos nosotros. Una bitácora de quince años, dos hermanos y una obsesión con el agua de altura.
            </p>
          </div>
        </header>

        {/* ─── Spread: imagen-archivo + cuerpo manifiesto ───── */}
        <div className="grid grid-cols-12 gap-4 md:gap-12 items-start">

          {/* Cluster fotográfico — placa de archivo con remaches */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="col-span-12 md:col-span-7 relative"
          >
            <div className="group relative">
              {/* Escuadras / remaches metálicos en las cuatro esquinas */}
              <span aria-hidden="true" className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-copper z-20" />
              <span aria-hidden="true" className="absolute -top-1 -right-1 w-12 h-12 border-t-2 border-r-2 border-copper z-20" />
              <span aria-hidden="true" className="absolute -bottom-1 -left-1 w-12 h-12 border-b-2 border-l-2 border-copper z-20" />
              <span aria-hidden="true" className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-copper z-20" />

              <div className="relative overflow-hidden aspect-[4/5] md:aspect-[5/6] bg-carbon border-2 border-copper-deep">
                <img
                  src="https://images.unsplash.com/photo-1614316345674-8b060d4b1a45?q=80&w=2070&auto=format&fit=crop"
                  alt="Cervecería Cruz Loma · Mitad del Mundo"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.78] transition-[filter] duration-[900ms] ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                />
                {/* Velo cobre — desaparece al hover */}
                <div className="absolute inset-0 bg-carbon/35 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />

                {/* Caption inferior tipo etiqueta de archivo */}
                <div className="absolute bottom-0 inset-x-0 bg-carbon/85 border-t-2 border-copper px-6 py-5">
                  <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper mb-2">Archivo · 2009</p>
                  <p className="font-cond text-bone text-lg md:text-xl leading-tight max-w-xs uppercase tracking-wide">
                    "El primer lote. Doce litros, una olla prestada."
                  </p>
                </div>
              </div>
            </div>

            {/* Strip de metadata táctil */}
            <div className="mt-6 flex items-center justify-between border-t-2 border-copper/40 pt-4">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-bone/70">N° de archivo · 0001</span>
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper">2.964 m.s.n.m.</span>
            </div>
          </motion.div>

          {/* Cuerpo del manifiesto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, opacity' }}
            className="col-span-12 md:col-span-4 md:col-start-9 md:pt-32"
          >
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper mb-6">Manifiesto</p>

            <div className="space-y-6 font-sans text-bone/85 text-base md:text-lg leading-[1.7]">
              <p className="first-letter:font-display first-letter:uppercase first-letter:text-7xl first-letter:leading-none first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-copper">
                Inspirados por la majestuosidad de los Andes y la pureza del agua que baja de sus glaciares, empezamos con una idea simple: elaborar una cerveza sincera, sin atajos comerciales.
              </p>
              <p>
                Cruz Loma no es una bebida. Es paciencia, maltas seleccionadas a mano y lúpulos que despiertan los sentidos. Métodos tradicionales, lotes pequeños, sabor verdadero.
              </p>
            </div>

            {/* Twin-stat — placa de metal grabada, líneas duras de cobre */}
            <div className="mt-12 grid grid-cols-2 border-2 border-copper">
              <div className="bg-carbon px-4 py-5 sm:px-5 sm:py-6 border-r-2 border-copper">
                <span className="block font-display text-copper text-4xl sm:text-5xl md:text-6xl leading-none mb-3 tracking-tight">15</span>
                <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-bone/80">años de oficio</span>
              </div>
              <div className="bg-carbon px-4 py-5 sm:px-5 sm:py-6">
                <span className="block font-display text-copper text-4xl sm:text-5xl md:text-6xl leading-none mb-3 tracking-tight">100%</span>
                <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-bone/80">naturales</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hairline cobre inferior — cierra la placa */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-copper pointer-events-none" />
    </section>
  );
}
