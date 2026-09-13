import React, { useState } from 'react';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionFAQ() {
  const faqs = [
    {
      q: 'What kind of work can an AI employee handle for my business?',
      a: 'Beyond answering incoming phone calls in 1 ring, our AI employees handle 60-second SMS/email follow-ups with new web leads, nurture unclosed estimates so quotes don\'t go cold, answer routine customer FAQs 24/7, book appointments into your Google or Outlook calendar, and sync notes directly into your CRM.'
    },
    {
      q: 'Does the AI only work on phone calls, or texts and emails too?',
      a: 'It works across all your customer channels: live voice calls, two-way SMS text messages, website chat, and email. You can deploy an AI employee for whichever tasks take up the most time for your business.'
    },
    {
      q: 'What does the voice AI sound like on the phone? Does it sound robotic?',
      a: 'It sounds remarkably natural, conversational, and polite. It answers with your company name, understands colloquial phrasing, and answers questions using the exact services and pricing rules you specify. If a caller has an emergency, it can transfer them directly to your cell phone or send you an instant alert.'
    },
    {
      q: 'Do I or my staff have to learn any complicated computer software?',
      a: 'No. MivizHub is 100% done-for-you. We set up the marketing campaigns, train your AI assistant on your services and pricing, connect your Google or Outlook calendar, and monitor everything daily. You don’t need to touch any code or learn any dashboards.'
    },
    {
      q: 'Can I hire you for just Marketing, or just AI Staffing?',
      a: 'Yes, absolutely. If you already have plenty of leads and just need help answering calls and booking estimates, you can hire us strictly for AI Staffing. If your front office is fine but you need more customer quote requests, you can hire us strictly for Marketing. You can also combine both for a complete growth engine.'
    },
    {
      q: 'What happens if a customer asks a question the AI doesn\'t know?',
      a: 'If a caller asks a complex question that isn\'t in its knowledge base, the AI politely says: "Let me have the owner or a senior technician follow up with you on that." It takes down their question and phone number, and texts you the summary immediately so you can call them back.'
    },
    {
      q: 'How much does this cost compared to hiring an employee?',
      a: 'A traditional full-time office receptionist costs $45,000 to $55,000 per year in salary, payroll taxes, workers comp, and benefits — and they only work 40 hours a week. MivizHub covers your business 24/7/365 for a fraction of that cost, with zero turnover or management headaches.'
    }
  ];

  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="py-20 bg-[#09090b] border-t border-white/10">
      <Container className="max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
            Everything you need to know in plain English. No corporate buzzwords.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#121216] border border-white/10 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full text-left px-6 py-5 font-bold text-base sm:text-lg text-white hover:text-[#31c0de] transition-colors flex justify-between items-center gap-4"
              >
                <span>{faq.q}</span>
                <span className="text-xl font-mono text-gray-400 flex-shrink-0">
                  {open === idx ? '−' : '+'}
                </span>
              </button>
              {open === idx && (
                <div className="px-6 pb-6 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 pt-4">
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

