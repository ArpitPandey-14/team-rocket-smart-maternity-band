import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Activity, ShieldAlert, HeartCrack, ChevronRight } from 'lucide-react';

export default function ProblemSection() {
  const challenges = [
    {
      title: "Physical Stress & Lumbar Strain",
      desc: "As the fetus develops, the anterior center of gravity shifts forward, causing continuous cantilever stress on lower lumbar vertebrae and pelvic ligaments.",
      icon: HeartCrack,
      tag: "Biomechanical"
    },
    {
      title: "Intermittent Clinic Gaps",
      desc: "Standard maternity care relies on occasional episodic visits, leaving multi-week gaps where vital signs and subtle fetal movement patterns remain untracked.",
      icon: Activity,
      tag: "Continuity of Care"
    },
    {
      title: "Unattended Emergency Risks",
      desc: "Maternal falls and acute physiological distress can occur when an expectant mother is alone, without automated emergency alert detection.",
      icon: ShieldAlert,
      tag: "Safety & Rapid Alert"
    },
    {
      title: "Rigid, Unadaptable Traditional Belts",
      desc: "Conventional static bands fail to adapt as abdominal circumference expands across trimesters, often causing uncomfortable compression or sliding out of alignment.",
      icon: AlertCircle,
      tag: "Ergonomics"
    }
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Text */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <span>THE MATERNAL HEALTHCARE GAP</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              PREGNANCY NEEDS <br />
              <span className="text-rose-400">MORE THAN OCCASIONAL</span> <br />
              CHECK-INS.
            </h2>

            <p className="mt-6 text-slate-300 text-base leading-relaxed">
              Expectant mothers navigate profound physiological changes daily. Yet, traditional healthcare relies heavily on episodic monthly visits that capture isolated snapshots while physical strain and sudden health events happen in between.
            </p>

            <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                SIH26113 PROBLEM SCOPE
              </p>
              <p className="text-sm text-slate-200">
                A dual-focus need: alleviating physical musculoskeletal stress during movement while safeguarding mother and fetus through continuous, responsive monitoring.
              </p>
            </div>
          </div>

          {/* Right Challenge Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {challenges.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-800 text-rose-400 border border-slate-700">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                        {c.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{c.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                    <span>Addressed by Team Rocket</span>
                    <ChevronRight className="w-3 h-3 text-sky-400" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
