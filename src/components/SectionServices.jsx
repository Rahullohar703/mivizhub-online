import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Check, ArrowRight } from 'lucide-react';

export default function SectionServices() {
  const marketingItems = [
    { title: "Google Search & Maps", desc: "Rank at the top when local homeowners search for your services." },
    { title: "Targeted Ad Campaigns", desc: "Turn ad spend directly into phone calls and estimate requests." },
    { title: "Honest Monthly Reporting", desc: "Track real jobs and cost-per-lead with zero agency fluff." }
  ];

  const staffingItems = [
    { title: "24/7 Voice & Phone Reception", desc: "Picks up in 1 ring, handles routine caller questions, and books appointments." },
    { title: "Instant Lead Qualification & SMS", desc: "Reaches web leads in under 60 seconds and follows up on open quotes." },
    { title: "Customer Support & Admin Sync", desc: "Answers client FAQs 24/7 and updates your calendar & CRM automatically." }
  ];

  return (
    <Section id="services" className="py-20 bg-[#09090b] border-t border-white/10">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Our Two Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Get Customers. Handle The Work.
          </h2>
          <p className="text-base text-gray-300">
            Use either service independently, or combine both for an end-to-end growth engine.
          </p>
        </div>

        {/* Two Service Cards: Crisp & Breathable */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          
          {/* SERVICE 01: Marketing & Growth */}
          <div className="bg-[#121216] border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-indigo-500/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20">
                  Service 01
                </span>
                <span className="text-xs text-gray-400 font-semibold uppercase">Brings Business In</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Marketing & Growth
              </h3>
              
              <p className="text-sm font-semibold text-[#31c0de] mb-3">
                Bring More Customers Through the Door.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                We get your business discovered, run local ads, and make your phone ring with qualified quote requests.
              </p>

              {/* Clean 3-Item List */}
              <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                {marketingItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-white block">{item.title}</span>
                      <span className="text-xs text-gray-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#marketing"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#4F46E5] hover:bg-[#4338CA] transition-colors shadow-lg shadow-indigo-600/25"
            >
              <span>Explore Marketing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* SERVICE 02: AI Staffing */}
          <div className="bg-[#121216] border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#31c0de]/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] bg-[#31c0de]/10 px-2.5 py-1 rounded border border-[#31c0de]/20">
                  Service 02
                </span>
                <span className="text-xs text-gray-400 font-semibold uppercase">Gets The Work Done</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                AI Staffing
              </h3>
              
              <p className="text-sm font-semibold text-[#31c0de] mb-3">
                Handle More Work Without Adding Overhead.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                We deploy dedicated AI employees that answer your phones, qualify web leads in 60 seconds, follow up on sent quotes, and keep your business running 24/7.
              </p>

              {/* Clean 3-Item List */}
              <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                {staffingItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#31c0de] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-white block">{item.title}</span>
                      <span className="text-xs text-gray-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#ai-staffing"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
            >
              <span>Explore AI Staffing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Reassurance Banner */}
        <div className="text-center max-w-xl mx-auto bg-[#14141a] border border-white/10 rounded-xl p-3.5">
          <p className="text-xs sm:text-sm text-gray-400 font-medium">
            Not sure what you need? In a quick 15-minute call, we'll recommend whether you need marketing, staffing, or both.
          </p>
        </div>

      </Container>
    </Section>
  );
}


