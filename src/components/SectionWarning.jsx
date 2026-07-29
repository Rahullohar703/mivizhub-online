import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { AlertTriangle, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react';

export default function SectionWarning() {
  const advantages = [
    { title: 'It’s faster', icon: <Zap className="w-5 h-5 text-brandAccent" /> },
    { title: 'It’s more reliable', icon: <Shield className="w-5 h-5 text-brandAccent" /> },
    { title: 'It’s more scalable', icon: <TrendingUp className="w-5 h-5 text-brandAccent" /> },
    { title: 'It produces better results', icon: <CheckCircle className="w-5 h-5 text-brandAccent" /> }
  ];

  return (
    <Section id="warning" className="bg-background relative border-y border-surfaceBorder overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05),transparent_70%)] pointer-events-none" />
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="card-base p-8 md:p-16 border-red-500/20 relative bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.05)_0%,transparent_50%)]"
          >
            
            <div className="flex items-center gap-3 text-red-500 font-bold tracking-widest mb-6">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
              WARNING
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-textMain tracking-tight leading-[1.1] mb-6">
              Your Competitors Are Hiring AI Employees <span className="text-red-500">Right Now</span>
            </h2>
            
            <p className="text-lg md:text-xl text-textMuted leading-relaxed mb-6 font-medium">
              This is NOT hype. It’s happening. If your competitor installs even one AI Employee before you… <span className="text-white font-bold">they win.</span>
            </p>
            
            <p className="text-lg text-textMuted leading-relaxed mb-12">
              They answer every call. They follow up faster. They convert more leads. They reduce overhead.
            </p>
            
            <div className="pt-8 border-t border-surfaceBorder/50">
              <h3 className="text-xl font-bold text-textMain mb-6">The New Competitive Advantage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-lg font-medium text-textMain">
                    <div className="w-10 h-10 rounded-full bg-surface border border-surfaceBorder flex items-center justify-center">
                      {adv.icon}
                    </div>
                    {adv.title}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
