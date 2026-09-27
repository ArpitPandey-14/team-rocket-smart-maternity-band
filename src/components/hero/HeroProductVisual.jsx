import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Compass, Gauge, Thermometer, Baby, ShieldCheck, Cpu } from 'lucide-react';

export default function HeroProductVisual({ onSelectSensor }) {
  const [activeCallout, setActiveCallout] = useState('hr');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const callouts = [
    {
      id: "hr",
      label: "HEART RATE",
      sensor: "Ag/AgCl ECG electrodesPPG Optical",
      spec: "Maternal Pulse Waveform",
      icon: Heart,
      color: "text-rose-500",
      bg: "bg-rose-50 border-rose-200",
      desktopPos: "top-8 left-2 lg:left-6",
    },
    {
      id: "spo2",
      label: "SpO₂ OXYGEN",
      sensor: "Red & IR Photodiode",
      spec: "Blood Oxygen Saturation",
      icon: Activity,
      color: "text-sky-500",
      bg: "bg-sky-50 border-sky-200",
      desktopPos: "top-32 left-0 lg:left-2",
    },
    {
      id: "fetal",
      label: "FETAL MOVEMENT",
      sensor: "Flexible Piezo-Film Array",
      spec: "Acoustic / Flex Kick Detection",
      icon: Baby,
      color: "text-indigo-500",
      bg: "bg-indigo-50 border-indigo-200",
      desktopPos: "bottom-16 left-4 lg:left-8",
    },
    {
      id: "movement",
      label: "MOVEMENT & POSTURE",
      sensor: "LSM6DSOX 6-Axis IMU",
      spec: "Pelvic Tilt & Fall Detection",
      icon: Compass,
      color: "text-teal-600",
      bg: "bg-teal-50 border-teal-200",
      desktopPos: "top-8 right-2 lg:right-6",
    },
    {
      id: "pressure",
      label: "PRESSURE / FIT",
      sensor: "FSR402 4-Zone Matrix",
      spec: "Bilateral Load Redistribution",
      icon: Gauge,
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-200",
      desktopPos: "top-32 right-0 lg:right-2",
    },
    {
      id: "temperature",
      label: "TEMPERATURE",
      sensor: "TMP117 Clinical Grade",
      spec: "Skin / Maternal Core Trend",
      icon: Thermometer,
      color: "text-purple-500",
      bg: "bg-purple-50 border-purple-200",
      desktopPos: "bottom-16 right-4 lg:right-8",
    },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center select-none px-2 sm:px-4">
      {/* 2.5D Interactive Wearable Model */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[320px] sm:h-[460px] lg:h-[500px] flex items-center justify-center"
      >
        {/* Parallax Container */}
        <motion.div 
          animate={{ 
            rotateX: -mousePos.y * 0.35, 
            rotateY: mousePos.x * 0.35,
            transformPerspective: 1000 
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Ambient Glow */}
          <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-sky-200/40 via-indigo-100/40 to-teal-100/30 blur-3xl pointer-events-none" />

          {/* 2.5D Band Vector Visualization */}
          <div className="relative w-64 h-64 sm:w-88 sm:h-88 flex items-center justify-center">
            <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#F8FAFC" />
                  <stop offset="100%" stopColor="#E2E8F0" />
                </linearGradient>
                <linearGradient id="lumbarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0F172A" />
                  <stop offset="100%" stopColor="#1E293B" />
                </linearGradient>
                <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Back Lumbar Support Panel (Firm Posterior Arc) */}
              <path 
                d="M80 180 C80 110, 280 110, 280 180" 
                stroke="url(#lumbarGrad)" 
                strokeWidth="28" 
                strokeLinecap="round" 
                opacity="0.9"
              />
              {/* Lumbar Counterweight Rail Detail */}
              <path 
                d="M120 145 C140 135, 220 135, 240 145" 
                stroke="#38BDF8" 
                strokeWidth="4" 
                strokeDasharray="6 4"
              />

              {/* Electronics Pod (Back Center) */}
              <rect x="155" y="115" width="50" height="26" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
              <circle cx="180" cy="128" r="4" fill="#38BDF8" className="animate-ping" />
              <text x="180" y="152" fill="#64748B" fontSize="8" fontFamily="monospace" textAnchor="middle">ESP32-S3 POD</text>

              {/* Front Abdominal Cradle Sling (Soft Upward Vector Arc) */}
              <path 
                d="M80 180 C80 260, 280 260, 280 180" 
                stroke="url(#bandGrad)" 
                strokeWidth="32" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="drop-shadow-md"
              />
              {/* Elastic fabric cells outline */}
              <path 
                d="M95 186 C95 245, 265 245, 265 186" 
                stroke="#0284C7" 
                strokeWidth="2" 
                strokeDasharray="4 6" 
                opacity="0.6"
              />

              {/* 4 Support Zones Highlight Marks */}
              {/* Front Zone (Soft) */}
              <circle cx="180" cy="245" r="7" fill="#0EA5E9" filter="url(#softGlow)" />
              <circle cx="180" cy="245" r="3" fill="#FFFFFF" />

              {/* Left Medial Zone (Moderate) */}
              <circle cx="95" cy="180" r="6" fill="#14B8A6" />
              <circle cx="95" cy="180" r="2.5" fill="#FFFFFF" />

              {/* Right Medial Zone (Moderate) */}
              <circle cx="265" cy="180" r="6" fill="#14B8A6" />
              <circle cx="265" cy="180" r="2.5" fill="#FFFFFF" />

              {/* Back Zone (Firm) */}
              <circle cx="180" cy="130" r="6" fill="#6366F1" />
              <circle cx="180" cy="130" r="2.5" fill="#FFFFFF" />

              {/* Fetal Piezo Array Nodes */}
              <circle cx="140" cy="225" r="4" fill="#8B5CF6" className="animate-pulse" />
              <circle cx="220" cy="225" r="4" fill="#8B5CF6" className="animate-pulse" />
            </svg>

            {/* Central Status Chip */}
            <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/95 border border-slate-200/90 shadow-sm backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-700 tracking-wider">
                DUAL-LAYER HARDWARE
              </span>
            </div>
          </div>

          {/* Desktop Floating Sensor Callouts */}
          <div className="hidden md:block">
            {callouts.map((c) => {
              const Icon = c.icon;
              const isHovered = activeCallout === c.id;

              return (
                <motion.div
                  key={c.id}
                  className={`absolute ${c.desktopPos} z-20 cursor-pointer`}
                  onMouseEnter={() => setActiveCallout(c.id)}
                  onClick={() => onSelectSensor && onSelectSensor(c.id)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className={`flex items-center gap-2.5 px-3 py-2 rounded-xl backdrop-blur-md shadow-xs border transition-all duration-200 ${c.bg} ${isHovered ? 'ring-2 ring-sky-400 shadow-md scale-105' : ''}`}>
                    <div className={`p-1.5 rounded-lg bg-white shadow-xs ${c.color}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-bold tracking-tight text-slate-900">{c.label}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
                      </div>
                      <p className="text-[9px] text-slate-500 font-mono tracking-tight">{c.sensor}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Mobile-Friendly Sensor Nodes Horizontal Carousel / Grid */}
      <div className="block md:hidden w-full mt-2">
        <div className="text-center mb-2">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            Tap to Inspect Sensor Node
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {callouts.map((c) => {
            const Icon = c.icon;
            const isSelected = activeCallout === c.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCallout(c.id);
                  if (onSelectSensor) onSelectSensor(c.id);
                }}
                className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all ${
                  isSelected 
                    ? 'bg-white border-sky-400 shadow-sm ring-1 ring-sky-200' 
                    : 'bg-white/80 border-slate-200/80'
                }`}
              >
                <div className={`p-1.5 rounded-lg bg-slate-50 ${c.color} shrink-0`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-slate-900 block truncate">{c.label}</span>
                  <span className="text-[8px] font-mono text-slate-400 block truncate">{c.sensor}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
