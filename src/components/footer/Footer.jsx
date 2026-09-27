import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-extrabold text-white tracking-tight">Zavaibah</span>
              <span className="text-sm">🚀</span>
              <span className="px-2 py-0.5 rounded-full bg-sky-950 text-sky-400 font-mono text-[10px] font-bold border border-sky-800">
                SIH 2026
              </span>
            </div>
            <p className="text-slate-300 font-bold text-sm">SMART MATERNITY BAND</p>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5">SMART INDIA HACKATHON 2026</p>
          </div>

          <div className="text-left md:text-right font-mono text-[11px] space-y-1">
            <p className="text-sky-400 font-bold">PROBLEM ID: SIH26113</p>
            <p className="text-slate-400">THEME: HEALTHTECH · CATEGORY: HARDWARE</p>
            <p className="text-slate-500">© 2026 Team Zavaibah. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
          <p>
            Competition Prototype & Engineering Demonstration. No individual contributor names disclosed per privacy rules.
          </p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShieldAlert className="w-3.5 h-3.5 text-sky-500" />
            <span>Simulated Telemetry Demonstration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
