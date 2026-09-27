import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Activity, Thermometer, Compass, Gauge, Baby, ShieldAlert, AlertTriangle, ArrowRight } from 'lucide-react';
import RemovableModule from './RemovableModule';

export default function ProductExplorer({ activeSensorId, onSelectSensor }) {
  const [selectedPoint, setSelectedPoint] = useState(activeSensorId || 'hr');

  const points = [
    {
      id: "hr",
      name: "Heart Rate",
      category: "Maternal Cardiovascular",
      component: "Ag/AgCl ECG electrodesPPG Optical Module",
      explanation: "Monitors heart-rate information as part of the wearable's health-tracking system.",
      sourceNote: "Sourced strictly from project BOM (Section 2E).",
      icon: Heart,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      dotPos: { x: "42%", y: "45%" }
    },
    {
      id: "spo2",
      name: "SpO2 (Blood Oxygen)",
      category: "Oxygen Saturation",
      component: "Ag/AgCl ECG electrodesDual-Wavelength Photodiode",
      explanation: "Measures peripheral blood oxygen saturation continuously alongside maternal pulse.",
      sourceNote: "From same Ag/AgCl ECG electrodesintegrated sensor unit.",
      icon: Activity,
      color: "text-sky-600 bg-sky-50 border-sky-200",
      dotPos: { x: "48%", y: "42%" }
    },
    {
      id: "temperature",
      name: "Temperature",
      category: "Skin / Core Thermal",
      component: "TMP117 (or DS18B20 alternative)",
      explanation: "Tracks body and skin temperature trends to support overall maternal health monitoring.",
      sourceNote: "Under evaluation in project BOM.",
      icon: Thermometer,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      dotPos: { x: "55%", y: "46%" }
    },
    {
      id: "movement",
      name: "Movement",
      category: "Kinematics & Posture",
      component: "LSM6DSOX 6-Axis IMU (or MPU6050 alt.)",
      explanation: "Samples pelvic and torso motion to determine posture status (upright, sitting, lying down) and daily activity level.",
      sourceNote: "Primary lower-lumbar IMU.",
      icon: Compass,
      color: "text-teal-600 bg-teal-50 border-teal-200",
      dotPos: { x: "50%", y: "25%" }
    },
    {
      id: "pressure",
      name: "Pressure",
      category: "Belt Tension & Fit",
      component: "FSR402 Force Sensing Resistors (×4)",
      explanation: "Detects belt fit and pressure distribution across the 4 anatomical support zones to ensure balanced ergonomic fit.",
      sourceNote: "Proposed addition in BOM.",
      icon: Gauge,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      dotPos: { x: "28%", y: "60%" }
    },
    {
      id: "fetal",
      name: "Fetal Movement",
      category: "Fetal Kick Sensing",
      component: "Piezo-film / flexible piezo sensor array (3–4 units)",
      explanation: "Captures mechanical impulses and fetal movements on the abdominal sling to track daily kick-count trends.",
      sourceNote: "Availability risk noted in BOM.",
      icon: Baby,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      dotPos: { x: "46%", y: "68%" }
    },
    {
      id: "fall",
      name: "Fall Detection",
      category: "Emergency Safety",
      component: "Dual LSM6DSOX IMUs + Edge Logic",
      explanation: "Uses dual inertial measurement units to detect rapid impact vectors while filtering out benign posture changes to reduce false alerts.",
      sourceNote: "Features 30-second cancellation window.",
      icon: AlertTriangle,
      color: "text-red-600 bg-red-50 border-red-200",
      dotPos: { x: "50%", y: "18%" }
    },
    {
      id: "sos",
      name: "SOS",
      category: "Manual Emergency Trigger",
      component: "Tactile Push Button + Software Trigger",
      explanation: "Provides immediate, tactile manual emergency trigger initiating a 30-second countdown before sending push alerts.",
      sourceNote: "Always accessible on wearable and app.",
      icon: ShieldAlert,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      dotPos: { x: "65%", y: "30%" }
    },
  ];

  const current = points.find(p => p.id === selectedPoint) || points[0];
  const CurrentIcon = current.icon;

  return (
    <section id="product-lab" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-50 text-sky-700 border border-sky-200">
            SECTION 15 · INTERACTIVE PRODUCT LAB
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            EXPLORE THE SENSOR ECOSYSTEM
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Click on any sensor point to inspect its hardware component, functional rationale, and BOM source.
          </p>
        </div>

        {/* Clickable Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {points.map((p) => {
            const Icon = p.icon;
            const isSelected = selectedPoint === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPoint(p.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm ring-2 ring-sky-400'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Explorer Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Schematic Frame */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[460px] bg-slate-50/80 rounded-3xl border border-slate-200/90 shadow-sm p-4 overflow-hidden flex items-center justify-center">
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60" />

            {/* Wearable Schematic Backdrop */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                {/* Lumbar Frame */}
                <path d="M70 200 C70 90, 330 90, 330 200" stroke="#0F172A" strokeWidth="24" strokeLinecap="round" opacity="0.8" />
                {/* Belly Sling */}
                <path d="M70 200 C70 330, 330 330, 330 200" stroke="#E2E8F0" strokeWidth="32" strokeLinecap="round" />
                <path d="M90 205 C90 310, 310 310, 310 205" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 6" />

                {/* Center Pod */}
                <rect x="160" y="105" width="80" height="34" rx="8" fill="#1E293B" stroke="#0284C7" strokeWidth="2" />
                <text x="200" y="127" fill="#F8FAFC" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ESP32 CORE</text>
              </svg>

              {/* Clickable Hotspot Pins */}
              {points.map((p) => {
                const isSelected = selectedPoint === p.id;
                const Icon = p.icon;

                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPoint(p.id)}
                    style={{ left: p.dotPos.x, top: p.dotPos.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      {isSelected && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                      )}
                      <span className={`relative inline-flex rounded-full p-2 shadow-md transition-all ${
                        isSelected 
                          ? 'bg-sky-600 text-white scale-110 ring-4 ring-sky-100' 
                          : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Overlay Caption */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>ACTIVE INSPECTOR: {current.name.toUpperCase()}</span>
              <span>PROTOTYPE PIN #{current.id.toUpperCase()}</span>
            </div>
          </div>

          {/* Info Details Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-glass"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-2xl ${current.color} shadow-xs`}>
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-sky-600 uppercase tracking-wider">
                      {current.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{current.name}</h3>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    BOM Candidate Hardware
                  </span>
                  <p className="text-xs font-bold text-slate-800">{current.component}</p>
                </div>

                <div className="mt-4">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Functional Role
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {current.explanation}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[11px]">{current.sourceNote}</span>
                  <span className="badge-demo">DEMO SPEC</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Section 16: Removable Electronics Module */}
        <RemovableModule />
      </div>
    </section>
  );
}
