import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldAlert, Cpu } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Product Lab', href: '#product-lab' },
  { label: 'Mechanical', href: '#mechanical' },
  { label: 'Technology', href: '#technology' },
  { label: 'App Demo', href: '#mobile-app' },
  { label: 'Safety', href: '#safety' },
  { label: 'Impact', href: '#impact' },
  { label: 'Limitations', href: '#limitations' },
  { label: 'Team', href: '#team' },
];

export default function Navbar({ onOpenSOS }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection tracker
      const sections = navLinks.map(link => link.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80' 
          : 'py-3 sm:py-4 bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
     
          <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0">
            
          </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/60 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-sky-700 bg-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full border border-sky-200 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action button & Mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSOS}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors shadow-xs"
            title="Open Interactive SOS Simulation"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
            <span className="hidden xs:inline">SOS Demo</span>
            <span className="xs:hidden">SOS</span>
          </button>

          <a
            href="#mechanical"
            onClick={(e) => scrollToSection(e, '#mechanical')}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Hardware Specs</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 sm:px-6 py-4 overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-2.5 text-xs font-semibold rounded-xl transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-sky-50 text-sky-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono">
              <span>PROBLEM: SIH26113</span>
              <span className="text-sky-700 font-semibold">TEAM Zavaibah</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
