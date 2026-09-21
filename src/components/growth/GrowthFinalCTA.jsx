import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { ArrowRight, ShieldCheck, Zap, Bot } from 'lucide-react';

export default function GrowthFinalCTA({ onOpenBooking, onSelectPlan }) {
  const choices = [
    {
      badge: "STAGE 01",
      eyebrow: "ESTABLISH",
      title: "Build Your Presence",
      price: "$250/mo",
      desc: "Lay your credible digital foundation with SEO, website, and organic search.",
      cta: "Build My Presence",
      action: () => onSelectPlan ? onSelectPlan('presence') : onOpenBooking('Presence ($250/mo)'),
      isPrimary: false,
      isExternalLink: false,
      icon: ShieldCheck,
      accent: "#31c0de"
    },
    {
      badge: "STAGE 02",
      eyebrow: "GROW",
      title: "Start Growing",
      price: "$500/mo",
      desc: "Turn presence into active client acquisition with paid ads, leads, and content engine.",
      cta: "Start Growing",
      action: () => onSelectPlan ? onSelectPlan('growth') : onOpenBooking('Growth ($500/mo)'),
      isPrimary: true,
      isExternalLink: false,
      icon: Zap,
      accent: "#31c0de"
    },
    {
      badge: "STAGE 03",
      eyebrow: "AUTOMATE",
      title: "Deploy AI Workforce",
      price: "Digital Staffing",
      desc: "Scale capacity with 24/7 AI employees for qualification, booking, and dispatch.",
      cta: "Explore AI Workforce",
      to: "/",
      isPrimary: false,
      isExternalLink: true,
      icon: Bot,
      accent: "#a855f7"
    },
  ];

  return (
    <Section className="py-24 bg-[#0b0b0e] border-t border-white/10">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Next Steps
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Where Does Your Business Need to Go Next?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the phase that fits your current operational bandwidth and revenue targets.
          </p>
        </div>

        {/* Three Visual Choices */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {choices.map((c) => {
            const Icon = c.icon;

            return (
              <div
                key={c.eyebrow}
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-xl transition-colors ${
                  c.isPrimary
                    ? "bg-[#121216] border-2 border-[#31c0de]"
                    : "bg-[#121216] border border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono tracking-wider text-[#31c0de] uppercase font-bold bg-white/5 px-2.5 py-1 rounded">
                      {c.badge} • {c.eyebrow}
                    </span>
                    <div 
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                      style={{ color: c.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {c.title}
                  </h3>

                  <div className="text-xl font-mono font-bold text-white mb-3">
                    {c.price}
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-8 font-normal">
                    {c.desc}
                  </p>
                </div>

                <div>
                  {c.isExternalLink ? (
                    <Link
                      to={c.to}
                      className="w-full py-4 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-base transition-all flex items-center justify-center gap-2 group hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <span>{c.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <button
                      onClick={c.action}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 group hover:scale-[1.01] active:scale-[0.99] ${
                        c.isPrimary
                          ? "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-lg shadow-indigo-600/30"
                          : "bg-white/10 hover:bg-white/15 text-white"
                      }`}
                    >
                      <span>{c.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Brand Concept Signature Underneath */}
        <div className="text-center max-w-2xl mx-auto pt-10 border-t border-white/10">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase text-white mb-2 font-heading">
            Build. Grow. Automate.
          </h3>
          <p className="text-base text-gray-400 font-medium leading-relaxed">
            Mivizhub helps businesses build their digital presence, grow their customer pipeline, and automate the work behind it.
          </p>
        </div>

      </Container>
    </Section>
  );
}
