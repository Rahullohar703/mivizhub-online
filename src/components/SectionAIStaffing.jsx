import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { Check, X, ArrowRight } from 'lucide-react';

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
    <Section id="ai-staffing" className="py-20 bg-gradient-to-b from-[#0a1220] via-[#140e26] to-[#0d0f1e] border-t border-white/10 relative overflow-hidden">
      {/* Subtle high-tech violet spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08)_0%,transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Service 02: AI Staffing & Digital Workforce
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Digital Employees That Never Sleep.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            We build, train, and manage dedicated AI employees that handle phone calls, qualify leads, follow up on quotes, and support customers 24/7.
          </p>
        </div>

        {/* 4 Core AI Roles - Wide, Crisp, Scannable Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {roles.map((role, idx) => (
            <div 
              key={idx} 
              className="bg-[#131122]/90 border border-white/10 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#31c0de]/40 transition-colors shadow-xl"
            >
              <div>
                <span className="text-[11px] font-bold text-[#31c0de] bg-[#31c0de]/10 px-3 py-1 rounded-full border border-[#31c0de]/20 inline-block mb-4 uppercase tracking-wider">
                  {role.badge}
                </span>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {role.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {role.desc}
                </p>
              </div>

              <div className="bg-[#0d0b17] p-3 rounded-xl border border-white/5 text-xs sm:text-sm text-emerald-300 font-semibold">
                ✓ {role.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Practical Comparison: In-House Staff vs. MivizHub AI Employees */}
        <div className="max-w-6xl mx-auto mb-16 bg-[#131122]/90 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] block mb-2">
              Simple Comparison
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Hiring In-House Office Staff vs. MivizHub AI Employees
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Traditional Hire */}
            <div className="bg-[#0e0c18] border border-white/5 rounded-2xl p-6 sm:p-8">
              <span className="text-base font-bold text-rose-400 block mb-4 pb-3 border-b border-white/5">
                Traditional Office Staff
              </span>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <span>$45,000 - $60,000/yr salary per person + taxes & benefits</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <span>Only 40 hours/week (evenings & weekends missed)</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <span>Handles 1 inquiry at a time (busy signals & hold times)</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <span>Requires weeks of training, sick leave & can quit</span>
                </li>
              </ul>
            </div>

            {/* MivizHub AI Employee */}
            <div className="bg-[#18122c] border-2 border-[#31c0de]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/20">
              <span className="text-base font-bold text-[#31c0de] block mb-4 pb-3 border-b border-white/10">
                Your MivizHub AI Employees
              </span>
              <ul className="space-y-3 text-sm text-gray-200">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Fraction of the cost with zero payroll tax or benefits</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>24/7/365 coverage across calls, SMS, email & chat</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Handles unlimited inquiries at once (zero wait times)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>100% custom-trained, integrated, and managed for you</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Action Banner */}
        <div className="bg-[#131122]/90 border border-white/10 rounded-3xl p-8 sm:p-10 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Want to see what an AI employee can handle for your business?
            </h4>
            <p className="text-sm sm:text-base text-gray-300">
              Book a quick 15-minute call. We'll show you voice demos, lead workflows, and follow-up automations.
            </p>
          </div>
          <ArrowFillButton 
            btnText="Explore AI Staffing" 
            onClick={onOpenBooking} 
            bgColor="#10141e"
            textColor="#ffffff"
            fillBgColor="#31c0de"
            fillTextColor="#09090b"
            arrowColor="#09090b"
            hoverArrowColor="#09090b"
            className="border-cyan-500/30 shadow-lg shadow-cyan-500/20"
          />
        </div>

      </Container>
    </Section>
  );
}


