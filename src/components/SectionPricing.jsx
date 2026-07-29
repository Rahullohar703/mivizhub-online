import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';
import { Check } from 'lucide-react';

export default function SectionPricing({ onOpenBooking }) {
  return (
    <Section id="pricing" className="bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.15)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-6 pb-2">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-brandAccent to-brandPurple">Pricing</span>
          </h2>
          <p className="text-lg text-textMuted leading-relaxed">
            Get 24/7 coverage from an AI Employee for a fraction of what a human costs. No hidden fees. No HR headaches.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto card-base p-10 md:p-16 text-center border-brandAccent shadow-[0_0_30px_rgba(79,70,229,0.2)] relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.5)_0,transparent_70%)]" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-textMain mb-4">Tailored to Your Business</h3>
            <p className="text-xl text-textMuted leading-relaxed max-w-2xl mx-auto mb-10">
              Every business is different, so we tailor your AI Workforce to your call volume, workflows, and goals. Book a strategy call and we'll recommend the right setup—without any obligation.
            </p>
            <Button onClick={onOpenBooking} variant="primary" className="text-lg px-8 py-5 font-bold tracking-wide">
              Book a Free AI Workforce Strategy Call
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
