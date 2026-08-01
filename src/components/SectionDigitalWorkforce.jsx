import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionDigitalWorkforce() {
  return (
    <Section id="digital-workforce" className="py-24 bg-surface/50 border-y border-surfaceBorder relative">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brandPurple font-bold tracking-wide uppercase mb-4">Digital Workforce as a Service</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-textMain mb-8 leading-tight">
              Instead of hiring one employee,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-brandPurple">hire an entire AI workforce.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-textMuted leading-relaxed mb-12"
          >
            We <span className="text-textMain font-semibold">build</span>, <span className="text-textMain font-semibold">train</span>, <span className="text-textMain font-semibold">deploy</span>, <span className="text-textMain font-semibold">manage</span>, <span className="text-textMain font-semibold">monitor</span>, and continuously improve AI Employees that work alongside your team.
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg font-medium text-textMain">
            {[
              "No software to learn.",
              "No hiring headaches.",
              "No ongoing management."
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                className="bg-background/80 p-6 rounded-xl border border-surfaceBorder shadow-sm"
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
