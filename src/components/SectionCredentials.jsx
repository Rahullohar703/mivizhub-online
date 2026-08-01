import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { ShieldCheck, Server, UserCheck, RefreshCw, Layers } from 'lucide-react';

export default function SectionCredentials() {
  const credentials = [
    { name: "Built with Enterprise AI", icon: <Server className="w-6 h-6 text-brandPurple" /> },
    { name: "Secure Infrastructure", icon: <ShieldCheck className="w-6 h-6 text-[#00F0FF]" /> },
    { name: "Human Oversight", icon: <UserCheck className="w-6 h-6 text-[#EC4899]" /> },
    { name: "Continuous Optimization", icon: <RefreshCw className="w-6 h-6 text-brandPurple" /> },
    { name: "CRM Integrations", icon: <Layers className="w-6 h-6 text-[#00F0FF]" /> }
  ];

  return (
    <Section id="credentials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.03),transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-textMain">
            Why Businesses Trust MivizHub
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-4 bg-surface/40 px-6 py-4 rounded-xl border border-surfaceBorder hover:border-brandPurple/30 transition-colors shadow-sm"
            >
              {cred.icon}
              <span className="text-lg font-bold text-textMain">{cred.name}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
