import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { Phone, MessageSquare, FileText, HelpCircle } from 'lucide-react';

const EMPLOYEES = [
  { 
    id: 'receptionist', 
    title: 'AI Receptionist', 
    icon: <Phone className="w-6 h-6" />, 
    subtitle: 'Never miss another call.',
    desc: 'Answers calls, takes detailed messages, and books appointments while you are out in the field.'
  },
  { 
    id: 'lead_qualifier', 
    title: 'AI Lead Qualifier', 
    icon: <HelpCircle className="w-6 h-6" />, 
    subtitle: 'Speak only with serious buyers.',
    desc: 'Screens new inquiries and filters out tire-kickers before they ever waste your time.'
  },
  { 
    id: 'appointment_setter', 
    title: 'AI Appointment Setter', 
    icon: <FileText className="w-6 h-6" />, 
    subtitle: 'Keep your calendar full.',
    desc: 'Follows up with interested prospects automatically and gets them committed to a consultation.'
  },
  { 
    id: 'customer_support', 
    title: 'AI Customer Support', 
    icon: <MessageSquare className="w-6 h-6" />, 
    subtitle: 'Resolve inquiries instantly.',
    desc: 'Handles basic, repetitive questions about pricing, hours, and services instantly.'
  },
  { 
    id: 'reactivation', 
    title: 'AI Reactivation Agent', 
    icon: <MessageSquare className="w-6 h-6" />, 
    subtitle: 'Turn old leads into new revenue.',
    desc: 'Quietly reaches out to old leads and previous clients to generate new business out of thin air.'
  },
  { 
    id: 'admin', 
    title: 'AI Operations Assistant', 
    icon: <HelpCircle className="w-6 h-6" />, 
    subtitle: 'Eliminate administrative bottlenecks.',
    desc: 'Automates your internal reminders, invoicing prompts, and routine paperwork workflows.'
  }
];

export default function SectionAIEmployees() {
  return (
    <Section id="employees" className="bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.1)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-6 pb-2">
            Take These Roles Off <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-[#EC4899]">Your Plate Today</span>
          </h2>
          <p className="text-lg text-textMuted leading-relaxed">
            Stop doing the busywork. We can deploy AI staff for these specific areas of your business so your human team can focus on the work that actually makes money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {EMPLOYEES.map((emp, idx) => (
            <motion.div
              key={emp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-base p-8 md:p-10 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.3)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-surface border border-surfaceBorder flex items-center justify-center text-brandAccent mb-6 group-hover:scale-110 group-hover:bg-brandAccent/10 transition-all">
                {emp.icon}
              </div>
              <h3 className="text-2xl font-bold text-textMain mb-1 group-hover:text-brandAccent transition-colors">
                {emp.title}
              </h3>
              <p className="text-brandAccent font-medium text-sm italic mb-4">{emp.subtitle}</p>
              <p className="text-textMuted leading-relaxed">
                {emp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
