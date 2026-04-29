import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Agua Pura",
    desc: "Nuestra base cristalina, extraída de fuentes andinas inmaculadas. La altura define el carácter mineral.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Maltas Tostadas",
    desc: "Granos seleccionados y tostados a la perfección. Aportan cuerpo, color y los azúcares fermentables.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Lúpulo Fresco",
    desc: "Aromas intensos y el amargor preciso que define cada estilo. Cosechado, no sintetizado.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Levadura Activa",
    desc: "El milagro de la fermentación. Cepa propia, controlada lote a lote. El alma viva de la cerveza.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
];

export default function CraftProcess() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative py-32 md:py-44 bg-[#1a1512] border-t border-white/[0.04] overflow-hidden">

      {/* Halo central muy difuso */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#c4892b]/[0.04] blur-[160px]" />

      {/* Número de capítulo fantasmal */}
      <div className="pointer-events-none absolute -top-6 left-0 lg:left-12 select-none opacity-[0.04] z-0">
        <span className="font-display text-[28rem] leading-none text-[#c4892b]">
          II
        </span>
      </div>

      <div className="container px-6 md:px-10 lg:px-16 mx-auto max-w-[1400px] relative z-10">

        {/* Encabezado de capítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6 mb-20 md:mb-28"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#a89b85]/70">
            Transmisión de Sabor
          </span>
          <span className="flex-1 h-px bg-white/[0.08]" />
          <span className="font-display text-2xl md:text-3xl text-[#c4892b]/80 italic">
            Capítulo II
          </span>
        </motion.div>

        {/* Titular editorial */}
        <motion.div
          className="mb-24 md:mb-32 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#f1e8d6] tracking-tight leading-[0.95]">
            El proceso
            <span className="block font-display-italic text-[#e0a85a] mt-1">tras cada botella.</span>
          </h2>
          <p className="mt-10 text-[15px] md:text-base text-[#a89b85] leading-relaxed max-w-xl">
            Cuatro elementos. Un solo método. Aquí no hay aceleradores ni atajos: hay tiempo, oficio y respeto por la materia prima.
          </p>
        </motion.div>

        {/* Grid de pasos — flujo editorial con numeración prominente */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={item}
              className={`group relative flex flex-col p-8 lg:p-10 transition-all duration-700 ${
                index < steps.length - 1 ? 'lg:border-r border-white/[0.06]' : ''
              } ${
                index < 3 ? 'md:border-b lg:border-b-0' : ''
              } ${
                index % 2 === 0 ? 'md:border-r lg:border-r' : ''
              } md:border-white/[0.06]`}
            >
              {/* Número grande tipográfico */}
              <span className="font-display text-7xl lg:text-8xl text-[#c4892b]/30 leading-none mb-8 transition-all duration-700 group-hover:text-[#e0a85a] group-hover:-translate-y-1">
                {step.number}
              </span>

              {/* Hairline activable */}
              <span className="block w-12 h-px bg-[#c4892b]/40 mb-6 origin-left transition-all duration-700 group-hover:w-20 group-hover:bg-[#e0a85a]" />

              {/* Icono — pequeño, integrado, no encerrado en círculo */}
              <span className="text-[#a89b85]/60 group-hover:text-[#e0a85a] transition-colors duration-500 mb-5">
                {step.icon}
              </span>

              <h4 className="font-display text-3xl text-[#f1e8d6] tracking-tight leading-tight mb-4">
                {step.title}
              </h4>

              <p className="text-[14px] text-[#a89b85] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pie editorial */}
        <motion.div
          className="mt-24 md:mt-32 pt-12 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-display-italic text-2xl md:text-3xl text-[#f1e8d6]/80 max-w-xl leading-snug">
            "La cerveza honesta no se acelera: se espera."
          </p>
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#c4892b] whitespace-nowrap">
            — Filosofía de la casa
          </span>
        </motion.div>
      </div>
    </section>
  );
}
