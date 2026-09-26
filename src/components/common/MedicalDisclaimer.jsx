import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export default function MedicalDisclaimer({ inline = false }) {
  if (inline) {
    return (
      <div className="rounded-xl border border-sky-200/80 bg-sky-50/70 p-4 text-xs text-sky-900 flex items-start gap-3 backdrop-blur-sm">
        <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold block mb-0.5">Smart India Hackathon 2026 Innovation Concept</span>
          <p className="text-sky-800/90 leading-relaxed">
            This website and simulated sensor telemetry represent an engineering prototype showcase for SIH 2026 (SIH26113). Simulated interfaces are for demonstration purposes and do not constitute clinical diagnostic advice or live emergency services.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-100/90 border-b border-slate-200 py-2 px-4 text-center text-[11px] text-slate-600 font-mono flex items-center justify-center gap-2">
      <AlertCircle className="w-3.5 h-3.5 text-sky-600 shrink-0" />
      <span>
        <strong>Concept Demonstration for Smart India Hackathon 2026:</strong> Telemetry metrics are simulated sample data (<span className="bg-amber-100 text-amber-800 px-1 py-0.2 rounded font-bold">DEMO DATA</span>).
      </span>
    </div>
  );
}
