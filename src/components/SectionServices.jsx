import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { Check } from 'lucide-react';
import { ArrowFillButton } from './ui/arrow-fill-button';

export default function SectionServices({ onOpenBooking }) {
  const solutions = [
    {
      num: "01",
      name: "Digital Presence",
      planRef: "Digital Presence",
      emoji: "🌐",
      gradient: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/30",
      borderTop: "border-t-4 border-t-blue-500",
      hoverBorder: "hover:border-blue-400",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200",
      checkColor: "bg-blue-100 text-blue-700",
      headline: "Become the business customers discover, trust, and choose.",
      desc: "Your digital presence should do more than look professional. It should help the right customers understand your expertise and take action.",
      listTitle: "What we help you build:",
      items: [
        "Conversion-focused business websites",
        "Search engine optimisation",
        "Local SEO & Google Business Profile optimisation",
        "Industry-specific landing pages",
        "Content and case study strategy",
        "Website enquiry and conversion tracking"
      ],
      bestFor: "Businesses looking to establish credibility and improve their online visibility.",
      ctaText: "Strengthen My Digital Presence",
      btnTheme: {
        bgColor: "#0f172a",
        textColor: "#ffffff",
        fillBgColor: "#2563eb",
        fillTextColor: "#ffffff"
      }
    },
    {
      num: "02",
      name: "Growth & Lead Generation",
      planRef: "Growth & Lead Generation",
      emoji: "🎯",
      gradient: "from-indigo-600 to-purple-600",
      shadow: "shadow-indigo-500/35",
      borderTop: "border-t-4 border-t-indigo-600",
      hoverBorder: "hover:border-indigo-400",
      tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      checkColor: "bg-indigo-100 text-indigo-700",
      isPopular: true,
      headline: "Turn your marketing into a measurable business growth system.",
      desc: "Attract relevant prospects, capture enquiries, and create a more organised path from first contact to potential customer.",
      listTitle: "What we help you implement:",
      items: [
        "Google Search and Meta advertising",
        "Industry-specific lead generation campaigns",
        "Landing pages designed for conversions",
        "Lead capture and qualification",
        "CRM and sales pipeline setup",
        "Lead tracking and reporting",
        "Automated enquiry responses and follow-ups"
      ],
      bestFor: "Businesses ready to acquire customers more consistently and improve their sales pipeline.",
      ctaText: "Build My Growth Engine",
      btnTheme: {
        bgColor: "#2563eb",
        textColor: "#ffffff",
        fillBgColor: "#0f172a",
        fillTextColor: "#ffffff"
      }
    },
    {
      num: "03",
      name: "AI Automation & Operations",
      planRef: "AI Automation & Operations",
      emoji: "🤖",
      gradient: "from-cyan-600 to-emerald-500",
      shadow: "shadow-cyan-500/30",
      borderTop: "border-t-4 border-t-cyan-500",
      hoverBorder: "hover:border-cyan-400",
      tagColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      checkColor: "bg-cyan-100 text-cyan-700",
      headline: "Let your team focus on valuable work. Automate the repetitive.",
      desc: "Your business shouldn’t depend on someone manually handling every enquiry, reminder, update, and follow-up. We identify repetitive workflows and build practical automation around them.",
      listTitle: "What we help automate:",
      items: [
        "AI-powered call answering and enquiry capture",
        "Customer qualification and appointment booking",
        "Sales and quotation follow-ups",
        "CRM updates and lead routing",
        "Customer reminders and notifications",
        "Scheduling and coordination workflows",
        "Document and administrative workflows",
        "AI assistants for internal & customer-facing processes"
      ],
      bestFor: "Businesses dealing with repetitive tasks, high enquiry volumes, or operational complexity.",
      ctaText: "Automate My Business",
      scopeNote: "Automation scope depends on your systems, workflow, and integration requirements.",
      btnTheme: {
        bgColor: "#0f172a",
        textColor: "#ffffff",
        fillBgColor: "#0284c7",
        fillTextColor: "#ffffff"
      }
    }
  ];

  return (
    <Section id="solutions" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Anchor alias so #services scrolls here */}
      <div id="services" className="absolute -top-24" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-7xl relative z-10 px-4 sm:px-6">
        
        {/* Section Header with Consistent Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 shadow-2xs">
            <span>💎</span>
            <span>Core Solutions</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Everything Your Business Needs to <span className="text-blue-600">Attract, Convert, and Operate Better.</span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Three integrated solutions. One growth partner.
          </p>
        </div>

        {/* 3 Solution Cards with Real Emojis, No AI Slop Hyphens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {solutions.map((sol, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`group bg-white rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 relative border-2 ${sol.borderTop} ${sol.hoverBorder} ${
                sol.isPopular 
                  ? 'border-indigo-400 ring-4 ring-indigo-500/10' 
                  : 'border-slate-200/90'
              }`}
            >
              <div>
                {/* Header info & Emoji Icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.gradient} flex items-center justify-center shadow-lg ${sol.shadow} text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {sol.emoji}
                  </div>

                  {sol.isPopular ? (
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/30">
                      MOST POPULAR
                    </span>
                  ) : (
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                      Plan {sol.num}
                    </span>
                  )}
                </div>

                {/* Plan Tier Badge (Clean, No Slop Hyphen) */}
                <div className="mb-4">
                  <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${sol.tagColor}`}>
                    {sol.name}
                  </span>
                </div>

                {/* Headline & Body */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-blue-600 transition-colors">
                  {sol.headline}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {sol.desc}
                </p>

                {/* Items List */}
                <div className="pt-4 border-t border-slate-100 mb-6">
                  <span className="font-sans text-xs font-extrabold uppercase tracking-wider text-slate-800 block mb-3.5">
                    {sol.listTitle}
                  </span>
                  <ul className="space-y-2.5">
                    {sol.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-slate-700 leading-snug">
                        <span className={`w-5 h-5 rounded-full ${sol.checkColor} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span className="group-hover:text-slate-900 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Best For + Scope Note + CTA */}
              <div className="pt-5 border-t border-slate-100 space-y-4">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 font-sans text-xs text-slate-600">
                  <span className="font-bold text-slate-800 block mb-0.5">Best for:</span>
                  {sol.bestFor}
                </div>

                {sol.scopeNote && (
                  <p className="font-sans text-[11px] text-slate-500 italic leading-relaxed">
                    * {sol.scopeNote}
                  </p>
                )}

                <ArrowFillButton 
                  onClick={() => onOpenBooking ? onOpenBooking(sol.planRef) : null}
                  btnText={sol.ctaText}
                  size="default"
                  bgColor={sol.btnTheme.bgColor}
                  textColor={sol.btnTheme.textColor}
                  fillBgColor={sol.btnTheme.fillBgColor}
                  fillTextColor={sol.btnTheme.fillTextColor}
                  arrowColor="#ffffff"
                  hoverArrowColor="#ffffff"
                  className="w-full justify-center shadow-md hover:shadow-xl transition-all duration-300"
                />
              </div>

            </motion.div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
