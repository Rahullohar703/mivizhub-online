import React, { useState } from 'react';
import { Bot, CheckCircle2, MessageSquare, PhoneCall, ArrowRight, ShieldCheck, Zap, Sparkles, Filter, X, Play, Volume2 } from 'lucide-react';
import { AI_EMPLOYEES } from '../data/aiEmployees';

export default function HireAIEmployees({ selectedEmployeeFromHero, onOpenBooking }) {
  const [selectedEmp, setSelectedEmp] = useState(selectedEmployeeFromHero || AI_EMPLOYEES[0]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [simulatingCall, setSimulatingCall] = useState(false);

  const categories = ["All", "Communication", "Revenue", "Operations", "Support"];

  const filteredEmployees = activeCategory === "All" 
    ? AI_EMPLOYEES 
    : AI_EMPLOYEES.filter(emp => emp.category === activeCategory);

  const openSpecDrawer = (emp) => {
    setSelectedEmp(emp);
    setDrawerOpen(true);
    setSimulatingCall(false);
  };

  return (
    <section id="hire-employees" className="py-24 bg-[#090909] relative overflow-hidden border-t border-white/5">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0066FF]/10 blur-[130px] pointer-events-none rounded-full" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
              Digital Employee Roster
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Hire An <span className="text-gradient-blue">AI Employee.</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mt-3 max-w-2xl">
              Not chatbots. Not automations. Autonomous AI Employees that perform defined business roles inside your existing workflows 24/7.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap bg-white/[0.02] p-1.5 rounded-2xl border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/25' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* AI Employees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map((emp) => (
            <div
              key={emp.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#003399] text-white font-mono font-bold text-sm flex items-center justify-center border border-white/20 shadow-md">
                      {emp.avatar}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{emp.category}</span>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {emp.title}
                      </h3>
                    </div>
                  </div>
                  
                  {emp.badge && (
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#0066FF]/15 text-[#3385FF] border border-[#0066FF]/30 font-semibold">
                      {emp.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-zinc-300 font-medium mb-4 leading-relaxed">
                  {emp.tagline}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase text-zinc-400 font-semibold">Primary Responsibilities:</span>
                  {emp.responsibilities.slice(0, 3).map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Business Impact:</span>
                  <span className="text-emerald-400 font-semibold">{emp.outcomes[0]}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openSpecDrawer(emp)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-all flex items-center justify-center gap-2 group-hover:border-[#0066FF]/40"
                  >
                    <span>Test Demo Conversation</span>
                    <MessageSquare className="w-3.5 h-3.5 text-[#0066FF]" />
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="py-2.5 px-3 rounded-xl bg-[#0066FF] hover:bg-[#1A75FF] text-white text-xs font-semibold transition-all shadow-md shadow-[#0066FF]/20"
                    title="Hire this AI Employee"
                  >
                    Hire
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* INTERACTIVE DEMO & SPECIFICATION DRAWER MODAL */}
      {drawerOpen && selectedEmp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div 
            className="w-full max-w-4xl max-h-[90vh] bg-[#0E0E12] border border-white/15 rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0E0E12]/95 backdrop-blur-md z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0066FF] text-white font-mono font-bold flex items-center justify-center">
                  {selectedEmp.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {selectedEmp.title}
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-normal">
                      24/7 Autonomous
                    </span>
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">{selectedEmp.tagline}</p>
                </div>
              </div>

              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-8">
              
              {/* SECTION: REALISTIC INTERACTIVE DEMO CONVERSATION */}
              <div className="rounded-2xl bg-[#14141A] border border-white/10 p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
                      Interactive Live Demo: {selectedEmp.demoConversation.channel}
                    </h4>
                  </div>
                  <button
                    onClick={() => setSimulatingCall(!simulatingCall)}
                    className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-[#0066FF]/20 text-[#3385FF] border border-[#0066FF]/40 hover:bg-[#0066FF]/30 transition-colors flex items-center gap-1.5"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    {simulatingCall ? "Pause Audio Transcript" : "Play Voice Audio Simulation"}
                  </button>
                </div>

                {simulatingCall && (
                  <div className="p-3 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-between text-xs text-zinc-300">
                    <div className="flex items-center gap-2 font-mono">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span>Audio Simulation Playing... [Natural Human Tone • Sub-second Latency]</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                      <span>||||||||||||||||||||||</span>
                    </div>
                  </div>
                )}

                {/* Conversation Stream Messages */}
                <div className="space-y-3 pt-2">
                  {selectedEmp.demoConversation.messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${
                        msg.sender === "caller" ? "items-start" : "items-end"
                      }`}
                    >
                      <span className="text-[10px] font-mono text-zinc-500 mb-1">
                        {msg.sender === "caller" ? selectedEmp.demoConversation.caller : selectedEmp.demoConversation.agentName}
                      </span>
                      <div
                        className={`max-w-xl p-3.5 rounded-2xl text-xs leading-relaxed ${
                          msg.sender === "caller"
                            ? "bg-white/5 text-zinc-200 border border-white/10 rounded-tl-none"
                            : "bg-[#0066FF] text-white rounded-tr-none shadow-md shadow-[#0066FF]/20"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities & Direct Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider">
                    Core Operational Scope
                  </h4>
                  <div className="space-y-2">
                    {selectedEmp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider">
                    Measurable Business Outcomes
                  </h4>
                  <div className="space-y-2">
                    {selectedEmp.outcomes.map((out, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-emerald-300 p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                        <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Software Integrations */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider mb-3">
                  Native Enterprise Integrations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedEmp.integrations.map((tool, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 border-t border-white/10 bg-[#0A0A0E] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-zinc-400">Deploy this AI Employee to your business in 48 hours</span>
                <p className="text-sm font-bold text-white">Custom Knowledge Base & CRM Setup Included</p>
              </div>

              <button
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0066FF] text-white text-xs font-bold shadow-lg shadow-[#0066FF]/30 hover:bg-[#1A75FF] transition-all flex items-center justify-center gap-2"
              >
                <span>Hire {selectedEmp.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
