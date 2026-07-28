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
            How We Fix It
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            How We Fix It For You (Without the Tech Headaches).
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            We set up simple systems that do the heavy lifting for you. You don't need to learn any new software.
          </p>
        </div>

        {/* Side-by-Side Comparison Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Loser Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 lg:p-10 rounded-3xl bg-cardBg border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
                <h3 className="text-2xl font-bold text-gray-200">
                  Doing It Yourself
                </h3>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-3 py-1 rounded border border-red-500/20 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" />
                  LOSER
                </span>
              </div>

              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Phone rings, goes to voicemail, customer calls a competitor.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Takes days to write up quotes by hand.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Forgetting to follow up with leads who asked for pricing.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Paying office staff just to copy and paste data all day.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Adds more tasks to your already busy plate.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 text-xs text-gray-400 font-mono">
              Result: Wasted time, lost jobs, and too much stress.
            </div>
          </motion.div>

          {/* Winner Card */}
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
                <h3 className="text-2xl font-bold text-white">
                  MivizHub Virtual Staff
                </h3>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  WINNER
                </span>
              </div>

              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Our software answers the phone on the first ring, 24/7.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Creates accurate quotes automatically in seconds.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Texts customers back instantly so they don't look elsewhere.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Connects directly to your existing phone and email.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Removes tasks from your plate so you can focus on work.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 font-mono flex items-center justify-between">
              <span>Result: More jobs booked and you get your free time back.</span>
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
