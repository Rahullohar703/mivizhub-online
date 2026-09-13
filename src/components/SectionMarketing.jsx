import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';
import { Check, ArrowRight, MapPin, Star, Phone, ShieldCheck, DollarSign, TrendingUp, BarChart3 } from 'lucide-react';

export default function SectionMarketing({ onOpenBooking }) {
  const pillars = [
    {
      step: "01",
      title: "Google & Local Search",
      desc: "Show up at the very top of Google Maps and search when people in your city need your work.",
      points: [
        "Top rankings on Google Maps",
        "High-intent search ads that bring real calls"
      ]
    },
    {
      step: "02",
      title: "Turn Clicks Into Calls",
      desc: "Make it dead simple for homeowners and commercial clients to request an estimate in 30 seconds.",
      points: [
        "Fast quote request pages with zero confusion",
        "Instant text confirmation sent to every lead"
      ]
    },
    {
      step: "03",
      title: "Honest Monthly Reports",
      desc: "Know exactly how many calls and quote requests came in, and what each job cost to acquire.",
      points: [
        "Plain-English summary (calls, leads, cost per job)",
        "Zero vanity metrics or agency fluff"
      ]
    }
  ];

  return (
    <Section id="marketing" className="py-20 bg-transparent border-t border-white/10 relative overflow-hidden">
      
      {/* Ambient Lighting Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Service 01: Marketing & Growth
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Bring More Customers In.
          </h2>
          <p className="text-base text-gray-300">
            We manage your entire marketing system so you get a predictable flow of quote requests without burning money on useless clicks.
          </p>
        </div>

        {/* 3 Clean, Lightweight Cards (Zero Wall of Text) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="card-base p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-500/50 transition-all"
            >
              <div>
                <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20 inline-block mb-3">
                  Step {pillar.step}
                </span>

                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                  {pillar.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Graphic: Live Marketing & Search Engine Mockup */}
        <div className="max-w-5xl mx-auto mb-12 bg-[#121218]/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                What Your Customers See On Google
              </h4>
            </div>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
              ✓ Active Ad & Map Campaigns
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Visual 1: Google Local Pack Listing Card */}
            <div className="bg-[#181822] border border-white/10 rounded-xl p-5 shadow-lg relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  Google Maps 3-Pack Result #1
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Top Ranked
                </span>
              </div>

              <div className="text-base font-extrabold text-white mb-1">
                Your Company Name
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-amber-400 text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span className="text-xs font-bold text-gray-200">5.0</span>
                <span className="text-xs text-gray-400">(84 verified local reviews)</span>
              </div>

              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                Licensed & Insured Local Specialists • Fast Estimates • Serving Your Metro Area
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className="px-3.5 py-2 rounded-lg bg-[#4F46E5] text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </div>
                <div className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 text-xs font-semibold">
                  Request Free Quote
                </div>
              </div>
            </div>

            {/* Visual 2: Honest Performance Metrics Preview */}
            <div className="space-y-3">
              <div className="bg-[#181822] border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Qualified Inbound Phone Calls</span>
                    <span className="text-lg font-extrabold text-white">42 Calls This Month</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">
                  +34% vs Last Mo
                </span>
              </div>

              <div className="bg-[#181822] border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Average Customer Cost Per Lead</span>
                    <span className="text-lg font-extrabold text-white">$26.40 / Lead</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-300 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  Tracked Weekly
                </span>
              </div>

              <div className="bg-[#181822] border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#31c0de]/10 border border-[#31c0de]/20 text-[#31c0de]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Reporting Quality</span>
                    <span className="text-lg font-extrabold text-white">100% Plain English</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#31c0de] bg-[#31c0de]/10 px-2.5 py-1 rounded">
                  Zero Fluff
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Action Banner */}
        <div className="card-base p-6 sm:p-7 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Want a steady flow of quote requests?
            </h4>
            <p className="text-sm text-gray-400">
              Let's review your market and show you what it will take to get consistent leads.
            </p>
          </div>
          <Button 
            onClick={onOpenBooking} 
            variant="primary" 
            className="px-6 py-3.5 flex-shrink-0 font-bold bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl border-0 shadow-lg shadow-indigo-600/30"
          >
            Book a Marketing Review
          </Button>
        </div>

      </Container>
    </Section>
  );
}


