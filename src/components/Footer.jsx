import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.22 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer className="relative bg-[#0a0604] pt-32 pb-12 overflow-hidden border-t border-[#3a2b1f]">

      {/* Halo cobre superior difuso */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[400px] bg-[#c8782a]/[0.06] blur-[180px] rounded-full" />

      {/* Veta de madera de fondo */}
      <div className="absolute inset-0 bg-wood opacity-50 pointer-events-none" />

      <div className="container px-6 md:px-10 lg:px-16 mx-auto max-w-[1400px] relative z-10">

        {/* Tagline editorial — contraportada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="block font-mono text-[10px] tracking-[0.5em] uppercase text-[#c8782a] font-bold mb-8">
            Cruz Loma · Mitad del Mundo
          </span>
          <h3 className="font-display text-4xl md:text-6xl lg:text-7xl text-[#ede0c4] leading-[1] max-w-3xl mx-auto">
            Cerveza honesta,<br />
            <span className="text-[#c8782a]">elaborada con tiempo.</span>
          </h3>
        </motion.div>

        {/* Bloque informativo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 mb-20 md:mb-24"
        >

          {/* Marca */}
          <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col">
            <h2 className="font-display text-3xl md:text-4xl text-[#ede0c4] leading-[1.05] mb-2">
              Cruz Loma
            </h2>
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#c8782a] font-bold mb-6">
              Cervecería Artesanal
            </span>
            <p className="text-[13.5px] leading-[1.8] text-[#b8a786] max-w-sm">
              Elaborada con pasión en la Mitad del Mundo. Maltas seleccionadas, lúpulo fresco y la pureza del agua andina.
            </p>
          </motion.div>

          {/* Contacto */}
          <motion.div variants={itemVariants} className="md:col-span-3 flex flex-col">
            <h4 className="font-condensed text-xs tracking-[0.4em] uppercase text-[#c8782a] font-bold mb-8">
              Contacto
            </h4>
            <ul className="space-y-5 text-[13.5px] text-[#b8a786] leading-[1.7]">
              <li>
                <span className="block font-mono text-[9px] tracking-[0.4em] uppercase text-[#8a7a5e] mb-1">Estudio</span>
                Mitad del Mundo, Quito
              </li>
              <li>
                <span className="block font-mono text-[9px] tracking-[0.4em] uppercase text-[#8a7a5e] mb-1">Email</span>
                <a href="mailto:info@cruzloma.com" className="hover:text-[#c8782a] transition-colors duration-700">
                  info@cruzloma.com
                </a>
              </li>
              <li>
                <span className="block font-mono text-[9px] tracking-[0.4em] uppercase text-[#8a7a5e] mb-1">Teléfono</span>
                <a href="tel:+593999999999" className="hover:text-[#c8782a] transition-colors duration-700">
                  +593 99 999 9999
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Síguenos */}
          <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col">
            <h4 className="font-condensed text-xs tracking-[0.4em] uppercase text-[#c8782a] font-bold mb-8">
              Síguenos
            </h4>
            <ul className="space-y-4">
              {['Instagram', 'Facebook', 'Untappd'].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-3 text-[13.5px] text-[#b8a786] hover:text-[#ede0c4] transition-colors duration-700"
                  >
                    <span className="w-4 h-px bg-[#c8782a]/50 group-hover:w-8 group-hover:bg-[#c8782a] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mapa */}
          <motion.div variants={itemVariants} className="md:col-span-3 flex flex-col">
            <h4 className="font-condensed text-xs tracking-[0.4em] uppercase text-[#c8782a] font-bold mb-8">
              Ubicación
            </h4>
            <div className="relative w-full h-56 overflow-hidden border-2 border-[#3a2b1f] group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.27878848455!2d-78.4527962!3d-0.0022216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58832a8aed781%3A0xe5cd6b82cbd0af72!2sMitad%20del%20Mundo%2C%20Quito!5e0!3m2!1sen!2sec!4v1704230000000!5m2!1sen!2sec"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Cruz Loma"
                className="grayscale opacity-50 sepia-[0.3] group-hover:grayscale-0 group-hover:opacity-90 group-hover:sepia-0 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="pointer-events-none absolute inset-0 border-2 border-transparent group-hover:border-[#c8782a]/50 transition-colors duration-700" />
            </div>
          </motion.div>

        </motion.div>

        {/* Colofón */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.4 }}
          className="pt-12 border-t border-[#3a2b1f]"
        >
          <p className="text-center font-mono text-[10px] tracking-[0.35em] uppercase text-[#8a7a5e] leading-relaxed max-w-3xl mx-auto mb-10">
            El consumo excesivo de alcohol limita su capacidad de conducir y operar maquinarias.
            <span className="block mt-2 text-[#c8782a]">Bebe con responsabilidad.</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-[0.35em] uppercase text-[#8a7a5e]">
            <span>
              &copy; {new Date().getFullYear()} Cruz Loma Cervecería
            </span>
            <span className="hidden md:block w-px h-4 bg-[#3a2b1f]" />
            <span className="text-[#b8a786]/70">
              Todos los derechos reservados
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
