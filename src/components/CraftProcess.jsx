import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    eyebrow: 'Fase I · Captación',
    title: 'Agua de Altura',
    body: 'Captada de los manantiales andinos a 2.964 metros sobre el nivel del mar. Filtrada durante siglos por la roca volcánica. Dura, mineral, viva.',
    spec: 'pH 7.2  ·  2.964 m.s.n.m.',
    image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1600&auto=format&fit=crop',
  },
  {
    num: '02',
    eyebrow: 'Fase II · Maceración',
    title: 'Maltas Tostadas',
    body: 'Granos seleccionados a mano y tostados en lotes pequeños. Cada perfil de tostado decide el color, el cuerpo y la dulzura del trago final.',
    spec: '64°C  ·  60 min  ·  maceración',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=1600&auto=format&fit=crop',
  },
  {
    num: '03',
    eyebrow: 'Fase III · Cocción',
    title: 'Lúpulo Vivo',
    body: 'Conos enteros, en frío y en caliente. El amargor exacto y los aromas cítricos, resinosos, herbales que firman el carácter de cada estilo.',
    spec: 'Whirlpool  ·  Dry-hop',
    image: 'https://images.unsplash.com/photo-1532634726-8b9fb99825c4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    num: '04',
    eyebrow: 'Fase IV · Fermentación',
    title: 'Reposo Largo',
    body: 'Tres semanas mínimo en tanques de acero. Sin filtrar, sin atajos. La levadura termina su trabajo a su ritmo, no al nuestro.',
    spec: '21 días  ·  18°C  ·  sin pasteurizar',
    image: 'https://images.unsplash.com/photo-1514218953589-2d7d37efd2dc?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function CraftProcess() {
  return (
    <section className="relative bg-carbon overflow-hidden border-t border-graphite/60">

      {/* Off-center vertical timeline rail */}
      <div
        aria-hidden="true"
        className="hidden md:block pointer-events-none absolute left-[8%] top-[28rem] bottom-40 w-px bg-gradient-to-b from-transparent via-copper/30 to-transparent"
      />

      {/* ─── Masthead ──────────────────────────────────────────── */}
      <header className="relative px-6 md:px-12 lg:px-20 max-w-[110rem] mx-auto pt-24 md:pt-40 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
          <div className="col-span-12 md:col-span-6">
            <p className="editorial-eyebrow mb-6">— Cuaderno de Bitácora · Nº 04</p>
            <h2 className="font-slab uppercase text-bone text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tight">
              Cuatro<br />
              <span className="text-copper">Elementos</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-8 md:mt-0">
            <div className="rule-h mb-6 w-20" />
            <p className="font-editorial italic text-bone/75 text-xl md:text-2xl leading-snug max-w-md">
              Una obsesión que se mide en grados, en horas, en silencio. Lo que entra al tanque importa menos que el tiempo que pasa dentro.
            </p>
          </div>
        </div>
      </header>

      {/* ─── Phases ────────────────────────────────────────────── */}
      <div className="relative px-6 md:px-12 lg:px-20 max-w-[110rem] mx-auto pb-32 md:pb-48">
        {steps.map((step, i) => (
          <PhaseRow key={step.num} step={step} reverse={i % 2 === 1} index={i} />
        ))}
      </div>

      {/* ─── Closing colophon ──────────────────────────────────── */}
      <div className="relative border-t border-graphite/50 px-6 md:px-12 lg:px-20 max-w-[110rem] mx-auto py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-ash">
          Fin del cuaderno · Cruz Loma
        </span>
        <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-copper">
          Embotellado a 2.964 m.s.n.m.
        </span>
      </div>
    </section>
  );
}

function PhaseRow({ step, reverse, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform, opacity' }}
      className={`relative grid grid-cols-12 gap-4 md:gap-8 ${index === 0 ? 'mt-0' : 'mt-32 md:mt-56'}`}
    >
      {/* Giant guiding numeral — bleeds across the section */}
      <span
        aria-hidden="true"
        className={`pointer-events-none select-none absolute z-0 font-slab leading-[0.78] tracking-[-0.06em] text-bone/[0.05] top-[-3rem] md:top-[-7rem] text-[12rem] sm:text-[16rem] md:text-[22rem] xl:text-[28rem] ${
          reverse ? 'right-[-1rem] md:right-[-3rem]' : 'left-[-1rem] md:left-[-3rem]'
        }`}
      >
        {step.num}
      </span>

      {/* IMAGE BLOCK */}
      <div
        className={`relative z-10 col-span-12 md:col-span-7 ${
          reverse ? 'md:col-start-6' : 'md:col-start-1'
        }`}
      >
        <div className="group relative">
          {/* tactile rim brackets */}
          <span aria-hidden="true" className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-copper/70 z-20" />
          <span aria-hidden="true" className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-copper/70 z-20" />

          <div className="relative overflow-hidden bg-asphalt aspect-[4/5] md:aspect-[5/4]">
            <img
              src={step.image}
              alt={step.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover grayscale sepia-[0.45] brightness-[0.82] contrast-[1.05] group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 transition-[filter] duration-[2200ms] ease-out"
            />
            {/* depth gradient for type contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent pointer-events-none" />

            {/* Numeric stamp */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-bone/70">Fase</span>
              <span className="font-slab text-bone text-2xl md:text-3xl leading-none">{step.num}</span>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT BLOCK */}
      <div
        className={`relative z-10 col-span-12 md:col-span-4 ${
          reverse ? 'md:col-start-1' : 'md:col-start-9'
        } flex flex-col justify-end pt-8 md:pt-0`}
      >
        <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper mb-4">
          {step.eyebrow}
        </p>
        <h3 className="font-slab uppercase text-bone text-4xl md:text-5xl lg:text-6xl leading-[0.92] tracking-tight mb-6">
          {step.title}
        </h3>
        <div className="rule-h w-20 mb-6" />
        <p className="font-editorial text-bone/75 text-base md:text-lg leading-relaxed max-w-md">
          {step.body}
        </p>
        <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-ash mt-8 border-t border-graphite/60 pt-4">
          {step.spec}
        </p>
      </div>
    </motion.article>
  );
}
