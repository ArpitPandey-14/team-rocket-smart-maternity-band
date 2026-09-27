import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sliders, 
  GitCommit, 
  Compass, 
  Shuffle, 
  ShieldAlert, 
  Maximize2, 
  Lock, 
  Layers, 
  Info,
  ChevronRight,
  Play,
  RotateCcw
} from 'lucide-react';
import { fourZones, mechanicalFeatures, growthStages } from '../../data/projectData';
import ImageWithLightbox from '../common/ImageWithLightbox';

export default function MechanicalSystem() {
  const [activeZone, setActiveZone] = useState('front');
  const [explodedStep, setExplodedStep] = useState(0);
  const [isExploding, setIsExploding] = useState(false);

  const featureIcons = [Sliders, GitCommit, Compass, Shuffle, ShieldAlert, Maximize2, Lock];

  const handleExplodeAnimation = () => {
    setIsExploding(true);
    setExplodedStep(1); // Panels separate
    setTimeout(() => setExplodedStep(2), 1200); // Spring highlights
    setTimeout(() => setExplodedStep(3), 2400); // 4 zones activate
    setTimeout(() => {
      setExplodedStep(0); // Reassemble
      setIsExploding(false);
    }, 4000);
  };

  return (
    <section id="mechanical" className="py-20 sm:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-semibold mb-3">
            <span>SECTION 17 · MECHANICAL ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            ENGINEERED FOR SUPPORT.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Team Zavaibah's Structure A (Lightweight Optimized) architecture — replacing rigid static belts with dynamic load redistribution, telescoping UHMWPE tracks, and kinetic sit-to-stand assistance.
          </p>
        </div>

        {/* Exploded View Simulation Header */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider">
                KINEMATIC ASSEMBLY
              </span>
              <h3 className="text-xl font-bold text-slate-900">Structure A Exploded-View Simulation</h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                ASSEMBLED BAND → PANELS SEPARATE → SPRING HIGHLIGHTS → 4 ZONES → REASSEMBLE
              </p>
            </div>

            <button
              onClick={handleExplodeAnimation}
              disabled={isExploding}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all shadow-sm ${
                isExploding 
                  ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                  : 'bg-sky-600 hover:bg-sky-500 text-white'
              }`}
            >
              {isExploding ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                  <span>Exploding Assembly Sequence...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Exploded View Animation</span>
                </>
              )}
            </button>
          </div>

          {/* Animated Exploded View Diagram */}
          <div className="relative h-64 sm:h-72 bg-slate-900 rounded-2xl p-6 overflow-hidden flex items-center justify-center">
            {/* Step 0: Assembled */}
            {/* Step 1: Panels Separate */}
            {/* Step 2: Spring System Highlights */}
            {/* Step 3: 4 Support Zones Activate */}
            <div className="relative w-full max-w-xl h-full flex items-center justify-center">
              {/* Posterior Lumbar Panel */}
              <motion.div
                animate={{
                  y: explodedStep === 1 || explodedStep === 2 || explodedStep === 3 ? -55 : 0,
                  opacity: 1
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute z-10 w-64 h-14 rounded-xl bg-slate-800 border border-sky-400/50 flex items-center justify-between px-4 shadow-lg"
              >
                <span className="text-[10px] font-mono font-bold text-sky-400">LUMBAR PANEL</span>
                <span className="text-[9px] font-mono text-slate-400">POM Counterweight Rail</span>
              </motion.div>

              {/* Kinetic Leaf Spring / Cam Linkage */}
              <motion.div
                animate={{
                  scale: explodedStep === 2 ? 1.2 : 1,
                  opacity: explodedStep === 2 ? 1 : 0.6,
                  y: explodedStep === 1 || explodedStep === 2 || explodedStep === 3 ? -10 : 0
                }}
                transition={{ duration: 0.5 }}
                className={`absolute z-20 w-48 h-8 rounded-lg border-2 flex items-center justify-center transition-colors ${
                  explodedStep === 2 ? 'bg-amber-500/20 border-amber-400 text-amber-300' : 'bg-slate-700/60 border-slate-600 text-slate-300'
                }`}
              >
                <span className="text-[9px] font-mono font-bold">
                  {explodedStep === 2 ? "★ KINETIC TORSION SPRING HIGHLIGHTED" : "Vector Rail / Leaf Springs"}
                </span>
              </motion.div>

              {/* Anterior Belly Support Sling */}
              <motion.div
                animate={{
                  y: explodedStep === 1 || explodedStep === 2 || explodedStep === 3 ? 55 : 0,
                  borderColor: explodedStep === 3 ? "#0284C7" : "rgba(148, 163, 184, 0.4)"
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute z-10 w-72 h-16 rounded-2xl bg-slate-800/90 border-2 border-slate-700 flex items-center justify-around px-3 shadow-xl"
              >
                <span className="text-[10px] font-mono font-bold text-white">BELLY SLING</span>
                <div className="flex gap-1">
                  {["Z1 Front", "Z2 L-Med", "Z3 R-Med", "Z4 Back"].map((z, idx) => (
                    <span 
                      key={z} 
                      className={`text-[8px] font-mono px-1 py-0.5 rounded transition-all ${
                        explodedStep === 3 
                          ? 'bg-sky-500 text-white font-bold scale-110 shadow-sm' 
                          : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {z}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Status Callout Bar */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>
                STAGE: {explodedStep === 0 && "01 ASSEMBLED STATE"}
                {explodedStep === 1 && "02 STRUCTURAL PANELS SEPARATING"}
                {explodedStep === 2 && "03 KINETIC SPRING & CAM SYSTEM HIGHLIGHT"}
                {explodedStep === 3 && "04 4-ZONE ANATOMICAL VECTORS ACTIVATED"}
              </span>
              <span className="text-sky-400">STRUCTURE A SPECIFICATION</span>
            </div>
          </div>
        </div>

        {/* 7 Detailed Mechanical Features Grid */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                7 DETAILED MECHANICAL MECHANISMS
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Engineering Feature Breakdown
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              MIRRORING STRUCTURE A NUMBERS 01 – 07
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechanicalFeatures.map((feat, idx) => {
              const Icon = featureIcons[idx] || Sliders;
              return (
                <div 
                  key={feat.number}
                  className="glass-panel rounded-2xl p-6 border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-slate-900 text-white text-xs font-mono font-bold flex items-center justify-center">
                          {feat.number}
                        </span>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                          {feat.type}
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{feat.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-[10px] font-mono text-slate-400 mb-1">MATERIALS / SUBSTRATE</p>
                    <p className="text-xs font-semibold text-slate-700 leading-snug">{feat.materials}</p>
                    <div className="mt-2 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400">PROTOTYPE STATUS:</span>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{feat.status}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Zone Adjustable Support Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold text-teal-600 uppercase tracking-wider">
              ANATOMICAL VECTOR MAP
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-4">
              4-Zone Adjustable Support Map
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Unlike static compression garments that uniformly squeeze maternal tissues, the Smart Maternity Band applies differential support vector stiffness mapped across four distinct anatomical zones.
            </p>

            <div className="space-y-3">
              {fourZones.map((z) => {
                const isSelected = activeZone === z.id;
                return (
                  <button
                    key={z.id}
                    onClick={() => setActiveZone(z.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-white border-sky-400 shadow-md ring-1 ring-sky-200'
                        : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-900">{z.name} ({z.location})</span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        z.id === 'front' ? 'bg-sky-100 text-sky-800' :
                        z.id === 'back' ? 'bg-indigo-100 text-indigo-800' : 'bg-teal-100 text-teal-800'
                      }`}>
                        {z.character}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{z.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Zone Visual Graphic */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 320 320">
                {/* Torso Cross Section */}
                <ellipse cx="160" cy="160" rx="130" ry="110" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Back Firm Zone */}
                <path 
                  d="M90 90 C130 65, 190 65, 230 90" 
                  fill="none" 
                  stroke={activeZone === 'back' ? "#6366F1" : "#94A3B8"} 
                  strokeWidth={activeZone === 'back' ? "18" : "12"} 
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
                
                {/* Front Soft Zone */}
                <path 
                  d="M90 230 C130 255, 190 255, 230 230" 
                  fill="none" 
                  stroke={activeZone === 'front' ? "#0EA5E9" : "#94A3B8"} 
                  strokeWidth={activeZone === 'front' ? "18" : "12"} 
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                {/* Left Medial Zone */}
                <path 
                  d="M90 90 C65 125, 65 195, 90 230" 
                  fill="none" 
                  stroke={activeZone === 'left' ? "#14B8A6" : "#94A3B8"} 
                  strokeWidth={activeZone === 'left' ? "18" : "12"} 
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                {/* Right Medial Zone */}
                <path 
                  d="M230 90 C255 125, 255 195, 230 230" 
                  fill="none" 
                  stroke={activeZone === 'right' ? "#14B8A6" : "#94A3B8"} 
                  strokeWidth={activeZone === 'right' ? "18" : "12"} 
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                {/* Center Vector Indicators */}
                <text x="160" y="70" fill="#475569" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">POSTERIOR (FIRM)</text>
                <text x="160" y="260" fill="#475569" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ANTERIOR (SOFT UPWARD)</text>
                <text x="50" y="165" fill="#475569" fontSize="9" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 50 165)">LEFT MEDIAL</text>
                <text x="270" y="165" fill="#475569" fontSize="9" fontFamily="monospace" textAnchor="middle" transform="rotate(90 270 165)">RIGHT MEDIAL</text>
              </svg>
            </div>
            <div className="mt-4 text-center">
              <span className="badge-demo">DESIGN SPECIFICATION MAP</span>
              <p className="text-[11px] text-slate-400 font-mono mt-1">4-Zone Bilateral Force Redistribution Concept</p>
            </div>
          </div>
        </div>

        {/* Growth-Stage Reference Table */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                  GROWTH-STAGE REFERENCE
                </span>
                <span className="badge-demo">DEMO DATA / DESIGN TARGET</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Dynamic Expansion Across Trimesters
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Not a clinically validated spec · Design target reference
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b border-slate-200 font-mono text-[11px] text-slate-500 uppercase">
                <tr>
                  <th className="py-3 px-4">Stage & Gestation</th>
                  <th className="py-3 px-4">Typical Belt Circumference</th>
                  <th className="py-3 px-4">Mechanism State</th>
                  <th className="py-3 px-4">Support Emphasis</th>
                  <th className="py-3 px-4">Data Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {growthStages.map((stage) => (
                  <tr key={stage.stage} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {stage.stage}
                      <span className="block font-normal text-slate-500 text-[11px]">{stage.weeks}</span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-sky-700">{stage.circumference}</td>
                    <td className="py-3.5 px-4">{stage.mechanismState}</td>
                    <td className="py-3.5 px-4">{stage.supportEmphasis}</td>
                    <td className="py-3.5 px-4">
                      <span className="badge-demo">DEMO DATA</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
