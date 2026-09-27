import React from 'react';
import { HelpCircle, AlertCircle, Wrench, FileSpreadsheet, Ban, CheckCircle2 } from 'lucide-react';
import { knownLimitations } from '../../data/projectData';

export default function LimitationsSection() {
  const limitationIcons = [HelpCircle, Ban, Wrench, FileSpreadsheet];

  return (
    <section id="limitations" className="py-20 sm:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold mb-3">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>SECTIONS 7 & 30 · ENGINEERING MATURITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            WHAT WE'RE STILL SOLVING
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Transparent engineering trade-offs, ongoing investigations, and boundaries established through rigorous testing for Smart India Hackathon 2026.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {knownLimitations.map((lim, idx) => {
            const Icon = limitationIcons[idx];
            return (
              <div
                key={lim.title}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 uppercase">
                      {lim.status}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{lim.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{lim.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>TEAM Zavaibah RESOLUTION PROTOCOL</span>
                  <span className="text-sky-600 font-bold">ACTIVE STUDY</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Maturity Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Why Transparent Limitations Matter to SIH Judges</h4>
              <p className="text-xs text-slate-500">
                Acknowledging physical constraints (such as separating non-feasible predictions from actual verifiable hardware) demonstrates genuine technical integrity.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
            EVALUATION READY
          </span>
        </div>
      </div>
    </section>
  );
}
