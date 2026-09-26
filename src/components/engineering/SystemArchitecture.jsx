import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Bluetooth, Smartphone, Layers, Activity, ShieldAlert, ArrowRight, Zap } from 'lucide-react';

export default function SystemArchitecture() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = {
    mcu: {
      title: "ESP32-S3 Microcontroller",
      category: "Embedded Processing Unit",
      role: "Acts as the controller that reads wearable sensor information and communicates with the mobile application via BLE 5.0.",
      spec: "Dual-core Xtensa 32-bit LX7 @ 240MHz, 512KB SRAM, 2.4GHz Wi-Fi + BLE 5.0."
    },
    sensors: {
      title: "Bio-Sensing & Telemetry Cluster",
      category: "Sensor Acquisition Layer",
      role: "Gathers raw photoplethysmography (MAX30102), acoustic/piezo fetal impulses, dual IMU acceleration vectors, and 4-zone belt fit resistance.",
      spec: "I2C / SPI bus communication, 50Hz digital sampling, low-power sleep cycles."
    },
    ble: {
      title: "Bluetooth Low Energy (BLE 5.0)",
      category: "Wireless Communications",
      role: "Provides the connection between the wearable electronics and the mobile application with ultra-low battery drain.",
      spec: "Custom GATT service, 2M PHY, packet checksum verification."
    },
    app: {
      title: "Mobile Telemetry Application",
      category: "Client Application & UI",
      role: "Receives raw packets, formats data into 7D/30D trends, computes 4-zone belt fit, and manages the 30-second SOS alert countdown.",
      spec: "React-based local client, phone-based encrypted storage, emergency push loop."
    }
  };

  return (
    <section id="technology" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-50 text-sky-700 border border-sky-200">
            SECTION 18 · SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            CONNECTED HARDWARE TO SOFTWARE
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            End-to-end telemetry pipeline showing how physical strain and biometrics travel from on-body sensors to the smartphone.
          </p>
        </div>

        {/* System Diagram Grid */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-glass">
          {/* Animated Data Particle Flow Banner */}
          <div className="mb-10 p-4 rounded-2xl bg-slate-900 text-white overflow-hidden relative">
            <div className="flex items-center justify-between text-xs font-mono mb-2 text-slate-400">
              <span>REAL-TIME PIPELINE FLOW</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                TELEMETRY ACTIVE
              </span>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-xs font-bold">
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 text-sky-400 border border-slate-700">
                01 SENSORS
              </div>
              <motion.div 
                animate={{ x: [0, 8, 0] }} 
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-slate-500"
              >
                →
              </motion.div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 text-indigo-400 border border-slate-700">
                02 ESP32-S3
              </div>
              <motion.div 
                animate={{ x: [0, 8, 0] }} 
                transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                className="text-slate-500"
              >
                →
              </motion.div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 text-teal-400 border border-slate-700">
                03 BLE 5.0
              </div>
              <motion.div 
                animate={{ x: [0, 8, 0] }} 
                transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
                className="text-slate-500"
              >
                →
              </motion.div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 text-amber-400 border border-slate-700">
                04 PHONE APP
              </div>
              <motion.div 
                animate={{ x: [0, 8, 0] }} 
                transition={{ repeat: Infinity, duration: 1.2, delay: 0.6 }}
                className="text-slate-500"
              >
                →
              </motion.div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 text-rose-400 border border-slate-700">
                05 ALERTS & TRENDS
              </div>
            </div>
          </div>

          {/* Interactive Node Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Node 1: Sensors */}
            <div
              onMouseEnter={() => setActiveNode('sensors')}
              onClick={() => setActiveNode('sensors')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeNode === 'sensors'
                  ? 'bg-sky-50/80 border-sky-400 shadow-md ring-2 ring-sky-200'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold text-sky-600 uppercase">STEP 01</span>
              <h4 className="text-base font-bold text-slate-900 mt-1">SENSORS</h4>
              <p className="text-xs text-slate-500 mt-2">
                MAX30102 · TMP117 · LSM6DSOX · Piezo Array · FSR402 · HX711
              </p>
            </div>

            {/* Node 2: ESP32 */}
            <div
              onMouseEnter={() => setActiveNode('mcu')}
              onClick={() => setActiveNode('mcu')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeNode === 'mcu'
                  ? 'bg-indigo-50/80 border-indigo-400 shadow-md ring-2 ring-indigo-200'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase">STEP 02</span>
              <h4 className="text-base font-bold text-slate-900 mt-1">ESP32-S3 MCU</h4>
              <p className="text-xs text-slate-500 mt-2">
                Real-time filtering, sensor fusion, fall analysis & power management.
              </p>
            </div>

            {/* Node 3: BLE */}
            <div
              onMouseEnter={() => setActiveNode('ble')}
              onClick={() => setActiveNode('ble')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeNode === 'ble'
                  ? 'bg-teal-50/80 border-teal-400 shadow-md ring-2 ring-teal-200'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                <Bluetooth className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold text-teal-600 uppercase">STEP 03</span>
              <h4 className="text-base font-bold text-slate-900 mt-1">BLE 5.0 COMM</h4>
              <p className="text-xs text-slate-500 mt-2">
                Low-energy bi-directional sync between wearable pod & smartphone.
              </p>
            </div>

            {/* Node 4: Mobile App */}
            <div
              onMouseEnter={() => setActiveNode('app')}
              onClick={() => setActiveNode('app')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeNode === 'app'
                  ? 'bg-amber-50/80 border-amber-400 shadow-md ring-2 ring-amber-200'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold text-amber-600 uppercase">STEP 04</span>
              <h4 className="text-base font-bold text-slate-900 mt-1">MOBILE APP</h4>
              <p className="text-xs text-slate-500 mt-2">
                Local telemetry trends, non-medical wellness nudges & 30s SOS safety.
              </p>
            </div>
          </div>

          {/* Node Detail Inspector */}
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div>
                <span className="font-bold text-slate-900">{nodes[activeNode].title}</span>
                <span className="text-slate-400 font-mono ml-2">[{nodes[activeNode].category}]</span>
                <p className="text-slate-600 mt-1">{nodes[activeNode].role}</p>
              </div>
              <span className="text-[11px] font-mono bg-white px-2 py-1 rounded border border-slate-200 text-slate-700 shrink-0">
                {nodes[activeNode].spec}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
