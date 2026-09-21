import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { ArrowFillButton } from '../ui/arrow-fill-button';
import { ArrowRight, Bot, PhoneCall, Calendar, MessageSquare, Search, FileText } from 'lucide-react';

export default function GrowthAIBridge() {
  const repetitiveTasks = [
    { title: "Responding to inquiries", icon: MessageSquare },
    { title: "Following up with leads", icon: PhoneCall },
    { title: "Answering repetitive questions", icon: MessageSquare },
    { title: "Booking appointments", icon: Calendar },
    { title: "Researching information", icon: Search },
    { title: "Managing routine operations", icon: FileText },
  ];

  return (
    <Section className="py-20 bg-[#09090b] border-t border-white/10">
      <Container>
        
        {/* Visual Transition Badge: GROW → AUTOMATE */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-wider">
            <span className="text-[#31c0de] font-bold">STAGE 02: GROW</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-indigo-400 font-bold">STAGE 03: AUTOMATE</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            More Leads. More Work. Now What?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Once your business starts generating more opportunities, repetitive work starts piling up.
          </p>
        </div>

        {/* Workload Tasks Piling Up Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-4xl mx-auto mb-14">
          {repetitiveTasks.map((t) => {
            const Icon = t.icon;
            return (
              <div 
                key={t.title}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#121216] border border-white/10 shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-200 font-medium">{t.title}</span>
              </div>
            );
          })}
        </div>

        {/* Solution Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#121216] border border-indigo-500/30 p-8 sm:p-12 text-center shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto mb-5 shadow-inner">
            <Bot className="w-7 h-7" />
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            That's where Mivizhub AI Workforce comes in.
          </h3>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-8 font-normal">
            Generate demand with Growth. Automate the work behind it with AI.
          </p>

          <ArrowFillButton
            btnText="Explore AI Workforce"
            href="/"
            bgColor="#10141e"
            textColor="#ffffff"
            fillBgColor="#4F46E5"
            fillTextColor="#ffffff"
            arrowColor="#ffffff"
            hoverArrowColor="#ffffff"
            className="border-indigo-500/30 shadow-lg shadow-indigo-600/25"
          />
        </div>

      </Container>
    </Section>
  );
}
