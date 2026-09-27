import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cpu, HeartPulse, Activity, Zap } from 'lucide-react';

export default function ProjectSnapshot() {
  const items = [
    { label: "EVENT", val: "SIH 2026", icon: Award, color: "text-amber-600 bg-amber-50" },
    { label: "THEME", val: "HEALTHTECH", icon: HeartPulse, color: "text-rose-600 bg-rose-50" },
    { label: "CATEGORY", val: "HARDWARE", icon: Cpu, color: "text-indigo-600 bg-indigo-50" },
    { label: "PROBLEM ID", val: "SIH26113", icon: Zap, color: "text-sky-600 bg-sky-50" },
    { label: "INNOVATOR", val: "TEAM Zavaibah 🚀", icon: Activity, color: "text-emerald-600 bg-emerald-50" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 my-6">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass-panel rounded-2xl p-3 sm:p-4 shadow-sm border border-slate-200/90"
      >
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className={`flex items-center gap-3 ${idx !== 0 ? 'pt-2 sm:pt-0 sm:pl-3' : ''}`}>
                <div className={`p-2 rounded-xl ${item.color} shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight whitespace-nowrap">{item.val}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
