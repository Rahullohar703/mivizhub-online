import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Store, Home, User } from 'lucide-react';

const AUDIENCES = [
  {
    id: 'local-service',
    title: 'Local Service Businesses',
    description: 'Plumbers, Roofers, HVAC, and Electricians. Stop losing jobs because you were on a roof and couldn\'t answer the phone.',
    icon: <Wrench className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 'mom-pop',
    title: 'Mom & Pop Shops',
    description: 'Local retail and storefronts. Compete with the big guys by giving your customers instant answers 24/7.',
    icon: <Store className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 'home-service',
    title: 'Home Services',
    description: 'Landscaping, Cleaning, and Pest Control. Automatically text back new leads while you are busy working.',
    icon: <Home className="w-8 h-8 text-blue-400" />,
  },
  {
    id: 'solo',
    title: 'Solo Operators',
    description: 'Contractors working alone. Get the power of a full-time office staff without paying a single salary.',
    icon: <User className="w-8 h-8 text-blue-400" />,
  }
];

export default function SectionAudience() {
  return (
    <section id="audience" className="bg-darkBg py-16 lg:py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-electricBlue/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-electricBlue mb-3 block">
            Who We Help
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-blue-400">Local Businesses</span>
          </h2>
          <p className="text-lg text-gray-400 font-normal leading-relaxed">
            Whether you are a one-person operation or have a whole crew, our systems take the busywork off your plate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((audience, idx) => (
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-cardBg border border-white/10 rounded-2xl p-8 hover:border-electricBlue/50 hover:bg-gray-900 transition-all duration-300 group shadow-lg"
            >
              <div className="w-16 h-16 rounded-2xl bg-electricBlue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
