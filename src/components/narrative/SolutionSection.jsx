import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Cpu, Bluetooth, Smartphone, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SolutionSection() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      id: "mechanical",
      num: "LAYER 01",
      title: "Mechanical Load Support",
      subtitle: "Lumbar Counterweight + Belly Sling",
      icon: Layers,
      color: "from-sky-500 to-blue-600",
      textColor: "text-sky-600",
      bgLight: "bg-sky-50 border-sky-200",
      description: "A dual-panel mechanical structure combining a firm posterior lumbar support with a compliant abdominal sling. Distributes anterior weight directly to the pelvic girdle, actively relieving lower back stress.",
      details: ["4-Zone targeted support", "Telescoping nylon/UHMWPE sliding tracks", "Passive kinetic sit-to-stand assist"]
    },
    {
      id: "sensing",
      num: "LAYER 02",
      title: "Smart Bio-Sensing Matrix",
      subtitle: "Continuous Mother & Baby Telemetry",
      icon: Cpu,
      color: "from-indigo-500 to-purple-600",
      textColor: "text-indigo-600",
      bgLight: "bg-indigo-50 border-indigo-200",
      description: "Non-invasive sensor cluster integrating Ag/AgCl ECG electrodesfor maternal pulse and SpO2, piezoelectric acoustic sensors for fetal kick frequency, and high-precision TMP117 skin temperature monitoring.",
      details: ["Piezo-film fetal movement detection", "Dual LSM6DSOX 6-axis IMUs", "FSR402 belt fit pressure sensors"]
    },
    {
      id: "connectivity",
      num: "LAYER 03",
      title: "BLE 5.0 Low-Energy Telemetry",
      subtitle: "Edge Processing on ESP32-S3",
      icon: Bluetooth,
      color: "from-teal-500 to-emerald-600",
      textColor: "text-teal-600",
      bgLight: "bg-teal-50 border-teal-200",
      description: "The on-board ESP32-S3 microcontroller applies digital filtering on raw signals and broadcasts encrypted, structured telemetry packets to the user's mobile device with minimal battery draw.",
      details: ["Xtensa 240MHz dual-core processing", "BLE 5.0 GATT server architecture", "Detachable pod for easy washing"]
    },
    {
      id: "guidance",
      num: "LAYER 04",
      title: "Local Mobile Intelligence",
      subtitle: "Trends & Non-Prescription Guidance",
      icon: Smartphone,
      color: "from-amber-500 to-orange-600",
      textColor: "text-amber-600",
      bgLight: "bg-amber-50 border-amber-200",
      description: "The mobile app processes telemetry locally on the smartphone without mandatory cloud upload. Translates activity and sleep patterns into gentle hydration, rest, and posture lifestyle tips.",
      details: ["Private on-device storage", "Interactive 7-day & 30-day trends", "User-entered EDD calculation"]
    },
    {
      id: "safety",
      num: "LAYER 05",
      title: "Automated Safety Loop",
      subtitle: "Dual-IMU Fall Detection & SOS",
      icon: ShieldCheck,
      color: "from-rose-500 to-red-600",
      textColor: "text-rose-600",
      bgLight: "bg-rose-50 border-rose-200",
      description: "Monitors sudden acceleration anomalies. If a fall is detected, an automatic 30-second cancellation countdown begins before emergency notifications are dispatched, backed by a tactile SOS button.",
      details: ["Dual-IMU false-alarm reduction", "30-second user cancellation window", "Physical tactile manual SOS button"]
    }
  ];

  return (
    <section id="solution" className="py-20 sm:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>THE INTEGRATED SOLUTION</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ONE WEARABLE. <br />
            <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
              MULTIPLE LAYERS OF SUPPORT.
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm font-mono text-slate-500 tracking-wide uppercase">
            MECHANICAL SUPPORT + SMART SENSING + BLE CONNECTIVITY + MOBILE GUIDANCE + SAFETY
          </p>
        </div>

        {/* Interactive Layered Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Layer Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              const isActive = activeLayer === idx;

              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center gap-4 ${
                    isActive 
                      ? 'bg-white border-sky-300 shadow-lg ring-1 ring-sky-200 translate-x-1' 
                      : 'bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm bg-gradient-to-br ${layer.color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
                        {layer.num}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                          ACTIVE VIEW
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 truncate">{layer.title}</h3>
                    <p className="text-xs text-slate-500 truncate">{layer.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Layer Deep Dive Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {(() => {
                const current = layers[activeLayer];
                const Icon = current.icon;

                return (
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.97, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel rounded-3xl p-6 sm:p-8 shadow-glass border border-slate-200 relative overflow-hidden"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${current.color} text-white shadow-md`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-bold text-sky-600 uppercase tracking-wider">
                            {current.num}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900">{current.title}</h3>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                        {current.subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {current.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                        Key Architectural Highlights
                      </p>
                      {current.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                          <span className="font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Layer progression visual footer */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>SYSTEM LAYER {activeLayer + 1} OF 5</span>
                      <div className="flex gap-1.5">
                        {layers.map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              i === activeLayer ? 'w-6 bg-sky-600' : 'bg-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
