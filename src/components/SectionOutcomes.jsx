import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { Check } from 'lucide-react';

export default function SectionOutcomes() {
  const outcomes = [
    {
      stat: "100%",
      label: "Zero Missed Calls",
      headline: "Every customer gets answered on the 1st ring.",
      desc: "Whether a customer calls at 2 PM or 10 PM on a Saturday, they get a polite, helpful assistant that takes down details and books their appointment."
    },
    {
      stat: "< 60s",
      label: "Speed to Lead",
      headline: "Beat your competitors to the punch.",
      desc: "Web and social inquiries get an immediate phone call or text confirmation within 60 seconds, securing the customer before they look elsewhere."
    },
    {
      stat: "15+ hrs",
      label: "Time Saved Every Week",
      headline: "Stop doing late-night office work.",
      desc: "No more playing phone tag, texting back and forth for dates, or manual appointment coordination. Your calendar fills up automatically."
    },
    {
      stat: "70%",
      label: "Lower Overhead",
      headline: "Grow without massive hiring costs.",
      desc: "Get 24/7 front-office coverage and a steady pipeline of customer inquiries for a fraction of what a single full-time employee costs."
    }
  ];

  return (
    <Section id="outcomes" className="py-20 bg-[#09090b] border-t border-white/10">
      <Container>
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            The Measurable Results
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            What Happens When You Fix Marketing and Staffing Together?
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Real, measurable improvements you will see in your business within the first 30 days.
          </p>
        </div>

        {/* 4 Outcome Cards Grid with Big Clear Stats - Wide & Expansive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121216] border border-white/10 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#31c0de]/40 transition-colors shadow-xl"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#31c0de] mb-1 tracking-tight">
                  {item.stat}
                </div>
                <div className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-4">
                  {item.label}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 leading-snug">
                  {item.headline}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}

