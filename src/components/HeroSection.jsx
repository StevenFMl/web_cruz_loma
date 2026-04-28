import { motion } from 'framer-motion';

const Spec = ({ label, value }) => (
  <div className="border-l-2 border-copper pl-5">
    <div className="font-mono text-[9px] tracking-[0.5em] uppercase text-copper mb-2">
      {label}
    </div>
    <div className="font-display text-3xl text-bone leading-none tracking-tight uppercase">
      {value}
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-carbon">

      {/* ─── Fondo: bar oscuro / cerveza rústica de Unsplash ─── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1538481199005-271361975804?q=80&w=2400&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          fetchpriority="high"
        />

        {/* Overlay negro pesado — 80% — para que el texto resalte sin compromisos */}
        <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>

        {/* Refuerzo cobre tabaco — apenas un sello cálido sobre el negro */}
        <div className="absolute inset-0 bg-carbon/40 mix-blend-multiply pointer-events-none"></div>

        {/* Grano fotográfico de imprenta — más pesado que la capa global */}
        <div
          className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E\")",
          }}
        ></div>

        {/* Doble hairline cobre superior e inferior — recorta el cuadro como póster */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-copper pointer-events-none"></div>
        <div className="absolute top-2 inset-x-0 h-px bg-copper/50 pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-copper pointer-events-none"></div>
      </div>

      {/* ─── Content grid ─── */}
      <div className="relative z-10 min-h-[100svh] flex flex-col px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-12">

        {/* Top meta bar — masthead */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex items-center justify-between font-mono text-[10px] tracking-[0.5em] uppercase text-bone/60"
        >
          <span>Nº 001 · Vol. I</span>
          <span className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-copper"></span>
            Edición Especial
            <span className="h-[2px] w-10 bg-copper"></span>
          </span>
          <span>Quito · Ecuador</span>
        </motion.div>

        {/* Composición principal — anclada abajo-izquierda */}
        <div className="flex-grow flex flex-col justify-end mt-16 md:mt-0">
          <div className="grid grid-cols-12 gap-6 md:gap-12">

            {/* Izquierda: titular gigante */}
            <motion.div
              className="col-span-12 lg:col-span-9"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="editorial-eyebrow mb-6 md:mb-10 flex items-center gap-4">
                <span className="h-[2px] w-10 bg-copper"></span>
                Capítulo I · Manifiesto
              </p>

              {/* Titular GIGANTE — Anton ultra-condensado, mayúsculas, color cobre del logo */}
              <h1 className="font-display text-copper leading-[0.8] tracking-tight uppercase">
                <motion.span
                  className="block -ml-1 md:-ml-3"
                  style={{ fontSize: 'clamp(4rem, 20vw, 19rem)' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 }}
                >
                  Cerveza
                </motion.span>
                <motion.span
                  className="block -ml-1 md:-ml-3"
                  style={{ fontSize: 'clamp(4rem, 20vw, 19rem)' }}
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
                className="mt-10 max-w-xl font-sans text-bone/85 text-base md:text-lg leading-relaxed"
              >
                Forjada a 2.964 metros sobre el nivel del mar, donde el aire delgado y el agua
                pura de los Andes labran un carácter imposible de imitar.
                <span className="text-copper font-semibold"> Sin atajos.</span>
              </motion.p>

              {/* Botones rústicos — cuadrados, borde 2px, hover sólido y seco.
                  En móvil se apilan a lo ancho como bloques brutalistas. */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mt-10 md:mt-16 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-5 max-w-md sm:max-w-none"
              >
                <a
                  href="#cervezas"
                  className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 font-cond font-bold text-xs md:text-sm tracking-[0.35em] uppercase text-copper bg-transparent border-2 border-copper rounded-none transition-colors duration-100 hover:bg-copper hover:text-carbon focus:outline-none focus-visible:bg-copper focus-visible:text-carbon"
                >
                  Explorar la carta
                  <span className="text-base leading-none">→</span>
                </a>

                <a
                  href="#historia"
                  className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 font-cond font-bold text-xs md:text-sm tracking-[0.35em] uppercase text-bone bg-transparent border-2 border-bone rounded-none transition-colors duration-100 hover:bg-bone hover:text-carbon focus:outline-none focus-visible:bg-bone focus-visible:text-carbon"
                >
                  Nuestra historia
                  <span className="text-base leading-none">→</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Derecha: columna de specs con regla cobre */}
            <motion.aside
              className="hidden lg:flex col-span-3 flex-col justify-end gap-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Spec label="Estilos" value="09" />
              <Spec label="ABV" value="5.5—8.9%" />
              <Spec label="Origen" value="Mitad del Mundo" />
              <Spec label="Año" value="MMXXV" />
            </motion.aside>
          </div>
        </div>

        {/* Strip inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-12 md:mt-16 flex items-end justify-between font-mono text-[10px] tracking-[0.4em] uppercase text-bone/50 border-t-2 border-copper/40 pt-6"
        >
          <div className="flex items-center gap-4">
            <span>Scroll</span>
            <motion.span
              className="block h-[2px] w-16 bg-copper origin-left"
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
