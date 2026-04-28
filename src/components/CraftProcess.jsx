import { motion } from 'framer-motion';

/* Textura de pizarra de bar — ruido fino con tinte muy oscuro */
const chalkboardTexture = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='ch'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.04  0 0 0 0 0.03  0 0 0 0 0.02  0 0 0 0.65 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ch)'/%3E%3C/svg%3E\")",
};

/* Textura de cartel metálico gastado — manchas cobre/óxido distribuidas */
const weatheredMetal = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='wm'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.018' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.55  0 0 0 0 0.22  0 0 0 0 0.04  0 0 0 0.22 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23wm)'/%3E%3C/svg%3E\")",
};

const steps = [
  {
    num: '01',
    eyebrow: 'Fase I · Captación',
    title: 'Agua de Altura',
    body: 'Captada de los manantiales andinos a 2.964 metros sobre el nivel del mar. Filtrada durante siglos por la roca volcánica. Dura, mineral, viva.',
    spec: 'pH 7.2 · 2.964 m.s.n.m.',
    image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1600&auto=format&fit=crop',
  },
  {
    num: '02',
    eyebrow: 'Fase II · Maceración',
    title: 'Maltas Tostadas',
    body: 'Granos seleccionados a mano y tostados en lotes pequeños. Cada perfil de tostado decide el color, el cuerpo y la dulzura del trago final.',
    spec: '64°C · 60 min · maceración',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=1600&auto=format&fit=crop',
  },
  {
    num: '03',
    eyebrow: 'Fase III · Cocción',
    title: 'Lúpulo Vivo',
    body: 'Conos enteros, en frío y en caliente. El amargor exacto y los aromas cítricos, resinosos, herbales que firman el carácter de cada estilo.',
    spec: 'Whirlpool · Dry-hop',
    image: 'https://images.unsplash.com/photo-1532634726-8b9fb99825c4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    num: '04',
    eyebrow: 'Fase IV · Fermentación',
    title: 'Reposo Largo',
    body: 'Tres semanas mínimo en tanques de acero. Sin filtrar, sin atajos. La levadura termina su trabajo a su ritmo, no al nuestro.',
    spec: '21 días · 18°C · sin pasteurizar',
    image: 'https://images.unsplash.com/photo-1514218953589-2d7d37efd2dc?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function CraftProcess() {
  return (
    <section
      className="relative bg-carbon overflow-hidden border-t-2 border-copper"
      style={chalkboardTexture}
    >
      {/* Capa de oscurecimiento global — la pizarra no debe levantar el negro */}
      <div className="absolute inset-0 bg-carbon/80 pointer-events-none" />

      {/* Doble línea de cobre tipo remache — cierra el cartel arriba */}
      <div className="absolute top-3 inset-x-0 h-px bg-copper/45 pointer-events-none" />

      {/* Riel vertical descentrado — barra metálica sólida, sin desvanecidos */}
      <div
        aria-hidden="true"
        className="hidden md:block pointer-events-none absolute left-[8%] top-[32rem] bottom-40 w-[2px] bg-copper/40 z-10"
      />

      {/* ─── Masthead — cartel impreso en metal gastado ───────── */}
      <header className="relative z-20 px-6 md:px-12 lg:px-20 max-w-[110rem] mx-auto pt-24 md:pt-40 pb-20 md:pb-32">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="editorial-eyebrow mb-6">— Cuaderno de Bitácora · Nº 04</p>
            <h2 className="font-display uppercase text-bone text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.82] tracking-tight break-words">
              Cuatro<br />
              <span className="text-copper">Elementos</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-8 md:mt-0">
            <div className="h-[2px] w-20 bg-copper mb-6" />
            <p className="font-cond text-bone/85 text-xl md:text-2xl leading-snug max-w-md uppercase tracking-wide">
              Una obsesión que se mide en grados, en horas, en silencio. Lo que entra al tanque importa menos que el tiempo que pasa dentro.
            </p>
          </div>
        </div>
      </header>

      {/* ─── Fases — cada una un cartel de metal gastado ──────── */}
      <div className="relative z-20 px-6 md:px-12 lg:px-20 max-w-[110rem] mx-auto pb-32 md:pb-48">
        {steps.map((step, i) => (
          <PhaseRow key={step.num} step={step} reverse={i % 2 === 1} index={i} />
        ))}
      </div>

      {/* ─── Colofón ─────────────────────────────────────────── */}
      <div className="relative z-20 border-t-2 border-copper px-6 md:px-12 lg:px-20 max-w-[110rem] mx-auto py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-bone/60">
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
      style={{ willChange: 'transform, opacity', ...weatheredMetal }}
      className={`relative grid grid-cols-12 gap-4 md:gap-8 px-2 py-12 md:py-20 ${index === 0 ? 'mt-0' : 'mt-24 md:mt-40'} border-t-2 border-b-2 border-copper bg-carbon/60`}
    >
      {/* Capa que sella el ruido — para que el texto pegue limpio */}
      <div className="absolute inset-0 bg-carbon/55 pointer-events-none" />

      {/* Numeral fantasma — fase pintada al fondo del cartel */}
      <span
        aria-hidden="true"
        className={`pointer-events-none select-none absolute z-0 font-display uppercase leading-[0.78] tracking-[-0.05em] text-copper/[0.08] top-[-3rem] md:top-[-7rem] text-[12rem] sm:text-[16rem] md:text-[22rem] xl:text-[30rem] ${
          reverse ? 'right-[-1rem] md:right-[-3rem]' : 'left-[-1rem] md:left-[-3rem]'
        }`}
      >
        {step.num}
      </span>

      {/* IMAGEN — placa con esquinas y filtro grayscale por defecto */}
      <div
        className={`relative z-10 col-span-12 md:col-span-7 ${
          reverse ? 'md:col-start-6' : 'md:col-start-1'
        } px-3 md:px-6`}
      >
        <div className="group relative">
          {/* Escuadras / remaches en las cuatro esquinas */}
          <span aria-hidden="true" className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-copper z-20" />
          <span aria-hidden="true" className="absolute -top-1 -right-1 w-10 h-10 border-t-2 border-r-2 border-copper z-20" />
          <span aria-hidden="true" className="absolute -bottom-1 -left-1 w-10 h-10 border-b-2 border-l-2 border-copper z-20" />
          <span aria-hidden="true" className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-copper z-20" />

          <div className="relative overflow-hidden border-2 border-copper-deep bg-carbon aspect-[4/5] md:aspect-[5/4]">
            <img
              src={step.image}
              alt={step.title}
              loading="lazy"
              className="w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.78] transition-[filter] duration-[900ms] ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-carbon/30 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />

            {/* Sello de fase numerado tipo placa de máquina */}
            <div className="absolute top-0 left-0 flex items-center gap-2 sm:gap-3 bg-copper text-carbon px-3 py-2 sm:px-4 font-cond font-bold tracking-[0.3em] sm:tracking-[0.35em] uppercase">
              <span className="text-[9px] sm:text-[10px]">Fase</span>
              <span className="font-display text-xl sm:text-2xl leading-none">{step.num}</span>
            </div>
          </div>
        </div>
      </div>

      {/* TEXTO — manuscrito de bitácora industrial */}
      <div
        className={`relative z-10 col-span-12 md:col-span-4 ${
          reverse ? 'md:col-start-1' : 'md:col-start-9'
        } flex flex-col justify-end pt-8 md:pt-0 px-3 md:px-6`}
      >
        {/* Numeral grande visible — aplastado contra el texto, tipo serial estampado */}
        <div className="flex items-baseline gap-3 sm:gap-4 mb-4">
          <span className="font-display text-copper text-6xl sm:text-7xl md:text-8xl leading-none tracking-tight">
            {step.num}
          </span>
          <span className="block h-[2px] flex-1 bg-copper/50" />
        </div>

        <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper mb-4 break-words">
          {step.eyebrow}
        </p>
        <h3 className="font-display uppercase text-bone text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.88] tracking-tight mb-6 break-words">
          {step.title}
        </h3>
        <div className="h-[2px] w-20 bg-copper mb-6" />
        <p className="font-sans text-bone/80 text-base md:text-lg leading-relaxed max-w-md">
          {step.body}
        </p>
        <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-bone/70 mt-8 border-t-2 border-copper/40 pt-4">
          {step.spec}
        </p>
      </div>
    </motion.article>
  );
}
