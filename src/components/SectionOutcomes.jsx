import React from 'react';
import { motion } from 'framer-motion';

const OUTCOMES = [
  { value: "< 3.2s", label: "Average Call Answer Time", detail: "Zero callers placed on hold or sent to voicemail." },
  { value: "24 / 7", label: "Continuous Availability", detail: "After-hours inquiries captured instantly." },
  { value: "48 Hours", label: "Deployment & Onboarding", detail: "Turnkey activation with your phone & CRM." },
  { value: "15+ Hours", label: "Weekly Saved / Staff", detail: "Administrative tasks automated completely." }
];

export default function SectionOutcomes() {
  return (
    <section className="bg-white py-24 lg:py-36 border-b border-gray-200/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-600 mb-3 block">
            Measurable Performance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Proven Results For High-Growth Service Firms.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {OUTCOMES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  {item.label}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
