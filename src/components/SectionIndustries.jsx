import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { HardHat, HeartPulse, Home } from 'lucide-react';

export default function SectionIndustries() {
  const [activeTab, setActiveTab] = useState('Construction');

  const tabs = [
    { name: 'Construction', icon: <HardHat className="w-5 h-5" /> },
    { name: 'Healthcare', icon: <HeartPulse className="w-5 h-5" /> },
    { name: 'Mortgage', icon: <Home className="w-5 h-5" /> }
  ];

  const industryData = {
    Construction: [
      { role: "AI Receptionist", desc: "Handles all incoming calls and routes them appropriately." },
      { role: "AI Estimation Assistant", desc: "Collects preliminary data for quick quotes." },
      { role: "AI Project Coordinator", desc: "Follows up on material deliveries and subcontractor schedules." },
      { role: "AI Site Visit Scheduler", desc: "Automatically books and confirms site visits." },
      { role: "AI Customer Support", desc: "Answers client queries about project status 24/7." }
    ],
    Healthcare: [
      { role: "AI Receptionist", desc: "Manages high call volumes without putting patients on hold." },
      { role: "AI Appointment Coordinator", desc: "Schedules, reschedules, and cancels appointments seamlessly." },
      { role: "AI Patient Follow-up", desc: "Checks in post-visit and gathers preliminary feedback." },
      { role: "AI Billing Assistant", desc: "Answers basic billing questions and routes complex issues." },
      { role: "AI Patient Support", desc: "Provides general clinic information and FAQs." }
    ],
    Mortgage: [
      { role: "AI Loan Intake Assistant", desc: "Gathers initial applicant information automatically." },
      { role: "AI Follow-up Specialist", desc: "Chases leads who haven't completed their applications." },
      { role: "AI Appointment Setter", desc: "Books consultations with loan officers." },
      { role: "AI Document Collection", desc: "Reminds clients of missing documents for their file." },
      { role: "AI Customer Support", desc: "Answers common questions about rates and processes." }
    ]
  };

  return (
    <Section id="industries" className="bg-background relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.05),transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            AI Workforce Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-brandPurple">Modern Businesses</span>
          </h2>
          <p className="text-xl text-textMuted">
            Built for growing businesses. Swap the data, and the AI adapts to your niche.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === tab.name 
                  ? 'bg-brandPurple text-white shadow-lg shadow-brandPurple/25' 
                  : 'bg-surface/50 text-textMuted hover:text-textMain hover:bg-surface/80 border border-surfaceBorder'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {industryData[activeTab].map((employee, idx) => (
                <div key={idx} className="bg-surface/30 border border-surfaceBorder p-6 rounded-2xl flex items-start gap-4 hover:border-brandPurple/50 transition-colors">
                  <div className="w-3 h-3 mt-1.5 rounded-full bg-[#00F0FF] flex-shrink-0 shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                  <div>
                    <h3 className="text-lg font-bold text-textMain mb-1">{employee.role}</h3>
                    <p className="text-textMuted">{employee.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
