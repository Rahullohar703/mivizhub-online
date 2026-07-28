import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, PhoneCall, MessageSquare, FileText, CheckCircle2, ArrowRight, Zap, Cpu, Settings } from 'lucide-react';

const EMPLOYEES = [
  {
    id: 'receptionist',
    role: 'AI Receptionist',
    badge: '24/7 Phone & Voice',
    summary: 'Answers inbound voice calls in under 3 seconds, qualifies caller needs, and books site visits directly into your calendar.',
    impact: '0 Missed Inbound Calls',
    integrations: ['RingCentral', 'Twilio', 'Google Calendar', 'HubSpot', 'Zapier'],
    responsibilities: [
      'Natural human-like voice conversations with zero latency delay',
      'Intelligent screening for high-value vs. low-budget inquiries',
      'Automated SMS appointment confirmation sent during the call',
      'Direct sync with your team calendar and CRM'
    ],
    sampleLog: [
      { sender: 'Client', text: 'Hi, I need an emergency site inspection for a commercial HVAC install in Austin.' },
      { sender: 'AI Receptionist', text: 'Hello! I can arrange our lead HVAC engineer to visit your site. Is Thursday morning or afternoon better for you?' },
      { sender: 'Client', text: 'Thursday morning works great.' },
      { sender: 'AI Receptionist', text: 'Perfect. I have booked Thursday at 10:00 AM. Confirmation link sent to your mobile.' }
    ]
  },
  {
    id: 'sales',
    role: 'AI Sales Assistant',
    badge: 'Lead Qualification & Nurture',
    summary: 'Engages web leads, SMS, and WhatsApp inquiries instantly. Scores lead budget and secures signed proposals faster.',
    impact: '+38% Lead Conversion Rate',
    integrations: ['WhatsApp API', 'Salesforce', 'Stripe', 'Docusign', 'Meta Lead Ads'],
    responsibilities: [
      'Instant 5-second response to form submissions and WhatsApp leads',
      'Qualifies budget, project timeline, and decision-maker authority',
      'Automated follow-up sequences for cold or stalled proposals',
      'Drafts customized proposal summaries for your sales team'
    ],
    sampleLog: [
      { sender: 'Lead', text: 'What is the pricing for renting a 250 kVA diesel generator for 3 months?' },
      { sender: 'AI Sales Assistant', text: 'For 250 kVA units, our monthly rental rate includes maintenance & delivery. May I confirm your site location and delivery date?' },
      { sender: 'Lead', text: 'Project site is in Dallas, starting next Monday.' },
      { sender: 'AI Sales Assistant', text: 'Great! I have generated formal Quote #GEN-802 with delivery included. Sent to your email for review.' }
    ]
  },
  {
    id: 'estimator',
    role: 'AI Estimator',
    badge: 'Quote & Spec Automation',
    summary: 'Parses architectural specs, material requirements, and CAD drawings to generate preliminary line-item quotes in seconds.',
    impact: 'Saves 15+ Hours/Week',
    integrations: ['AutoCAD', 'Excel', 'Procore', 'QuickBooks', 'Google Drive'],
    responsibilities: [
      'Extracts material lists and dimensional specs from PDF blueprints',
      'Applies your custom pricing matrices and labor rate formulas',
      'Generates client-ready branded quote PDFs automatically',
      'Flags potential missing spec items for engineer review'
    ],
    sampleLog: [
      { sender: 'System', text: 'Uploaded PDF: Architectural_Blueprint_B4.pdf (18 pages)' },
      { sender: 'AI Estimator', text: 'Processing specs... Extracted 4,200 sq.ft flooring + HVAC ducting requirements.' },
      { sender: 'AI Estimator', text: 'Calculated preliminary estimate: $64,500 (Materials: $42k, Labor: $22.5k).' },
      { sender: 'System', text: 'Draft PDF saved to QuickBooks & sent to Project Manager for approval.' }
    ]
  },
  {
    id: 'support',
    role: 'AI Support Specialist',
    badge: 'Client Care & Troubleshooting',
    summary: 'Handles routine customer service tickets, updates work orders, and dispatches field technicians when equipment faults occur.',
    impact: '80% Tier-1 Resolution',
    integrations: ['ServiceTitan', 'Zendesk', 'Freshdesk', 'Slack', 'Twilio'],
    responsibilities: [
      '24/7 client portal and SMS support for active projects',
      'Queries telemetry data to troubleshoot fault error codes',
      'Creates and updates field work orders in ServiceTitan',
      'Sends automated technician ETA updates to clients'
    ],
    sampleLog: [
      { sender: 'Customer', text: 'Our generator unit displays fault code E-204.' },
      { sender: 'AI Support Specialist', text: 'Error E-204 indicates low coolant pressure. I have logged ticket #TK-402 and dispatched Technician Mark (ETA 45 mins).' },
      { sender: 'Customer', text: 'Thank you for the fast response!' }
    ]
  }
];

export default function SectionAIEmployees({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('receptionist');

  const selected = EMPLOYEES.find(e => e.id === activeTab) || EMPLOYEES[0];

  return (
    <section id="ai-workforce" className="bg-white py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-600 mb-3 block">
            Digital Employee Catalog
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            Hire Your Digital Workforce.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed">
            Pre-built, highly trained AI employees designed specifically for the workflows of architects, builders, contractors, and service companies.
          </p>
        </div>

        {/* Tab Selector Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {EMPLOYEES.map((emp) => {
            const isActive = activeTab === emp.id;
            return (
              <button
                key={emp.id}
                onClick={() => setActiveTab(emp.id)}
                className={`px-6 py-3.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                  isActive 
                    ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/10' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <span>{emp.role}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-blue-500" />}
              </button>
            );
          })}
        </div>

        {/* Active Employee Inspector Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-gray-200 bg-gray-50/60 p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Info Column (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-mono font-semibold">
                  {selected.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-mono font-semibold">
                  {selected.impact}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                {selected.role}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {selected.summary}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                  Core Responsibilities
                </h4>
                {selected.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Integrations */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Native System Integrations
                </h4>
                <div className="flex items-center gap-2 flex-wrap">
                  {selected.integrations.map((tool, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-gray-700 text-xs font-mono font-medium shadow-2xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Sample Conversation (5 Cols) */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gray-700">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  Live Execution Log Preview
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse-green" />
              </div>

              <div className="space-y-3 font-sans text-xs">
                {selected.sampleLog.map((log, i) => {
                  const isAI = log.sender !== 'Client' && log.sender !== 'Lead' && log.sender !== 'Customer';
                  return (
                    <div 
                      key={i} 
                      className={`p-3 rounded-xl ${
                        isAI 
                          ? 'bg-blue-50/80 border border-blue-100 text-gray-900 ml-4' 
                          : 'bg-gray-100 text-gray-800 mr-4'
                      }`}
                    >
                      <span className="font-mono text-[10px] font-bold block text-gray-500 mb-1">
                        {log.sender}
                      </span>
                      <p className="leading-relaxed">
                        {log.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={onOpenBooking}
                className="mt-6 w-full py-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-semibold transition-all flex items-center justify-center gap-2"
              >
                <span>Hire {selected.role}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
