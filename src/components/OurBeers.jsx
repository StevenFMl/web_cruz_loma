import { motion } from 'framer-motion';

/* Textura de papel kraft oscuro / metal cepillado — ruido de baja frecuencia */
const kraftTexture = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='k'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.06' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.05  0 0 0 0 0.035  0 0 0 0 0.02  0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23k)'/%3E%3C/svg%3E\")",
};

/* Textura de metal oxidado — ruido más fino, tinte cobre */
const metalTexture = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.45  0 0 0 0 0.18  0 0 0 0 0.04  0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23m)'/%3E%3C/svg%3E\")",
};

const beers = [
  {
    name: 'Pale Ale',
    style: 'Pale Ale',
    abv: '5,5%',
    notes: ['Maltoso dulce', 'Frutal', 'Lúpulo medio'],
    desc: 'Cerveza rubia, ligera, de carácter maltoso dulce, con presencia del lúpulo en el que tendrá básicamente carácteres frutales.',
    image: 'https://images.unsplash.com/photo-1614316945084-3c87e1f40fa4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Irish Red Ale',
    style: 'Red Ale',
    abv: '6%',
    notes: ['Caramelo', 'Tostado', 'Final seco'],
    desc: 'Color ámbar-rojizo, transparente, espuma canela. Sabor inclinado a las maltas con notas a caramelo. Aroma dulce a grano o caramelo tostado, con muy baja presencia de lúpulo.',
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Sweet Stout',
    style: 'Stout',
    abv: '8,9%',
    notes: ['Café', 'Chocolate', 'Cuerpo robusto'],
    desc: 'Cerveza oscura debido a los ingredientes que se usan en su elaboración: cebada tostada o maltas chocolate. El aroma también es tostado, similar al café o al chocolate.',
    image: 'https://images.unsplash.com/photo-1588686948574-d2e7d70362da?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Black IPA',
    style: 'Black IPA',
    abv: '7,8%',
    notes: ['Café', 'Frutas', 'Amarga'],
    desc: 'Cerveza oscura compleja, equilibrada que combina la amargura y aroma de las IPA, con notas de café, chocolate y frutas. La llamamos Night Forest.',
    image: 'https://images.unsplash.com/photo-1571767454098-246b94fbcf70?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Weissbier',
    style: 'Trigo',
    abv: '6,5%',
    notes: ['Plátano', 'Clavo', 'Especias'],
    desc: 'Cerveza de trigo, textura suave y refrescante, con sabor ligeramente dulce y ácido, con aromas a plátano, clavo y especias. Popular en Alemania, especialmente en el Oktoberfest.',
    image: 'https://images.unsplash.com/photo-1559526324-c1f275fbfa32?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'APA Maracuyá',
    style: 'APA',
    abv: '7,2%',
    notes: ['Maracuyá', 'Cítrico', 'Herbal'],
    desc: 'Cerveza ámbar, textura suave y refrescante, de amargor medio, marcado aroma y sabor a maracuyá con notas cítricas y herbales.',
    image: 'https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Pumpkin Ale',
    style: 'Spiced Ale',
    abv: '8,4%',
    notes: ['Calabaza', 'Canela', 'Cremosa'],
    desc: 'Cerveza ámbar, fuerte y malteada de carácter dulce, que rememora a un pastel de calabaza. Amargor suave con notas de canela, cremosa, dejando una sedosidad particular en boca.',
    image: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Belgian Tripel',
    style: 'Tripel',
    abv: '8%',
    notes: ['Malta', 'Frutas', 'Especias'],
    desc: 'Cerveza dorada, cuerpo ligero, sabores complejos que combinan notas a malta, frutas y especias, con un final seco y un alto contenido de alcohol.',
    image: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'India Pale Ale',
    style: 'IPA',
    abv: '7%',
    notes: ['Lúpulo intenso', 'Frutas tropicales', 'Refrescante'],
    desc: 'Cerveza dorada, con gran cantidad de lúpulo, refrescante, donde domina el aroma y sabor intenso a frutas tropicales.',
    image: 'https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1400&auto=format&fit=crop',
  },
];

/* Tarjeta tipo placa de metal grabada — fondo kraft oscuro + hairlines duras */
const Spread = ({ beer, index }) => {
  const isOdd = index % 2 === 1;
  const numero = String(index + 1).padStart(2, '0');
  const ghostWord = beer.name.split(' ')[0];

  return (
    <article
      className={`relative min-h-[85vh] py-24 md:py-32 lg:py-40 border-t-2 border-copper overflow-hidden ${
        isOdd ? 'bg-asphalt' : 'bg-carbon'
      }`}
      style={kraftTexture}
    >
      {/* Capa de oscurecimiento sólido sobre la textura, sin halos */}
      <div className="absolute inset-0 bg-carbon/55 pointer-events-none" />

      {/* Línea de remache cobre — sub-hairline a 2px del borde superior */}
      <div className="absolute top-2 inset-x-0 h-px bg-copper/40 pointer-events-none" />

      {/* Tipografía fantasma — nombre gigante en watermark */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
        <span
          className={`font-display uppercase text-bone/[0.05] whitespace-nowrap leading-[0.8] select-none block ${
            isOdd ? '-translate-x-[8%]' : 'translate-x-[8%] ml-auto'
          }`}
          style={{
            fontSize: 'clamp(11rem, 32vw, 28rem)',
            letterSpacing: '-0.04em',
          }}
        >
          {ghostWord}
        </span>
      </div>

      {/* Sello vertical numerado en el borde exterior */}
      <div
        className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4 ${
          isOdd ? 'right-4' : 'left-4'
        }`}
      >
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper origin-center -rotate-90 whitespace-nowrap py-12">
          Nº {numero} / 09 — {beer.style}
        </span>
        <span className="block h-32 w-[2px] bg-copper" />
      </div>

      {/* Grid principal */}
      <div className="relative z-10 max-w-[110rem] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Imagen — placa con remaches en las esquinas, grayscale por defecto */}
          <motion.div
            className={`lg:col-span-5 ${isOdd ? 'lg:order-2' : 'lg:order-1'}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="group relative">
              {/* Remaches/escuadras de las cuatro esquinas */}
              <span aria-hidden="true" className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-copper z-20" />
              <span aria-hidden="true" className="absolute -top-1 -right-1 w-10 h-10 border-t-2 border-r-2 border-copper z-20" />
              <span aria-hidden="true" className="absolute -bottom-1 -left-1 w-10 h-10 border-b-2 border-l-2 border-copper z-20" />
              <span aria-hidden="true" className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-copper z-20" />

              <div className="relative aspect-[3/4] overflow-hidden border-2 border-copper-deep bg-carbon">
                <img
                  src={beer.image}
                  alt={beer.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.78] transition-[filter] duration-[900ms] ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                />
                {/* Velo cobre que desaparece al hover */}
                <div className="absolute inset-0 bg-carbon/30 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />

                {/* Strip superior tipo etiqueta */}
                <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 py-3 font-mono text-[10px] tracking-[0.4em] uppercase text-bone bg-carbon/85 border-b-2 border-copper">
                  <span>Nº {numero}</span>
                  <span className="text-copper">{beer.abv}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            className={`lg:col-span-7 ${isOdd ? 'lg:order-1' : 'lg:order-2'}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="editorial-eyebrow mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-copper" />
              {beer.style} · {beer.abv}
            </p>

            {/* Titular gigante — Anton, mayúsculas, color cobre */}
            <h3
              className="font-display text-copper leading-[0.82] tracking-tight mb-8 uppercase break-words"
              style={{ fontSize: 'clamp(2.75rem, 8vw, 8rem)' }}
            >
              {beer.name}
            </h3>

            {/* Línea de metal — separador cobre 2px */}
            <div className="h-[2px] w-32 bg-copper mb-8" />

            <p className="font-sans text-bone/85 text-base md:text-lg leading-relaxed max-w-xl mb-10">
              {beer.desc}
            </p>

            {/* Notas de cata — chips con borde duro 2px, no son etiquetas blandas */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
              {beer.notes.map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center font-mono text-[10px] tracking-[0.3em] uppercase text-bone/90 border-2 border-copper-deep px-3 py-2 bg-carbon/60"
                >
                  {n}
                </span>
              ))}
            </div>

            {/* Stats — separadores metálicos. En móvil envuelve, no se desborda */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-5 sm:gap-x-10 md:gap-x-14 border-t-2 border-copper/40 pt-6">
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper mb-2">
                  ABV
                </div>
                <div className="font-display text-4xl md:text-5xl text-bone uppercase tracking-tight">
                  {beer.abv}
                </div>
              </div>
              <span className="block h-12 sm:h-14 w-[2px] bg-copper/50" />
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper mb-2">
                  Estilo
                </div>
                <div className="font-display text-2xl md:text-4xl text-bone uppercase tracking-tight">
                  {beer.style}
                </div>
              </div>
              <span className="block h-12 sm:h-14 w-[2px] bg-copper/50" />
              <div>
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-copper mb-2">
                  Edición
                </div>
                <div className="font-display text-2xl md:text-4xl text-bone uppercase tracking-tight">
                  Nº {numero}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Hairline cobre inferior — cierra la placa de metal */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-copper/40 pointer-events-none" />
    </article>
  );
};

export default function OurBeers() {
  return (
    <section
      id="cervezas"
      className="relative bg-carbon overflow-hidden"
      style={metalTexture}
    >
      {/* Capa de oscurecimiento global, no permite que la textura levante el negro */}
      <div className="absolute inset-0 bg-carbon/85 pointer-events-none" />

      {/* Apertura editorial */}
      <div className="relative z-10 max-w-[110rem] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 border-b-2 border-copper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="editorial-eyebrow mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-copper" />
              Selección 2025
            </p>
            <h2
              className="font-display text-bone leading-[0.82] tracking-tight uppercase"
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
            >
              Nueve estilos.<br />
              <span className="text-copper">Nueve obsesiones.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-12 md:border-l-2 md:border-copper">
            <p className="font-sans text-base md:text-lg text-bone/75 leading-relaxed">
              Cada receta es una conversación con la altura, el lúpulo y el tiempo. No
              imprimimos etiquetas en serie — fermentamos carácteres. Pase la página y
              elija el suyo.
            </p>
          </div>
        </div>
      </div>

      {/* Spreads de cervezas */}
      <div className="relative z-10">
        {beers.map((beer, i) => (
          <Spread key={beer.name} beer={beer} index={i} />
        ))}
      </div>

      {/* Colofón inferior */}
      <div className="relative z-10 max-w-[110rem] mx-auto px-6 md:px-12 lg:px-20 py-16 border-t-2 border-copper">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.4em] uppercase text-bone/60">
          <span>Fin de la carta</span>
          <span className="hidden md:block text-copper">Cruz Loma · Mitad del Mundo</span>
          <span>09 / 09</span>
        </div>
      </div>
    </section>
  );
}
