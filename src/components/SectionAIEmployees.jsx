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
    subtitle: 'Answers every enquiry, routes calls, and books appointments.',
    desc: 'Never miss another call while you are out in the field.'
  },
  { 
    id: 'sales_coordinator', 
    title: 'AI Sales Coordinator', 
    icon: <HelpCircle className="w-6 h-6" />, 
    subtitle: 'Follows up with prospects, schedules meetings, and keeps opportunities moving.',
    desc: 'Systematically nurtures your leads so your pipeline stays full.'
  },
  { 
    id: 'estimation_assistant', 
    title: 'AI Estimation Assistant', 
    icon: <FileText className="w-6 h-6" />, 
    subtitle: 'Collects project information, qualifies enquiries, and prepares your team before consultations.',
    desc: 'Speeds up your quoting process by gathering scope upfront.'
  },
  { 
    id: 'customer_support', 
    title: 'AI Customer Support', 
    icon: <MessageSquare className="w-6 h-6" />, 
    subtitle: 'Answers common questions, shares project updates, and handles routine customer communication.',
    desc: 'Provides 24/7 support without taking up your team\'s time.'
  },
  { 
    id: 'operations_coordinator', 
    title: 'AI Operations Coordinator', 
    icon: <FileText className="w-6 h-6" />, 
    subtitle: 'Organizes internal requests, reminders, and recurring administrative tasks.',
    desc: 'Eliminates administrative bottlenecks and keeps your back-office running smoothly.'
  },
  { 
    id: 'project_coordinator', 
    title: 'AI Project Coordinator', 
    icon: <MessageSquare className="w-6 h-6" />, 
    subtitle: 'Keeps clients informed, schedules inspections or site visits, and manages communication between teams.',
    desc: 'Ensures everyone is on the same page from kickoff to handover.'
  }
];

export default function SectionAIEmployees() {
  return (
    <Section id="employees" className="bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.1)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[11px] uppercase tracking-[0.18em] mb-3 text-brandAccent">
            YOUR AI WORKFORCE · CONSTRUCTION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-6 pb-2">
            9 Departments.<br className="sm:hidden"/> 110 AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPurple to-[#EC4899]">Employees.</span>
          </h2>
          <p className="text-lg text-textMuted leading-relaxed">
            Without a single new hire. We deploy purpose-built AI agents into your construction business to run lead qualification, scheduling, customer support, and operations. Continuously. Automatically.
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
