import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Clock, 
  Compass, 
  Baby, 
  Heart, 
  Radio, 
  CheckCircle2, 
  PlayCircle 
} from 'lucide-react';

export default function SafetySection({ onOpenSOS }) {
  const safetyFeatures = [
    {
      title: "FALL DETECTION",
      desc: "Dual-axis impact algorithm differentiates rapid gravitational drops from benign sit-down or recumbent movements.",
      icon: Compass,
      color: "text-rose-600 bg-rose-50"
    },
    {
      title: "SOS BUTTON",
      desc: "Instant tactile manual button located directly on the electronics pod for immediate emergency signaling.",
      icon: ShieldAlert,
      color: "text-red-600 bg-red-50"
    },
    {
      title: "30-SECOND CANCELLATION WINDOW",
      desc: "Authoritative 30-second cancellation buffer gives mothers full control to prevent accidental false dispatches.",
      icon: Clock,
      color: "text-amber-600 bg-amber-50"
    },
    {
      title: "DUAL-IMU FALSE-ALERT REDUCTION",
      desc: "Cross-references lumbar IMU with thigh/hip angle IMU to filter false spikes before activating emergency countdowns.",
      icon: Radio,
      color: "text-teal-600 bg-teal-50"
    },
    {
      title: "MOTHER HEALTH MONITORING",
      desc: "Continuous pulse and oxygenation baseline checks to detect sudden physiological trends.",
      icon: Heart,
      color: "text-pink-600 bg-pink-50"
    },
    {
      title: "FETAL MOVEMENT TRACKING",
      desc: "Piezo-film sensor array monitors movement patterns without continuous active ultrasound radiation.",
      icon: Baby,
      color: "text-indigo-600 bg-indigo-50"
    }
  ];

  return (
    <section id="safety" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>SECTION 22 · SAFETY FIRST</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            MULTILAYERED SAFETY ARCHITECTURE
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Dual-IMU verification and authoritative 30-second cancellation protocols designed specifically for maternal peace of mind.
          </p>
        </div>

        {/* Safety Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {safetyFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${feat.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-mono text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Integrated Safety Spec</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Simulation Launch Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white border border-slate-700 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs font-mono font-bold text-rose-400">LIVE DEMONSTRATION</span>
            </div>
            <h3 className="text-xl font-bold text-white">Experience the 30-Second Emergency Cancellation Protocol</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Launch the interactive countdown simulation to observe how dual-IMU triggers and cancellation windows operate in real-time.
            </p>
          </div>

          <button
            onClick={onOpenSOS}
            className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-lg shadow-rose-600/30 flex items-center gap-2 transition-all shrink-0"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Launch SOS Simulation</span>
          </button>
        </div>
      </div>
    </section>
  );
}
