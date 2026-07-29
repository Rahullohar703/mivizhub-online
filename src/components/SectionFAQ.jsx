import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionFAQ() {
  const faqs = [
    {
      q: 'What is an AI Employee?',
      a: 'An AI Employee is simply a set of AI software, apps, workflows and automations custom-designed around your business to perform a specific job role—like answering calls, booking appointments, following up with leads, or handling admin tasks—consistently and fast.'
    },
    {
      q: 'Is this just an AI app or ChatGPT?',
      a: 'No. Most “AI apps” are tools you still have to learn, set up, and babysit. MivizHub delivers managed AI Employees—we design the workflow, build it, connect it to your systems, and keep improving it.'
    },
    {
      q: 'Do you install everything for me?',
      a: 'Yes. We do the installs, setup, integrations, testing, and go-live, then we manage, maintain and optimize performance over time.'
    },
    {
      q: 'Do I need to fire my staff?',
      a: 'No. Do not fire your staff. AI Employees work best alongside your team. They remove repetitive work so your people can focus on higher-value tasks (customers, quality, sales, operations).'
    },
    {
      q: 'Who manages the AI Employees?',
      a: 'We do. MivizHub installs and manages the AI Employees and continuously optimizes them so you can focus on running the business—not troubleshooting tech.'
    },
    {
      q: 'Do I have to replace my current CRM?',
      a: 'No. We can integrate with your current CRMs and connect them into our Command Center so your AI Employees can work inside your existing workflow.'
    },
    {
      q: 'What kind of tasks can AI Employees handle?',
      a: 'Common roles include: AI Receptionist (answers calls, routes to the right person, captures info), Missed Call Rescue (instant text-back, re-engages, books appointments), AI Appointment Setter (qualifies leads, schedules/reschedules, sends confirmations), AI Follow-Up Specialist (nurtures leads, reminders, reactivation, quote follow-ups), AI Review Request Assistant (automated review requests + follow-up sequences), AI Admin Assistant (FAQs, status updates, intake questions, basic support), Sales SDR (responds to inbound, outreach sequences, books meetings, CRM notes), Social Media (drafts posts, captions, content calendar, comment/DM replies), Marketing (email/SMS campaigns, ad copy variations, landing page copy, lead magnets), Reputation Management (monitors reviews, flags issues, routes unhappy customers to resolution).'
    },
    {
      q: 'Will the AI talk to my customers directly?',
      a: 'Yes—if you want it to. We can set it up for SMS, chat, email, and voice depending on your needs and comfort level.'
    },
    {
      q: 'What if the AI can’t answer something?',
      a: 'We build guardrails. If the AI hits something outside the rules, it can: Ask a clarifying question, Route to a human, Create a ticket/notification, Log the conversation for review.'
    },
    {
      q: 'Will this make my business look “too automated”?',
      a: 'Only if it’s done poorly. We build it to feel natural, fast, and helpful—and we use your tone, your scripts, and your customer service rules.'
    }
  ];

  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="bg-background relative border-y border-surfaceBorder">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-background pointer-events-none" />
      <Container className="max-w-3xl">
        <div className="text-center mb-10 md:mb-16 relative z-10">
          <div className="text-sm font-bold tracking-widest text-brandAccent mb-4">STILL NOT SURE?</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-textMain tracking-tight mb-4">
            Frequently Asked Questions
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
              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-textMuted leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
