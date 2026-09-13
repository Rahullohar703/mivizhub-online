import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionHowItWorks() {
  const steps = [
    {
      num: "1",
      title: "15-Minute Intro Call",
      desc: "We learn about your business, your services, and how you want your phone answered. No technical questions."
    },
    {
      num: "2",
      title: "We Build Everything For You",
      desc: "We build your marketing campaigns, train your AI receptionist, and connect your calendar. Zero work for you."
    },
    {
      num: "3",
      title: "Your Phone Rings & Jobs Get Booked",
      desc: "Leads come in, your AI assistant answers every call in 1 ring, and appointments show up on your schedule."
    }
  ];

  return (
    <Section id="how-it-works" className="py-20 bg-transparent border-t border-white/10 relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-indigo-500/8 blur-[140px] rounded-full pointer-events-none -z-10" />

      <Container className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            How Getting Started Works
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto">
            You don't need any technical skills. We handle 100% of the setup, training, and ongoing management.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="card-base p-7 flex flex-col justify-between hover:border-white/30 transition-all relative group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#31c0de] font-bold flex items-center justify-center text-lg mb-6 shadow-inner group-hover:border-[#31c0de]/40 group-hover:text-white transition-colors">
                  0{step.num}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-xs font-semibold text-gray-400">
                Step 0{idx + 1} of 03 • Done For You
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}

