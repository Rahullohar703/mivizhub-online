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
    id: 'social', 
    title: 'SOFI - AI Social Media Manager', 
    icon: <MessageSquare className="w-6 h-6" />, 
    desc: 'Replies automatically to Instagram, Facebook comments & DMs to capture every lead.'
  },
  { 
    id: 'admin', 
    title: 'CARTER - AI Admin / Ops', 
    icon: <HelpCircle className="w-6 h-6" />, 
    desc: 'Automates onboarding, HR tasks, reminders, and workflows to keep operations running smoothly.'
  },
  { 
    id: 'customer_service', 
    title: 'HOLLY - AI Customer Service', 
    icon: <HelpCircle className="w-6 h-6" />, 
    desc: 'Manages support conversations, resolves issues, escalates cases, and updates statuses 24/7.'
  },
  { 
    id: 'recruiter', 
    title: 'NOVA - AI Recruiter', 
    icon: <FileText className="w-6 h-6" />, 
    desc: 'Screens applicants, collects resumes, and pre-qualifies candidates in your hiring pipelines.'
  },
  { 
    id: 'reputation', 
    title: 'RIO - AI Reputation Manager', 
    icon: <MessageSquare className="w-6 h-6" />, 
    desc: 'Monitors reviews, auto-replies, and requests new ratings to boost your online presence.'
  },
  { 
    id: 'lead_qualifier', 
    title: 'ZANE - AI Lead Qualifier', 
    icon: <HelpCircle className="w-6 h-6" />, 
    desc: 'Asks screening questions, scores leads, tags them, and moves them through the pipeline.'
  }
];

export default function SectionAIEmployees() {
  return (
    <Section id="employees" className="bg-background relative border-t border-surfaceBorder">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.1)_0%,transparent_50%)] pointer-events-none" />
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-textMain leading-[1.1] mb-6">
            Top Roles AI Employees Replace
          </h2>
          <p className="text-lg text-textMuted leading-relaxed">
            These AI Employees do the work of multiple human workers — instantly and flawlessly.
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
              <h3 className="text-2xl font-bold text-textMain mb-3 group-hover:text-brandAccent transition-colors">
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
