import { motion } from 'framer-motion';

const beers = [
  {
    name: 'Pale Ale',
    style: 'Pale Ale',
    abv: '5,5%',
    notes: ['Maltoso dulce', 'Notas frutales', 'Lúpulo medio'],
    desc: 'Cerveza rubia, ligera, de carácter maltoso dulce, con presencia del lúpulo en el que tendrá básicamente carácteres frutales.',
    accent: 'text-yellow-500',
    image: 'https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Irish Red Ale',
    style: 'Red Ale',
    abv: '6%',
    notes: ['Caramelo', 'Tostado', 'Final seco'],
    desc: 'Color ámbar-rojizo, transparente, espuma canela. Sabor inclinado a las maltas con notas a caramelo. Aroma dulce a grano o caramelo tostado, con muy baja presencia de lúpulo.',
    accent: 'text-red-600',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Sweet Stout',
    style: 'Stout',
    abv: '8,9%',
    notes: ['Café', 'Chocolate', 'Cuerpo robusto'],
    desc: 'Cerveza oscura debido a los ingredientes que se usan en su elaboración: cebada tostada o maltas chocolate. El aroma también es tostado, similar al café o al chocolate.',
    accent: 'text-stone-300',
    image: 'https://images.unsplash.com/photo-1588686948574-d2e7d70362da?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Black IPA',
    style: 'Black IPA',
    abv: '7,8%',
    notes: ['Café', 'Frutas', 'Amarga'],
    desc: 'Cerveza oscura compleja, equilibrada que combina la amargura y aroma de las IPA, con notas de café, chocolate y frutas. La llamamos Night Forest.',
    accent: 'text-zinc-400',
    image: 'https://images.unsplash.com/photo-1588686948574-d2e7d70362da?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Weissbier',
    style: 'Trigo',
    abv: '6,5%',
    notes: ['Plátano', 'Clavo', 'Especias'],
    desc: 'Cerveza de trigo, textura suave y refrescante, con sabor ligeramente dulce y ácido, con aromas a plátano, clavo y especias. Popular en Alemania, especialmente en el Oktoberfest.',
    accent: 'text-amber-300',
    image: 'https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'APA Maracuyá',
    style: 'APA',
    abv: '7,2%',
    notes: ['Maracuyá', 'Cítrico', 'Herbal'],
    desc: 'Cerveza ámbar, textura suave y refrescante, de amargor medio, marcado aroma y sabor a maracuyá con notas cítricas y herbales.',
    accent: 'text-orange-400',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Pumpkin Ale',
    style: 'Spiced Ale',
    abv: '8,4%',
    notes: ['Calabaza', 'Canela', 'Cremosa'],
    desc: 'Cerveza ámbar, fuerte y malteada de carácter dulce, que rememora a un pastel de calabaza. Amargor suave con notas de canela, cremosa, dejando una sedosidad particular en boca.',
    accent: 'text-orange-600',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Belgian Tripel',
    style: 'Tripel',
    abv: '8%',
    notes: ['Malta', 'Frutas', 'Especias'],
    desc: 'Cerveza dorada, cuerpo ligero, sabores complejos que combinan notas a malta, frutas y especias, con un final seco y un alto contenido de alcohol.',
    accent: 'text-yellow-600',
    image: 'https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'India Pale Ale',
    style: 'IPA',
    abv: '7%',
    notes: ['Lúpulo intenso', 'Frutas tropicales', 'Refrescante'],
    desc: 'Cerveza dorada, con gran cantidad de lúpulo, refrescante, donde domina el aroma y sabor intenso a frutas tropicales.',
    accent: 'text-green-500',
    image: 'https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=1200&auto=format&fit=crop',
  },
];

const Spread = ({ beer, index }) => {
  const isOdd = index % 2 === 1;
  const numero = String(index + 1).padStart(2, '0');
  // First word of the name for the giant background type
  const ghostWord = beer.name.split(' ')[0];

  return (
    <article
      className={`relative min-h-[85vh] py-24 md:py-32 lg:py-40 border-t border-copper/15 overflow-hidden ${
        isOdd ? 'bg-asphalt/30' : 'bg-carbon'
      }`}
    >
      {/* Giant ghost type — beer name as massive faded background */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
        <span
          className={`font-slab uppercase text-bone/[0.04] whitespace-nowrap leading-[0.8] select-none block ${
            isOdd ? '-translate-x-[8%]' : 'translate-x-[8%] ml-auto'
          }`}
          style={{
            fontSize: 'clamp(10rem, 30vw, 26rem)',
            letterSpacing: '-0.05em',
          }}
        >
          {ghostWord}
        </span>
      </div>

      {/* Editorial side index — vertical numero on the outer edge */}
      <div
        className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 ${
          isOdd ? 'right-4' : 'left-4'
        }`}
      >
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper origin-center -rotate-90 whitespace-nowrap py-12">
          Nº {numero} / 09 — {beer.style}
        </span>
        <span className="block h-32 w-px bg-copper/40"></span>
      </div>

      {/* Main grid */}
      <div className="relative z-10 max-w-[110rem] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Image — bleeds with mix-blend */}
          <motion.div
            className={`lg:col-span-5 ${isOdd ? 'lg:order-2' : 'lg:order-1'}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={beer.image}
                alt={beer.name}
                className="w-full h-full object-cover mix-blend-luminosity opacity-95 sepia-[0.15] grayscale-[0.1]"
                loading="lazy"
              />
              {/* Tone overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-carbon/10 to-carbon/30"></div>
              {/* Top label strip */}
              <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 py-3 font-mono text-[10px] tracking-[0.4em] uppercase text-bone/80">
                <span>Nº {numero}</span>
                <span>{beer.abv}</span>
              </div>
              {/* Bottom corner ticks */}
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-copper/60"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-copper/60"></div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className={`lg:col-span-7 ${isOdd ? 'lg:order-1' : 'lg:order-2'}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="editorial-eyebrow mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-copper"></span>
              {beer.style} · {beer.abv}
            </p>

            {/* Massive editorial headline */}
            <h3
              className="font-editorial italic text-bone leading-[0.9] tracking-tight mb-10"
              style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
            >
              {beer.name}
            </h3>

            <div className="rule-h max-w-xs mb-8"></div>

            <p className="font-sans text-bone/70 text-base md:text-lg leading-relaxed max-w-xl mb-10">
              {beer.desc}
            </p>

            {/* Tasting notes — editorial caption row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-12">
              {beer.notes.map((n, i) => (
                <span key={n} className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-bone/60">
                    {n}
                  </span>
                  {i < beer.notes.length - 1 && (
                    <span className="text-copper/60">·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-10 md:gap-14">
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper mb-2">
                  ABV
                </div>
                <div className="font-slab text-4xl md:text-5xl text-bone">
                  {beer.abv}
                </div>
              </div>
              <span className="block h-14 w-px bg-copper/30"></span>
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper mb-2">
                  Estilo
                </div>
                <div className="font-editorial italic text-2xl md:text-3xl text-bone">
                  {beer.style}
                </div>
              </div>
              <span className="hidden sm:block h-14 w-px bg-copper/30"></span>
              <div className="hidden sm:block">
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper mb-2">
                  Edición
                </div>
                <div className="font-editorial italic text-2xl md:text-3xl text-bone">
                  Nº {numero}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </article>
  );
};

export default function OurBeers() {
  return (
    <section
      id="cervezas"
      className="relative bg-carbon overflow-hidden"
    >
      {/* Section opening — small editorial intro */}
      <div className="relative max-w-[110rem] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="editorial-eyebrow mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-copper"></span>
              Selección 2025
            </p>
            <h2
              className="font-editorial italic text-bone leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              Nueve estilos.<br />
              <span className="text-copper">Nueve obsesiones.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-12 md:border-l md:border-copper/20">
            <p className="font-sans text-sm md:text-base text-bone/65 leading-relaxed">
              Cada receta es una conversación con la altura, el lúpulo y el tiempo. No
              imprimimos etiquetas en serie — fermentamos carácteres. Pase la página y
              elija el suyo.
            </p>
          </div>
        </div>
      </div>

      {/* Beer spreads — zigzag */}
      {beers.map((beer, i) => (
        <Spread key={beer.name} beer={beer} index={i} />
      ))}

      {/* Editorial closing rule */}
      <div className="relative max-w-[110rem] mx-auto px-6 md:px-12 lg:px-20 py-16 border-t border-copper/15">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.4em] uppercase text-bone/40">
          <span>Fin de la carta</span>
          <span className="hidden md:block">Cruz Loma · Mitad del Mundo</span>
          <span>09 / 09</span>
        </div>
      </div>
    </section>
  );
}
