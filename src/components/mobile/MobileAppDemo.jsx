import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Thermometer, 
  Compass, 
  Gauge, 
  Baby, 
  Calendar, 
  ShieldAlert, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  ChevronRight,
  Info,
  Apple
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  LineChart, 
  Line 
} from 'recharts';
import { 
  todayMetrics, 
  eddUserEntry, 
  trendData7Days, 
  trendData30Days, 
  guidanceSuggestions 
} from '../../data/mobileAppData';

export default function MobileAppDemo({ onOpenSOS }) {
  const [currentTab, setCurrentTab] = useState('today'); // 'today' | 'trends' | 'guidance'
  const [trendRange, setTrendRange] = useState('7d'); // '7d' | '30d'

  const activeTrendData = trendRange === '7d' ? trendData7Days : trendData30Days;

  return (
    <section id="mobile-app" className="py-16 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
            <span>SECTION 21 · MOBILE APPLICATION DEMO</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white">
            SIMULATED MOBILE INTERFACE
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm px-2">
            Apple Health-inspired interface with three dedicated tabs. All figures are marked with the <span className="text-amber-400 font-bold">DEMO DATA</span> badge.
          </p>
        </div>

        {/* Smartphone Frame Container */}
        <div className="max-w-md sm:max-w-xl mx-auto">
          <div className="relative rounded-3xl sm:rounded-[42px] p-2 sm:p-4 bg-slate-800/90 border-2 sm:border-4 border-slate-700 shadow-2xl backdrop-blur-xl">
            {/* Phone Notch & Speaker (hidden on small mobile to maximize screen area) */}
            <div className="hidden sm:flex w-36 h-4 bg-slate-950 rounded-full mx-auto mb-3 items-center justify-center">
              <div className="w-12 h-1 bg-slate-800 rounded-full" />
            </div>

            {/* App Internal Screen */}
            <div className="rounded-2xl sm:rounded-[32px] bg-[#FAFBFD] text-slate-900 min-h-[560px] sm:min-h-[640px] flex flex-col justify-between overflow-hidden shadow-inner">
              
              {/* App Top Bar */}
              <div className="p-3.5 sm:p-4 bg-white/90 border-b border-slate-100 flex items-center justify-between sticky top-0 z-10 backdrop-blur-md">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-sky-700 uppercase tracking-wider block">
                    ROCKET SMART TELEMETRY
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">Maternal Companion</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>BLE SYNCED</span>
                </div>
              </div>

              {/* Tab Navigation Pill Bar (TODAY · TRENDS · GUIDANCE) */}
              <div className="px-3 sm:px-4 pt-2.5 pb-1 bg-white border-b border-slate-100">
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold font-mono">
                  {['today', 'trends', 'guidance'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setCurrentTab(tab)}
                      className={`py-2 rounded-lg transition-all capitalize text-center text-xs ${
                        currentTab === tab 
                          ? 'bg-white text-slate-900 shadow-sm' 
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable Tab Content Area */}
              <div className="p-3 sm:p-4 overflow-y-auto max-h-[480px] sm:max-h-[500px] flex-1">
                <AnimatePresence mode="wait">
                  {/* TAB 1: TODAY */}
                  {currentTab === 'today' && (
                    <motion.div
                      key="today"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      {/* Expected Delivery Date (EDD) Card - Strictly User Entered */}
                      <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200/80">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-sky-900">
                            <Calendar className="w-3.5 h-3.5 text-sky-600" />
                            <span>{eddUserEntry.title}</span>
                          </div>
                          <span className="badge-demo">USER ENTRY</span>
                        </div>
                        <div className="flex items-baseline justify-between mt-1">
                          <span className="text-sm sm:text-base font-extrabold text-slate-900">{eddUserEntry.date}</span>
                          <span className="text-[11px] sm:text-xs text-sky-700 font-mono font-medium">{eddUserEntry.gestationalAge}</span>
                        </div>
                        <p className="text-[9px] sm:text-[10px] text-slate-500 font-mono mt-1.5 pt-1.5 border-t border-sky-100">
                          {eddUserEntry.disclaimer}
                        </p>
                      </div>

                      {/* Sensor Grid (Strictly from BOM) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {todayMetrics.map((m) => (
                          <div 
                            key={m.id}
                            className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] font-bold text-slate-500 tracking-tight">{m.label}</span>
                              <span className="badge-demo">{m.badge}</span>
                            </div>

                            <div className="my-1">
                              <div className="flex items-baseline gap-1">
                                <span className="text-lg sm:text-xl font-extrabold text-slate-900">{m.value}</span>
                                <span className="text-[10px] sm:text-[11px] font-mono text-slate-500">{m.unit}</span>
                              </div>
                              <span className="text-[10px] text-emerald-700 font-semibold">{m.zone}</span>
                            </div>

                            <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-400">
                              <span className="truncate max-w-[120px] sm:max-w-[140px]">{m.sensor}</span>
                              <span className="text-sky-600">{m.trend}</span>
                            </div>
                            {m.subnote && (
                              <p className="text-[8px] text-amber-700 font-mono mt-1 bg-amber-50 px-1 py-0.5 rounded">
                                {m.subnote}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Persistent SOS Emergency Button on Today Tab */}
                      <div className="pt-2">
                        <button
                          onClick={onOpenSOS}
                          className="w-full py-3 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:from-rose-500 hover:to-red-500 transition-all group"
                        >
                          <ShieldAlert className="w-4 h-4 animate-pulse" />
                          <span>EMERGENCY SOS · 30S SAFETY PROTOCOL</span>
                        </button>
                        <p className="text-center text-[8.5px] sm:text-[9px] text-slate-400 font-mono mt-1">
                          WEBSITE DEMONSTRATION ONLY · Does not contact actual emergency services
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: TRENDS */}
                  {currentTab === 'trends' && (
                    <motion.div
                      key="trends"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Time-Range Toggle */}
                      <div className="flex items-center justify-between pb-1">
                        <span className="text-xs font-bold text-slate-700">Historical Telemetry</span>
                        <div className="flex gap-1 bg-slate-200/70 p-0.5 rounded-lg text-[10px] font-mono font-bold">
                          <button
                            onClick={() => setTrendRange('7d')}
                            className={`px-2.5 py-1 rounded-md transition-all ${
                              trendRange === '7d' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                            }`}
                          >
                            7 Days
                          </button>
                          <button
                            onClick={() => setTrendRange('30d')}
                            className={`px-2.5 py-1 rounded-md transition-all ${
                              trendRange === '30d' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                            }`}
                          >
                            30 Days
                          </button>
                        </div>
                      </div>

                      {/* Chart 1: Heart Rate (BPM) */}
                      <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-slate-800">Heart Rate Range Over Time</span>
                          <span className="badge-demo">DEMO DATA</span>
                        </div>
                        <p className="text-[10px] text-slate-500 font-mono mb-2">
                          Heart rate stayed within a stable range this period.
                        </p>
                        <div className="h-32 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={activeTrendData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                              <defs>
                                <linearGradient id="hrGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.4}/>
                                  <stop offset="95%" stopColor="#F43F5E" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <XAxis dataKey="day" tick={{ fontSize: 9 }} stroke="#94A3B8" />
                              <YAxis domain={[60, 100]} tick={{ fontSize: 9 }} stroke="#94A3B8" />
                              <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                              <Area type="monotone" dataKey="hr" stroke="#F43F5E" strokeWidth={2} fillOpacity={1} fill="url(#hrGrad)" name="HR (bpm)" />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* Chart 2: Fetal Kick Counts */}
                      <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-slate-800">Fetal Kick-Count Daily Trend</span>
                          <span className="badge-demo">DEMO DATA</span>
                        </div>
                        <p className="text-[10px] text-slate-500 font-mono mb-2">
                          Fetal movements follow expected daily active rhythms.
                        </p>
                        <div className="h-32 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={activeTrendData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                              <defs>
                                <linearGradient id="kickGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4}/>
                                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <XAxis dataKey="day" tick={{ fontSize: 9 }} stroke="#94A3B8" />
                              <YAxis domain={[15, 50]} tick={{ fontSize: 9 }} stroke="#94A3B8" />
                              <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                              <Area type="monotone" dataKey="kicks" stroke="#6366F1" strokeWidth={2} fillOpacity={1} fill="url(#kickGrad)" name="Kicks" />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* Chart 3: Sleep / Activity Pattern */}
                      <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-slate-800">Rest & Sleep Duration (Hours)</span>
                          <span className="badge-demo">DEMO DATA</span>
                        </div>
                        <p className="text-[10px] text-slate-500 font-mono mb-2">
                          Rest hours recorded via lower-lumbar IMU posture sensing.
                        </p>
                        <div className="h-28 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={activeTrendData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                              <XAxis dataKey="day" tick={{ fontSize: 9 }} stroke="#94A3B8" />
                              <YAxis domain={[5, 10]} tick={{ fontSize: 9 }} stroke="#94A3B8" />
                              <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                              <Line type="monotone" dataKey="sleep" stroke="#0EA5E9" strokeWidth={2} dot={{ r: 2 }} name="Sleep (hrs)" />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 3: GUIDANCE */}
                  {currentTab === 'guidance' && (
                    <motion.div
                      key="guidance"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      {/* Trend Summary Connection */}
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/70 text-xs text-emerald-900">
                        <span className="font-bold block mb-0.5">Based on your recent trends:</span>
                        <p className="text-[11px] text-emerald-800">
                          Active mobility remains consistent. Telemetry indicates opportunities for gentle posture relief and scheduled hydration breaks.
                        </p>
                      </div>

                      {/* Wellness Suggestion Cards */}
                      {guidanceSuggestions.map((g, idx) => (
                        <div 
                          key={idx}
                          className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-[9px] font-mono font-bold text-sky-600 uppercase tracking-wider block mb-1">
                              {g.category}
                            </span>
                            <h4 className="text-xs font-bold text-slate-900 mb-1">{g.title}</h4>
                            <p className="text-[11px] text-slate-600 leading-relaxed">{g.description}</p>
                          </div>

                          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-start gap-1.5 text-[8.5px] text-amber-700 font-mono bg-amber-50/50 p-1.5 rounded">
                            <Info className="w-3 h-3 shrink-0 mt-0.5 text-amber-600" />
                            <span>{g.disclaimer}</span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* App Bottom Footer Bar */}
              <div className="p-2.5 sm:p-3 bg-white border-t border-slate-100 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-400">
                <span>LOCAL ENCRYPTED</span>
                <span>TEAM ROCKET APP v1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
