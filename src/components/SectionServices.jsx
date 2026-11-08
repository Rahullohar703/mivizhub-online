import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Check, Globe, Target, Cpu, ArrowRight } from 'lucide-react';
import { ArrowFillButton } from './ui/arrow-fill-button';

export default function SectionServices({ onOpenBooking }) {
  const solutions = [
    {
      num: "01",
      name: "Digital Presence",
      planRef: "Presence Plan ($250/mo)",
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      tag: "Establish Credibility",
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
      planRef: "Growth Plan ($500/mo)",
      icon: <Target className="w-5 h-5 text-indigo-600" />,
      tag: "Customer Acquisition",
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
      icon: <Cpu className="w-5 h-5 text-cyan-600" />,
      tag: "Operational Efficiency",
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
    <Section id="solutions" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative">
      {/* Anchor alias so #services scrolls here */}
      <div id="services" className="absolute -top-24" />

      <Container className="max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Core Solutions
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-heading">
            Everything Your Business Needs to Attract, Convert, and Operate Better.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Three integrated solutions. One growth partner.
          </p>
        </div>

        {/* 3 Solution Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {solutions.map((sol, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md ${
                sol.isPopular 
                  ? 'border-2 border-blue-600 relative' 
                  : 'border border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                    {sol.icon}
                    <span>{sol.num} — {sol.name}</span>
                  </span>

                  {sol.isPopular && (
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-600 text-white">
                      POPULAR
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 font-heading leading-snug">
                  {sol.headline}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {sol.desc}
                </p>

                {/* Items List */}
                <div className="pt-5 border-t border-slate-100 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-3">
                    {sol.listTitle}
                  </span>
                  <ul className="space-y-2.5">
                    {sol.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Best For + Scope Note + CTA */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-600">
                  <span className="font-bold text-slate-800 block mb-0.5">Best for:</span>
                  {sol.bestFor}
                </div>

                {sol.scopeNote && (
                  <p className="text-[11px] text-slate-500 italic leading-relaxed">
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
                  className="w-full justify-center shadow-sm"
                />
              </div>

            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
