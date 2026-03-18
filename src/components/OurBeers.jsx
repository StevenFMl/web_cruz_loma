import React from 'react';
import { motion } from 'framer-motion';

const beers = [
  {
    name: "Golden Ale",
    style: "Rubia",
    abv: "5.2%",
    ibu: "20",
    desc: "Nuestra cerveza más refrescante. De color dorado brillante, con notas cítricas sutiles y un final suave que invita a otro trago.",
    color: "from-yellow-600/20 to-[#1a1512]",
    accent: "text-yellow-500",
    border: "group-hover:border-yellow-600/50"
  },
  {
    name: "Andean IPA",
    style: "IPA",
    abv: "6.8%",
    ibu: "55",
    desc: "Un homenaje al lúpulo fresco. Amargor pronunciado, aromas a pino y frutas tropicales. Intensa y balanceada.",
    color: "from-[#d97706]/20 to-[#1a1512]",
    accent: "text-[#d97706]",
    border: "group-hover:border-[#d97706]/50"
  },
  {
    name: "Dark Stout",
    style: "Stout",
    abv: "7.5%",
    ibu: "35",
    desc: "Profunda y misteriosa. Notas tostadas intensas a café espresso y chocolate amargo con una corona de espuma cremosa.",
    color: "from-[#453327]/40 to-[#1a1512]",
    accent: "text-[#a8a29e]",
    border: "group-hover:border-[#453327]"
  }
];

export default function OurBeers() {
  return (
    <section id="cervezas" className="py-24 md:py-32 bg-[#140e0b] relative overflow-hidden border-t border-[#2a2019]">
      
      {/* Subtle wood texture background for the section */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBMMDAgME00MCAwTTAgME00MCA0MEw0MCAwSDBNMCA0MEg0MCIgc3Ryb2tlPSJyZ0JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz4KPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] opacity-30"></div>

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo ornament */}
          <div className="flex justify-center mb-6">
             <svg className="w-8 h-8 text-[#4d7c0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1a4 4 0 004-4 4 4 0 004 4h1m-9 5h6" />
             </svg>
          </div>
          <h2 className="mb-4 text-xs tracking-[0.4em] text-[#d97706] uppercase font-sans font-bold">Nuestra Selección</h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-vintage text-[#f3f4f6]">Descubre Nuestras Cervezas</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {beers.map((beer, index) => (
            <motion.div
              key={index}
              className={`group flex flex-col h-auto bg-gradient-to-b ${beer.color} border border-[#2a2019] rounded-t-full rounded-b-sm p-8 pt-16 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${beer.border} relative overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              
              {/* Top Accent arch matching the rounded-t-full */}
              <div className="absolute top-2 left-2 right-2 h-32 border-t border-[#d97706]/30 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="flex flex-col items-center text-center mt-8 z-10">
                
                <h4 className={`text-4xl md:text-5xl font-vintage text-white mb-2 ${beer.accent} transition-colors duration-300 drop-shadow-md`}>
                  {beer.name}
                </h4>
                
                <span className="inline-block px-4 py-1 mb-8 text-[10px] font-bold tracking-widest text-[#1a1512] uppercase bg-[#d97706] rounded-sm font-sans shadow-md">
                   {beer.style}
                </span>
                
                <p className="text-sm text-stone-400 font-sans tracking-wide leading-relaxed h-32 mb-4">
                  {beer.desc}
                </p>
                
                {/* Vintage Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#453327] to-transparent mb-6"></div>
                
                {/* Stats */}
                <div className="flex w-full justify-center items-center gap-12 text-[#a8a29e]">
                   <div className="flex flex-col items-center">
                     <span className="text-[10px] uppercase font-sans tracking-widest text-[#d97706]">Alc/Vol</span>
                     <span className="text-2xl font-vintage">{beer.abv}</span>
                   </div>
                   <div className="flex flex-col items-center">
                     <span className="text-[10px] uppercase font-sans tracking-widest text-[#d97706]">Amargor</span>
                     <span className="text-2xl font-vintage">{beer.ibu} <span className="text-xs">IBU</span></span>
                   </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
