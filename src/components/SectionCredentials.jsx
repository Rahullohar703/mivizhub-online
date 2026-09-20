import React from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { UserCheck, FileText, Phone, Shield, Wrench } from 'lucide-react';

export default function SectionCredentials() {
  const points = [
    { 
      title: "Real Human Account Support", 
      desc: "You get a dedicated account manager you can call or text whenever you need adjustments.",
      icon: <UserCheck className="w-5 h-5 text-[#31c0de]" />
    },
    { 
      title: "Keep Your Existing Phone Number", 
      desc: "Zero disruption to your clients. We plug directly into your current business line or forward missed calls.",
      icon: <Phone className="w-5 h-5 text-[#31c0de]" />
    },
    { 
      title: "Clear Monthly Reports", 
      desc: "Simple, honest summaries of calls answered, leads generated, and appointments booked.",
      icon: <FileText className="w-5 h-5 text-[#31c0de]" />
    },
    { 
      title: "Safe, Secure & Private", 
      desc: "Your client lists and customer records are completely protected, private, and never shared.",
      icon: <Shield className="w-5 h-5 text-[#31c0de]" />
    },
    { 
      title: "Done-For-You Maintenance", 
      desc: "We update pricing, service packages, and calendar availability whenever your business changes.",
      icon: <Wrench className="w-5 h-5 text-[#31c0de]" />
    }
  ];

  return (
    <Section id="credentials" className="py-16 bg-[#0c0c10] border-t border-white/10">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Peace of Mind
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            A True Partner, Not Just a Software Tool
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            We don't hand you a login and expect you to figure it out. We do the heavy lifting for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {points.map((pt, idx) => (
            <div key={idx} className="bg-[#121216] border border-white/10 rounded-2xl p-7 flex items-start gap-5 shadow-lg hover:border-[#31c0de]/40 transition-colors">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                {pt.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{pt.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

