import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 sm:py-32 bg-slate-900 text-white relative overflow-hidden text-center">
      {/* Subtle animated gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-teal-500/15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-semibold mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SMART INDIA HACKATHON 2026 PRESENTATION</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          REIMAGINING <br />
          <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-teal-300 bg-clip-text text-transparent">
            MATERNITY SUPPORT.
          </span>
        </h2>

        <div className="mt-6 flex flex-col items-center gap-1 font-mono text-xs sm:text-sm text-slate-400">
          <span className="text-white font-bold tracking-wide">TEAM Zavaibah 🚀</span>
          <span>SMART MATERNITY BAND</span>
          <span className="text-sky-400 font-semibold">SMART INDIA HACKATHON 2026 · PROBLEM SIH26113</span>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('product-lab')}
            className="px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm shadow-xl shadow-sky-500/30 hover:scale-105 transition-all flex items-center gap-2 group"
          >
            <span>Explore the Product</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo('team')}
            className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-slate-300" />
            <span>Meet Team Zavaibah</span>
          </button>
        </div>
      </div>
    </section>
  );
}
