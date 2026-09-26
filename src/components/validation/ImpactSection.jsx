import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Radio, ShieldCheck, DollarSign, Activity, Sparkles } from 'lucide-react';
import { impactPillars } from '../../data/projectData';

export default function ImpactSection() {
  const icons = [HeartPulse, Radio, DollarSign, ShieldCheck];

  return (
    <section id="impact" className="py-20 sm:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-50 text-teal-700 border border-teal-200">
            SECTION 25 · IMPACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            DESIGNED FOR IMPACT.
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Addressing maternal well-being through preventative bio-telemetry, affordable hardware, and continuous emergency readiness.
          </p>
        </div>

        {/* 4 Cards Around Central Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 2 Cards */}
          <div className="lg:col-span-4 space-y-6">
            {impactPillars.slice(0, 2).map((p, idx) => {
              const Icon = icons[idx];
              return (
                <div 
                  key={p.title}
                  className="glass-panel rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">{p.title}</h3>
                  <h4 className="text-base font-bold text-slate-900 mt-1 mb-2">{p.headline}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>

          {/* Central Illustration Badge */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-b from-sky-600 to-indigo-700 text-white shadow-xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-subtle opacity-20" />
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="w-10 h-10 text-sky-200 animate-pulse" />
              </div>
              <span className="text-xs font-mono tracking-widest text-sky-200 uppercase font-bold">
                SIH26113 MISSION
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1 mb-3">
                HUMAN-CENTERED HEALTHCARE
              </h3>
              <p className="text-xs text-sky-100/90 leading-relaxed">
                Wearable Technology + Biomechanical Engineering + Safety + Autonomous Monitoring.
              </p>
            </div>
          </div>

          {/* Right 2 Cards */}
          <div className="lg:col-span-4 space-y-6">
            {impactPillars.slice(2, 4).map((p, idx) => {
              const Icon = icons[idx + 2];
              return (
                <div 
                  key={p.title}
                  className="glass-panel rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 border border-teal-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">{p.title}</h3>
                  <h4 className="text-base font-bold text-slate-900 mt-1 mb-2">{p.headline}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
