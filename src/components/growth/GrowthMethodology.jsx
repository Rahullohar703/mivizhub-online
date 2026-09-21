import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { Compass, Hammer, Magnet, CheckCircle, LineChart, ArrowDown } from 'lucide-react';

export default function GrowthMethodology() {
  const stages = [
    {
      num: "01",
      title: "UNDERSTAND",
      icon: Compass,
      elements: ["Business", "Audience", "Market", "Competitors"],
      accent: "#60a5fa"
    },
    {
      num: "02",
      title: "BUILD",
      icon: Hammer,
      elements: ["Website", "SEO", "Google", "Content", "Social"],
      accent: "#31c0de"
    },
    {
      num: "03",
      title: "ATTRACT",
      icon: Magnet,
      elements: ["Search", "Social", "Content", "Ads"],
      accent: "#2dd4bf"
    },
    {
      num: "04",
      title: "CONVERT",
      icon: CheckCircle,
      elements: ["Landing Pages", "Forms", "WhatsApp", "Follow-Up"],
      accent: "#818cf8"
    },
    {
      num: "05",
      title: "OPTIMIZE",
      icon: LineChart,
      elements: ["Data", "Insights", "Improvements", "Growth"],
      accent: "#34d399"
    }
  ];

  return (
    <Section id="methodology" className="py-20 bg-[#09090b] border-t border-white/10">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            The Delivery Framework
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            One System. From Visibility to Opportunity.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            A cohesive continuous cycle turning cold audience curiosity into warm commercial relationships.
          </p>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Pipeline Flow */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-[58px] left-[10%] right-[10%] h-[2px] bg-white/10 -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isLast = idx === stages.length - 1;

              return (
                <div key={stage.title} className="flex flex-col relative group">
                  
                  {/* Card Container matching Home style */}
                  <div className="h-full rounded-2xl bg-[#121216] border border-white/10 hover:border-white/20 p-6 flex flex-col justify-between transition-colors shadow-xl">
                    
                    <div>
                      {/* Top Step + Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-gray-400 font-bold bg-white/5 px-2.5 py-1 rounded">
                          {stage.num}
                        </span>
                        <div 
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                          style={{ color: stage.accent }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-4 tracking-wide">
                        {stage.title}
                      </h3>

                      {/* Elements Chain */}
                      <div className="space-y-2">
                        {stage.elements.map((elem) => (
                          <div 
                            key={elem}
                            className="flex items-center gap-2 text-xs text-gray-200 font-semibold py-1.5 px-2.5 rounded-lg bg-[#18181f] border border-white/5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stage.accent }} />
                            <span>{elem}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/10 text-xs font-mono text-gray-400 flex items-center justify-between font-medium">
                      <span>Phase {stage.num}</span>
                      <span className="text-[#31c0de] font-bold">Active</span>
                    </div>

                  </div>

                  {/* Mobile Down Arrow Connector */}
                  {!isLast && (
                    <div className="lg:hidden flex justify-center py-2 text-[#31c0de]/60">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </Container>
    </Section>
  );
}
