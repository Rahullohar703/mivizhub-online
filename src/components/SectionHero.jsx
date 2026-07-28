import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, CheckCircle2, Activity, Users, Zap, MessageSquare, Clock, FileText, Calendar, ShieldCheck } from 'lucide-react';

const EMPLOYEES = [
  { id: 'receptionist', title: 'The 24/7 Phone Answerer', avatar: 'PA', tagline: 'Answers calls, takes messages, and books appointments on your calendar.', speed: 'Answers on 1st ring', status: 'Online' },
  { id: 'sales', title: 'The Instant Text Replier', avatar: 'TR', tagline: 'Replies to customer texts and website forms instantly.', speed: 'Instant Reply', status: 'Online' },
  { id: 'estimator', title: 'The Fast Quoter', avatar: 'FQ', tagline: 'Reads project details and creates a simple quote in seconds.', speed: 'Quotes in seconds', status: 'Online' },
  { id: 'support', title: 'The Customer Helper', avatar: 'CH', tagline: 'Answers basic customer questions so you don\'t have to.', speed: 'Always available', status: 'Online' }
];

export default function SectionHero({ onOpenBooking }) {
  const [activeEmp, setActiveEmp] = useState('receptionist');
  const [liveStream, setLiveStream] = useState([
    { id: 1, time: "Just now", agent: "Phone Answerer", text: "Answered call from John Smith • Booked a quote visit for Thursday", badge: "Call Answered" },
    { id: 2, time: "14s ago", agent: "Fast Quoter", text: "Read project details • Typed up a $5,300 simple quote", badge: "Quote Ready" },
    { id: 3, time: "38s ago", agent: "Text Replier", text: "Got a text from Mary • Replied instantly with pricing info", badge: "Text Sent" },
    { id: 4, time: "1m ago", agent: "Customer Helper", text: "Customer asked for business hours • Replied automatically", badge: "Question Answered" }
  ]);

  useEffect(() => {
    const actions = [
      { agent: "Phone Answerer", text: "Phone rang while you were on a job • Answered and took a message", badge: "Call Answered" },
      { agent: "Text Replier", text: "New website lead came in • Sent them a friendly text right away", badge: "Lead Messaged" },
      { agent: "Fast Quoter", text: "Looked at an old job • Created a new quote in 12 seconds", badge: "Quote Ready" },
      { agent: "Customer Helper", text: "Customer texted asking if we are open • Sent a quick reply yes", badge: "Question Answered" }
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
    <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[350px] bg-electricBlue/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 py-2 sm:py-1.5 rounded-2xl sm:rounded-full bg-cardBg border border-white/10 shadow-sm text-xs font-semibold text-gray-300 tracking-wide text-center"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electricBlue status-pulse-green" />
              <span>Simple Virtual Assistants</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Built Specifically For Local Service Businesses</span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] mb-6"
          >
            Stop Missing Phone Calls & <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-blue-400">Losing Jobs to Competitors.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-gray-400 font-normal leading-relaxed max-w-3xl mx-auto mb-10"
          >
            We set up simple software that answers your phones 24/7, replies to texts instantly, and books appointments for you. No technical skills required.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-electricBlue hover:bg-blue-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Book a Free Chat With Us</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#ai-workforce"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>See What Our Software Can Do</span>
            </motion.a>
          </motion.div>
        </div>

        {/* SIGNATURE VISUAL: WORLD-CLASS LIVE DIGITAL OFFICE WORKSPACE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-[#0C0D12] border border-gray-800 shadow-2xl p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden"
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
                mivizhub // your-new-virtual-office
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse-green" />
                <span>Live Software Activity</span>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <span>Status: <strong className="text-blue-400">Always Online</strong></span>
                <span>Missed Calls: <strong className="text-emerald-400">0</strong></span>
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
                  Your Active Virtual Staff
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  Ready to Work
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
                        Recent Activity
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">Live Feed</span>
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
                  <span>Working quietly in the background</span>
                  <span className="text-emerald-400 font-semibold">100% Automated</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
