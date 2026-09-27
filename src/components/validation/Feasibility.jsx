import React from 'react';
import { Layers, Activity, ShieldAlert, Cpu, Lock, CheckCircle2 } from 'lucide-react';

export default function Feasibility() {
  const pillars = [
    {
      title: "COMFORTABILITY & WEARABILITY",
      desc: "Breathable, expandable overlapping-panel construction with magnetic/hook-and-loop micro-adjustment designed to adapt as pregnancy progresses.",
      icon: Layers,
      color: "text-sky-600 bg-sky-50"
    },
    {
      title: "POSTURE & HEALTH MONITORING",
      desc: "Lower-lumbar IMU sensing for posture, sleep quality, and daily movement/kick-count tracking.",
      icon: Activity,
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      title: "EMERGENCY RESPONSE",
      desc: "Dual-IMU fall detection can generate alerts with a 30-second cancellation window before escalation.",
      icon: ShieldAlert,
      color: "text-rose-600 bg-rose-50"
    },
    {
      title: "COMPONENT-LEVEL ENGINEERING",
      desc: "Built around a defined, costed BOM (ESP32-S3, Ag/Agcl ECG electrodes, IMUs, piezo fetal-movement sensors, FSR pressure sensors, load cell) — presented as an internal reference, not a finished/certified spec.",
      icon: Cpu,
      color: "text-teal-600 bg-teal-50"
    },
    {
      title: "DATA PRIVACY",
      desc: "User-controlled, phone-based data storage. Telemetry remains private to the expectant mother on her device.",
      icon: Lock,
      color: "text-amber-600 bg-amber-50"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-50 text-sky-700 border border-sky-200">
            SECTION 23 · FEASIBILITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            TECHNICAL & PHYSICAL FEASIBILITY
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Grounding futuristic wearable innovation in practical, manufacturable components and biomechanical reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="glass-panel rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Feasibility Study Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
