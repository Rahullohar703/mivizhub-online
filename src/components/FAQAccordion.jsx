import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How are MivizHub AI Employees different from standard chatbots or automations?",
      a: "Standard chatbots follow rigid decision trees and break when users speak naturally. MivizHub builds AI Employees—autonomous digital staff that understand natural context, answer phone calls with human-like voice inflections, parse CAD blueprints, draft proposal PDFs, and execute complex multi-step workflows across your existing CRMs."
    },
    {
      q: "How long does it take to deploy an AI Employee to our business?",
      a: "Most AI Employees are deployed within 48 to 72 hours. Our team handles the ingestion of your company's SOPs, price cards, historical transcripts, and CRM connections during managed setup."
    },
    {
      q: "What happens if an AI Employee receives a complex or unusual question?",
      a: "AI Employees are programmed with custom Human-In-The-Loop escalation rules. If a caller requests a custom architectural override or emergency issue beyond SOPs, the AI gracefully transfers the live call or alerts your designated team member on Slack / WhatsApp with a full transcript."
    },
    {
      q: "Can AI Employees handle phone calls as well as text/email?",
      a: "Yes! MivizHub AI Receptionists and Sales Agents handle sub-second voice phone calls over Twilio/SIP trunks, WhatsApp messages, web chat widgets, and email threads simultaneously without line limits."
    },
    {
      q: "Is our client data and business information secure?",
      a: "Absolute security is built into our core architecture. We maintain SOC2 Type II compliance standards, ISO 27001 data isolation, and end-to-end TLS 1.3 encryption. Your data is never used to train public LLM models."
    },
    {
      q: "What software and CRMs can AI Employees connect to?",
      a: "We offer native integrations with HubSpot, Salesforce, Zoho, Google Workspace, Microsoft Outlook, Procore, Buildertrend, ServiceTitan, Sage, Zendesk, WhatsApp Business, and custom REST APIs."
    }
  ];

  return (
    <section className="py-24 bg-[#090909] relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gradient-blue">Questions.</span>
          </h2>
          <p className="text-base text-zinc-400">
            Everything you need to know about hiring digital employees for your business.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#121218] border-[#0066FF]/40 shadow-lg shadow-[#0066FF]/10' 
                    : 'bg-[#0E0E12] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0066FF] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#0066FF]' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-zinc-300 leading-relaxed border-t border-white/5 mt-2">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
