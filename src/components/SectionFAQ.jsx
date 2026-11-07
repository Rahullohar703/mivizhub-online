import React, { useState } from 'react';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionFAQ() {
  const faqs = [
    {
      q: 'How does the voice AI sound to callers? Can it handle noisy job sites?',
      a: 'It sounds remarkably natural, conversational, and polite. It answers with your company name, speaks with realistic human cadence, and handles routine caller questions about services, pricing, and scheduling. Because the AI answers on the server level, loud power tools or noisy job sites never interfere with your callers getting a clean, professional response.'
    },
    {
      q: 'Does this work with our existing business phone number?',
      a: 'Yes, 100%. You do not have to change your phone number. You can have the AI answer every incoming call, or set up conditional call forwarding so it only picks up if you don\'t answer within 3 rings or when you are on a roof, driving, or after hours.'
    },
    {
      q: 'Can it connect with contractor software like Jobber, Housecall Pro, or Google Calendar?',
      a: 'Yes. We connect directly into your scheduling software, Google Calendar, Outlook, and contractor CRMs like Jobber, Housecall Pro, and ServiceTitan. When a lead or caller agrees to an on-site estimate, the appointment is booked directly on your calendar with full project details.'
    },
    {
      q: 'What happens if a caller asks a complex technical question or requests a custom bid?',
      a: 'If a caller asks a complex scope question that requires owner inspection, the AI politely explains: "Let me have our senior estimator follow up with you on those exact details." It collects their address, project specs, and photos if needed, and texts or emails you an instant summary so you can follow up with full context.'
    },
    {
      q: 'Can I hire you for just AI Automation, or one of the Growth Plans?',
      a: 'Yes, absolutely. If you already have more leads than you can handle and just need help answering calls, qualifying job scope, and chasing open estimates, you can hire us strictly for AI Automation. If your dispatch is fine but your project pipeline is dry, choose either our Presence Plan ($250/mo) or Growth Engine ($500/mo). You can also combine them for a complete turnkey growth system.'
    },
    {
      q: 'How much does this cost compared to hiring an in-house receptionist or dispatcher?',
      a: 'A traditional full-time office receptionist or dispatcher costs $45,000 to $60,000 per year in salary, payroll taxes, workers comp, and benefits — and they only work 40 hours a week (leaving nights and weekends unmonitored). MivizHub covers your business 24/7/365 across phone calls and estimate forms for a fraction of that cost, with zero turnover or management headaches.'
    },
    {
      q: 'How fast can we launch and start seeing leads and calls handled?',
      a: 'Our turnkey onboarding takes 7 to 10 days. We build your landing pages, configure your local Google Maps profiles and ads, train your AI voice dispatcher on your trade pricing and service territory, and test everything with you before going live.'
    }
  ];

  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="py-20 bg-gradient-to-b from-[#090e1a] via-[#0d1424] to-[#080c16] border-t border-white/10 relative overflow-hidden">
      {/* Subtle slate ambient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />
      <Container className="max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Clear Answers For Contractors
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our contractor marketing and AI operations in plain English.
          </p>
        </div>

        {/* FAQ Accordion - Wide & Breathable */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#0f1524]/90 border border-white/10 rounded-2xl overflow-hidden shadow-md">
              <button 
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full text-left px-7 py-6 font-bold text-base sm:text-xl text-white hover:text-[#31c0de] transition-colors flex justify-between items-center gap-4"
              >
                <span>{faq.q}</span>
                <span className="text-2xl font-mono text-gray-400 flex-shrink-0">
                  {open === idx ? '−' : '+'}
                </span>
              </button>
              {open === idx && (
                <div className="px-7 pb-7 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 pt-5">
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
