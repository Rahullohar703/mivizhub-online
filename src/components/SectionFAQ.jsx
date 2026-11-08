import React, { useState } from 'react';
import Container from './ui/Container';
import Section from './ui/Section';

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
      a: 'Pricing depends on your business requirements, implementation complexity, and ongoing support. We provide a proposal after understanding your needs.'
    },
    {
      q: 'How do we get started?',
      a: 'Book a strategy call. We will understand your business and identify the most relevant opportunities for growth and automation.'
    }
  ];

  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="py-20 bg-slate-50 border-b border-slate-200 text-slate-900 relative">
      <Container className="max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Direct, plain-English answers to common questions about working with MivizHub.
          </p>
        </div>

        {/* FAQ Accordion - Light & High Contrast */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs transition-colors"
            >
              <button 
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full text-left px-6 py-5 font-bold text-base sm:text-lg text-slate-900 hover:text-blue-600 transition-colors flex justify-between items-center gap-4 cursor-pointer"
              >
                <span>{faq.q}</span>
                <span className="text-xl font-mono text-slate-400 flex-shrink-0">
                  {open === idx ? '−' : '+'}
                </span>
              </button>
              {open === idx && (
                <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
