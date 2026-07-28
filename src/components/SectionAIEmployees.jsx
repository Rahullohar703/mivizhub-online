import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, PhoneCall, MessageSquare, FileText, CheckCircle2, ArrowRight, Zap, Cpu, Settings } from 'lucide-react';

const EMPLOYEES = [
  {
    id: 'receptionist',
    role: 'The 24/7 Phone Answerer',
    badge: 'Never Miss a Call',
    summary: 'Answers your phone on the very first ring. It sounds like a real person, takes messages, and books appointments on your calendar automatically.',
    impact: '0 Missed Calls',
    integrations: ['Your Phone Number', 'Google Calendar', 'Email'],
    responsibilities: [
      'Answers the phone day or night, even on weekends',
      'Finds out what the customer needs and their budget',
      'Texts the customer a confirmation after booking',
      'Puts the appointment right on your schedule'
    ],
    sampleLog: [
      { sender: 'Customer', text: 'Hi, I need an emergency repair at my house.' },
      { sender: 'Phone Answerer', text: 'Hello! I can help with that. Is Thursday morning or afternoon better for you?' },
      { sender: 'Customer', text: 'Thursday morning works great.' },
      { sender: 'Phone Answerer', text: 'Perfect. I booked Thursday at 10:00 AM. I just sent a confirmation text to your phone.' }
    ]
  },
  {
    id: 'sales',
    role: 'The Instant Text Replier',
    badge: 'Follow Up Instantly',
    summary: 'When someone fills out a form on your website or texts your business number, this assistant replies instantly to keep them from calling a competitor.',
    impact: 'More Jobs Won',
    integrations: ['Website Forms', 'Text Messages', 'Email'],
    responsibilities: [
      'Replies to website forms in under 5 seconds',
      'Asks the customer when they need the job done',
      'Follows up with customers who stopped replying',
      'Sends you a quick summary of the lead'
    ],
    sampleLog: [
      { sender: 'Customer', text: 'Do you guys do residential work in Dallas?' },
      { sender: 'Text Replier', text: 'Yes we do! We can get someone out to Dallas as early as next Monday. What kind of work do you need done?' },
      { sender: 'Customer', text: 'I need a full inspection of the property.' },
      { sender: 'Text Replier', text: 'Great! I just emailed you our pricing sheet for inspections.' }
    ]
  },
  {
    id: 'estimator',
    role: 'The Fast Quoter',
    badge: 'Quick Estimates',
    summary: 'Stop spending your nights doing paperwork. This assistant reads project details and creates a simple, accurate quote in seconds.',
    impact: 'Saves 15+ Hours/Week',
    integrations: ['QuickBooks', 'PDF Documents', 'Email'],
    responsibilities: [
      'Reads project details and material lists',
      'Applies your standard pricing and labor rates',
      'Creates a professional PDF quote for the customer',
      'Highlights anything that looks missing or confusing'
    ],
    sampleLog: [
      { sender: 'System', text: 'You forwarded an email with project details attached.' },
      { sender: 'Fast Quoter', text: 'Reading details... Looks like 4,200 sq.ft of material needed.' },
      { sender: 'Fast Quoter', text: 'Calculated estimate: $64,500 based on your standard rates.' },
      { sender: 'System', text: 'Draft Quote saved and sent to your email for review.' }
    ]
  },
  {
    id: 'support',
    role: 'The Customer Helper',
    badge: 'Answer Simple Questions',
    summary: 'Handles routine customer questions like "Are you open?" or "When will the guy be here?" so you don\'t have to be glued to your phone.',
    impact: 'Less Stress',
    integrations: ['Text Messages', 'Website Chat', 'Email'],
    responsibilities: [
      'Answers simple questions 24/7',
      'Checks where your technicians are and tells the customer',
      'Creates work orders for repair requests',
      'Texts customers when the technician is on the way'
    ],
    sampleLog: [
      { sender: 'Customer', text: 'Is your technician still coming today?' },
      { sender: 'Customer Helper', text: 'Yes! Mark is on his way and should be there in about 45 minutes.' },
      { sender: 'Customer', text: 'Thank you for letting me know!' }
    ]
  }
];

export default function SectionAIEmployees({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('receptionist');

  const selected = EMPLOYEES.find(e => e.id === activeTab) || EMPLOYEES[0];

  return (
    <section id="ai-workforce" className="bg-darkBg py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-electricBlue mb-3 block">
            What Our Software Can Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Meet Your New Virtual Staff.
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-normal leading-relaxed">
            Our simple systems are built specifically for local service businesses. They handle the busywork so you don't have to.
          </p>
        </div>

        {/* Tab Selector Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 lg:mb-10 scrollbar-none">
          {EMPLOYEES.map((emp) => {
            const isActive = activeTab === emp.id;
            return (
              <button
                key={emp.id}
                onClick={() => setActiveTab(emp.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                  isActive 
                    ? 'bg-electricBlue text-white shadow-[0_0_15px_rgba(0,102,255,0.4)]' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{emp.role}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
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
            className="rounded-3xl border border-white/5 bg-cardBg p-6 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Info Column (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-electricBlue/20 text-blue-300 border border-electricBlue/30 text-xs font-mono font-semibold">
                  {selected.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
                  {selected.impact}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                {selected.role}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {selected.summary}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">
                  What it does for you:
                </h4>
                {selected.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-electricBlue shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Integrations */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-3">
                  Works with:
                </h4>
                <div className="flex items-center gap-2 flex-wrap">
                  {selected.integrations.map((tool, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-mono font-medium shadow-2xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Sample Conversation (5 Cols) */}
            <div className="lg:col-span-5 bg-darkBg p-6 rounded-2xl border border-white/10 shadow-md">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gray-300">
                  <MessageSquare className="w-4 h-4 text-electricBlue" />
                  Example conversation
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse-green" />
              </div>

              <div className="space-y-3 font-sans text-xs">
                {selected.sampleLog.map((log, i) => {
                  const isAI = log.sender !== 'Client' && log.sender !== 'Lead' && log.sender !== 'Customer';
                  return (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: isAI ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className={`p-3 rounded-xl ${
                        isAI 
                          ? 'bg-electricBlue/20 border border-electricBlue/30 text-white ml-4' 
                          : 'bg-white/10 text-gray-300 mr-4'
                      }`}
                    >
                      <span className="font-mono text-[10px] font-bold block text-gray-500 mb-1">
                        {log.sender}
                      </span>
                      <p className="leading-relaxed">
                        {log.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="mt-6 w-full py-3 rounded-xl bg-electricBlue hover:bg-blue-600 shadow-[0_0_15px_rgba(0,102,255,0.4)] text-white text-xs font-semibold transition-all flex items-center justify-center gap-2"
              >
                <span>Learn about {selected.role}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
