import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* Textura de pared de fábrica / metal sucio — ruido fino oscuro */
const factoryWall = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fw'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.04  0 0 0 0 0.03  0 0 0 0 0.02  0 0 0 0.7 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fw)'/%3E%3C/svg%3E\")",
};

export default function AgeVerification() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const isVerified = sessionStorage.getItem('ageVerifiedRustic');
    if (isVerified === 'true') {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (isVisible && isMounted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isVisible, isMounted]);

  const handleYes = () => {
    sessionStorage.setItem('ageVerifiedRustic', 'true');
    setIsVisible(false);
  };

  const handleNo = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black"
          style={factoryWall}
        >
          {/* Sello negro sólido encima de la textura — para que no levante el negro */}
          <div className="absolute inset-0 bg-black/85 pointer-events-none" />

          {/* Esquinas — tornillos/escuadras de cobre en el viewport completo */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-3 sm:inset-6">
            <span className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-copper" />
            <span className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-copper" />
            <span className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-copper" />
            <span className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-copper" />
          </div>

          {/* Marca de stencil en las esquinas — micro copy de fábrica */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
            <span className="absolute top-10 left-10 text-[9px] font-mono tracking-[0.4em] uppercase text-bone/35">EST · 2.964 m.s.n.m.</span>
            <span className="absolute top-10 right-10 text-[9px] font-mono tracking-[0.4em] uppercase text-bone/35">Nº 01</span>
            <span className="absolute bottom-10 left-10 text-[9px] font-mono tracking-[0.4em] uppercase text-bone/35">Mitad del Mundo</span>
            <span className="absolute bottom-10 right-10 text-[9px] font-mono tracking-[0.4em] uppercase text-bone/35">Cruz Loma</span>
          </div>

          {/* Cuerpo del letrero */}
          <motion.div
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 w-full max-w-xl will-change-transform"
          >
            {/* Banda eyebrow superior — bloque cobre sólido tipo cinta de advertencia */}
            <div className="bg-copper text-carbon font-cond font-bold tracking-[0.4em] uppercase text-[10px] sm:text-[11px] text-center py-2 px-4 border-b-2 border-carbon">
              ⚠ Verificación de Edad ⚠
            </div>

            {/* Caja principal — placa de metal grabada, borde cobre 2px duro */}
            <div className="relative bg-black/90 border-2 border-t-0 border-copper px-5 py-10 sm:px-10 sm:py-14 flex flex-col items-center text-center">

              {/* Logo Cruz Loma */}
              <div className="relative flex justify-center w-full h-16 sm:h-20 md:h-24 mb-4 pointer-events-none">
                <img
                  src="/logo-cruz-loma.svg"
                  alt="Cruz Loma"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] md:w-[320px] max-w-none object-contain"
                />
              </div>

              {/* Hairline cobre — separador duro */}
              <div className="h-[2px] w-16 sm:w-24 bg-copper my-4 sm:my-6" />

              {/* Pregunta gigante — letrero de neón apagado */}
              <h2 className="font-display text-bone leading-[0.85] tracking-tight uppercase text-[clamp(2.75rem,11vw,5.5rem)]">
                ¿Eres mayor
                <br />
                <span className="text-copper">de edad?</span>
              </h2>

              {/* Sub-copy mono */}
              <p className="mt-6 max-w-[26rem] font-mono text-[10px] sm:text-[11px] text-bone/65 tracking-[0.25em] uppercase leading-relaxed">
                Para consumir alcohol en tu país de residencia
              </p>

              {/* Botones tipo bloque — cuadrados, sin radius, hover seco */}
              <div className="mt-9 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-5 w-full max-w-md">
                {/* SÍ — bloque cobre sólido, primario */}
                <button
                  onClick={handleYes}
                  className="block w-full bg-copper text-carbon font-cond font-bold tracking-[0.4em] uppercase text-sm sm:text-base px-4 py-4 sm:py-5 border-2 border-copper rounded-none transition-colors duration-100 hover:bg-amber hover:border-amber focus:outline-none focus-visible:bg-amber focus-visible:border-amber"
                >
                  Sí, soy mayor
                </button>

                {/* NO — bloque secundario apagado, transparente con borde gris */}
                <button
                  onClick={handleNo}
                  className="block w-full bg-transparent text-ash font-cond font-bold tracking-[0.4em] uppercase text-sm sm:text-base px-4 py-4 sm:py-5 border-2 border-ash rounded-none transition-colors duration-100 hover:bg-ash hover:text-carbon focus:outline-none focus-visible:bg-ash focus-visible:text-carbon"
                >
                  No, salir
                </button>
              </div>

              {/* Footnote inferior */}
              <div className="mt-10 sm:mt-12 w-full border-t-2 border-copper/40 pt-5">
                <p className="font-mono text-[9px] sm:text-[10px] text-bone/50 uppercase tracking-[0.45em]">
                  Disfrutar con responsabilidad
                </p>
              </div>
            </div>

            {/* Banda inferior — número de serie tipo placa de máquina */}
            <div className="bg-carbon border-2 border-t-0 border-copper px-4 py-2 flex items-center justify-between text-[9px] sm:text-[10px] font-mono tracking-[0.35em] uppercase text-bone/55">
              <span>Cruz Loma</span>
              <span className="text-copper">Forjada en altura</span>
              <span className="hidden sm:block">MMXXV</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
