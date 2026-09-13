import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';
import { Check, X, ArrowRight, PhoneCall, MessageSquare, Clock, Sparkles, Bot, Zap, CheckCircle2 } from 'lucide-react';

export default function SectionAIStaffing({ onOpenBooking }) {
  const roles = [
    {
      badge: "Voice & Phone",
      title: "24/7 AI Receptionist",
      desc: "Answers incoming calls in 1 ring with natural speech. Answers questions on pricing & services, handles emergency triage, and books appointments.",
      stat: "Zero missed calls day or night"
    },
    {
      badge: "Speed to Lead",
      title: "AI Lead Qualifier",
      desc: "Calls or texts web & ad inquiries within 60 seconds. Pre-qualifies budget, project scope, and timeline before booking directly into your calendar.",
      stat: "First to respond wins the deal"
    },
    {
      badge: "Revenue Recovery",
      title: "AI Quote Follow-Up",
      desc: "Monitors sent proposals and estimates, sending polite follow-ups via SMS and email so high-value deals never slip through the cracks.",
      stat: "Recovers 15–25% of stalled quotes"
    },
    {
      badge: "Operations & Care",
      title: "24/7 Support & Admin",
      desc: "Resolves routine client FAQs via chat, email, and text. Syncs client notes with your CRM and sends appointment reminders to eliminate no-shows.",
      stat: "Cuts no-shows & routine admin by 60%"
    }
  ];

  return (
    <Section id="ai-staffing" className="py-20 bg-transparent border-t border-white/10 relative overflow-hidden">
      
      {/* Ambient Lighting Spotlights */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-[#31c0de]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-96 -right-20 w-[400px] h-[400px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Service 02: AI Staffing & Digital Workforce
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Digital Employees That Never Sleep.
          </h2>
          <p className="text-base text-gray-300">
            We build, train, and manage dedicated AI employees that handle phone calls, qualify leads, follow up on quotes, and support customers 24/7.
          </p>
        </div>

        {/* 4 Core AI Roles - Elevated Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
          {roles.map((role, idx) => (
            <div 
              key={idx} 
              className="card-base p-6 flex flex-col justify-between hover:border-[#31c0de]/50 transition-all"
            >
              <div>
                <span className="text-[11px] font-bold text-[#31c0de] bg-[#31c0de]/10 px-2.5 py-0.5 rounded border border-[#31c0de]/20 inline-block mb-3 uppercase tracking-wider">
                  {role.badge}
                </span>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {role.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  {role.desc}
                </p>
              </div>

              <div className="bg-[#181820] p-2.5 rounded-xl border border-white/5 text-xs text-emerald-300 font-semibold">
                ✓ {role.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Graphic: Live AI Employee Operations Console */}
        <div className="max-w-5xl mx-auto mb-14 bg-[#121218]/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#31c0de] animate-pulse" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#31c0de]" />
                Live AI Operations Console (Multi-Channel In Action)
              </h4>
            </div>
            <span className="text-xs font-semibold text-[#31c0de] bg-[#31c0de]/10 px-3 py-1 rounded-full border border-[#31c0de]/20 self-start sm:self-auto">
              Active 24/7/365 • Zero Delays
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Live Feed 1: Voice Phone AI */}
            <div className="bg-[#181824] border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-gray-400 uppercase flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-indigo-400" />
                    Phone Channel (Live)
                  </span>
                  <div className="flex items-center gap-0.5">
                    <span className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="w-1 h-4 bg-emerald-400 rounded-full animate-pulse delay-75" />
                    <span className="w-1 h-2 bg-emerald-400 rounded-full animate-pulse delay-150" />
                  </div>
                </div>

                <div className="space-y-2 mb-3 text-xs">
                  <div className="bg-white/5 p-2 rounded text-gray-300">
                    <span className="text-gray-500 font-bold block text-[10px]">CALLER:</span>
                    "Do you guys have an estimator available tomorrow morning?"
                  </div>
                  <div className="bg-[#31c0de]/10 border border-[#31c0de]/20 p-2 rounded text-gray-200">
                    <span className="text-[#31c0de] font-bold block text-[10px]">AI RECEPTIONIST:</span>
                    "Yes, 9:30 AM is open! I've placed you on the schedule."
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Answered in 1 ring • Calendar locked</span>
              </div>
            </div>

            {/* Live Feed 2: Speed to Lead SMS */}
            <div className="bg-[#181824] border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-gray-400 uppercase flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#31c0de]" />
                    Speed-To-Lead (SMS)
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    38s Response
                  </span>
                </div>

                <div className="space-y-2 mb-3 text-xs">
                  <div className="bg-white/5 p-2 rounded text-gray-300">
                    <span className="text-gray-500 font-bold block text-[10px]">WEB INQUIRY (11:42 PM):</span>
                    "Emergency pipe leak, need pricing for replacement."
                  </div>
                  <div className="bg-[#31c0de]/10 border border-[#31c0de]/20 p-2 rounded text-gray-200">
                    <span className="text-[#31c0de] font-bold block text-[10px]">AI SPEED-TO-LEAD:</span>
                    "Hi Dan! Received your inquiry. We can dispatch a technician immediately."
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#31c0de] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Customer secured before competitor</span>
              </div>
            </div>

            {/* Live Feed 3: Quote Follow-Up */}
            <div className="bg-[#181824] border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-gray-400 uppercase flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Quote Nurture
                  </span>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    Auto Check-In
                  </span>
                </div>

                <div className="space-y-2 mb-3 text-xs">
                  <div className="bg-white/5 p-2 rounded text-gray-300">
                    <span className="text-gray-500 font-bold block text-[10px]">AI FOLLOW-UP DISPATCHED:</span>
                    "Hi Sarah, following up on the $6,200 remodel proposal sent Tuesday."
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded text-emerald-200">
                    <span className="text-emerald-400 font-bold block text-[10px]">CLIENT REPLY:</span>
                    "Thanks for checking in! Everything looks great, let's proceed."
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Stalled $6,200 proposal converted</span>
              </div>
            </div>

          </div>
        </div>

        {/* Practical Comparison: In-House Staff vs. MivizHub AI Employees */}
        <div className="card-base max-w-4xl mx-auto mb-12 p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] block mb-1">
              Simple Comparison
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Hiring In-House Office Staff vs. MivizHub AI Employees
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Traditional Hire */}
            <div className="bg-[#181820] border border-white/5 rounded-xl p-5">
              <span className="text-sm font-bold text-rose-400 block mb-3 pb-2 border-b border-white/5">
                Traditional Office Staff
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>$45,000 - $60,000/yr salary per person + taxes</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>Only 40 hours/week (evenings & weekends missed)</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>Handles 1 inquiry at a time (busy signals & hold times)</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>Requires weeks of training, sick leave & can quit</span>
                </li>
              </ul>
            </div>

            {/* MivizHub AI Employee */}
            <div className="bg-[#181824] border-2 border-[#31c0de]/30 rounded-xl p-5 shadow-lg shadow-cyan-950/20">
              <span className="text-sm font-bold text-[#31c0de] block mb-3 pb-2 border-b border-white/10">
                Your MivizHub AI Employees
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Fraction of the cost with zero payroll tax or benefits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>24/7/365 coverage across calls, SMS, email & chat</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Handles unlimited inquiries at once (zero wait times)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% custom-trained, integrated, and managed for you</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Action Banner */}
        <div className="card-base p-6 sm:p-7 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Want to see what an AI employee can handle for your business?
            </h4>
            <p className="text-sm text-gray-400">
              Book a quick 15-minute call. We'll show you voice demos, lead workflows, and follow-up automations.
            </p>
          </div>
          <Button 
            onClick={onOpenBooking} 
            variant="primary" 
            className="px-6 py-3.5 flex-shrink-0 font-bold bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl border-0 shadow-lg shadow-indigo-600/30"
          >
            Explore AI Staffing
          </Button>
        </div>

      </Container>
    </Section>
  );
}


