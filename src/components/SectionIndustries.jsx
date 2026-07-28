import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  {
    id: 'architects',
    name: 'Architects & Designers',
    image: '/architecture_studio.png',
    challenge: 'Designers trapped answering routine client questions.',
    solution: 'AI Receptionist + AI Sales'
  },
  {
    id: 'builders',
    name: 'Builders & Contractors',
    image: '/construction_site.png',
    challenge: 'Missed calls from subcontractors and new leads while on-site.',
    solution: 'AI Support + AI Estimator'
  },
  {
    id: 'homeservice',
    name: 'Premium Home Services',
    image: '/home_service_van.png',
    challenge: 'Wasting hours scheduling and dispatching technicians manually.',
    solution: 'AI Receptionist + AI Dispatch'
  }
];

export default function SectionIndustries() {
  return (
    <section className="bg-white py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Built for service businesses.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl">
            We don't build generic AI tools. We deploy highly trained digital employees into the specific workflows of high-end service companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                <img 
                  src={ind.image} 
                  alt={ind.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">
                    {ind.name}
                  </h3>
                </div>
              </div>
              
              <div>
                <p className="text-gray-500 mb-3 text-sm font-medium uppercase tracking-wide">
                  The Challenge
                </p>
                <p className="text-gray-900 font-medium mb-6">
                  {ind.challenge}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-gray-50 border border-gray-100 text-gray-700 text-sm font-medium">
                  {ind.solution}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
