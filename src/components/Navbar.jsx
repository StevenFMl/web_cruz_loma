import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Historia', href: '#historia' },
  { label: 'Cervezas', href: '#cervezas' },
  { label: 'Proceso', href: '#proceso' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#0a0604]/80 backdrop-blur-xl border-b border-[#3a2b1f]/80 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]'
          : 'bg-gradient-to-b from-[#0a0604]/70 via-[#0a0604]/20 to-transparent border-b border-transparent'
      }`}
    >
      <div className={`w-full px-6 md:px-10 lg:px-16 mx-auto flex items-center justify-between transition-all duration-700 ${
        scrolled ? 'py-2' : 'py-4'
      }`}>

        {/* Logo */}
        <div className="flex-1 flex justify-start items-center">
          <a
            href="#"
            className="flex items-center group -ml-20 sm:-ml-12 md:-ml-10 lg:-ml-16 transition-all duration-700"
            aria-label="Cruz Loma — Inicio"
          >
            <motion.img
              src="/logo-cruz-loma.svg"
              alt="Cruz Loma"
              className={`object-contain object-left origin-left transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                scrolled
                  ? 'h-24 sm:h-24 md:h-24 lg:h-28 w-auto max-w-[80vw] md:max-w-none'
                  : 'h-32 sm:h-32 md:h-32 lg:h-40 w-auto max-w-[85vw] md:max-w-none'
              }`}
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </a>
        </div>

        {/* Navegación central */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10 lg:gap-14 self-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="relative font-condensed text-xs lg:text-[13px] tracking-[0.32em] text-[#d4c5a8]/85 hover:text-[#ede0c4] transition-colors duration-700 uppercase whitespace-nowrap group font-bold"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 right-0 mx-auto w-0 h-px bg-[#c8782a] opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </motion.a>
          ))}
        </nav>

        {/* CTA + hamburguesa */}
        <motion.div
          className="flex-none md:flex-1 flex justify-end items-center z-50"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#cervezas"
            className="hidden md:inline-flex items-center gap-3 px-6 py-2.5 font-condensed text-xs lg:text-[13px] tracking-[0.3em] text-[#ede0c4] uppercase border-2 border-[#c8782a]/50 hover:border-[#c8782a] hover:text-[#1a1410] hover:bg-[#c8782a] transition-all duration-700 whitespace-nowrap font-bold"
          >
            Descubrir
          </a>

          {/* Hamburguesa */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden flex-col justify-center items-center w-11 h-11 gap-[6px] relative transition-all duration-500"
            aria-label="Abrir menú"
          >
            <span className={`block h-[1.5px] w-6 bg-[#ede0c4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[1.5px] w-6 bg-[#ede0c4] transition-all duration-700 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] w-6 bg-[#ede0c4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </motion.div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-[#0a0604]/95 backdrop-blur-xl z-40 flex flex-col items-center py-12 px-6 border-t border-[#3a2b1f] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]"
          >
            <nav className="flex flex-col gap-1 items-stretch w-full max-w-md">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ delay: 0.08 * i + 0.12, duration: 0.6 }}
                  className="font-display text-3xl text-[#ede0c4] hover:text-[#c8782a] transition-colors duration-500 w-full text-left py-5 border-b border-[#3a2b1f] flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[#c8782a]/60 group-hover:text-[#c8782a] transition-colors">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-12 w-full max-w-md"
            >
              <a
                href="#cervezas"
                onClick={() => setMenuOpen(false)}
                className="block px-8 py-4 w-full text-center font-condensed text-sm tracking-[0.3em] text-[#1a1410] uppercase bg-[#c8782a] hover:bg-[#ede0c4] transition-colors duration-700 font-bold border-2 border-[#823914]"
              >
                Conocer las cervezas
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
