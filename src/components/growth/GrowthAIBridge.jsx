import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { ArrowFillButton } from '../ui/arrow-fill-button';
import { 
  ArrowRight, Bot, PhoneCall, Calendar, MessageSquare, Search, 
  FileText, Zap, Sparkles, CheckCircle2, TrendingUp, Users 
} from 'lucide-react';

export default function GrowthAIBridge() {
  const flywheelSteps = [
    {
      step: "PHASE 01",
      title: "Generate The Demand",
      service: "MivizHub Growth",
      desc: "Top 3 Google Maps, high-intent local search ads, and authority SEO content get your phone ringing.",
      metric: "Qualified Traffic Inflow",
      color: "text-[#31c0de]",
      bg: "bg-[#31c0de]/10",
      border: "border-[#31c0de]/30",
      icon: TrendingUp,
    },
    {
      step: "PHASE 02",
      title: "Capture Inquiries 24/7",
      service: "MivizHub AI Receptionist",
      desc: "Answers every incoming phone call in 1 ring. Natural speech, pricing answers, emergency triage.",
      metric: "Zero Missed Calls Day/Night",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      icon: PhoneCall,
    },
    {
      step: "PHASE 03",
      title: "Qualify & Book Jobs",
      service: "MivizHub AI Staffing",
      desc: "Texts or calls web quote inquiries in 60s, confirms budget, and books jobs directly into your calendar.",
      metric: "Immediate 60s Response",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      icon: Calendar,
    },
  ];

  return (
    <Section id="ai-bridge" className="py-24 bg-gradient-to-b from-[#090b12] via-[#140e24] to-[#090b12] border-b border-white/10 relative overflow-hidden">
      {/* Background radial purple/cyan lighting (hardware-accelerated, zero blur overhead) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.12)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Visual Transition Badge: GROW → AUTOMATE */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-wider shadow-sm">
            <span className="text-[#31c0de] font-semibold">BUILD & GROW</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-purple-400 font-semibold">AUTOMATE THE WORK</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            More Leads. More Inquiries.<br />
            <span className="text-[#31c0de]">
              Now Who Answers The Phone?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Marketing brings the business in. Our dedicated AI Employees handle the calls, qualify the leads, and book appointments 24/7.
          </p>
        </div>

        {/* Full-Funnel Flywheel Diagram: 3 Cohesive Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 relative">
          {flywheelSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === flywheelSteps.length - 1;

            return (
              <div 
                key={step.title}
                className="rounded-3xl bg-[#11131a] border border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-xl relative hover:border-white/20 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-gray-400 bg-white/5 px-2.5 py-1 rounded">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#31c0de]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider block mb-1 text-[#31c0de]">
                    {step.service}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed font-normal mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Outcome:</span>
                  <span className="font-semibold text-white">{step.metric}</span>
                </div>

                {/* Desktop Directional Arrow */}
                {!isLast && (
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#161822] border border-white/15 items-center justify-center text-gray-400 shadow-lg">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Complete Ecosystem Solution Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#11131a] border border-white/10 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 mx-auto mb-5">
            <Bot className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            The Complete Build • Grow • Automate Engine
          </h3>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Generate demand with Growth. Automate the work behind it with dedicated AI staff. No payroll overhead.
          </p>

          <ArrowFillButton
            btnText="Explore AI Workforce"
            href="/"
            size="lg"
            variant="secondary"
            className="border-white/20 hover:border-white/40"
          />
        </div>

      </Container>
    </Section>
  );
}
