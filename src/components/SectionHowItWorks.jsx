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
    <Section id="how-it-works" className="py-20 bg-[#0c0c10] border-t border-white/10">
      <Container>
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            How Getting Started Works
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
            You don't need any technical skills. We handle 100% of the setup, training, and ongoing management.
          </p>
        </div>

        {/* 3 Step Cards - Wide & Expansive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#121216] border border-white/10 rounded-3xl p-8 sm:p-9 flex flex-col justify-between hover:border-[#31c0de]/40 transition-all shadow-xl"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-[#31c0de] font-mono font-bold flex items-center justify-center text-2xl mb-6 shadow-md">
                  0{step.num}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-xs sm:text-sm font-semibold text-gray-400">
                Step 0{idx + 1} of 03 • Done For You
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}

