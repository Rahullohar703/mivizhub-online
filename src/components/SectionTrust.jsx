import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import { HardHat, Home, Wrench, Building2, Hammer } from 'lucide-react';

export default function SectionTrust() {
  const icons = [
    { name: 'Builders', icon: <HardHat className="w-6 h-6" /> },
    { name: 'Real Estate', icon: <Home className="w-6 h-6" /> },
    { name: 'Plumbers', icon: <Wrench className="w-6 h-6" /> },
    { name: 'Commercial', icon: <Building2 className="w-6 h-6" /> },
    { name: 'Contractors', icon: <Hammer className="w-6 h-6" /> },
  ];

  return (
    <section className="py-12 bg-offWhite border-b border-gray-100">
      <Container>
        <p className="text-center text-sm font-medium text-textMuted mb-8 tracking-wide">
          TRUSTED BY LOCAL BUILDERS, CONTRACTORS, AND AGENCIES
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale">
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
