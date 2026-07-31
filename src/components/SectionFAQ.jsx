import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionFAQ() {
  const faqs = [
    {
      q: 'Do I need to understand technology to use this?',
      a: 'Absolutely not. We are a completely done-for-you service. We handle all the setup, programming, and maintenance. You simply receive the booked appointments and qualified leads.'
    },
    {
      q: 'How long does it take to set up?',
      a: 'Most AI Employees are fully customized and deployed within 48 to 72 hours.'
    },
    {
      q: 'What if my business is unique?',
      a: 'During our discovery call, we learn your specific business rules, pricing structures, and FAQ. Your AI Employee is custom-trained to sound and act exactly how you want it to.'
    },
    {
      q: 'Will this replace my current staff?',
      a: 'It can, but it doesn\'t have to. Many of our clients use MivizHub to handle the repetitive front-line work (like answering basic calls), freeing up their human staff to focus on complex, revenue-generating tasks.'
    },
    {
      q: 'Can it integrate with my current software?',
      a: 'Yes. We can connect your AI Employee to most major CRM platforms, calendars, and booking software so it can schedule appointments directly for you without you lifting a finger.'
    }
  ];

  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-background pointer-events-none" />
      <Container className="max-w-3xl">
        <div className="text-center mb-10 md:mb-16 relative z-10">
          <div className="text-sm font-bold tracking-widest text-brandAccent mb-4">FAQ</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-6 pb-2">
            Common Questions from <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandPurple">Business Owners</span>
          </h2>
          <p className="text-lg text-textMuted max-w-2xl mx-auto">
            Find quick answers to the most common questions about our AI employees, how they work, and how they fit into your business.
          </p>
        </div>

        <div className="space-y-4 relative z-10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="card-base overflow-hidden">
              <button 
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full text-left px-6 py-6 font-bold text-lg text-textMain hover:text-brandAccent transition-colors flex justify-between items-center"
              >
                {faq.q}
                <span className={`text-2xl transition-transform duration-300 ${open === idx ? 'rotate-180 text-brandAccent' : 'text-textMuted'}`}>
                  {open === idx ? '−' : '+'}
                </span>
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${open === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-textMuted leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
