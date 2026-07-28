import React, { useState, useEffect } from 'react';
import { ArrowRight, PhoneCall, CheckCircle2, ShieldCheck, Activity, Users, Zap, Bot, MessageSquare, Clock, FileText, Calendar } from 'lucide-react';
import { AI_EMPLOYEES } from '../data/aiEmployees';

export default function HeroDigitalOffice({ onOpenBooking, onSelectEmployee }) {
  const [activeEmployeeId, setActiveEmployeeId] = useState("ai-receptionist");
  const [liveStream, setLiveStream] = useState([
    { id: 1, time: "Just now", agent: "AI Receptionist", text: "Answered call from Apex Construction • Booked Site Survey for Thursday 2:30 PM", status: "success" },
    { id: 2, time: "12s ago", agent: "AI Estimator", text: "Parsed CAD drawing • Generated $59,300 Cabinetry & HVAC Quote PDF", status: "info" },
    { id: 3, time: "34s ago", agent: "AI Sales Rep", text: "Qualified lead via WhatsApp • 250 kVA Industrial DG Set Rental inquiry", status: "success" },
    { id: 4, time: "1m ago", agent: "AI Support Agent", text: "Resolved fault alert E-204 (Coolant Sensor) • Dispatched Field Tech Frank", status: "success" }
  ]);

  const [counters, setCounters] = useState({
    conversations: 142,
    qualifiedLeads: 38,
    timeSaved: 184,
    uptime: "99.99%"
  });

  // Periodically push simulated live autonomous actions to demonstrate real-time AI Workforce in action
  useEffect(() => {
    const streamItems = [
      { agent: "AI Receptionist", text: "Received inbound call from Highrise Developers • Transferred client specs to CRM", status: "success" },
      { agent: "AI Follow-Up Assistant", text: "Re-engaged stalled proposal #REN-902 ($42,000) • Client agreed to e-signature", status: "success" },
      { agent: "AI Project Coordinator", text: "Dispatched daily site schedules for Site B-4 • All 6 sub-contractors confirmed", status: "info" },
      { agent: "AI Sales Rep", text: "Processed form inquiry • Lead scored 95/100 (Budget >$100k) • Assigned to Sales Director", status: "success" },
      { agent: "AI Support Agent", text: "Answered warranty coverage question in <8s • Closed ticket #TK-9921", status: "success" },
      { agent: "AI Estimator", text: "Processed 18-page spec sheet • Drafted preliminary HVAC estimate in 14 seconds", status: "info" }
    ];

    let index = 0;
    const interval = setInterval(() => {
      const item = streamItems[index % streamItems.length];
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      setLiveStream(prev => [
        { id: Date.now(), time: timeStr, agent: item.agent, text: item.text, status: item.status },
        ...prev.slice(0, 4)
      ]);

      setCounters(prev => ({
        ...prev,
        conversations: prev.conversations + 1,
        timeSaved: prev.timeSaved + Math.floor(Math.random() * 2)
      }));

      index++;
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const selectedEmployee = AI_EMPLOYEES.find(emp => emp.id === activeEmployeeId) || AI_EMPLOYEES[0];

  return (
    <section id="hero-office" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0066FF]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#00D2FF]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-ping" />
            <span className="text-xs font-mono font-medium text-zinc-300 tracking-wide uppercase">
              Digital Workforce Platform • Not Chatbots. Real AI Employees.
            </span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Build Your <span className="text-gradient-blue">AI Workforce.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Hire AI Employees that answer customers, qualify leads, book appointments, generate estimates, and complete repetitive work 24/7—so your team can focus on growing the business.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0066FF] text-white font-semibold text-sm shadow-xl shadow-[#0066FF]/30 hover:bg-[#1A75FF] transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 border border-white/20"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#hire-employees"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 hover:text-white font-semibold text-sm border border-white/10 transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2"
            >
              <span>Explore AI Employees</span>
            </a>
          </div>
        </div>

        {/* SIGNATURE VISUAL: LIVE DIGITAL OFFICE OPERATING SYSTEM */}
        <div className="mt-8 relative rounded-2xl bg-[#0D0D10] border border-white/10 p-4 sm:p-6 shadow-2xl shadow-black/90">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-zinc-400 pl-2 border-l border-white/10">
                mivizhub-digital-office // live-workforce-grid
              </span>
            </div>

            {/* Live Operational Metrics Pill */}
            <div className="flex items-center gap-6 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse-green" />
                <span>Live Active Digital Office</span>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <span>Autonomous Throughput: <strong className="text-white">{counters.conversations} actions today</strong></span>
                <span>Uptime: <strong className="text-[#0066FF]">{counters.uptime}</strong></span>
              </div>
            </div>
          </div>

          {/* Main Digital Office Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            
            {/* Left Column: AI Employee Roster Floor Plan (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#0066FF]" />
                  Active AI Workforce Roster (Click to view live stream)
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  6/6 Roles Online
                </span>
              </div>

              {/* Roster Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AI_EMPLOYEES.map((emp) => {
                  const isSelected = emp.id === activeEmployeeId;
                  return (
                    <div
                      key={emp.id}
                      onClick={() => setActiveEmployeeId(emp.id)}
                      className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-200 relative overflow-hidden ${
                        isSelected 
                          ? 'bg-[#15151C] border-[#0066FF] shadow-lg shadow-[#0066FF]/15' 
                          : 'bg-[#101014] border-white/5 hover:border-white/15 hover:bg-[#141419]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-lg font-mono font-bold text-xs flex items-center justify-center border ${
                            isSelected 
                              ? 'bg-[#0066FF] text-white border-white/30' 
                              : 'bg-white/5 text-zinc-300 border-white/10'
                          }`}>
                            {emp.avatar}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white leading-tight flex items-center gap-1.5">
                              {emp.title}
                            </h4>
                            <p className="text-[11px] text-zinc-400 font-normal line-clamp-1">
                              {emp.tagline}
                            </p>
                          </div>
                        </div>

                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                      </div>

                      {/* Card Metric Footer */}
                      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                        <span>{emp.metrics}</span>
                        <span className="text-[#0066FF] hover:underline font-sans font-medium text-[11px]">
                          Inspect Specs →
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Specs Trigger Bar */}
              <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span>Selected: <strong className="text-white">{selectedEmployee.title}</strong> ({selectedEmployee.category})</span>
                <button 
                  onClick={() => onSelectEmployee(selectedEmployee)}
                  className="text-xs font-semibold text-[#0066FF] hover:text-[#3385FF] flex items-center gap-1"
                >
                  Test Demo Conversation & Integrations
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Real-Time Autonomous Feed & Selected Employee Inspector (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              
              {/* Selected AI Employee Spotlight Inspector */}
              <div className="p-4 rounded-xl bg-[#14141A] border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-[#0066FF]/20 text-[#3385FF] rounded border border-[#0066FF]/30 font-semibold">
                      Role Spotlight
                    </span>
                    <span className="text-xs text-zinc-300 font-semibold">{selectedEmployee.title}</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">{selectedEmployee.status} 24/7</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                  {selectedEmployee.tagline}
                </p>

                <div className="space-y-1.5 mb-3">
                  {selectedEmployee.responsibilities.slice(0, 2).map((resp, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono text-zinc-500">Integrates with:</span>
                  {selectedEmployee.integrations.slice(0, 4).map((tool, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Activity Feed Log Stream */}
              <div className="p-4 rounded-xl bg-[#101014] border border-white/10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                        Real-Time Telemetry Feed
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">Live Updating</span>
                  </div>

                  <div className="space-y-2.5 overflow-hidden">
                    {liveStream.map((item) => (
                      <div key={item.id} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs transition-all duration-300 animate-fadeIn">
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1">
                          <span className="text-[#3385FF] font-semibold">{item.agent}</span>
                          <span>{item.time}</span>
                        </div>
                        <p className="text-zinc-300 text-[11px] leading-snug">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Continuous 24/7 Execution</span>
                  <span className="text-emerald-400">100% Zero Delay</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
