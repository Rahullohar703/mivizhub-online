import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { ArrowFillButton } from '../ui/arrow-fill-button';
import { ShieldCheck, Zap, Bot, CheckCircle2, Sparkles } from 'lucide-react';

export default function GrowthFinalCTA({ onOpenBooking, onSelectPlan }) {
  const navigate = useNavigate();

  const choices = [
    {
      badge: "STAGE 01",
      eyebrow: "ESTABLISH",
      title: "Build Your Presence",
      price: "$250",
      period: "/month",
      desc: "Lay your credible digital foundation with SEO, high-converting website, and dominant local organic search.",
      cta: "Build My Presence",
      action: () => onSelectPlan ? onSelectPlan('presence') : onOpenBooking('Presence ($250/mo)'),
      isPrimary: false,
      icon: ShieldCheck,
      accent: "#38bdf8",
      accentBg: "bg-sky-500/10",
      accentBorder: "border-sky-500/30",
      features: [
        "Modern high-converting website",
        "Local SEO & Google Maps optimization",
        "Monthly strategic blog content",
        "Zero long-term lock-in"
      ]
    },
    {
      badge: "STAGE 02 • MOST POPULAR",
      eyebrow: "GROW",
      title: "Start Growing",
      price: "$500",
      period: "/month",
      desc: "Turn your presence into an active client acquisition engine with targeted ads, inbound funnels, and continuous optimization.",
      cta: "Start Growing",
      action: () => onSelectPlan ? onSelectPlan('growth') : onOpenBooking('Growth ($500/mo)'),
      isPrimary: true,
      icon: Zap,
      accent: "#31c0de",
      accentBg: "bg-cyan-500/15",
      accentBorder: "border-cyan-500/50",
      features: [
        "Everything in Presence plan",
        "High-ROI paid advertising management",
        "Active inbound lead capture funnels",
        "Bi-weekly strategic iteration reviews"
      ]
    },
    {
      badge: "STAGE 03",
      eyebrow: "AUTOMATE",
      title: "Deploy AI Workforce",
      price: "Custom",
      period: "Digital Staffing",
      desc: "Scale operational bandwidth with autonomous 24/7 AI agents for lead qualification, booking, follow-up, and CRM dispatch.",
      cta: "Explore AI Staffing",
      action: () => navigate('/'),
      isPrimary: false,
      icon: Bot,
      accent: "#a855f7",
      accentBg: "bg-purple-500/10",
      accentBorder: "border-purple-500/30",
      features: [
        "Zero missed inquiries (calls & web)",
        "Instant booking into your calendar",
        "Automated multi-touch follow-up",
        "Seamless CRM & calendar integration"
      ]
    },
  ];

  return (
    <Section className="py-28 bg-gradient-to-b from-[#080a12] via-[#0d162b] to-[#04060a] border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-sky-600/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#31c0de] block mb-3">
            Next Steps For Your Business
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Where Does Your Business Need to Go Next?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Choose the clear phase that fits your current operational bandwidth, customer demand, and revenue goals.
          </p>
        </div>

        {/* Three Visual Pathway Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {choices.map((c) => {
            const Icon = c.icon;

            return (
              <div
                key={c.eyebrow}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group ${
                  c.isPrimary
                    ? "bg-[#11131a] border-2 border-cyan-500/60 shadow-2xl shadow-cyan-950/40"
                    : "bg-[#11131a] border border-white/10 hover:border-white/20"
                }`}
              >
                {c.isPrimary && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-500 text-[#09090b] text-xs font-bold uppercase tracking-wider shadow-lg">
                    Recommended Route
                  </div>
                )}

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[#31c0de]">
                      {c.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#31c0de]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Price */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {c.title}
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {c.price}
                    </span>
                    <span className="text-sm text-gray-400 font-semibold">
                      {c.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                    {c.desc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 pt-5 border-t border-white/10 mb-8">
                    {c.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <ArrowFillButton
                    size="lg"
                    variant={c.isPrimary ? "primary" : "secondary"}
                    onClick={c.action}
                    className="w-full justify-center text-center font-bold"
                  >
                    {c.cta}
                  </ArrowFillButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Concept Signature Underneath */}
        <div className="text-center max-w-2xl mx-auto pt-10 border-t border-white/10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              MivizHub Operating Philosophy
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase text-white mb-3">
            Build. Grow. Automate.
          </h3>
          <p className="text-base text-gray-400 font-normal leading-relaxed">
            We help ambitious businesses build their digital authority, turn attention into predictable inbound opportunities, and deploy AI staff to manage the workload effortlessly.
          </p>
        </div>

      </Container>
    </Section>
  );
}
