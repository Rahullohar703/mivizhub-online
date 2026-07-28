import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function SectionSolution() {
  return (
    <section className="bg-darkBg py-16 lg:py-24 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-full max-w-[500px] aspect-square bg-electricBlue/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-electricBlue mb-3 block">
            The Autonomous Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Transform Bottlenecks Into Autonomous Growth.
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            We build and integrate specialized digital employees directly into your business. No new software to learn—just seamless execution.
          </p>
        </div>

        {/* Side-by-Side Comparison Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Old Way (Red/Gray Tones) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 lg:p-10 rounded-3xl bg-cardBg border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-3 py-1 rounded border border-red-500/20">
                  Traditional Operations
                </span>
                <span className="text-xs font-mono text-gray-500">Human Bottleneck</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-200 mb-6">
                Manual, Slow & Fragmented
              </h3>

              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Inbound calls go to voicemail after 5:00 PM and on weekends.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Estimators take 3 to 5 days to calculate material & labor quotes.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Leads drop off due to lack of immediate engagement & follow-up.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Key talent wasted on data entry into spreadsheets & CRM systems.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 text-xs text-gray-400 font-mono">
              Result: High overhead costs, lost contracts, team burnout.
            </div>
          </motion.div>

          {/* New MivizHub AI Way (Blue/Green Tones) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 lg:p-10 rounded-3xl bg-[#0d121c] border border-electricBlue/40 shadow-[0_0_30px_rgba(0,102,255,0.15)] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-500/20 px-3 py-1 rounded border border-blue-500/30">
                  MivizHub AI Workforce
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  24/7 Autonomous Execution
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">
                Instant, Accurate & Scaleable
              </h3>

              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>AI Receptionist answers every phone call in &lt;3s, day or night.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>AI Estimator parses specs & outputs accurate quote PDFs in seconds.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Multi-channel follow-ups convert prospects while interest is highest.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Seamless two-way integration with phone lines, WhatsApp, and CRM.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 font-mono flex items-center justify-between">
              <span>Result: 0 missed leads, 15+ hrs/wk saved per employee.</span>
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
