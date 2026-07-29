import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionSocialProof() {
  const testimonials = [
    {
      text: "[INSERT REAL TESTIMONIAL 1: Focus on time saved or a specific outcome, e.g., 'The AI booked 5 jobs while I was sleeping...']",
      name: "Client Name",
      role: "Industry"
    },
    {
      text: "[INSERT REAL TESTIMONIAL 2: Focus on reduced stress, e.g., 'I don't have to constantly check my phone on the job site anymore...']",
      name: "Client Name",
      role: "Industry"
    },
    {
      text: "[INSERT REAL TESTIMONIAL 3: Focus on overhead savings or hiring relief, e.g., 'We canceled our job listing for a receptionist immediately...']",
      name: "Client Name",
      role: "Industry"
    }
  ];

  return (
    <Section id="social-proof" className="bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.05),transparent_50%)] pointer-events-none" />
      <Container className="relative z-10 text-center">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 pb-2">
            Hear From Business Owners <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-brandAccent">Like You</span>
          </h2>
          <p className="text-xl text-textMuted">Real relief from companies using MivizHub AI Employees to simplify their operations.</p>
          <p className="text-sm text-brandAccent/60 italic mt-4">(Note: Replace these with actual client testimonials before launch)</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-base p-8 flex flex-col text-left group"
            >
              <div className="text-brandAccent/40 mb-6 group-hover:text-brandAccent transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-textMain font-medium mb-8 flex-grow">
                "{t.text}"
              </p>
              <div>
                <div className="font-bold text-textMain">{t.name}</div>
                <div className="text-sm text-textMuted">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
