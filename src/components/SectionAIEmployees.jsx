import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { Phone, MessageSquare, FileText, HelpCircle } from 'lucide-react';

const EMPLOYEES = [
  { 
    id: 'receptionist', 
    title: 'The Phone Answerer', 
    icon: <Phone className="w-6 h-6" />, 
    desc: 'Answers 24/7, takes messages, and books jobs directly on your calendar.'
  },
  { 
    id: 'estimator', 
    title: 'The Fast Quoter', 
    icon: <FileText className="w-6 h-6" />, 
    desc: 'Reads job details from customers and creates accurate quotes in seconds.'
  },
  { 
    id: 'sales', 
    title: 'The Text Replier', 
    icon: <MessageSquare className="w-6 h-6" />, 
    desc: 'Instantly texts back website leads so they don\'t hire your competitor.'
  },
  { 
    id: 'support', 
    title: 'The Customer Helper', 
    icon: <HelpCircle className="w-6 h-6" />, 
    desc: 'Answers simple questions ("Are you open?") automatically.'
  }
];

export default function SectionAIEmployees() {
  return (
    <Section id="employees" className="bg-offWhite">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-textMain leading-[1.1] mb-6">
            Meet your new team.
          </h2>
          <p className="text-lg text-textMuted leading-relaxed">
            Choose the help you need. We handle all the training and setup.
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
