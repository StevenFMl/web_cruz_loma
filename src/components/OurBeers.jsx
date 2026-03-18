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
    image: "https://images.unsplash.com/photo-1657223253573-05b63bc33bf3?q=80&w=600&auto=format&fit=crop",
    gradientHover: "group-hover:from-yellow-600/30 group-hover:to-[#1a1512]",
    borderHover: "group-hover:border-yellow-600/50"
  },
  {
    name: "Andean IPA",
    style: "IPA",
    abv: "6.8%",
    ibu: "55",
    desc: "Un homenaje al lúpulo fresco. Amargor pronunciado, aromas a pino y frutas tropicales. Intensa y balanceada.",
    color: "from-[#d97706]/20 to-[#1a1512]",
    accent: "text-[#d97706]",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=600&auto=format&fit=crop",
    gradientHover: "group-hover:from-[#d97706]/30 group-hover:to-[#1a1512]",
    borderHover: "group-hover:border-[#d97706]/50"
  },
  {
    name: "Dark Stout",
    style: "Stout",
    abv: "7.5%",
    ibu: "35",
    desc: "Profunda y misteriosa. Notas tostadas intensas a café espresso y chocolate amargo con una corona de espuma cremosa.",
    color: "from-[#453327]/30 to-[#1a1512]",
    accent: "text-[#d6d3d1]",
    image: "https://images.unsplash.com/photo-1588686948574-d2e7d70362da?q=80&w=600&auto=format&fit=crop",
    gradientHover: "group-hover:from-[#453327]/50 group-hover:to-[#1a1512]",
    borderHover: "group-hover:border-[#78716c]/50"
  }
];

export default function OurBeers() {
  return (
    <section id="cervezas" className="py-24 md:py-32 bg-[#140e0b] relative overflow-hidden border-t border-[#2a2019]">
      
      {/* Subtle wood texture background for the section */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBMMDAgME00MCAwTTAgME00MCA0MEw0MCAwSDBNMCA0MEg0MCIgc3Ryb2tlPSJyZ0JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz4KPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] opacity-30"></div>

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        
        <motion.div 
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Subtle Logo ornament */}
          <motion.div 
            className="flex justify-center mb-6 opacity-80"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
             <svg className="w-8 h-8 text-[#d97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h18M7 15h1a4 4 0 004-4 4 4 0 004 4h1m-9 5h6" />
             </svg>
          </motion.div>
          <h2 className="mb-4 text-[10px] md:text-xs tracking-[0.5em] text-[#d97706] uppercase font-sans font-medium">Nuestra Selección</h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-vintage text-stone-200 tracking-wide drop-shadow-sm">Descubre Nuestras Cervezas</h3>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d97706]/50 to-transparent mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {beers.map((beer, index) => (
            <motion.div
              key={index}
              className={`group flex flex-col h-full bg-[#1a1512] bg-gradient-to-b ${beer.color} ${beer.gradientHover} border border-[#2a2019] rounded-sm transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${beer.borderHover} relative overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              
              {/* Image Container */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#140e0b]">
                {/* Overlay gradient to blend image with card background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512] via-transparent to-transparent z-10"></div>
                
                <img 
                  src={beer.image} 
                  alt={beer.name} 
                  className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Style Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-block px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-[#1a1512] uppercase bg-gradient-to-r from-[#fcd34d] to-[#d97706] rounded-sm font-sans shadow-lg">
                    {beer.style}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-8 pt-4 z-20 relative">
                
                <h4 className={`text-4xl lg:text-5xl font-vintage text-white mb-4 ${beer.accent} transition-colors duration-500 drop-shadow-sm`}>
                  {beer.name}
                </h4>
                
                <p className="text-[13px] md:text-sm text-stone-400 font-sans tracking-wide leading-relaxed flex-grow mb-8 group-hover:text-stone-300 transition-colors duration-500">
                  {beer.desc}
                </p>
                
                {/* Vintage Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#453327] to-transparent mb-6 transition-colors duration-500 group-hover:via-[#d97706]/30"></div>
                
                {/* Stats */}
                <div className="flex w-full justify-between items-center px-4">
                   <div className="flex flex-col items-center">
                     <span className="text-[9px] uppercase font-sans tracking-[0.2em] text-[#a8a29e] mb-1 group-hover:text-[#d97706] transition-colors duration-300">Alc/Vol</span>
                     <span className="text-2xl font-vintage text-stone-300">{beer.abv}</span>
                   </div>
                   <div className="w-px h-8 bg-[#2a2019]"></div>
                   <div className="flex flex-col items-center">
                     <span className="text-[9px] uppercase font-sans tracking-[0.2em] text-[#a8a29e] mb-1 group-hover:text-[#d97706] transition-colors duration-300">Amargor</span>
                     <span className="text-2xl font-vintage text-stone-300">{beer.ibu} <span className="text-[10px] font-sans text-stone-500">IBU</span></span>
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
