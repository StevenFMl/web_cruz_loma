import React from 'react';
import { motion } from 'framer-motion';

/* =====================================================================
   DATOS OFICIALES — fichas técnicas del PDF Cruz Loma.
   ABV = Alcohol By Volume (PDF). IBU = estimación por estilo BJCP.
   ===================================================================== */
const beers = [
  {
    name: "Pale Ale",
    style: "Pale Ale",
    abv: "5.5",
    ibu: "32",
    color: "#d99852",
    notes: ["Maltoso dulce", "Frutales", "Lúpulo floral"],
    desc: "Cerveza rubia, ligera, de carácter maltoso dulce, con presencia del lúpulo en notas frutales.",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Irish Red Ale",
    style: "Red Ale",
    abv: "6.0",
    ibu: "24",
    color: "#a8521e",
    notes: ["Caramelo tostado", "Grano", "Espuma canela"],
    desc: "Color ámbar-rojizo, transparente. Notas a caramelo y grano tostado, con un sutil cierre floral.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sweet Stout",
    style: "Stout",
    abv: "8.9",
    ibu: "38",
    color: "#3a2b1f",
    notes: ["Café", "Chocolate", "Cebada tostada"],
    desc: "Cerveza oscura. Aroma tostado a café y chocolate, profundo y sedoso. Cuerpo cremoso, contundente.",
    image: "https://images.unsplash.com/photo-1588686948574-d2e7d70362da?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Black IPA",
    style: "Night Forest",
    abv: "7.8",
    ibu: "62",
    color: "#231a14",
    notes: ["Café", "Chocolate", "Frutas oscuras"],
    desc: "Compleja y equilibrada. La amargura aromática de las IPA con notas de café, chocolate y frutas.",
    image: "https://images.unsplash.com/photo-1588686948574-d2e7d70362da?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Weissbier",
    style: "Trigo · Oktoberfest",
    abv: "6.5",
    ibu: "14",
    color: "#e8b873",
    notes: ["Plátano", "Clavo", "Especias"],
    desc: "Cerveza de trigo, suave y refrescante. Aromas a plátano y clavo. El clásico estilo Oktoberfest.",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "APA Maracuyá",
    style: "APA",
    abv: "7.2",
    ibu: "45",
    color: "#c8782a",
    notes: ["Maracuyá", "Cítricos", "Herbal"],
    desc: "Cerveza ámbar. Marcado sabor a maracuyá con notas cítricas. Refrescante con amargor medio.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Pumpkin Ale",
    style: "Spiced Ale",
    abv: "8.4",
    ibu: "20",
    color: "#a8521e",
    notes: ["Pastel de calabaza", "Canela", "Sedosa"],
    desc: "Ámbar fuerte, malteada de carácter dulce. Carácter de pastel de calabaza con canela. Cremosa y otoñal.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Old Belgian Tripel",
    style: "Tripel",
    abv: "8.0",
    ibu: "30",
    color: "#d99852",
    notes: ["Frutas", "Especias", "Final seco"],
    desc: "Dorada, compleja con frutas y especias. Cuerpo ligero, final seco y un alcohol elegante.",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "India Pale Ale",
    style: "IPA",
    abv: "7.0",
    ibu: "58",
    color: "#748b5a",
    notes: ["Lúpulo intenso", "Frutas tropicales", "Refrescante"],
    desc: "Cerveza dorada con alto lúpulo. Muy refrescante, dominada por aromas a frutas tropicales.",
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
  }
];

/* Asimetría editorial: la columna central de cada fila se desplaza vertically.
   Crea un ritmo "tablón clavado a mano" que rompe el grid perfecto. */
const offsetForIndex = (i) => {
  const col = i % 3;
  if (col === 0) return 'lg:mt-0';
  if (col === 1) return 'lg:mt-20';
  return 'lg:mt-8';
};

export default function OurBeers() {
  return (
    <section
      id="cervezas"
      className="relative bg-wood py-32 md:py-44 overflow-hidden border-t border-[#3a2b1f]/60"
    >
      {/* Halo cobre */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-[#c8782a]/[0.05] blur-[180px]" />

      <div className="container px-6 md:px-10 lg:px-16 mx-auto max-w-[1400px] relative z-10">

        {/* Encabezado — alineado a la izquierda para romper simetría editorial */}
        <motion.div
          className="grid grid-cols-12 gap-6 mb-20 md:mb-28"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="col-span-12 lg:col-span-7">
            <span className="font-gotham text-[10.5px] tracking-[0.5em] uppercase text-[#c8782a] font-bold mb-6 inline-block">
              ✦ La Selección · 09 Estilos
            </span>
            <h2 className="font-ganache text-5xl md:text-7xl lg:text-8xl text-[#ede0c4] leading-[0.95]">
              Nuestras<br />
              <span className="text-[#c8782a]">Cervezas</span>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:pt-10 flex items-end">
            <p className="font-source italic text-[15.5px] leading-[1.85] text-[#b8a786] max-w-md">
              Nueve estilos. Cada lote nace de la misma búsqueda: maltas seleccionadas a mano, lúpulo de cosecha y la paciencia de quien sabe que el tiempo no se acelera.
            </p>
          </div>
        </motion.div>

        {/* Grid asimétrico — columna central desfasada hacia abajo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-14 md:gap-y-16">
          {beers.map((beer, index) => (
            <motion.article
              key={beer.name}
              className={`group relative flex flex-col bg-kraft border border-[#3a2b1f] hover:border-[#c8782a]/60 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] ${offsetForIndex(index)}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Cinta superior — lote y estilo */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-[#3a2b1f] bg-[#1a1410]/60">
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#8a7a5e] font-bold">
                  Lote · N° {String(index + 1).padStart(3, '0')}
                </span>
                <span
                  className="font-gotham text-[10px] tracking-[0.3em] uppercase font-bold"
                  style={{ color: beer.color }}
                >
                  {beer.style}
                </span>
              </div>

              {/* Imagen */}
              <div className="relative w-full aspect-[5/4] overflow-hidden bg-[#0a0604]">
                <span className="absolute inset-0 z-10 bg-gradient-to-t from-[#1a1410] via-[#1a1410]/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-[1100ms]" />

                <motion.img
                  src={beer.image}
                  alt={beer.name}
                  className="object-cover w-full h-full grayscale-[0.35] saturate-[0.75] sepia-[0.15] group-hover:grayscale-0 group-hover:saturate-100 group-hover:sepia-0 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Sello ABV grande sobre la imagen */}
                <div className="absolute top-5 right-5 z-20 flex flex-col items-end">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-[#ede0c4]/80 mb-1 font-bold">
                    ABV
                  </span>
                  <span className="font-ganache text-4xl md:text-5xl text-[#ede0c4] leading-none">
                    {beer.abv}<span className="text-2xl md:text-3xl">%</span>
                  </span>
                </div>
              </div>

              {/* Cuerpo */}
              <div className="flex flex-col flex-grow px-7 pt-7 pb-6">

                {/* Nombre — Ganache */}
                <h4 className="font-ganache text-[2.1rem] md:text-[2.4rem] text-[#ede0c4] leading-[1] mb-3">
                  {beer.name}
                </h4>

                {/* Descripción — Source Serif */}
                <p className="font-source text-[14px] text-[#b8a786] leading-[1.75] mb-7">
                  {beer.desc}
                </p>

                {/* Notas de cata */}
                <div className="flex flex-wrap gap-1.5 mb-7">
                  {beer.notes.map((note) => (
                    <span
                      key={note}
                      className="font-mono text-[9.5px] tracking-[0.15em] uppercase text-[#d4c5a8] border border-[#3a2b1f] px-2.5 py-1 bg-[#1a1410]/40 group-hover:border-[#c8782a]/40 transition-colors duration-700 font-bold"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* SELLOS DE LABORATORIO CERVECERO — datos técnicos */}
                <div className="mt-auto pt-5 border-t border-[#3a2b1f] flex items-stretch gap-3">
                  <div className="lab-stamp flex-1">
                    <span className="lab-stamp__label">ABV</span>
                    <span className="lab-stamp__value">{beer.abv}%</span>
                  </div>
                  <div className="lab-stamp flex-1">
                    <span className="lab-stamp__label">IBU</span>
                    <span className="lab-stamp__value">{beer.ibu}</span>
                  </div>
                </div>
              </div>

              {/* Banda de color lateral */}
              <span
                className="absolute left-0 top-[58px] bottom-0 w-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                style={{ backgroundColor: beer.color }}
              />
            </motion.article>
          ))}
        </div>

        {/* Pie de sección — alineado a la derecha (asimetría editorial inversa) */}
        <motion.div
          className="grid grid-cols-12 gap-6 mt-32 md:mt-40 pt-16 border-t border-[#3a2b1f]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="col-span-12 lg:col-span-5 lg:col-start-2">
            <span className="font-gotham text-[10.5px] tracking-[0.5em] uppercase text-[#c8782a] font-bold mb-4 inline-block">
              ✦ Edición Artesanal
            </span>
            <p className="font-source italic text-2xl md:text-3xl text-[#ede0c4]/85 leading-[1.4]">
              "Cada botella lleva el oficio de quien la elaboró — y el silencio de las montañas."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
