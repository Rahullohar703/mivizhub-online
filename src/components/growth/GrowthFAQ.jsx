import React, { useState } from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GrowthFAQ() {
  const faqs = [
    {
      q: "Do I need a website before starting?",
      a: "No. We can build or improve your website as part of the Presence package."
    },
    {
      q: "Do I need to provide the content?",
      a: "No. We research your business, niche and audience and develop the content around them. You'll provide the business information and approvals we need."
    },
    {
      q: "Do you guarantee leads?",
      a: "Marketing results depend on factors such as your market, offer, location, pricing and advertising budget. Rather than promise an arbitrary number of leads, the Growth plan focuses on building and continuously optimizing the systems that create opportunities."
    },
    {
      q: "Can I start with $250 and upgrade later?",
      a: "Yes. Presence establishes the foundation, while Growth adds active acquisition and lead-generation capabilities."
    },
    {
      q: "Do I need to run ads?",
      a: "No. Presence focuses on your organic foundation. Growth introduces paid acquisition where it makes sense for your business."
    },
    {
      q: "Is advertising spend included in the $500/month?",
      a: "Advertising spend is separate and paid directly to the advertising platform. Your $500/month covers the strategy, management and optimization."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section id="faq" className="py-20 bg-[#09090b] border-t border-white/10">
      <Container className="max-w-5xl">
        
        {/* Header matching Home SectionFAQ */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Questions, Answered.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our productized monthly marketing plans.
          </p>
        </div>

        {/* FAQ Accordion - Wide, Breathable & Instant */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={faq.q} 
                className="bg-[#121216] border border-white/10 rounded-2xl overflow-hidden shadow-md"
              >
                <button 
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200",
                    isOpen ? "rotate-180 bg-[#31c0de]/20 text-[#31c0de]" : "bg-white/5 text-gray-400"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-6 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 pt-4">
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
