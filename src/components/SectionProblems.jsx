import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

export default function SectionProblems() {
  return (
    <Section id="problem" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-textMain leading-[1.1] mb-6">
              The true cost of <br className="hidden md:block"/> missing the phone.
            </h2>
            <p className="text-lg text-textMuted leading-relaxed">
              When you’re on a roof, talking to a client, or under a sink, you can’t answer the phone. When you don't answer, that customer simply calls the next guy on Google.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-offWhite p-12 rounded-[2rem] border border-gray-100 flex flex-col justify-center"
          >
            <div className="text-[5rem] md:text-[7rem] font-extrabold tracking-tighter text-textMain leading-none mb-4">
              42<span className="text-brandAccent">%</span>
            </div>
            <h3 className="text-xl font-semibold text-textMain mb-2">
              If you don't answer, they leave.
            </h3>
            <p className="text-textMuted leading-relaxed">
              Nearly half of all inbound sales leads will go to whichever business replies to them first. 
            </p>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
