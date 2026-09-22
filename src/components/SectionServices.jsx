import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Check } from 'lucide-react';
import { ArrowFillButton } from './ui/arrow-fill-button';

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
    <Section id="services" className="py-20 scroll-mt-24 bg-gradient-to-b from-[#0c1222] via-[#090d18] to-[#0c101c] border-t border-white/10 relative overflow-hidden">
      {/* Subtle cyan ambient spotlight */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(49,192,222,0.07)_0%,transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Our Two Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Get Customers. Handle The Work.
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Use either service independently, or combine both for an end-to-end growth engine.
          </p>
        </div>

        {/* Two Service Cards: Wide, Crisp & Expansive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto mb-14">
          
          {/* SERVICE 01: Marketing & Growth */}
          <div className="bg-[#0f1524]/90 border border-white/10 rounded-3xl p-8 sm:p-11 flex flex-col justify-between hover:border-indigo-500/40 transition-colors shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  Service 01
                </span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Brings Business In</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Marketing & Growth
              </h3>
              
              <p className="text-base font-semibold text-[#31c0de] mb-3">
                Bring More Customers Through the Door.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
                We get your business discovered, run local ads, and make your phone ring with qualified quote requests.
              </p>

              {/* Clean 3-Item List */}
              <div className="space-y-4 pt-6 border-t border-white/10 mb-10">
                {marketingItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm sm:text-base font-bold text-white block">{item.title}</span>
                      <span className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ArrowFillButton
              href="#marketing"
              btnText="Explore Marketing Engine"
              size="lg"
              bgColor="#4F46E5"
              textColor="#ffffff"
              fillBgColor="#38bdf8"
              fillTextColor="#070b16"
              arrowColor="#070b16"
              hoverArrowColor="#070b16"
              className="w-full justify-center shadow-xl shadow-indigo-600/30 border-indigo-400/30"
            />
          </div>

          {/* SERVICE 02: AI Staffing */}
          <div className="bg-[#0f1524]/90 border border-white/10 rounded-3xl p-8 sm:p-11 flex flex-col justify-between hover:border-[#31c0de]/40 transition-colors shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] bg-[#31c0de]/10 px-3 py-1 rounded-full border border-[#31c0de]/20">
                  Service 02
                </span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Gets The Work Done</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                AI Staffing
              </h3>
              
              <p className="text-base font-semibold text-[#31c0de] mb-3">
                Handle More Work Without Adding Overhead.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
                We deploy dedicated AI employees that answer your phones, qualify web leads in 60 seconds, follow up on sent quotes, and keep your business running 24/7.
              </p>

              {/* Clean 3-Item List */}
              <div className="space-y-4 pt-6 border-t border-white/10 mb-10">
                {staffingItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <Check className="w-5 h-5 text-[#31c0de] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm sm:text-base font-bold text-white block">{item.title}</span>
                      <span className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ArrowFillButton
              href="#ai-staffing"
              btnText="Explore AI Staffing Workforce"
              size="lg"
              bgColor="#121622"
              textColor="#ffffff"
              fillBgColor="#31c0de"
              fillTextColor="#09090b"
              arrowColor="#09090b"
              hoverArrowColor="#09090b"
              className="w-full justify-center border-white/15 hover:border-cyan-500/40 shadow-lg"
            />
          </div>

        </div>

        {/* Reassurance Banner */}
        <div className="text-center max-w-3xl mx-auto bg-[#10172a]/90 border border-white/10 rounded-full py-3.5 px-6">
          <p className="text-xs sm:text-sm text-gray-300 font-medium">
            Not sure what you need? In a quick 15-minute call, we'll recommend whether you need marketing, staffing, or both.
          </p>
        </div>

      </Container>
    </Section>
  );
}


