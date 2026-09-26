import React from 'react';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { whyItMattersComparison } from '../../data/projectData';

export default function WhyItMatters() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-50 text-sky-700 border border-sky-200">
            SECTION 27 · WHY IT MATTERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            A PARADIGM SHIFT IN CARE
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Conceptual side-by-side comparison between conventional pregnancy experience and Team Rocket's adaptive ecosystem.
          </p>
        </div>

        {/* Editorial Comparison Table */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-glass overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-4 border-b border-slate-200 text-xs font-mono font-bold uppercase text-slate-400">
            <div className="md:col-span-4">EVALUATION DIMENSION</div>
            <div className="md:col-span-4 text-rose-600">WITHOUT CONTINUOUS MONITORING</div>
            <div className="md:col-span-4 text-emerald-700">SMART MATERNITY BAND</div>
          </div>

          <div className="divide-y divide-slate-100">
            {whyItMattersComparison.map((row) => (
              <div key={row.aspect} className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-start text-xs">
                <div className="md:col-span-4 font-bold text-slate-900 font-sans">
                  {row.aspect}
                </div>

                <div className="md:col-span-4 p-3 rounded-xl bg-rose-50/50 border border-rose-100 flex items-start gap-2.5 text-slate-600 leading-relaxed">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.without}</span>
                </div>

                <div className="md:col-span-4 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-2.5 text-slate-800 font-medium leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.withBelt}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <p className="text-[11px] font-mono text-slate-400">
              * Note: Conceptual evaluation based on biomechanical rationale and sensor architecture. No fabricated statistical percentages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
