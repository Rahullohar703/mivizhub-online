import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionBenefits() {
  return (
    <Section id="benefits" className="bg-[#111111] text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Why AI Staffing?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Staffing agencies and recruiters hate us because we eliminate their fees. Business owners love us because we save them a ton of money and help them scale.
            </p>
            <ul className="space-y-4">
              {[
                '24/7 Availability: Your Al workforce never sleeps',
                'Instant Responses: Engage leads immediately',
                'Zero Payroll Issues: No HR drama',
                'Scales Instantly: Handle 10x volume easily',
                'High ROI: Costs pennies on the dollar',
                'No Human Error: Consistent execution'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-[#161616] border border-gray-800 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0,transparent_70%)]" />
            <div className="relative z-10">
              <div className="text-[3rem] font-extrabold tracking-tighter mb-2">
                70-90%
              </div>
              <p className="text-xl text-gray-400 font-medium">
                Cheaper than human staff.
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
