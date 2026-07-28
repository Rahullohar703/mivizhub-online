import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, CheckCircle2, Activity, Users, Zap, MessageSquare, Clock, FileText, Calendar, ShieldCheck } from 'lucide-react';

const EMPLOYEES = [
  { id: 'receptionist', title: 'AI Receptionist', avatar: 'RC', tagline: 'Answers calls 24/7, qualifies inquiries, books calendar meetings', speed: '< 3s response', status: 'Online' },
  { id: 'sales', title: 'AI Sales Assistant', avatar: 'SA', tagline: 'Engages leads on WhatsApp & Web, scores budget, sends proposals', speed: '< 5s response', status: 'Online' },
  { id: 'estimator', title: 'AI Estimator', avatar: 'ES', tagline: 'Parses specs & CAD drawings, drafts detailed preliminary quotes', speed: '14s build time', status: 'Online' },
  { id: 'support', title: 'AI Support Specialist', avatar: 'SP', tagline: 'Resolves tier-1 client issues, queries CRM, dispatches field tech', speed: '< 8s resolution', status: 'Online' }
];

export default function SectionHero({ onOpenBooking }) {
  const [activeEmp, setActiveEmp] = useState('receptionist');
  const [liveStream, setLiveStream] = useState([
    { id: 1, time: "Just now", agent: "AI Receptionist", text: "Answered call from Apex Construction • Booked Site Survey for Thursday 2:30 PM", badge: "Call Handled" },
    { id: 2, time: "14s ago", agent: "AI Estimator", text: "Parsed CAD spec sheet • Generated $59,300 Cabinetry & HVAC Quote PDF", badge: "Quote Drafted" },
    { id: 3, time: "38s ago", agent: "AI Sales Assistant", text: "Qualified lead via WhatsApp • 250 kVA Industrial Generator Inquiry ($85k budget)", badge: "Lead Qualified" },
    { id: 4, time: "1m ago", agent: "AI Support Specialist", text: "Resolved coolant alert E-204 • Updated CRM & dispatched Field Tech Frank", badge: "Ticket Closed" }
  ]);

  useEffect(() => {
    const actions = [
      { agent: "AI Receptionist", text: "Inbound call from Highrise Developers • Transferred client specs to HubSpot CRM", badge: "Call Handled" },
      { agent: "AI Sales Assistant", text: "Re-engaged stalled proposal #REN-902 ($42,000) • Client scheduled review call", badge: "Lead Converted" },
      { agent: "AI Estimator", text: "Processed 18-page project spec sheet • Drafted preliminary quote in 12 seconds", badge: "Quote Drafted" },
      { agent: "AI Support Specialist", text: "Answered warranty coverage inquiry in 4s • Ticket #TK-9921 resolved autonomously", badge: "Ticket Closed" }
    ];

    let idx = 0;
    const timer = setInterval(() => {
      const item = actions[idx % actions.length];
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      setLiveStream(prev => [
        { id: Date.now(), time: timeStr, agent: item.agent, text: item.text, badge: item.badge },
        ...prev.slice(0, 3)
      ]);

      idx++;
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const selectedRole = EMPLOYEES.find(e => e.id === activeEmp) || EMPLOYEES[0];

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 bg-white overflow-hidden bg-grid-pattern">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200/80 shadow-sm text-xs font-semibold text-gray-700 tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 status-pulse-green" />
            <span>Digital Workforce Platform • AI Employees Built For Service Businesses</span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.06] mb-6"
          >
            Hire Digital Employees That <span className="text-gradient-blue">Never Sleep.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Never miss an inbound lead. Answer calls instantly, qualify prospects, generate quotes, and automate manual work so your team can focus on scaling.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 hover:bg-black text-white font-semibold text-sm shadow-xl shadow-gray-900/10 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#ai-workforce"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore AI Employee Roles</span>
            </a>
          </motion.div>
        </div>

        {/* SIGNATURE VISUAL: WORLD-CLASS LIVE DIGITAL OFFICE WORKSPACE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-[#0C0D12] border border-gray-800 shadow-2xl p-6 lg:p-8 text-white relative overflow-hidden"
        >
          {/* Top Operational Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-800/80">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-gray-400 pl-3 border-l border-gray-800">
                mivizhub // digital-office-os v2.4
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse-green" />
                <span>Live Active Workforce</span>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <span>Latency: <strong className="text-blue-400">&lt; 3.2s</strong></span>
                <span>Uptime: <strong className="text-emerald-400">99.99%</strong></span>
              </div>
            </div>
          </div>

          {/* Grid Layout inside Digital Office Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            
            {/* Left: AI Employee Roles (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  Active AI Digital Employees
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  4 Roles Operational
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EMPLOYEES.map((emp) => {
                  const isSelected = emp.id === activeEmp;
                  return (
                    <button
                      key={emp.id}
                      onClick={() => setActiveEmp(emp.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                        isSelected 
                          ? 'bg-gray-900 border-blue-500/80 shadow-lg shadow-blue-500/10' 
                          : 'bg-gray-950/60 border-gray-800/80 hover:border-gray-700 hover:bg-gray-900/40'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl font-mono font-bold text-xs flex items-center justify-center border ${
                            isSelected 
                              ? 'bg-blue-600 text-white border-blue-400/40' 
                              : 'bg-gray-800 text-gray-300 border-gray-700'
                          }`}>
                            {emp.avatar}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white leading-tight">
                              {emp.title}
                            </h4>
                            <span className="text-[11px] font-mono text-blue-400">
                              {emp.speed}
                            </span>
                          </div>
                        </div>

                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>

                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {emp.tagline}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Real-Time Execution Stream (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="p-4 rounded-2xl bg-gray-950/80 border border-gray-800/80 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-800/80">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold">
                        Autonomous Action Stream
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">Live Updating</span>
                  </div>

                  <div className="space-y-3">
                    {liveStream.map((item) => (
                      <div key={item.id} className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 text-xs transition-all duration-300">
                        <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                          <span className="text-blue-400 font-semibold">{item.agent}</span>
                          <span className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px]">{item.badge}</span>
                        </div>
                        <p className="text-gray-300 leading-snug">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>Continuous Execution</span>
                  <span className="text-emerald-400 font-semibold">100% Autonomous</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
