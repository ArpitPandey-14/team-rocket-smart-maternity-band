import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, Share2, Smartphone, CheckCircle2, RefreshCw } from 'lucide-react';

export default function PrivacySection() {
  const [shareState, setShareState] = useState('idle'); // 'idle' | 'exporting' | 'shared'

  const handleSimulateShare = () => {
    setShareState('exporting');
    setTimeout(() => {
      setShareState('shared');
    }, 1800);
  };

  const handleResetShare = () => {
    setShareState('idle');
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-50 text-teal-700 border border-teal-200">
            SECTION 28 · DATA PRIVACY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            YOUR HEALTH DATA. <br />
            <span className="text-teal-600">YOUR CONTROL.</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Local-first smartphone architecture ensures maternal biometrics are stored on your personal device, with zero mandatory cloud uploads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Visual Architecture */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Ambient shield glow */}
            <div className="absolute w-64 h-64 rounded-full bg-teal-500/20 blur-3xl" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-slate-800 border-2 border-teal-400/60 flex items-center justify-center mx-auto mb-4 shadow-xl">
                <ShieldCheck className="w-10 h-10 text-teal-400" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">LOCAL-FIRST STORAGE</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                All data stays on the user's phone unless the user explicitly chooses to share it with their clinician.
              </p>

              {/* Data stream animation representation */}
              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-mono text-slate-400">
                <span className="bg-slate-800 px-2 py-1 rounded">WEARABLE POD</span>
                <span className="text-teal-400 font-bold">→ BLE →</span>
                <span className="bg-teal-900/60 text-teal-300 border border-teal-700 px-2 py-1 rounded font-bold">
                  LOCAL PHONE STORAGE (ENCRYPTED)
                </span>
              </div>
            </div>
          </div>

          {/* Right Simulated Share Action Card */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-glass">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-teal-700 uppercase">
                INTERACTIVE CLINICIAN EXPORT
              </span>
              <span className="badge-demo">SIMULATED UI</span>
            </div>

            <h4 className="text-lg font-bold text-slate-900 mb-2">User-Controlled Health Export</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              When visiting your obstetrician, generate a secure, one-time telemetry export of your 7-day or 30-day kick-count and heart-rate baseline. You control every transmission.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
              {shareState === 'idle' && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Smartphone className="w-5 h-5 text-slate-700" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Local Telemetry Archive</p>
                      <p className="text-[10px] text-slate-500 font-mono">14 Days of Movement & Vital Trends</p>
                    </div>
                  </div>
                  <button
                    onClick={handleSimulateShare}
                    className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Data</span>
                  </button>
                </div>
              )}

              {shareState === 'exporting' && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <RefreshCw className="w-5 h-5 text-teal-600 animate-spin" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Generating Secure PDF Summary...</p>
                      <p className="text-[10px] text-slate-500 font-mono">Compiling kick count & vital ranges</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-teal-600 font-bold">EXPORTING</span>
                </div>
              )}

              {shareState === 'shared' && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Export Ready for Clinician</p>
                      <p className="text-[10px] text-slate-500 font-mono">Transferred via user authorization</p>
                    </div>
                  </div>
                  <button
                    onClick={handleResetShare}
                    className="px-3 py-1 rounded-lg bg-slate-200 text-slate-700 text-[10px] font-mono hover:bg-slate-300"
                  >
                    Reset
                  </button>
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-400 font-mono leading-relaxed">
              * Privacy policy principle: We do not claim arbitrary external certifications (e.g. HIPAA/ISO) that have not been validated. Our protection relies on strict phone-local database storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
