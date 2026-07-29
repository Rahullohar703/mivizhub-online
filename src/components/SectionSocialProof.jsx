import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionSocialProof() {
  const testimonials = [
    {
      text: "MivizHub has completely changed our business. The AI Receptionist answers every call, books jobs, and handles customer questions better than our old VA. We added an extra $12,800 in monthly revenue within 60 days because we no longer miss calls. Best investment we’ve made.",
      name: "Lisa R",
      role: "Home Services"
    },
    {
      text: "Our AI Appointment Setter from MivizHub is insane. It pre-qualifies leads, schedules showings, and follows up automatically. My agents are spending their time closing, not chasing cold leads. This feels like having a 5-person inside-sales team for less than the cost of one part-timer.",
      name: "Jacob M",
      role: "Real Estate Broker"
    },
    {
      text: "I was skeptical at first… but the AI Sales Closer is real. It handles inbound leads, sends examples, answers FAQs, and books paid consultations. We saw a 37% increase in booked appointments in the first month.",
      name: "Samantha W",
      role: "MedSpa Owner"
    },
    {
      text: "Our AI Support Agent handles 80% of messages instantly, and the AI Social Media Manager posts daily. This is the future of staffing.",
      name: "Carlos & Dana",
      role: "E-Commerce Owners"
    },
    {
      text: "My AI Assistant writes emails, sends reminders, creates content, qualifies clients, and keeps my calendar full. MivizHub gave me back 15+ hours a week.",
      name: "Coach Mike",
      role: "Consultant"
    },
    {
      text: "The AI Receptionist handles new patient inquiries, insurance questions, reminders, and follow-ups. Our no-show rate dropped by 22%.",
      name: "Dr. Nina",
      role: "Dental Office"
    }
  ];

  return (
    <Section id="social-proof" className="bg-background relative border-y border-surfaceBorder">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.05),transparent_50%)] pointer-events-none" />
      <Container className="relative z-10 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-textMain mb-4 tracking-tight">TESTIMONIALS</h2>
          <p className="text-xl text-textMuted">What others are saying</p>
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
