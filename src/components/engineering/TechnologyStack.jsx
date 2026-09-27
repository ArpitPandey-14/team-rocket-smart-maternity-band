import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Bluetooth, 
  Compass, 
  Heart, 
  Gauge, 
  Thermometer, 
  Baby, 
  Scale, 
  ChevronDown, 
  ChevronUp, 
  Info,
  DollarSign
} from 'lucide-react';
import { bomComponents, bomCostSummary, upgradePaths } from '../../data/projectData';
import InteractiveDataStory from './InteractiveDataStory';

export default function TechnologyStack() {
  const [showBomTable, setShowBomTable] = useState(false);

  const primaryCards = [
    {
      id: "esp32",
      name: "ESP32-S3 DevKit",
      role: "Main MCU + BLE / Wi-Fi Hub",
      icon: Cpu,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      description: "Dual-core 240MHz controller coordinating all I2C/SPI sensor acquisition and managing low-power sleep states.",
      bomRef: "1 Unit · ₹650–₹1,500 · Selected"
    },
    {
      id: "ble",
      name: "BLE 5.0 Radio",
      role: "Wireless Telemetry Broadcast",
      icon: Bluetooth,
      color: "text-sky-600 bg-sky-50 border-sky-200",
      description: "Provides low-energy encrypted communications between the wearable band pod and the mobile smartphone application.",
      bomRef: "Integrated in ESP32-S3"
    },
    {
      id: "imu",
      name: "Dual LSM6DSOX IMUs",
      role: "Torso & Hip Kinematics",
      icon: Compass,
      color: "text-teal-600 bg-teal-50 border-teal-200",
      description: "Samples pelvic tilt and thigh angles to reduce fall false-alarms and track daily sitting/standing transitions.",
      bomRef: "2 Units · ₹500–₹1,200/unit · Under Evaluation"
    },
    {
      id: "hr_spo2",
      name: "Ag/AgCl ECG electrodesModule",
      role: "Maternal Pulse & Blood Oxygen",
      icon: Heart,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      description: "Dual-wavelength optical PPG sensor measuring real-time maternal pulse rate and arterial blood oxygen saturation.",
      bomRef: "1 Unit · ₹130–₹250 · Prototype Selected"
    },
    {
      id: "pressure",
      name: "FSR402 Pressure Array",
      role: "4-Zone Anatomical Fit",
      icon: Gauge,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      description: "Four piezoresistive sensors across front, medial flanks, and lumbar back to monitor bilateral load redistribution.",
      bomRef: "4 Units · ₹155–₹350/unit · Proposed"
    },
    {
      id: "temperature",
      name: "TMP117 Clinical Probe",
      role: "Skin / Maternal Core Thermal",
      icon: Thermometer,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      description: "High-accuracy clinical temperature sensor tracking baseline circadian rhythms and subtle maternal shifts.",
      bomRef: "1 Unit · ₹150–₹450 · Under Evaluation"
    },
    {
      id: "piezo",
      name: "Piezo-Film Array",
      role: "Fetal Kick Impulse Sensing",
      icon: Baby,
      color: "text-pink-600 bg-pink-50 border-pink-200",
      description: "Compliant piezoelectric film transducers placed along the abdominal sling to log fetal movements and kicks.",
      bomRef: "3–4 Units · ₹100–₹250/unit · Availability Risk Noted"
    },
    {
      id: "load_cell",
      name: "Load Cell + HX711",
      role: "Spring Assist Force Monitor",
      icon: Scale,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      description: "Measures torque and tension assistance exerted by the kinetic hip pivot spring during sit-to-stand transitions.",
      bomRef: "1 Unit · ₹300–₹900 combined · Proposed"
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFBFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-50 text-sky-700 border border-sky-200">
            SECTION 20 · TECHNOLOGY REFERENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            HARDWARE COMPONENT STACK
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Engineered using commercially accessible microcontrollers and medical-grade sensors, fully documented in Team Zavaibah's Bill of Materials.
          </p>
        </div>

        {/* 8 Primary Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {primaryCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass-panel rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl ${card.color} shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">{card.name}</h3>
                  <span className="text-[10px] font-mono font-bold text-sky-600 uppercase tracking-wider block mb-2">
                    {card.role}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">{card.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>BOM REF:</span>
                  <span className="font-semibold text-slate-800">{card.bomRef}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Data Story Component */}
        <InteractiveDataStory />

        {/* Expandable Engineering BOM Table Drawer */}
        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                  ENGINEERING BILL OF MATERIALS (BOM)
                </span>
                <span className="badge-demo">INTERNAL ESTIMATE</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Full 17-Component Hardware Specification</h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Electronics: {bomCostSummary.electronicsMin} – {bomCostSummary.electronicsMax} (avg. {bomCostSummary.electronicsAvg}) · Total Est: {bomCostSummary.totalProductEst}
              </p>
            </div>

            <button
              onClick={() => setShowBomTable(!showBomTable)}
              className="px-4 py-2.5 rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2 transition-all shrink-0"
            >
              <span>{showBomTable ? "Collapse BOM Breakdown" : "View Detailed 17-Item BOM"}</span>
              {showBomTable ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {showBomTable && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-6 pt-6 border-t border-slate-200"
              >
                {/* Cost Disclaimer */}
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 mb-4 flex items-start gap-2.5 text-xs text-amber-900 font-mono">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Engineering Notice:</strong> {bomCostSummary.disclaimer} Figures are indicative component costs from regional vendor surveys for SIH 2026 prototyping.
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-50 border-b border-slate-200 font-mono text-[11px] text-slate-500 uppercase">
                      <tr>
                        <th className="py-3 px-4">Function</th>
                        <th className="py-3 px-4">Candidate Component</th>
                        <th className="py-3 px-4">Qty</th>
                        <th className="py-3 px-4">Approx. Cost / Unit (₹)</th>
                        <th className="py-3 px-4">Prototype Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-xs">
                      {bomComponents.map((item, idx) => (
                        <tr key={item.function + idx} className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3 px-4 font-sans font-semibold text-slate-900">{item.function}</td>
                          <td className="py-3 px-4 text-sky-700 font-bold">{item.component}</td>
                          <td className="py-3 px-4">{item.qty}</td>
                          <td className="py-3 px-4 font-semibold">{item.costRange}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              item.status.includes('Selected') ? 'bg-emerald-100 text-emerald-800' :
                              item.status.includes('Recommended') ? 'bg-sky-100 text-sky-800' :
                              item.status.includes('risk') ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Optional Future Upgrade Paths */}
                <div className="mt-8 pt-4 border-t border-slate-200">
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block mb-3">
                    Future Upgrade Paths (Noted in Working BOM — Not Yet Implemented)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {upgradePaths.map((up) => (
                      <div key={up.item} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] font-mono text-sky-600 block uppercase">{up.stage}</span>
                        <p className="text-xs font-bold text-slate-900 mt-0.5">{up.item}</p>
                        <p className="text-[11px] font-mono text-slate-500 mt-1">{up.spec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
