import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SectionTrust() {
  const pillars = [
    {
      num: "1",
      emoji: "🏗️",
      title: "Industry Understanding",
      desc: "Built around complex project workflows, estimation hurdles, and extended sales cycles.",
      bullets: ["Project coordination awareness", "Technical bid understanding"],
      gradient: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/25",
      accent: "text-blue-600"
    },
    {
      num: "2",
      emoji: "📈",
      title: "Growth Systems",
      desc: "Predictable pipeline from local search presence to qualified enquiries and won proposals.",
      bullets: ["Search engine & local maps visibility", "High-conversion landing workflows"],
      gradient: "from-indigo-600 to-purple-600",
      shadow: "shadow-indigo-500/25",
      accent: "text-indigo-600"
    },
    {
      num: "3",
      emoji: "⚡",
      title: "Smarter Operations",
      desc: "Automate repetitive administration and follow-ups so teams focus on high-value billable work.",
      bullets: ["24/7 AI call & lead response", "Automated proposal follow-ups"],
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/25",
      accent: "text-emerald-600"
    }
  ];

  return (
    <Section id="positioning" className="py-24 bg-white/75 backdrop-blur-sm border-b border-slate-200/80 text-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-6xl relative z-10 px-4 sm:px-6">
        
        {/* Split Editorial Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Bold Positioning Manifesto */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4 shadow-2xs">
              <span>🎯</span>
              <span>Built for High-Complexity Sectors</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              You Know Your Industry.{' '}
              <span className="text-blue-600">We Help You Grow Within It.</span>
            </h2>

            <div className="space-y-4 font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              <p>
                Your business isn’t like every other business.
              </p>
              <p>
                You manage projects, coordinate teams, handle enquiries, prepare quotations, and deal with complex sales cycles.
              </p>
              <p className="text-slate-800 font-semibold border-l-4 border-blue-600 pl-4 py-1 bg-slate-50 rounded-r-lg">
                Generic marketing and disconnected software rarely solve these challenges. MivizHub combines industry-focused growth strategies with practical AI automation to help your business operate and grow more efficiently.
              </p>
            </div>

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
              <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Industry understanding • Growth systems • Smarter operations</span>
            </div>
          </motion.div>

          {/* Right Column: Connected System Track with Progress Line */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Connected Vertical Gradient Line */}
            <div className="absolute left-7 top-10 bottom-10 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 rounded-full hidden sm:block opacity-30" />

            <div className="space-y-5">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="group relative flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-slate-50/90 border-2 border-slate-200/90 hover:bg-white hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Glowing Icon Badge with Real Emoji */}
                  <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center flex-shrink-0 shadow-lg ${pillar.shadow} text-2xl group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {pillar.emoji}
                  </div>

                  {/* Pillar Text & Micro-Checklist */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Pillar {pillar.num}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
                      {pillar.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {pillar.bullets.map((bullet, bIdx) => (
                        <span key={bIdx} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200/80 px-2.5 py-1 rounded-md shadow-2xs">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${pillar.accent}`} />
                          <span>{bullet}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </Container>
    </Section>
  );
}
