import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-[#140e0b] border-t-4 border-[#d97706] relative overflow-hidden">
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBMMDAgME00MCAwTTAgME00MCA0MEw0MCAwSDBNMCA0MEg0MCIgc3Ryb2tlPSJyZ0JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz4KPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] opacity-30"></div>
      
      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 px-4">
          
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center lg:items-start justify-center">
             <div className="mb-2">
                 <svg className="w-10 h-10 text-[#4d7c0f] mx-auto lg:mx-0 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                 </svg>
             </div>
             <h2 className="text-4xl sm:text-5xl font-vintage text-[#d97706] mb-2 drop-shadow-[0_2px_10px_rgba(217,119,6,0.5)] text-center lg:text-left">
                CRUZ LOMA
             </h2>
             <span className="text-[10px] sm:text-xs tracking-[0.4em] font-sans font-bold text-[#4d7c0f] uppercase text-center lg:text-left">
                Cervecería Artesanal
             </span>
             <p className="mt-6 text-sm text-stone-400 font-sans tracking-wide leading-relaxed text-center lg:text-left max-w-xs">
                Cerveza artesanal elaborada con pasión en la Mitad del Mundo. Descubre el verdadero sabor ecuatoriano.
             </p>
          </div>

          {/* Contact / Location */}
          <div className="flex flex-col items-center lg:items-start justify-center">
            <h4 className="text-xl font-vintage text-[#d97706] mb-4 tracking-wider">Contacto y Ubicación</h4>
            <div className="text-sm font-sans tracking-widest text-[#a8a29e] uppercase leading-loose text-center lg:text-left">
               <p className="flex items-center gap-3 justify-center lg:justify-start">
                  <svg className="w-4 h-4 text-[#4d7c0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Mitad del Mundo, Quito
               </p>
               <p className="flex items-center gap-3 justify-center lg:justify-start mt-2 hover:text-[#d97706] transition-colors cursor-pointer">
                  <svg className="w-4 h-4 text-[#4d7c0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@cruzloma.com
               </p>
               <p className="flex items-center gap-3 justify-center lg:justify-start mt-2">
                  <svg className="w-4 h-4 text-[#4d7c0f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +593 99 999 9999
               </p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-48 lg:h-full min-h-[200px] rounded-lg overflow-hidden border border-[#453327] shadow-[0_4px_20px_rgba(0,0,0,0.5)] relative group">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.27878848455!2d-78.4527962!3d-0.0022216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58832a8aed781%3A0xe5cd6b82cbd0af72!2sMitad%20del%20Mundo%2C%20Quito!5e0!3m2!1sen!2sec!4v1704230000000!5m2!1sen!2sec" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Google Maps Location"
               className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
             ></iframe>
             <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-[#d97706]/40 pointer-events-none rounded-lg transition-colors duration-500"></div>
          </div>
          
        </div>

        {/* Social Links & Divider */}
        <div className="flex flex-col items-center border-t border-[#453327] pt-10 mb-10">
           <div className="flex gap-10 mb-10">
             {['Instagram', 'Facebook', 'Untappd'].map((social) => (
               <a 
                 key={social} 
                 href="#" 
                 className="text-xs font-sans font-bold tracking-[0.2em] text-[#a8a29e] uppercase transition-all duration-300 hover:text-[#4d7c0f] hover:scale-110"
               >
                 {social}
               </a>
             ))}
           </div>
        </div>

        {/* Responsible Drinking & Copyright */}
        <div className="flex flex-col items-center text-center pt-6 border-t border-[#453327]/50">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-stone-500 uppercase font-sans font-bold mb-4 max-w-2xl leading-relaxed">
            El consumo excesivo de alcohol limita su capacidad de conducir y operar maquinarias. Bebe con responsabilidad.
          </p>
          <p className="text-[10px] text-stone-600 font-sans tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Cruz Loma Cervecería. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
