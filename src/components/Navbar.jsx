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
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "transform, opacity" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#0c0807]/75 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/20'
          : 'bg-gradient-to-b from-[#0c0807]/60 via-[#0c0807]/20 to-transparent border-b border-transparent'
      }`}
    >
      <div className={`w-full px-6 md:px-10 lg:px-16 mx-auto flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}>

        {/* Logo */}
        <div className="flex-1 flex justify-start items-center">
          <a
            href="#"
            className="flex items-center group -ml-20 sm:-ml-12 md:-ml-10 lg:-ml-16 transition-all duration-500"
            aria-label="Cruz Loma — Inicio"
          >
            <motion.img
              src="/logo-cruz-loma.svg"
              alt="Cruz Loma"
              className={`object-contain object-left origin-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                scrolled
                  ? 'h-24 sm:h-24 md:h-24 lg:h-28 w-auto max-w-[80vw] md:max-w-none'
                  : 'h-32 sm:h-32 md:h-32 lg:h-40 w-auto max-w-[85vw] md:max-w-none'
              }`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </a>
        </div>

        {/* Navegación central */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10 lg:gap-14 self-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + (i * 0.08), ease: [0.22, 1, 0.36, 1] }}
              className="relative text-[10px] lg:text-[11px] font-medium tracking-[0.32em] text-[#d9cdb6]/80 hover:text-[#f1e8d6] transition-colors duration-500 uppercase whitespace-nowrap group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 right-0 mx-auto w-0 h-px bg-[#c4892b] opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </motion.a>
          ))}
        </nav>

        {/* CTA + hamburguesa */}
        <motion.div
          className="flex-none md:flex-1 flex justify-end items-center z-50"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#cervezas"
            className="hidden md:inline-flex items-center gap-3 px-6 py-2.5 text-[10px] lg:text-[11px] font-semibold tracking-[0.3em] text-[#f1e8d6] uppercase border border-[#c4892b]/40 hover:border-[#c4892b] hover:text-[#1a1512] hover:bg-[#c4892b] transition-all duration-500 whitespace-nowrap"
          >
            Descubrir
            <span className="w-4 h-px bg-current transition-all duration-500 group-hover:w-6" />
          </a>

          {/* Hamburguesa móvil — minimalista */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden flex-col justify-center items-center w-11 h-11 gap-[6px] relative transition-all duration-300"
            aria-label="Abrir menú"
          >
            <span className={`block h-px w-6 bg-[#f1e8d6] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-px w-6 bg-[#f1e8d6] transition-all duration-500 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-[#f1e8d6] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </motion.div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 bg-[#0c0807]/95 backdrop-blur-xl z-40 flex flex-col items-center py-12 px-6 border-t border-white/[0.06] shadow-2xl shadow-black/40"
          >
            <nav className="flex flex-col gap-2 items-stretch w-full max-w-md">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.4 }}
                  className="font-display text-3xl text-[#f1e8d6] hover:text-[#e0a85a] transition-colors duration-300 w-full text-left py-5 border-b border-white/[0.06] flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] tracking-[0.3em] text-[#c4892b]/60 font-sans group-hover:text-[#e0a85a] transition-colors">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-12 w-full max-w-md"
            >
              <a
                href="#cervezas"
                onClick={() => setMenuOpen(false)}
                className="block px-8 py-4 w-full text-center text-[11px] font-semibold tracking-[0.3em] text-[#1a1512] uppercase bg-[#e0a85a] hover:bg-[#f1e8d6] transition-colors duration-500"
              >
                Descubrir las cervezas
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
