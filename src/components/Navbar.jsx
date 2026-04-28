import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Nuestra Historia', href: '#historia' },
  { label: 'Las Cervezas', href: '#cervezas' },
  { label: 'El Proceso', href: '#proceso' },
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
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.5 }}
      style={{ willChange: "transform, opacity" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[#1a1512]/95 backdrop-blur-md border-b-[1px] border-[#d97706]/40 shadow-xl py-0'
        : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-16 mx-auto flex items-center justify-between">

        {/* Left: Brand Logo */}
        <div className="flex-1 flex justify-start items-start py-0">
          <a href="#" className="flex items-start group -ml-24 sm:-ml-16 md:-ml-12 lg:-ml-20 -mt-6 md:-mt-8 lg:-mt-10 transition-all duration-500">
            <motion.img
              src="/logo-cruz-loma.svg"
              alt="Cruz Loma Logo"
              className={`object-contain object-left origin-top-left transition-all duration-700 ease-[0.25,0.1,0.25,1] ${scrolled
                ? 'h-32 sm:h-32 md:h-28 lg:h-32 w-auto max-w-[80vw] md:max-w-none'
                : 'h-40 sm:h-40 md:h-36 lg:h-44 w-auto max-w-[85vw] md:max-w-none'
                }`}
              whileHover={{ scale: 1.04 }}
            />
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 lg:gap-12 self-center py-3">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + (i * 0.1) }}
              className="text-[11px] lg:text-[12px] font-sans font-medium tracking-[0.2em] text-stone-300 hover:text-[#d97706] transition-colors duration-300 uppercase relative group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#d97706] opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-out"></span>
            </motion.a>
          ))}
        </nav>

        {/* Right: CTA Button & Mobile Hamburger */}
        <motion.div
          className="flex-none md:flex-1 flex justify-end items-center z-50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#cervezas"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 text-[10px] lg:text-xs font-bold tracking-[0.2em] text-[#1a1512] uppercase transition-all duration-300 bg-gradient-to-b from-[#fcd34d] to-[#d97706] rounded-sm hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(217,119,6,0.4)] font-sans border border-[#b45309]"
          >
            <span className="whitespace-nowrap">Descubrir</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 relative rounded hover:bg-white/5 transition-colors group"
          >
            <span className={`block h-[2px] w-5 bg-gradient-to-r from-[#fcd34d] to-[#d97706] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block h-[2px] w-5 bg-gradient-to-r from-[#fcd34d] to-[#d97706] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] w-5 bg-gradient-to-r from-[#fcd34d] to-[#d97706] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ originY: 0, willChange: "transform, opacity" }}
            className="absolute top-full left-0 right-0 bg-[#1a1512]/95 backdrop-blur-xl z-40 flex flex-col items-center py-8 px-6 border-b-[2px] border-[#d97706] shadow-2xl"
          >
            <nav className="flex flex-col gap-6 items-center w-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.3 }}
                  className="text-xl sm:text-2xl font-vintage text-stone-200 hover:text-[#d97706] transition-colors duration-300 w-full text-center border-b border-zinc-800/50 pb-4"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="mt-8 flex justify-center w-full"
            >
              <a
                href="#cervezas"
                onClick={() => setMenuOpen(false)}
                className="px-8 py-3 w-full text-center text-xs font-bold tracking-[0.2em] text-[#1a1512] uppercase bg-gradient-to-b from-[#fcd34d] to-[#d97706] rounded-sm font-sans shadow-lg"
              >
                Ver Cervezas
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
