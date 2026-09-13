import React from 'react';
import Container from './ui/Container';

export default function SectionTrust() {
  const tools = [
    'Google Calendar',
    'Microsoft Outlook',
    'HubSpot',
    'Twilio Voice',
    'Meta Business',
    'Google Ads'
  ];

  return (
    <section className="py-10 bg-[#09090b] border-b border-white/5">
      <Container>
        <p className="text-center text-xs font-semibold text-gray-400 mb-6 tracking-wider uppercase">
          Integrates With the Tools and Platforms You Already Use
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-70">
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
