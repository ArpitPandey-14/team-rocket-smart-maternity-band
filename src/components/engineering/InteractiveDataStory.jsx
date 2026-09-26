import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Thermometer, Compass, Gauge, Baby, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function InteractiveDataStory() {
  const [selectedMetric, setSelectedMetric] = useState('fetal');

  const metrics = [
    { id: 'fetal', name: 'Fetal Movement', sensor: 'Piezo-Film Sensors', icon: Baby, color: 'text-indigo-600' },
    { id: 'hr', name: 'Heart Rate', sensor: 'MAX30102 PPG', icon: Heart, color: 'text-rose-600' },
    { id: 'movement', name: 'Movement', sensor: 'LSM6DSOX 6-Axis IMU', icon: Compass, color: 'text-teal-600' },
    { id: 'temp', name: 'Temperature', sensor: 'TMP117 Clinical Probe', icon: Thermometer, color: 'text-purple-600' },
    { id: 'pressure', name: 'Pressure', sensor: 'FSR402 4-Zone Matrix', icon: Gauge, color: 'text-amber-600' }
  ];

  const current = metrics.find(m => m.id === selectedMetric) || metrics[0];

  const steps = [
    { label: current.sensor, role: "Acquisition", tag: "Hardware" },
    { label: "ESP32-S3 Edge Filter", role: "Digital Filtering", tag: "MCU Processing" },
    { label: "BLE 5.0 LE Packet", role: "Wireless Transfer", tag: "2.4GHz Radio" },
    { label: "Mobile App Client", role: "Local Aggregation", tag: "Phone Storage" },
    { label: `${current.name} Trend`, role: "Display & Safety", tag: "DEMO DATA" }
  ];

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider">
            SECTION 29 · INTERACTIVE DATA STORY
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-0.5">Live Telemetry Path Simulator</h3>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            [Selected metric] → SENSOR → ESP32 → BLE → MOBILE APP → TREND
          </p>
        </div>

        {/* Metric Selector Pills */}
        <div className="flex flex-wrap gap-1.5">
          {metrics.map((m) => {
            const Icon = m.icon;
            const isSelected = selectedMetric === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMetric(m.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isSelected 
                    ? 'bg-slate-900 text-white shadow-sm ring-2 ring-sky-300' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{m.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Path Animation View */}
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 text-white overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {steps.map((s, idx) => (
            <motion.div
              key={s.label + idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-1">
                  <span>STEP 0{idx + 1}</span>
                  <span className="text-sky-400 font-semibold">{s.tag}</span>
                </div>
                <h4 className="text-xs font-bold text-white leading-tight">{s.label}</h4>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-[10px] text-slate-400">{s.role}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
