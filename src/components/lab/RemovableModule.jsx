import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Unplug, Check, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

export default function RemovableModule() {
  const [isDetached, setIsDetached] = useState(false);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mt-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              MODULAR HARDWARE
            </span>
            <span className="text-[10px] font-mono text-slate-400">SECTION 16</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mt-1">REMOVABLE ELECTRONICS MODULE</h3>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            ESP32 · IMU · HR/SpO2 · PRESSURE · TEMPERATURE
          </p>
        </div>

        <button
          onClick={() => setIsDetached(!isDetached)}
          className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all shadow-sm ${
            isDetached
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
              : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          {isDetached ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Snap Module In (Re-dock)</span>
            </>
          ) : (
            <>
              <Unplug className="w-3.5 h-3.5" />
              <span>Simulate Module Detachment</span>
            </>
          )}
        </button>
      </div>

      {/* Visual Workspace */}
      <div className="relative h-64 bg-slate-50/80 rounded-2xl border border-slate-200/70 p-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Belt Base Housing */}
        <div className="relative w-full max-w-lg h-24 rounded-2xl bg-white border-2 border-dashed border-slate-300 flex items-center justify-center shadow-xs">
          <div className="text-center">
            <p className="text-xs font-bold text-slate-700">BREATHABLE TEXTILE SLING HOUSING</p>
            <p className="text-[11px] text-slate-400 font-mono">
              Washable Fabric Sling · Neoprene Backing · Quick-Release Magnetic Dock
            </p>
          </div>

          {/* Docking Bay */}
          <div className="absolute inset-x-12 inset-y-2 rounded-xl border border-sky-200 bg-sky-50/40 flex items-center justify-center pointer-events-none">
            <span className="text-[10px] font-mono text-sky-600 font-semibold tracking-wider">
              {isDetached ? "[ DOCKING RECEPTACLE VACANT — READY FOR WASHING ]" : ""}
            </span>
          </div>
        </div>

        {/* Detachable Smart Pod */}
        <motion.div
          animate={{
            y: isDetached ? -48 : 0,
            scale: isDetached ? 1.05 : 1,
            boxShadow: isDetached 
              ? "0 20px 30px -10px rgba(14, 165, 233, 0.25)" 
              : "0 4px 12px rgba(0, 0, 0, 0.05)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute z-10 w-80 p-4 rounded-2xl bg-slate-900 text-white border border-sky-400/40 shadow-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-white tracking-wide">SMART CORE POD</span>
            </div>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
              isDetached ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
            }`}>
              {isDetached ? "DETACHED" : "DOCKED & POWERED"}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono text-slate-300 mt-2">
            <div className="bg-slate-800 p-1 rounded text-center">ESP32-S3</div>
            <div className="bg-slate-800 p-1 rounded text-center">MAX30102</div>
            <div className="bg-slate-800 p-1 rounded text-center">LSM6DSOX</div>
            <div className="bg-slate-800 p-1 rounded text-center">TMP117</div>
            <div className="bg-slate-800 p-1 rounded text-center">FSR BUS</div>
            <div className="bg-slate-800 p-1 rounded text-center">3.7V Li-Po</div>
          </div>
        </motion.div>
      </div>

      <p className="mt-4 text-xs text-slate-500 leading-relaxed text-center sm:text-left">
        <strong>Hygienic Maintenance Architecture:</strong> The rigid electronics module houses all active circuitry, batteries, and radios. Expectant mothers can effortlessly detach it in one motion, allowing the surrounding fabric sling to be machine-washed safely.
      </p>
    </div>
  );
}
