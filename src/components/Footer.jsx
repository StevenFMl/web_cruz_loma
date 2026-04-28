import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <footer className="pt-24 pb-8 bg-asphalt relative overflow-hidden border-t-2 border-copper">

      {/* Doble línea hairline cruda — sin gradiente */}
      <div className="absolute top-2 left-0 right-0 h-px bg-copper/40"></div>
      
      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 px-4"
        >
          
          {/* Brand/Logo Section (Takes up more space natively) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
             <div className="mb-4 border-2 border-copper p-2">
                 <svg className="w-10 h-10 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                 </svg>
             </div>
             <h2 className="text-5xl sm:text-6xl font-display tracking-tight text-bone mb-2">
                CRUZ LOMA
             </h2>
             <span className="text-[10px] sm:text-xs tracking-[0.5em] font-mono font-medium text-copper uppercase">
                Cervecería Artesanal
             </span>
             <p className="mt-6 text-sm text-ash font-sans tracking-wide leading-relaxed max-w-sm">
                Cerveza artesanal elaborada con pasión en la Mitad del Mundo. Descubre el verdadero sabor ecuatoriano labrado con ingredientes de primera.
             </p>
          </motion.div>

          {/* Contact / Location */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-2xl font-display tracking-wide text-copper mb-6">Contacto</h4>
            <div className="text-xs font-mono tracking-[0.2em] text-ash uppercase leading-loose space-y-4">
               <p className="flex items-center gap-4 justify-center lg:justify-start group">
                  <span className="p-2 border-2 border-copper-deep bg-carbon text-copper group-hover:border-copper transition-colors">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  Mitad del Mundo, Quito
               </p>
               <p className="flex items-center gap-4 justify-center lg:justify-start group cursor-pointer hover:text-bone transition-colors">
                  <span className="p-2 border-2 border-copper-deep bg-carbon text-copper group-hover:border-copper transition-colors">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  info@cruzloma.com
               </p>
               <p className="flex items-center gap-4 justify-center lg:justify-start group cursor-pointer hover:text-bone transition-colors">
                  <span className="p-2 border-2 border-copper-deep bg-carbon text-copper group-hover:border-copper transition-colors">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  +593 99 999 9999
               </p>
            </div>
          </motion.div>

          {/* Google Maps Embed — bordes duros, sin sombras */}
          <motion.div variants={itemVariants} className="lg:col-span-4 w-full h-56 lg:h-full min-h-[220px] overflow-hidden border-2 border-copper-deep relative group">
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.27878848455!2d-78.4527962!3d-0.0022216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58832a8aed781%3A0xe5cd6b82cbd0af72!2sMitad%20del%20Mundo%2C%20Quito!5e0!3m2!1sen!2sec!4v1704230000000!5m2!1sen!2sec"
               width="100%"
               height="100%"
               style={{ border: 0, filter: 'grayscale(1) contrast(1.1) sepia(0.25)' }}
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="Google Maps Location"
               className="opacity-70 group-hover:opacity-100 group-hover:[filter:grayscale(0)_contrast(1)_sepia(0)] transition-all duration-700 ease-in-out"
             ></iframe>
             <div className="absolute inset-0 border-2 border-transparent group-hover:border-copper pointer-events-none transition-colors duration-500"></div>
          </motion.div>
          
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Social Links & Divider */}
          <div className="flex flex-col items-center border-t-2 border-graphite pt-10 mb-8">
             <div className="flex gap-8 md:gap-12 mb-8">
               {['Instagram', 'Facebook', 'Untappd'].map((social) => (
                 <a
                   key={social}
                   href="#"
                   className="text-[10px] md:text-xs font-cond font-bold tracking-[0.3em] text-ash uppercase transition-colors duration-300 hover:text-copper border-b-2 border-transparent hover:border-copper pb-1"
                 >
                   {social}
                 </a>
               ))}
             </div>
          </div>

          {/* Responsible Drinking & Copyright */}
          <div className="flex flex-col items-center text-center">
            <p className="text-[9px] sm:text-[10px] tracking-[0.3em] text-ash/70 uppercase font-mono mb-4 max-w-2xl leading-relaxed">
              El consumo excesivo de alcohol limita su capacidad de conducir y operar maquinarias. Bebe con responsabilidad.
            </p>
            <p className="text-[9px] text-ash/50 font-mono tracking-[0.4em] uppercase mb-4">
              &copy; {new Date().getFullYear()} Cruz Loma Cervecería. Todos los derechos reservados.
            </p>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
