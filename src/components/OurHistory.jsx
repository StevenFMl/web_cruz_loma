import React from 'react';
import { motion } from 'framer-motion';

export default function OurHistory() {
  return (
    <section id="historia" className="py-24 md:py-32 bg-[#1a1512] relative border-t border-[#453327]">
      
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#d97706]/30"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#d97706]/30"></div>

      <div className="container px-6 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Framed Image - Classic Vintage Style */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative p-3 border border-[#453327] bg-[#221c18] rounded-sm transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 shadow-xl">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#d97706]"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#d97706]"></div>
              
              <img
                src="https://images.unsplash.com/photo-1614316345674-8b060d4b1a45?q=80&w=2070&auto=format&fit=crop"
                alt="Cruz Loma Ingredientes"
                className="w-full object-cover aspect-[4/3] rounded-sm sepia-[0.2] brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512]/60 to-transparent p-3"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#4d7c0f]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </span>
              <h2 className="text-sm tracking-[0.3em] text-[#d97706] uppercase font-sans font-bold">
                Nuestras Raíces
              </h2>
            </div>
            
            <h3 className="mb-8 text-5xl md:text-6xl lg:text-7xl font-vintage text-[#f3f4f6] leading-[1.1]">
              Artesanía en<br/>
              <span className="text-[#d97706]">Cada Gota</span>
            </h3>
            
            <div className="space-y-6 text-sm md:text-base text-stone-400 font-sans tracking-wide leading-relaxed">
              <p>
                Inspirados por la majestuosidad de nuestras montañas y la pureza del agua de los Andes, empezamos con una idea simple: elaborar una cerveza sincera, sin atajos comerciales.
              </p>
              <p>
                Cruz Loma no es solo una bebida. Es el resultado de la paciencia, maltas seleccionadas a mano y lúpulos que despiertan los sentidos. Elaboramos nuestra cerveza respetando los métodos tradicionales, para aquellos que aprecian el verdadero sabor artesanal.
              </p>
            </div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-4 py-3 px-6 bg-[#221c18] border border-[#453327] rounded-sm shadow-inner">
                <span className="text-3xl font-vintage text-[#d97706]">100%</span>
                <span className="text-xs tracking-widest text-stone-300 uppercase font-sans font-medium">Ingredientes<br/>Naturales</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
