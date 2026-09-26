import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Info } from 'lucide-react';

export default function ImageWithLightbox({ 
  src, 
  alt, 
  caption, 
  provenance = "Team Rocket Engineering Concept", 
  disclaimer = "DIMENSIONS ARE CONCEPTUAL / FINAL VALUES TO BE DETERMINED DURING CAD",
  fallbackComponent: FallbackComponent,
  badge = "CONCEPT DRAWING"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="group relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      >
        {/* Visual Container */}
        <div className="relative aspect-[16/10] bg-slate-50 flex items-center justify-center overflow-hidden">
          {src && !imgError ? (
            <img 
              src={src} 
              alt={alt || caption}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          ) : FallbackComponent ? (
            <div className="w-full h-full p-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
              <FallbackComponent />
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center">
              <span className="text-3xl mb-2">📐</span>
              <p className="text-xs font-semibold text-slate-600">{caption || "Engineering Reference Visual"}</p>
              <p className="text-[10px] text-slate-400 mt-1">{provenance}</p>
            </div>
          )}

          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3 py-1.5 rounded-full bg-white/95 text-slate-800 text-xs font-semibold shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Expand Schematic</span>
            </span>
          </div>

          {/* Provenance Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-md bg-white/90 text-slate-700 shadow-sm border border-slate-200/70 backdrop-blur-sm">
              {badge}
            </span>
          </div>
        </div>

        {/* Caption Bar */}
        <div className="p-3.5 bg-white border-t border-slate-100">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-bold text-slate-800 leading-snug">{caption}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">{provenance}</p>
            </div>
            <span className="text-[10px] font-mono text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 shrink-0">
              CLICK TO VIEW
            </span>
          </div>
          {disclaimer && (
            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
              <Info className="w-3 h-3 text-amber-500 shrink-0" />
              <span className="truncate">{disclaimer}</span>
            </div>
          )}
        </div>
      </div>

      {/* Expanded Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/70">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{caption}</h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">{provenance}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-slate-50/40">
                {src && !imgError ? (
                  <img src={src} alt={alt || caption} className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-sm" />
                ) : FallbackComponent ? (
                  <div className="w-full max-w-4xl p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <FallbackComponent expanded={true} />
                  </div>
                ) : (
                  <div className="p-12 text-center text-slate-400">
                    <p className="text-base font-semibold text-slate-700">Detailed Engineering Reference</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-md">
                      Source drawing from Team Rocket technical documents. Real assets will render here when placed in <code className="text-sky-600 bg-sky-50 px-1 py-0.5 rounded">src/assets/</code>.
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              {disclaimer && (
                <div className="px-6 py-3 bg-amber-50/60 border-t border-amber-100 flex items-center gap-2 text-xs text-amber-800 font-mono">
                  <Info className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{disclaimer}</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
