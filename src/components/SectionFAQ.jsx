import React, { useState } from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ChevronDown } from 'lucide-react';

export default function SectionFAQ() {
  const faqs = [
    {
      q: 'What industries does MivizHub serve?',
      a: 'We work with construction, architecture, engineering, real estate, specialty contractors, facility management, manufacturing, logistics, and other operations-heavy businesses.'
    },
    {
      q: 'Do you offer marketing and automation separately?',
      a: 'Yes. You can start with digital presence, lead generation, or automation based on your business requirements.'
    },
    {
      q: 'Do I need to change my existing software?',
      a: 'Not necessarily. We assess your existing tools and determine whether they can be integrated into the proposed solution.'
    },
    {
      q: 'Can AI handle customer calls and enquiries?',
      a: 'AI can handle defined enquiries, capture information, and support customer workflows. Complex decisions and sensitive conversations can be transferred to your team.'
    },
    {
      q: 'Do you guarantee leads or revenue?',
      a: 'We focus on building and improving your growth systems. Results depend on factors such as market demand, competition, budget, pricing, sales processes, and execution. We do not guarantee rankings, leads, or revenue.'
    },
    {
      q: 'How much does it cost?',
      a: 'We offer flat-rate monthly plans starting at $250/mo for Digital Presence and $500/mo for our Growth & Lead Generation engine, with no lock-in contracts. Custom AI automation workflows and enterprise integrations are scoped transparently based on your systems and requirements.'
    },
    {
      q: 'How do we get started?',
      a: 'Book a strategy call. We will understand your business and identify the most relevant opportunities for growth and automation.'
    }
  ];

  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="py-24 bg-slate-50/70 border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-4xl relative z-10 px-4 sm:px-6">
        
        {/* Header with Consistent Typography */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 shadow-2xs">
            <span>❓</span>
            <span>Clear Answers</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Direct, plain-English answers to common questions about working with MivizHub.
          </p>
        </div>

        {/* FAQ Accordion - High Contrast, Animated Chevron */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div 
                key={idx} 
                className={`group bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${
                  isOpen 
                    ? 'border-blue-500 ring-4 ring-blue-500/10' 
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button 
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 font-heading font-bold text-base sm:text-lg text-slate-900 hover:text-blue-600 transition-colors flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className={`${isOpen ? 'text-blue-600' : 'text-slate-900'} transition-colors leading-snug`}>
                    {faq.q}
                  </span>
                  
                  {/* Animated Chevron Indicator */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'bg-blue-600 text-white rotate-180 shadow-md shadow-blue-500/20' 
                      : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 font-sans text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}
