import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, AlertTriangle, CheckCircle2, XCircle, Bell, RotateCcw, X } from 'lucide-react';

export default function SOSDemo({ isOpen, onClose }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'countdown' | 'cancelled' | 'sent'
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    let timer;
    if (status === 'countdown') {
      if (seconds > 0) {
        timer = setTimeout(() => {
          setSeconds(s => s - 1);
        }, 1000);
      } else {
        setStatus('sent');
      }
    }
    return () => clearTimeout(timer);
  }, [status, seconds]);

  const handleStartCountdown = () => {
    setSeconds(30);
    setStatus('countdown');
  };

  const handleCancelAlert = () => {
    setStatus('cancelled');
  };

  const handleReset = () => {
    setSeconds(30);
    setStatus('idle');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-rose-50 border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-rose-700">
            <ShieldAlert className="w-5 h-5 animate-pulse" />
            <span className="font-mono font-bold text-xs uppercase tracking-wider">
              SECTION 22 · INTERACTIVE SOS SIMULATION
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 text-center">
          {status === 'idle' && (
            <div>
              <div className="w-16 h-16 rounded-3xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Emergency Response Loop</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Test the emergency fall detection & manual SOS workflow. When initiated, a 30-second cancellation window opens to prevent false alarms before emergency dispatch.
              </p>
              <button
                onClick={handleStartCountdown}
                className="w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md shadow-rose-600/30 transition-all"
              >
                Trigger SOS / Fall Simulation
              </button>
            </div>
          )}

          {status === 'countdown' && (
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-mono font-bold mb-4 animate-pulse">
                <AlertTriangle className="w-4 h-4" />
                <span>EMERGENCY ALERT TRIGGERED</span>
              </div>

              {/* Countdown Circular Ring */}
              <div className="relative w-36 h-36 mx-auto my-4 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#FEE2E2" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="8"
                    strokeDasharray={264}
                    strokeDashoffset={264 - (264 * seconds) / 30}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold font-mono text-slate-900">{seconds}</span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">SECONDS</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-6">
                Dispatching emergency notification in {seconds} seconds. Press below if false alarm.
              </p>

              <button
                onClick={handleCancelAlert}
                className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>CANCEL ALERT</span>
              </button>
            </div>
          )}

          {status === 'cancelled' && (
            <div>
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">ALERT CANCELLED</h3>
              <p className="text-xs text-slate-600 mb-6">
                Cancellation confirmed within the 30-second safety window. No external notifications were sent.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Simulation</span>
              </button>
            </div>
          )}

          {status === 'sent' && (
            <div>
              <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">DEMO ALERT SENT</h3>
              <p className="text-xs text-slate-600 mb-6">
                30-second cancellation window elapsed. Simulated push notification and geolocation dispatched to emergency contact list.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Simulation</span>
              </button>
            </div>
          )}
        </div>

        {/* Mandatory Disclaimer Footer */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 text-center">
          <p className="text-[10px] font-mono text-slate-700 font-bold uppercase tracking-wider">
            WEBSITE DEMONSTRATION ONLY
          </p>
          <p className="text-[10px] text-slate-500 font-mono mt-0.5">
            This simulation does not contact emergency services.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
