import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionCaseStudies() {
  const caseStudies = [
    {
      industry: "Construction Company",
      problem: "Missed enquiries during busy site hours",
      solution: "AI Receptionist",
      results: [
        "+43% faster response time",
        "+28% more booked consultations"
      ]
    },
    {
      industry: "Healthcare Clinic",
      problem: "High call volume causing long hold times",
      solution: "AI Appointment Coordinator",
      results: [
        "Zero hold times for patients",
        "40% reduction in admin workload"
      ]
    },
    {
      industry: "Mortgage Brokerage",
      problem: "Incomplete applications and cold leads",
      solution: "AI Follow-up Specialist",
      results: [
        "35% increase in completed apps",
        "Higher conversion from cold leads"
      ]
    }
  ];

  return (
    <Section id="case-studies" className="py-24 bg-surface/30">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-textMain">
            Proven Results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background border border-surfaceBorder rounded-2xl p-8 hover:border-brandPurple/50 transition-colors shadow-sm"
            >
              <div className="text-sm font-bold tracking-widest text-brandPurple uppercase mb-6">{study.industry}</div>
              
              <div className="mb-6">
                <div className="text-sm text-textMuted font-semibold mb-1 uppercase tracking-wide">Problem</div>
                <div className="text-textMain font-medium">{study.problem}</div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-textMuted font-semibold mb-1 uppercase tracking-wide">Solution</div>
                <div className="text-textMain font-bold">{study.solution}</div>
              </div>
              
              <div>
                <div className="text-sm text-textMuted font-semibold mb-2 uppercase tracking-wide">Results</div>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-green-500 font-medium">
                      <span className="mt-0.5">↑</span> {result}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
