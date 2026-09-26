import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { howItWorksSteps } from '../../data/projectData';
import { Radio, Cpu, Bluetooth, LineChart, BellRing, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [Radio, Cpu, Bluetooth, LineChart, BellRing, ShieldAlert];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            SECTION 19 · HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            SIX-STEP TELEMETRY LIFECYCLE
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            From subtle mechanical kick impulses to real-time mobile trend insights and automated fall protection.
          </p>
        </div>

        {/* 6-Step Interactive Timeline */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          {/* Step Selectors (Horizontal on Desktop, Grid on Mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {howItWorksSteps.map((step, idx) => {
              const Icon = icons[idx];
              const isSelected = activeStep === idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    isSelected
                      ? 'bg-white border-sky-400 shadow-md ring-1 ring-sky-200 -translate-y-0.5'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-slate-400">{step.step}</span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-sky-600' : 'text-slate-400'}`} />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-tight">{step.title}</h4>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          {(() => {
            const current = howItWorksSteps[activeStep];
            const CurrentIcon = icons[activeStep];

            return (
              <motion.div
                key={current.step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4 max-w-2xl">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center shrink-0 mt-1">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-sky-600">STAGE {current.step}</span>
                      <span className="text-xs text-slate-400 font-mono">· {current.subtitle}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">{current.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{current.detail}</p>
                  </div>
                </div>

                <div className="w-full sm:w-auto p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-right shrink-0">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Operational Metric</span>
                  <span className="text-xs font-bold text-sky-700 font-mono">{current.metric}</span>
                </div>
              </motion.div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
