import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';
import { Check } from 'lucide-react';

export default function SectionPricing({ onOpenBooking }) {
  const plans = [
    {
      name: 'Starter Plan',
      desc: 'Perfect for getting started',
      setup: '$575 Setup',
      price: '$275',
      period: '/month',
      employees: '5 AI Employees',
      features: [
        'AI Inbound Receptionist',
        'AI Email Manager',
        'AI Chat Assistant',
        'AI Appointment Setter',
        'AI Lead Qualification Specialist',
        '+ 13 more AI Employees'
      ],
      crmTitle: 'CRM Features Included:',
      crmFeatures: [
        'Core CRM functionality',
        'Unlimited users',
        'Unified conversation inbox',
        'Opportunity & pipeline management',
        'Unlimited calendars & booking links',
        'Funnels & website builder',
        'Marketing automation workflows',
        'Forms & surveys',
        'Email & chat support'
      ],
      setupTime: 'Setup time: 3–5 business days',
      popular: false
    },
    {
      name: 'Growth Plan',
      desc: 'For scaling businesses',
      setup: '$775 Setup',
      price: '$475',
      period: '/month',
      employees: '12 AI Employees',
      features: [
        'Everything in Starter',
        'AI Outbound Agent',
        'AI Review Manager',
        'AI Social DM Assistant',
        'AI Customer Support Agent',
        'AI Recruitment Assistant',
        'AI Website Assistant',
        '+ 13 more AI Employees'
      ],
      crmTitle: 'CRM Features Included:',
      crmFeatures: [
        'Everything in Starter',
        'Advanced automation workflows',
        'Power Dialer',
        'Marketing campaigns',
        'Social Media Manager',
        'Invoices & estimates',
        'Products & payments',
        'Priority support'
      ],
      setupTime: 'Setup time: 5–6 business days',
      popular: true
    },
    {
      name: 'Custom Plan',
      desc: 'Enterprise solution',
      setup: '$1275 Setup',
      price: '$975',
      period: '/month',
      employees: '18 AI Employees',
      features: [
        'ALL AI Employees Included',
        'Voice Agents (Inbound & Outbound)',
        'AI Sales Representative',
        'AI Operations Coordinator',
        'AI Reputation Manager',
        '+ 13 more AI Employees'
      ],
      crmTitle: 'CRM Features Included:',
      crmFeatures: [
        'Everything in Growth',
        'Advanced marketing system',
        'Full automation suite',
        'Priority support access',
        'Weekly strategy calls',
        'Team training sessions',
        'Dedicated support',
        'Custom integrations'
      ],
      setupTime: 'Setup time: Discussed on strategy call',
      popular: false
    }
  ];

  return (
    <Section id="pricing" className="bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-textMain mb-6">
            Hire AI Employees That Scale With You
          </h2>
          <p className="text-lg text-textMuted leading-relaxed">
            Choose a plan that fits your business today and scale effortlessly with AI employees that work 24/7 at a fraction of traditional staffing costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative bg-offWhite p-8 rounded-[2rem] border ${plan.popular ? 'border-textMain shadow-2xl scale-105' : 'border-gray-200'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-textMain text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-textMain mb-2">{plan.name}</h3>
                <p className="text-textMuted mb-6">{plan.desc}</p>
                <div className="text-sm font-bold text-textMain mb-2">{plan.setup}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-textMain">{plan.price}</span>
                  <span className="text-textMuted font-medium">{plan.period}</span>
                </div>
              </div>

              <div className="mb-8 p-4 bg-white rounded-xl border border-gray-100">
                <div className="font-bold text-lg text-textMain mb-4">{plan.employees}</div>
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-sm text-textMuted">
                      <Check className="w-5 h-5 text-brandAccent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 p-4 bg-white rounded-xl border border-gray-100 flex-grow">
                <div className="font-bold text-textMain mb-4">{plan.crmTitle}</div>
                <ul className="space-y-3">
                  {plan.crmFeatures.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-sm text-textMuted">
                      <Check className="w-5 h-5 text-textMain shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-4">
                <Button onClick={onOpenBooking} variant={plan.popular ? 'primary' : 'secondary'} className="w-full text-center justify-center">
                  Book a demo
                </Button>
                <div className="text-center text-xs text-textMuted space-y-1">
                  <div>{plan.setupTime}</div>
                  <div>Micro-usage charges apply</div>
                  <div>No contracts - cancel anytime</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
