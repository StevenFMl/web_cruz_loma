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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
          ? 'bg-[#1a1512]/95 backdrop-blur-md border-b-[3px] border-[#d97706]/80 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-gradient-to-b from-black/80 to-transparent py-4'
        }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-16 mx-auto flex items-center justify-between">

        {/* Left: Brand Logo */}
        <div className="flex-1 md:flex-1 flex justify-start">
          <a href="#" className="flex items-center group relative -ml-16 sm:-ml-12 md:-ml-4 lg:-ml-0 -mt-1 sm:-mt-2">
            <motion.img
              src="/logo-cruz-loma.svg"
              alt="Cruz Loma Logo"
              className="w-[360px] sm:w-[380px] md:w-auto md:h-28 lg:h-36 object-contain drop-shadow-[0_0_15px_rgba(217,119,6,0.3)] origin-left"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.05 }}
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(0px 0px 20px rgba(217,119,6,0.6)) brightness(1.15)"
              }}
            />
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 lg:gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 + (i * 0.05) }}
              className="text-[12px] lg:text-[13px] font-sans font-medium tracking-widest text-stone-300 hover:text-[#d97706] transition-colors duration-300 uppercase relative group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#4d7c0f] opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-out"></span>
            </motion.a>
          ))}
        </nav>

        {/* Right: CTA Banner/Button & Mobile Hamburger */}
        <motion.div 
          className="flex-none md:flex-1 flex justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.15 }}
        >
          <a
            href="#cervezas"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 text-xs font-bold tracking-widest text-[#1a1512] uppercase transition-all duration-300 bg-[#d97706] rounded-sm hover:bg-amber-500 hover:shadow-[0_0_20px_rgba(217,119,6,0.4)] font-sans border border-[#b45309]"
          >
            <svg className="w-4 h-4 text-[#1a1512]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="whitespace-nowrap">Descubrir</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 relative z-50 rounded bg-[#1a1512]/50 border border-zinc-800"
          >
            <span className={`block h-[2px] w-5 bg-[#d97706] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`block h-[2px] w-5 bg-[#d97706] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] w-5 bg-[#d97706] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 top-0 bg-[#1a1512] z-40 flex flex-col pt-32 px-6 overflow-hidden border-t-[4px] border-[#d97706]"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z\\' fill=\\'%23d97706\\' fill-opacity=\\'0.02\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')"
            }}
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  className="text-3xl font-vintage text-stone-300 hover:text-[#d97706] transition-colors duration-300 border-b border-zinc-800/50 pb-4"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <a
                href="#cervezas"
                onClick={() => setMenuOpen(false)}
                className="flex justify-center py-4 w-full text-sm font-bold tracking-widest text-[#1a1512] uppercase bg-[#d97706] rounded-sm font-sans"
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
