import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { Phone, MessageSquare, FileText, HelpCircle } from 'lucide-react';

const EMPLOYEES = [
  { 
    id: 'receptionist', 
    title: 'INGRID - AI Receptionist', 
    icon: <Phone className="w-6 h-6" />, 
    desc: 'Handles inbound calls, answers questions, routes callers, and books appointments instantly.'
  },
  { 
    id: 'website', 
    title: 'VERA - AI Website Assistant', 
    icon: <FileText className="w-6 h-6" />, 
    desc: 'Engages visitors, answers questions, captures leads, recommends services, and guides navigation.'
  },
  { 
    id: 'sales', 
    title: 'SEAN - AI Sales Rep', 
    icon: <MessageSquare className="w-6 h-6" />, 
    desc: 'Engages new leads instantly, presents offers, handles objections, and drives deals forward.'
  },
  { 
    id: 'admin', 
    title: 'CARTER - AI Admin / Ops', 
    icon: <HelpCircle className="w-6 h-6" />, 
    desc: 'Automates onboarding, HR tasks, reminders, and workflows to keep operations running smoothly.'
  }
];

export default function SectionAIEmployees() {
  return (
    <Section id="employees" className="bg-offWhite">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-textMain leading-[1.1] mb-6">
            Top Roles AI Employees Replace
          </h2>
          <p className="text-lg text-textMuted leading-relaxed">
            These AI Employees do the work of multiple human workers — instantly and flawlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {EMPLOYEES.map((emp, idx) => (
            <motion.div
              key={emp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-base p-8 md:p-10 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-brandBlack mb-6">
                {emp.icon}
              </div>
              <h3 className="text-2xl font-bold text-textMain mb-3">
                {emp.title}
              </h3>
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
