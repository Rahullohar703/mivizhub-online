import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SectionCTA({ onOpenBooking }) {
  return (
    <section className="bg-white py-28 lg:py-40 relative overflow-hidden bg-grid-pattern">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gray-900 rounded-3xl p-10 sm:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/20 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400 mb-6">
              <Calendar className="w-3.5 h-3.5" />
              Complimentary Operational Strategy Audit
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Ready To Build Your <span className="text-gradient-blue">AI Workforce?</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
              Schedule a 30-minute strategy call with our AI implementation engineers. We'll analyze your administrative bottlenecks and present a custom digital workforce roadmap.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-10 py-4.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs text-gray-400 font-mono flex-wrap pt-6 border-t border-gray-800">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Obligation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Custom AI Employee Proposal
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                48-Hour Turnkey Deployment
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
