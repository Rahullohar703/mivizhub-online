import React from 'react';
import Container from './ui/Container';
import { Calendar, Mail, Database, Phone, Share2, Search } from 'lucide-react';

export default function SectionTrust() {
  const tools = [
    { name: 'Google Calendar', icon: <Calendar className="w-3.5 h-3.5 text-blue-400" /> },
    { name: 'Microsoft Outlook', icon: <Mail className="w-3.5 h-3.5 text-cyan-400" /> },
    { name: 'HubSpot & CRMs', icon: <Database className="w-3.5 h-3.5 text-amber-400" /> },
    { name: 'Twilio Voice Lines', icon: <Phone className="w-3.5 h-3.5 text-rose-400" /> },
    { name: 'Meta Business Ads', icon: <Share2 className="w-3.5 h-3.5 text-indigo-400" /> },
    { name: 'Google Search & Maps', icon: <Search className="w-3.5 h-3.5 text-emerald-400" /> }
  ];

  return (
    <section className="py-8 bg-transparent border-y border-white/5 relative z-10">
      <Container>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#31c0de] animate-ping" />
          <p className="text-center text-xs font-semibold text-gray-400 tracking-wider uppercase">
            Plugs Seamlessly Into Your Existing Tools & Phone Lines
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
          {tools.map((tool, idx) => (
            <div 
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all text-xs sm:text-sm font-medium text-gray-200 shadow-sm"
            >
              {tool.icon}
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
