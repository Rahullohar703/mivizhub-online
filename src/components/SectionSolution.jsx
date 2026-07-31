import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionSolution() {
  return (
    <Section id="solution" className="bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.1),transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-6 pb-2">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandPurple">MivizHub?</span>
          </h2>
          <p className="text-xl text-textMuted leading-relaxed">
            We don't hand you a software login and wish you luck. We build, train, and deploy your AI employee for you.
          </p>
        </motion.div>

        {/* Minimal transition graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto card-base flex flex-col items-center justify-center relative overflow-hidden group bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_60%)] py-12 md:py-16 px-6"
        >
          <div className="text-center relative z-10 w-full max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gradient-dark mb-8"><span className="text-brandAccent">★</span> The Done For You Advantage</h3>
            <ul className="text-left text-textMain font-medium tracking-wide space-y-4 inline-block text-lg">
              <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent text-sm font-bold">✓</div> Custom built for your specific business rules</li>
              <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent text-sm font-bold">✓</div> Integrates directly with your existing calendar and CRM</li>
              <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent text-sm font-bold">✓</div> Fully managed, hosted, and optimized by our team</li>
              <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent text-sm font-bold">✓</div> No complex tech for you to learn or manage</li>
              <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent text-sm font-bold">✓</div> Immediate deployment without the steep learning curve</li>
            </ul>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
}
