import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Activity, 
  Moon, 
  Maximize2 
} from 'lucide-react';
import { coreBenefits } from '../../data/projectData';

export default function Benefits() {
  const icons = [Layers, ShieldCheck, Sparkles, Activity, Moon, Maximize2];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            SECTION 26 · BENEFITS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            COMPREHENSIVE MATERNAL ADVANTAGES
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Six foundational pillars that separate Team Rocket's Smart Maternity Band from traditional static pregnancy braces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreBenefits.map((b, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={b.num}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
                      {b.num}
                    </span>
                    <div className="p-2 rounded-xl bg-white shadow-xs border border-slate-100 text-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>TEAM ROCKET BENEFIT SPEC</span>
                  <span className="text-emerald-600 font-semibold">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
