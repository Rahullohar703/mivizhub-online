import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { Compass, TrendingUp, Zap, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SectionTrust() {
  const pillars = [
    {
      num: "01",
      title: "Industry Understanding",
      desc: "Built around complex project workflows, estimation hurdles, and extended sales cycles.",
      bullets: ["Project coordination awareness", "Technical bid understanding"],
      icon: <Compass className="w-6 h-6 text-white" strokeWidth={2.2} />,
      gradient: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/25",
      accent: "text-blue-600"
    },
    {
      num: "02",
      title: "Growth Systems",
      desc: "Predictable pipeline from local search presence to qualified enquiries and won proposals.",
      bullets: ["Search engine & local maps visibility", "High-conversion landing workflows"],
      icon: <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.2} />,
      gradient: "from-indigo-600 to-purple-600",
      shadow: "shadow-indigo-500/25",
      accent: "text-indigo-600"
    },
    {
      num: "03",
      title: "Smarter Operations",
      desc: "Automate repetitive administration and follow-ups so teams focus on high-value billable work.",
      bullets: ["24/7 AI call & lead response", "Automated proposal follow-ups"],
      icon: <Zap className="w-6 h-6 text-white" strokeWidth={2.2} />,
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/25",
      accent: "text-emerald-600"
    }
  ];

  return (
    <Section id="positioning" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-6xl relative z-10">
        
        {/* Split Editorial Storytelling Layout (Breaks the "Card Card Card" monotony) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Positioning Manifesto */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Built For High-Complexity Sectors</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 font-heading leading-tight">
              You Know Your Industry.{' '}
              <span className="text-blue-600">We Help You Grow Within It.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              <p>
                Your business isn’t like every other business.
              </p>
              <p>
                You manage projects, coordinate teams, handle enquiries, prepare quotations, and deal with complex sales cycles.
              </p>
              <p className="text-slate-800 font-semibold border-l-3 border-blue-600 pl-4 py-1 bg-slate-50 rounded-r-lg">
                Generic marketing and disconnected software rarely solve these challenges. MivizHub combines industry-focused growth strategies with practical AI automation.
              </p>
            </div>

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
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
            {/* Connected Vertical Gradient Beam */}
            <div className="absolute left-7 top-10 bottom-10 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 rounded-full hidden sm:block opacity-40" />

            <div className="space-y-6">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="group relative flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl bg-slate-50/90 border-2 border-slate-200/90 hover:bg-white hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Glowing Icon Badge */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center flex-shrink-0 shadow-lg ${pillar.shadow} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10`}>
                    {pillar.icon}
                  </div>

                  {/* Pillar Text & Micro-Checklist */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                        Pillar {pillar.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1.5 font-heading group-hover:text-blue-600 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-3">
                      {pillar.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
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
