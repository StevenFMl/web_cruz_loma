import { motion } from 'framer-motion';

const Spec = ({ label, value }) => (
  <div>
    <div className="font-mono text-[9px] tracking-[0.5em] uppercase text-copper mb-2">
      {label}
    </div>
    <div className="font-editorial italic text-2xl text-bone leading-none">
      {value}
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-carbon">

      {/* ─── Immersive background photograph ─── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=2400&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-55 mix-blend-luminosity"
          fetchpriority="high"
        />
        {/* Heavy editorial vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/95 via-carbon/55 to-carbon"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/80 via-transparent to-carbon/80"></div>
        {/* Photographic grain — heavier than the global overlay */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E\")",
          }}
        ></div>
        {/* Slow copper top-glow */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(184,115,51,0.30) 0%, transparent 65%)' }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* ─── Content grid ─── */}
      <div className="relative z-10 min-h-[100svh] flex flex-col px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-12">

        {/* Top meta bar — magazine masthead */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex items-center justify-between font-mono text-[10px] tracking-[0.5em] uppercase text-bone/50"
        >
          <span>Nº 001 · Vol. I</span>
          <span className="flex items-center gap-3">
            <span className="h-px w-10 bg-copper/40"></span>
            Edición Especial
            <span className="h-px w-10 bg-copper/40"></span>
          </span>
          <span>Quito · Ecuador</span>
        </motion.div>

        {/* Main composition — bottom-left dominant */}
        <div className="flex-grow flex flex-col justify-end mt-16 md:mt-0">
          <div className="grid grid-cols-12 gap-6 md:gap-12">

            {/* Left: oversized editorial title */}
            <motion.div
              className="col-span-12 lg:col-span-9"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="editorial-eyebrow mb-6 md:mb-10 flex items-center gap-4">
                <span className="h-px w-10 bg-copper"></span>
                Capítulo I · Manifiesto
              </p>

              {/* Title bleeds out of safe area on the left */}
              <h1 className="font-editorial italic text-bone leading-[0.85] tracking-tight">
                <motion.span
                  className="block -ml-1 md:-ml-3"
                  style={{ fontSize: 'clamp(4rem, 16vw, 14rem)' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 }}
                >
                  Cerveza
                </motion.span>
                <motion.span
                  className="block text-copper -ml-1 md:-ml-3"
                  style={{ fontSize: 'clamp(4rem, 16vw, 14rem)' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.65 }}
                >
                  Artesanal.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-8 max-w-xl font-sans text-bone/70 text-sm md:text-base leading-relaxed"
              >
                Forjada a 2.964 metros sobre el nivel del mar, donde el aire delgado y el agua
                pura de los Andes labran un carácter imposible de imitar.
                <span className="text-copper"> Sin atajos.</span>
              </motion.p>

              {/* CTAs — animated underline, no boxed buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="mt-12 md:mt-16 flex flex-wrap items-center gap-x-12 gap-y-6"
              >
                <a
                  href="#cervezas"
                  className="group inline-flex items-center gap-5 font-mono text-[11px] md:text-xs tracking-[0.4em] uppercase text-bone hover:text-copper transition-colors duration-500"
                >
                  <span className="relative pb-2 overflow-hidden">
                    Explorar la carta
                    <span className="absolute bottom-0 left-0 h-px w-full bg-bone/60 group-hover:bg-copper transition-colors duration-500"></span>
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-copper group-hover:w-full transition-all duration-700 ease-out"></span>
                  </span>
                  <span className="text-copper transform group-hover:translate-x-2 transition-transform duration-500">
                    →
                  </span>
                </a>

                <a
                  href="#historia"
                  className="hidden sm:inline-flex font-mono text-[11px] md:text-xs tracking-[0.4em] uppercase text-bone/40 hover:text-bone transition-colors duration-500 border-b border-transparent hover:border-bone/30 pb-2"
                >
                  Nuestra historia →
                </a>
              </motion.div>
            </motion.div>

            {/* Right: vertical spec column with copper rule */}
            <motion.aside
              className="hidden lg:flex col-span-3 flex-col justify-end gap-10 pl-10 border-l border-copper/30"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Spec label="Estilos" value="09" />
              <Spec label="ABV" value="5.5 — 8.9%" />
              <Spec label="Origen" value="Mitad del Mundo" />
              <Spec label="Año" value="MMXXV" />
            </motion.aside>
          </div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-12 md:mt-16 flex items-end justify-between font-mono text-[10px] tracking-[0.4em] uppercase text-bone/40 border-t border-graphite/60 pt-6"
        >
          <div className="flex items-center gap-4">
            <span>Scroll</span>
            <motion.span
              className="block h-px w-16 bg-bone/40 origin-left"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <span className="hidden md:block">100% Ecuatoriana — Sin filtrar</span>
        </motion.div>
      </div>
    </section>
  );
}
