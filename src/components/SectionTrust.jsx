import React from 'react';
import Container from './ui/Container';

export default function SectionTrust() {
  const tools = [
    'Google Maps & Local SEO',
    'Google Ads',
    'Meta Business',
    'Jobber',
    'Housecall Pro',
    'ServiceTitan',
    'Procore',
    'Twilio Voice'
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-[#080b12] to-[#0a0f1d] border-b border-white/5">
      <Container>
        <p className="text-center text-xs font-semibold text-gray-400 mb-6 tracking-wider uppercase">
          Seamlessly Integrates With Leading Contractor &amp; Field Operations Tools
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-70">
          {tools.map((name, idx) => (
            <div 
              key={idx}
              className="text-gray-300 font-semibold text-sm md:text-base tracking-tight"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
