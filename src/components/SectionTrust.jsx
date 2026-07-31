import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import { HardHat, Home, Wrench, Building2, Hammer } from 'lucide-react';

export default function SectionTrust() {
  const icons = [
    { name: 'General Contractors', icon: <HardHat className="w-6 h-6" /> },
    { name: 'Real Estate', icon: <Home className="w-6 h-6" /> },
    { name: 'Commercial', icon: <Building2 className="w-6 h-6" /> },
    { name: 'Construction', icon: <Hammer className="w-6 h-6" /> },
  ];

  return (
    <section className="py-12 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.05),transparent_50%)] pointer-events-none" />
      <Container>
        <p className="text-center text-sm font-medium text-textMuted mb-8 tracking-wide">
          trusted by enterprises xyz
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60">
          {icons.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex items-center gap-2 text-gray-500"
            >
              {item.icon}
              <span className="font-heading font-bold text-lg">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
