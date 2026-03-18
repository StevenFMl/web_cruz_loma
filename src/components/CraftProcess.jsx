import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Agua Pura",
    desc: "Nuestra base cristalina. Extraída de fuentes andinas inmaculadas.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Maltas Tostadas",
    desc: "Granos seleccionados y tostados a la perfección para cuerpo y color.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Lúpulo Fresco",
    desc: "Aromas intensos y el amargor exacto que define nuestro carácter.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Levadura Activa",
    desc: "El milagro de la fermentación y el corazón de nuestra cerveza.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
];

export default function CraftProcess() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section className="py-24 md:py-32 bg-[#1a1512] border-t border-[#453327] relative overflow-hidden">
      {/* Warm glow background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d97706]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        
        <motion.div 
          className="text-center mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-10 h-px bg-[#4d7c0f]"></div>
             <span className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#4d7c0f]">
               Trasmisión de Sabor
             </span>
             <div className="w-10 h-px bg-[#4d7c0f]"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-vintage text-[#f3f4f6] drop-shadow-md">
            Nuestro Proceso
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item} className="flex flex-col items-center text-center group">
              
              {/* Embossed icon container */}
              <div className="relative w-28 h-28 mb-8 flex items-center justify-center rounded-full bg-[#221c18] border border-[#453327] shadow-[inset_0_-4px_10px_rgba(0,0,0,0.5)] group-hover:border-[#d97706]/50 transition-colors duration-500">
                <div className="absolute inset-2 border border-[#d97706]/20 rounded-full"></div>
                
                <div className="text-[#a8a29e] group-hover:text-[#d97706] transition-colors duration-500 transform group-hover:scale-110">
                  {step.icon}
                </div>
              </div>

              <h4 className="mb-4 text-3xl font-vintage text-white group-hover:text-[#d97706] transition-colors drop-shadow-sm">{step.title}</h4>
              <p className="font-medium text-sm text-stone-400 font-sans tracking-wide leading-relaxed max-w-xs">
                {step.desc}
              </p>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
