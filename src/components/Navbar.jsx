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
      setScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ willChange: "transform, opacity" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${scrolled
        ? 'bg-carbon/85 backdrop-blur-xl border-b-2 border-copper'
        : 'bg-transparent border-b-2 border-transparent'
        }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-16 mx-auto flex items-center justify-between">

        {/* Left: Brand Logo */}
        <div className="flex-1 flex justify-start items-start py-0">
          <a href="#" className="flex items-start group -ml-10 sm:-ml-16 md:-ml-12 lg:-ml-20 -mt-3 sm:-mt-6 md:-mt-8 lg:-mt-10 transition-all duration-500">
            <motion.img
              src="/logo-cruz-loma.svg"
              alt="Cruz Loma Logo"
              animate={{ opacity: scrolled ? 1 : 0.9 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={`object-contain object-left origin-top-left transition-all duration-700 ease-[0.25,0.1,0.25,1] ${scrolled
                ? 'h-20 sm:h-28 md:h-28 lg:h-32 w-auto max-w-[60vw] sm:max-w-[70vw] md:max-w-none'
                : 'h-24 sm:h-36 md:h-36 lg:h-44 w-auto max-w-[65vw] sm:max-w-[75vw] md:max-w-none'
                }`}
              whileHover={{ scale: 1.04 }}
            />
          </a>
        </div>

        {/* Center: Desktop Navigation — revealed on scroll */}
        <nav
          aria-hidden={!scrolled}
          className={`hidden md:flex flex-1 justify-center items-center gap-8 lg:gap-12 self-center py-3 transition-opacity duration-500 ${scrolled ? '' : 'pointer-events-none'}`}
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              animate={{
                opacity: scrolled ? 1 : 0,
                y: scrolled ? 0 : -8,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: scrolled ? 0.08 + i * 0.07 : 0,
              }}
              className="text-[11px] lg:text-[12px] font-cond font-semibold tracking-[0.25em] text-bone hover:text-copper transition-colors duration-300 uppercase relative group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-copper opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-out"></span>
            </motion.a>
          ))}
        </nav>

        {/* Right: CTA Button & Mobile Hamburger */}
        <motion.div
          className="flex-none md:flex-1 flex justify-end items-center z-50"
          animate={{ opacity: scrolled ? 1 : 0.55 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.a
            href="#cervezas"
            animate={{
              opacity: scrolled ? 1 : 0,
              y: scrolled ? 0 : -6,
            }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay: scrolled ? 0.08 + navLinks.length * 0.07 : 0,
            }}
            className={`hidden md:flex items-center gap-2 px-6 py-3 text-[10px] lg:text-xs font-cond font-bold tracking-[0.3em] text-carbon uppercase transition-colors duration-300 bg-copper hover:bg-amber border-2 border-copper-deep ${scrolled ? '' : 'pointer-events-none'}`}
          >
            <span className="whitespace-nowrap">Descubrir</span>
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 relative rounded-none hover:bg-copper/10 transition-colors group"
          >
            <span className={`block h-[2px] w-6 bg-copper transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block h-[2px] w-6 bg-copper transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] w-6 bg-copper transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
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
            className="absolute top-full left-0 right-0 bg-asphalt/95 backdrop-blur-xl z-40 flex flex-col items-center py-8 px-6 border-y-2 border-copper"
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
                  className="text-2xl sm:text-3xl font-display tracking-wide text-bone hover:text-copper transition-colors duration-300 w-full text-center border-b border-graphite pb-4"
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
                className="px-8 py-4 w-full text-center text-xs font-cond font-bold tracking-[0.3em] text-carbon uppercase bg-copper border-2 border-copper-deep"
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
