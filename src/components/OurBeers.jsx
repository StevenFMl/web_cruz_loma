import React from 'react';
import { motion } from 'framer-motion';

const beers = [
  {
    name: "Pale Ale",
    style: "Pale Ale",
    abv: "5.5",
    ibu: "32",
    og:  "1.048",
    color: "#d99852",
    notes: ["Maltoso dulce", "Cítricos", "Floral"],
    desc: "Rubia, ligera, de carácter maltoso dulce. El lúpulo aporta notas frutales sin imponerse.",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Irish Red Ale",
    style: "Red Ale",
    abv: "6.0",
    ibu: "24",
    og:  "1.052",
    color: "#a8521e",
    notes: ["Caramelo tostado", "Grano", "Final floral"],
    desc: "Ámbar-rojiza, espuma canela. Sabor a maltas con caramelo tostado y un sutil cierre floral.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sweet Stout",
    style: "Stout",
    abv: "8.9",
    ibu: "38",
    og:  "1.078",
    color: "#3a2b1f",
    notes: ["Café", "Chocolate", "Cebada tostada"],
    desc: "Oscura y cremosa, elaborada con cebada tostada y maltas chocolate. Profunda, sedosa, contundente.",
    image: "https://images.unsplash.com/photo-1588686948574-d2e7d70362da?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Black IPA",
    style: "Night Forest",
    abv: "7.8",
    ibu: "62",
    og:  "1.070",
    color: "#231a14",
    notes: ["Café", "Chocolate amargo", "Frutas oscuras"],
    desc: "Compleja y equilibrada: la amargura aromática de las IPA con cuerpo de café, chocolate y frutas oscuras.",
    image: "https://images.unsplash.com/photo-1588686948574-d2e7d70362da?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Weissbier",
    style: "Trigo",
    abv: "6.5",
    ibu: "14",
    og:  "1.054",
    color: "#e8b873",
    notes: ["Plátano", "Clavo", "Especias"],
    desc: "Cerveza de trigo, suave y refrescante. Aromas a plátano, clavo y especias — el clásico de Múnich.",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "APA Maracuyá",
    style: "APA",
    abv: "7.2",
    ibu: "45",
    og:  "1.064",
    color: "#c8782a",
    notes: ["Maracuyá", "Cítricos", "Herbal"],
    desc: "Ámbar refrescante, amargor medio. Marcado aroma y sabor a maracuyá con notas cítricas y herbales.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Pumpkin Ale",
    style: "Spiced Ale",
    abv: "8.4",
    ibu: "20",
    og:  "1.076",
    color: "#a8521e",
    notes: ["Pastel de calabaza", "Canela", "Sedosa"],
    desc: "Ámbar fuerte y malteada, dulce. Rememora un pastel de calabaza con canela. Cremosa, sedosa, otoñal.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Old Belgian Tripel",
    style: "Tripel",
    abv: "8.0",
    ibu: "30",
    og:  "1.075",
    color: "#d99852",
    notes: ["Malta", "Frutas de hueso", "Especias"],
    desc: "Dorada, cuerpo ligero, sabores complejos a malta, frutas y especias. Final seco, alcohol elegante.",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "India Pale Ale",
    style: "IPA",
    abv: "7.0",
    ibu: "58",
    og:  "1.062",
    color: "#748b5a",
    notes: ["Frutas tropicales", "Lúpulo intenso", "Refrescante"],
    desc: "Dorada, generosa en lúpulo. Refrescante, dominada por aromas y sabores intensos a frutas tropicales.",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  }
];

export default function OurBeers() {
  return (
    <section
      id="cervezas"
      className="relative bg-wood py-32 md:py-44 overflow-hidden border-t border-[#3a2b1f]/60"
    >
      {/* Halo cobre profundo */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-[#c8782a]/[0.05] blur-[180px]" />

      <div className="container px-6 md:px-10 lg:px-16 mx-auto max-w-[1400px] relative z-10">

        {/* Encabezado de capítulo brewery */}
        <motion.div
          className="flex flex-col items-center text-center mb-24 md:mb-32"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="divider-mark w-full max-w-[200px] mb-8">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#c8782a] font-bold">
              La Selección
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#ede0c4] tracking-tight leading-[0.95] max-w-4xl">
            Nuestras<br />
            <span className="text-[#c8782a]">Cervezas</span>
          </h2>

          <p className="mt-10 max-w-xl text-[15px] leading-[1.85] text-[#b8a786]">
            Nueve estilos. Cada lote nace de la misma búsqueda: maltas seleccionadas a mano, lúpulo de cosecha y la paciencia de quien sabe que el tiempo no se acelera.
          </p>
        </motion.div>

        {/* Grid de etiquetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-14 md:gap-y-16">
          {beers.map((beer, index) => (
            <motion.article
              key={beer.name}
              className="group relative flex flex-col bg-kraft border border-[#3a2b1f] hover:border-[#c8782a]/60 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Cinta superior — lote y batch number, mono */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-[#3a2b1f] bg-[#1a1410]/60">
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#8a7a5e]">
                  Lote · N° {String(index + 1).padStart(3, '0')}
                </span>
                <span
                  className="font-condensed text-[10px] tracking-[0.3em] uppercase font-bold"
                  style={{ color: beer.color }}
                >
                  {beer.style}
                </span>
              </div>

              {/* Imagen — proporción cuadrada/levemente vertical, viñeta cobre */}
              <div className="relative w-full aspect-[5/4] overflow-hidden bg-[#0a0604]">
                {/* Tinte cobre en hover, monocromo en reposo */}
                <span className="absolute inset-0 z-10 bg-gradient-to-t from-[#1a1410] via-[#1a1410]/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-[1100ms]" />

                <motion.img
                  src={beer.image}
                  alt={beer.name}
                  className="object-cover w-full h-full grayscale-[0.35] saturate-[0.75] sepia-[0.15] group-hover:grayscale-0 group-hover:saturate-100 group-hover:sepia-0 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Sello vertical lateral con ABV */}
                <div className="absolute top-5 right-5 z-20 flex flex-col items-end">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-[#ede0c4]/80 mb-1">
                    ABV
                  </span>
                  <span className="font-display text-4xl md:text-5xl text-[#ede0c4] leading-none">
                    {beer.abv}<span className="text-2xl md:text-3xl">%</span>
                  </span>
                </div>
              </div>

              {/* Cuerpo de la etiqueta */}
              <div className="flex flex-col flex-grow px-7 pt-7 pb-6">

                {/* Nombre — tipográficamente sólido */}
                <h4 className="font-display text-[2rem] md:text-[2.25rem] text-[#ede0c4] leading-[1] tracking-tight mb-2">
                  {beer.name}
                </h4>

                {/* Descripción */}
                <p className="text-[13.5px] text-[#b8a786] leading-[1.7] mb-7">
                  {beer.desc}
                </p>

                {/* Notas de cata — chips estilo etiqueta */}
                <div className="flex flex-wrap gap-1.5 mb-7">
                  {beer.notes.map((note) => (
                    <span
                      key={note}
                      className="font-mono text-[9.5px] tracking-[0.15em] uppercase text-[#d4c5a8] border border-[#3a2b1f] px-2.5 py-1 bg-[#1a1410]/40 group-hover:border-[#c8782a]/40 transition-colors duration-700"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Pie técnico — datos del maestro cervecero, mono */}
                <div className="mt-auto pt-5 border-t border-[#3a2b1f] grid grid-cols-3 gap-2 tech-data">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#8a7a5e] mb-1">ABV</span>
                    <span className="text-sm font-bold text-[#ede0c4]">{beer.abv}%</span>
                  </div>
                  <div className="flex flex-col border-l border-[#3a2b1f] pl-3">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#8a7a5e] mb-1">IBU</span>
                    <span className="text-sm font-bold text-[#ede0c4]">{beer.ibu}</span>
                  </div>
                  <div className="flex flex-col border-l border-[#3a2b1f] pl-3">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#8a7a5e] mb-1">OG</span>
                    <span className="text-sm font-bold text-[#ede0c4]">{beer.og}</span>
                  </div>
                </div>
              </div>

              {/* Marca de color lateral — guiño a la cinta de etiqueta */}
              <span
                className="absolute left-0 top-[58px] bottom-0 w-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                style={{ backgroundColor: beer.color }}
              />
            </motion.article>
          ))}
        </div>

        {/* Pie de sección con sello */}
        <motion.div
          className="flex flex-col items-center mt-32 md:mt-40 pt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="divider-mark w-full max-w-[300px] mb-10">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#c8782a] font-bold">
              Edición Artesanal
            </span>
          </div>

          <p className="font-slab text-2xl md:text-3xl text-[#ede0c4]/85 max-w-2xl italic leading-[1.4]">
            "Cada botella lleva el oficio de quien la elaboró — y el silencio de las montañas."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
