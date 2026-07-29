import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionBenefits() {
  return (
    <Section id="benefits" className="bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brandPurple/5 to-transparent pointer-events-none" />
      <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-6 pb-2">
              What Your Business Looks Like <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-brandAccent">After MivizHub</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Stop worrying about the front desk and start focusing on the big picture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Capture Every Single Opportunity', desc: 'Every missed call is a potential lost job. Guarantee that every prospect gets an immediate, helpful response.' },
              { title: 'Cut Your Overhead Dramatically', desc: 'Get round-the-clock coverage for less than the cost of a part-time, minimum-wage employee.' },
              { title: 'Reclaim Your Time', desc: 'Stop answering the exact same five questions every day. Let the AI handle the basics so you can focus on high-value work.' },
              { title: 'Grow Without The Growing Pains', desc: 'Turn more casual inquiries into paying jobs automatically, without ever having to interview or hire more staff.' }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-base p-8 relative overflow-hidden group hover:border-brandAccent transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-3 h-3 rounded-full bg-brandAccent shadow-[0_0_10px_rgba(79,70,229,0.8)] shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-textMain mb-2">{benefit.title}</h3>
                    <p className="text-textMuted leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </Container>
    </Section>
  );
}
