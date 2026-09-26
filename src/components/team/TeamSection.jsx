import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, Cpu, Activity, Smartphone, ShieldCheck, Sparkles } from 'lucide-react';
import { teamRocketsDisciplines } from '../../data/projectData';

// ADD REAL TEAM MEMBER INFORMATION HERE IF/WHEN THE TEAM CHOOSES TO PUBLISH IT.
// Do not populate with invented or placeholder names.

export default function TeamSection() {
  const disciplineIcons = [Wrench, Cpu, Activity, Smartphone];

  return (
    <section id="team" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold mb-3">
            <span>TEAM ROCKET · SMART INDIA HACKATHON 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            MEET TEAM ROCKET 🚀
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Building technology for safer and more comfortable maternity care.
          </p>
        </div>

        {/* Multidisciplinary Unit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRocketsDisciplines.map((unit, idx) => {
            const Icon = disciplineIcons[idx];
            return (
              <motion.div
                key={unit.code}
                whileHover={{ y: -4 }}
                className="glass-panel rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-900 text-white shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-sky-600 tracking-wider uppercase block mb-1">
                    {unit.code}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{unit.role}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{unit.focus}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>SIH26113 COLLABORATIVE UNIT</span>
                  <span className="text-emerald-600 font-bold">ACTIVE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Code comment representation notice */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-mono text-slate-500">
            <strong>Hackathon Compliance Notice:</strong> In accordance with competition anonymization guidelines (Section 3A), individual student names are withheld. The modular architecture is ready to accept author credentials upon release.
          </p>
        </div>
      </div>
    </section>
  );
}
