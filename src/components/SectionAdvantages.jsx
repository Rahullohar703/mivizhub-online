import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { Clock, Zap, BrainCircuit, TrendingUp, PiggyBank, HeartHandshake } from 'lucide-react';

export default function SectionAdvantages() {
  const advantages = [
    {
      title: "Work 24/7",
      icon: <Clock className="w-8 h-8 text-[#00F0FF]" />,
      description: "Always on, never takes a break."
    },
    {
      title: "Respond instantly",
      icon: <Zap className="w-8 h-8 text-brandPurple" />,
      description: "Zero wait times for your customers."
    },
    {
      title: "Never forget a task",
      icon: <BrainCircuit className="w-8 h-8 text-[#EC4899]" />,
      description: "Flawless execution every single time."
    },
    {
      title: "Scale without hiring",
      icon: <TrendingUp className="w-8 h-8 text-[#00F0FF]" />,
      description: "Handle more volume instantly."
    },
    {
      title: "Reduce operating costs",
      icon: <PiggyBank className="w-8 h-8 text-brandPurple" />,
      description: "A fraction of standard payroll."
    },
    {
      title: "Improve customer experience",
      icon: <HeartHandshake className="w-8 h-8 text-[#EC4899]" />,
      description: "Fast, accurate, and always polite."
    }
  ];

  return (
    <Section id="advantages" className="py-24 bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-textMain">
            Why Businesses Choose AI Employees
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface/30 p-8 rounded-2xl border border-surfaceBorder hover:border-brandPurple/30 hover:bg-surface/50 transition-all group"
            >
              <div className="mb-6 p-4 bg-background rounded-xl inline-block group-hover:scale-110 transition-transform shadow-sm">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-textMain mb-3">{adv.title}</h3>
              <p className="text-textMuted">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
