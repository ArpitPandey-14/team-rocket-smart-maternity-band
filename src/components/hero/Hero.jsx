import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles } from 'lucide-react';
import HeroProductVisual from './HeroProductVisual';
import ProjectSnapshot from './ProjectSnapshot';

export default function Hero({ onSelectSensor }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-20 pb-8 sm:pt-32 sm:pb-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute top-20 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-200 text-[11px] sm:text-xs font-semibold shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>SMART INDIA HACKATHON 2026</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-[11px] sm:text-xs font-semibold"
          >
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>SIH26113 · HEALTHTECH</span>
          </motion.div>
        </div>

        {/* Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
          >
            SMART <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
              MATERNITY BAND
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 sm:mt-6 text-sm sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed px-2"
          >
            Technology for safer, smarter and more comfortable maternity care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
          >
            <button
              onClick={() => scrollTo('solution')}
              className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-sky-500/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore the Solution</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('team')}
              className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 text-slate-500" />
              <span>Meet Team Zavaibah</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Interactive Product Visual */}
        <HeroProductVisual onSelectSensor={onSelectSensor} />

        {/* Project Snapshot Bar */}
        <ProjectSnapshot />
      </div>
    </section>
  );
}
