import React from 'react';
import { CheckCircle2, TrendingUp, Sparkles, Layers, Box, Cpu } from 'lucide-react';

export default function Viability() {
  const points = [
    {
      title: "HIGH-PRECISION SENSING",
      desc: "Utilizes reliable I2C bio-sensors with mature driver ecosystems (MAX30102, LSM6DSOX, TMP117) providing dependable baseline readings.",
      icon: Cpu,
      color: "text-sky-600 bg-sky-50"
    },
    {
      title: "ADAPTIVE STRUCTURE",
      desc: "Telescoping UHMWPE rail guides expand continuously from 65 cm to 120 cm without requiring distinct sizing molds for each trimester.",
      icon: Layers,
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      title: "PASSIVE MONITORING",
      desc: "Kinetic energy absorption via internal leaf springs and cams functions mechanically without drawing battery power, extending active battery runtime.",
      icon: TrendingUp,
      color: "text-teal-600 bg-teal-50"
    },
    {
      title: "AVAILABLE ELECTRONICS + LOCAL FABRICS/MATERIALS",
      desc: "Constructed using commercially abundant off-the-shelf semiconductors and regionally sourced breathable textiles, minimizing supply chain bottlenecks.",
      icon: Box,
      color: "text-amber-600 bg-amber-50"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            SECTION 24 · VIABILITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            BUILT WITH REAL-WORLD SCALABILITY IN MIND.
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            A production philosophy that avoids scarce proprietary components in favor of scalable modularity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-bold font-mono text-slate-900 tracking-wide uppercase mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-emerald-700">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Scalable Architecture</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
