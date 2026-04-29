import React from 'react';
import { motion } from 'framer-motion';

const beers = [
  {
    name: "Pale Ale",
    style: "Pale Ale",
    abv: "5.5",
    desc: "Cerveza rubia, ligera, de carácter maltoso dulce, con presencia del lúpulo en notas frutales.",
    accent: "#e0c46a",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Irish Red Ale",
    style: "Red Ale",
    abv: "6.0",
    desc: "Color ámbar-rojizo, transparente, espuma canela. Notas a caramelo y grano tostado, con un final ligeramente floral.",
    accent: "#c75d3a",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sweet Stout",
    style: "Stout",
    abv: "8.9",
    desc: "Cerveza oscura, cuerpo cremoso, aromas tostados a café y chocolate amargo. Profunda, sedosa, contundente.",
    accent: "#a89b85",
    image: "https://images.unsplash.com/photo-1588686948574-d2e7d70362da?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Black IPA",
    style: "Night Forest",
    abv: "7.8",
    desc: "Compleja y equilibrada: la amargura aromática de las IPA con notas de café, chocolate y frutas oscuras.",
    accent: "#7a8b8a",
    image: "https://images.unsplash.com/photo-1588686948574-d2e7d70362da?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Weissbier",
    style: "Trigo",
    abv: "6.5",
    desc: "Cerveza de trigo, suave y refrescante, con sabor ligeramente dulce y aromas a plátano, clavo y especias.",
    accent: "#e8d4a0",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "APA Maracuyá",
    style: "APA",
    abv: "7.2",
    desc: "Ámbar y refrescante, de amargor medio. Marcado aroma y sabor a maracuyá con notas cítricas y herbales.",
    accent: "#e89a4d",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Pumpkin Ale",
    style: "Spiced Ale",
    abv: "8.4",
    desc: "Ámbar fuerte y malteada de carácter dulce. Rememora un pastel de calabaza con canela, cremosa y sedosa.",
    accent: "#c97c3a",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Old Belgian Tripel",
    style: "Tripel",
    abv: "8.0",
    desc: "Dorada de cuerpo ligero. Sabores complejos: malta, frutas y especias con un final seco y alcohol elegante.",
    accent: "#d4a647",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "India Pale Ale",
    style: "IPA",
    abv: "7.0",
    desc: "Dorada con gran cantidad de lúpulo, refrescante. Domina el aroma y sabor intenso a frutas tropicales.",
    accent: "#9bb56a",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  }
];

export default function OurBeers() {
  return (
    <section
      id="cervezas"
      className="relative py-32 md:py-44 bg-[#140e0b] overflow-hidden border-t border-white/[0.04]"
    >
      {/* Halo cálido tras el grid */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full bg-[#c4892b]/[0.04] blur-[160px]" />

      <div className="container px-6 md:px-10 lg:px-16 mx-auto max-w-[1400px] relative z-10">

        {/* Encabezado editorial */}
        <motion.div
          className="flex flex-col items-center text-center mb-24 md:mb-32"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] tracking-[0.5em] uppercase font-semibold text-[#c4892b] mb-8">
            La Selección
          </span>

          <h3 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#f1e8d6] tracking-tight leading-[0.95] max-w-4xl">
            Nueve cervezas,
            <span className="block font-display-italic text-[#e0a85a] mt-2">una sola obsesión</span>
          </h3>

          <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-[#a89b85]">
            Cada estilo es el resultado de meses de pruebas, maltas seleccionadas a mano y la paciencia que sólo la altura andina concede.
          </p>

          <span className="block w-16 h-px bg-[#c4892b]/40 mt-12" />
        </motion.div>

        {/* Grid de tarjetas boutique */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-16 md:gap-y-20">
          {beers.map((beer, index) => (
            <motion.article
              key={beer.name}
              className="group relative flex flex-col"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Imagen — proporción retrato editorial */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0c0807] mb-7">
                {/* Borde finísimo iluminado en hover */}
                <span
                  className="absolute inset-0 z-20 border border-white/[0.06] group-hover:border-[--c]/40 transition-colors duration-700 pointer-events-none"
                  style={{ '--c': beer.accent }}
                />

                {/* Vignette inferior */}
                <span className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0807] via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />

                <motion.img
                  src={beer.image}
                  alt={beer.name}
                  className="object-cover w-full h-full grayscale-[0.2] saturate-[0.85] group-hover:grayscale-0 group-hover:saturate-100 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Numeración editorial */}
                <span className="absolute top-5 left-5 z-20 text-[10px] tracking-[0.4em] font-medium text-[#f1e8d6]/70 uppercase">
                  N°{String(index + 1).padStart(2, '0')}
                </span>

                {/* Estilo */}
                <span
                  className="absolute top-5 right-5 z-20 text-[10px] tracking-[0.35em] font-medium uppercase"
                  style={{ color: beer.accent }}
                >
                  {beer.style}
                </span>

                {/* ABV vertical en costado — toque editorial */}
                <div className="absolute bottom-5 left-5 z-20 flex items-end gap-2">
                  <span className="font-display text-5xl md:text-6xl text-[#f1e8d6] leading-none tracking-tight">
                    {beer.abv}
                  </span>
                  <span className="text-[9px] tracking-[0.4em] uppercase text-[#f1e8d6]/60 pb-2">
                    % Vol.
                  </span>
                </div>
              </div>

              {/* Información */}
              <div className="flex flex-col">
                {/* Hairline animado */}
                <span
                  className="block h-px w-12 bg-[--c] mb-5 origin-left transition-all duration-700 group-hover:w-24"
                  style={{ '--c': beer.accent }}
                />

                <h4 className="font-display text-3xl md:text-4xl text-[#f1e8d6] tracking-tight leading-tight mb-4 transition-transform duration-700 group-hover:-translate-y-0.5">
                  {beer.name}
                </h4>

                <p className="text-[14px] leading-relaxed text-[#a89b85] max-w-md">
                  {beer.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pie de sección */}
        <motion.div
          className="flex flex-col items-center mt-32 md:mt-40 pt-16 border-t border-white/[0.06] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#c4892b]/80 mb-4">
            Edición limitada
          </span>
          <p className="font-display-italic text-2xl md:text-3xl text-[#f1e8d6]/80 max-w-xl">
            "Cada lote nace de la misma búsqueda: la honestidad del oficio."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
