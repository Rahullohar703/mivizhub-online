import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { Bot, Settings } from 'lucide-react';

export default function SectionServices() {
  return (
    <Section id="services" className="py-24 bg-surface/50 border-y border-surfaceBorder relative">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-textMain">
            Choose How You Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Service One */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background border border-surfaceBorder rounded-3xl p-10 hover:border-brandPurple/50 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-brandPurple group-hover:scale-110 transition-transform duration-500">
              <Bot className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
              <div className="text-sm font-bold tracking-widest text-[#00F0FF] uppercase mb-4">Service One</div>
              <h3 className="text-3xl font-bold text-textMain mb-4">Hire Ready-to-Deploy AI Employees</h3>
              <p className="text-lg text-textMuted mb-8">
                Choose from our library of specialized AI Employees. Deploy in days.
              </p>
              
              <div className="space-y-3 mb-8">
                {['AI Receptionist', 'AI Sales Assistant', 'AI Customer Support', 'AI Follow-up Assistant'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-medium text-textMain">
                    <div className="w-1.5 h-1.5 rounded-full bg-brandPurple" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="font-bold text-[#00F0FF]">Deploy in days.</p>
            </div>
          </motion.div>

          {/* Service Two */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background border border-surfaceBorder rounded-3xl p-10 hover:border-[#EC4899]/50 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-[#EC4899] group-hover:rotate-12 transition-transform duration-500">
              <Settings className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <div className="text-sm font-bold tracking-widest text-[#EC4899] uppercase mb-4">Service Two</div>
              <h3 className="text-3xl font-bold text-textMain mb-4">Build a Custom AI Workforce</h3>
              <p className="text-lg text-textMuted mb-8">
                Need something unique? We'll build AI Employees specifically for your business workflows.
              </p>
              
              <div className="space-y-3 mb-8">
                {['Custom integrations.', 'Custom logic.', 'Custom automations.', 'Completely managed.'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-medium text-textMain">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
