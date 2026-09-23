import React, { useState, useRef } from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { HardHat, Factory, HeartPulse, Briefcase, ShoppingBag, Building2, Check, UserCheck } from 'lucide-react';

export default function SectionIndustries() {
  const [activeTab, setActiveTab] = useState('Construction');
  const scrollContainerRef = useRef(null);
  const tabRefs = useRef({});

  const handleSelectTab = (id) => {
    setActiveTab(id);
    const container = scrollContainerRef.current;
    const btn = tabRefs.current[id];
    if (container && btn) {
      const targetScroll = btn.offsetLeft - (container.clientWidth / 2) + (btn.clientWidth / 2);
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
    }
  };

  const industries = [
    { id: 'Construction', name: 'Construction & Trades', icon: <HardHat className="w-4 h-4" /> },
    { id: 'Industrial & Manufacturing', name: 'Manufacturing & Industrial', icon: <Factory className="w-4 h-4" /> },
    { id: 'Healthcare & Wellness', name: 'Healthcare & Clinics', icon: <HeartPulse className="w-4 h-4" /> },
    { id: 'Professional Services', name: 'Professional Services', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'E-commerce', name: 'E-commerce & Retail', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'Other Growing Businesses', name: 'Other Growing Businesses', icon: <Building2 className="w-4 h-4" /> }
  ];

  const details = {
    'Construction': {
      title: 'Construction, Remodeling & Trade Contractors',
      desc: 'Never miss high-paying jobs while your hands are full on the job site.',
      marketing: [
        'Google Local Services ads that deliver qualified quote and estimate requests',
        'Top rankings on Google Maps across your entire local service territory'
      ],
      agents: [
        {
          name: 'AI Site Receptionist',
          badge: 'Voice & Calls',
          task: 'Answers incoming calls in 1 ring on noisy job sites, screens emergency repairs, and books estimator site visits.'
        },
        {
          name: 'AI Quote Follow-Up Agent',
          badge: 'Revenue Recovery',
          task: 'Follows up with homeowners on pending bids via text and email so proposals never get forgotten.'
        }
      ]
    },
    'Industrial & Manufacturing': {
      title: 'Industrial Supply & Custom Fabrication',
      desc: 'Win commercial contracts and stop drowning in manual order status emails.',
      marketing: [
        'Targeted B2B outreach to commercial procurement officers & facility managers',
        'High-intent search campaigns for specific fabrication and industrial keywords'
      ],
      agents: [
        {
          name: 'AI RFQ & Spec Intake Agent',
          badge: 'Lead Intake',
          task: 'Extracts technical project requirements from incoming RFQs and alerts estimators with structured specs.'
        },
        {
          name: 'AI Operations Coordinator',
          badge: 'Operations & ERP',
          task: 'Answers routine order status, delivery, and inventory inquiries 24/7 without burdening shop-floor staff.'
        }
      ]
    },
    'Healthcare & Wellness': {
      title: 'Dental, Medical, Chiropractic & Clinics',
      desc: 'Eliminate front-desk phone hold times and keep appointment books completely full.',
      marketing: [
        'Targeted local patient acquisition campaigns for high-value treatments & care',
        'Automated 5-star Google review campaigns sent to satisfied patients'
      ],
      agents: [
        {
          name: 'AI Patient Appointment Coordinator',
          badge: 'Voice & Booking',
          task: 'Answers patient calls with zero hold times, books appointments, and manages routine rescheduling 24/7.'
        },
        {
          name: 'AI Patient Recall Assistant',
          badge: 'Patient Care & SMS',
          task: 'Sends automated appointment reminder texts to eliminate no-shows and re-engages patients due for check-ups.'
        }
      ]
    },
    'Professional Services': {
      title: 'Law Firms, Accountants & Consultants',
      desc: 'Book high-value consultations without low-level administrative overhead.',
      marketing: [
        'High-authority Google Search campaigns targeting high-retainer prospective clients',
        'Targeted executive outreach and referral acquisition campaigns'
      ],
      agents: [
        {
          name: 'AI Intake & Lead Qualifier',
          badge: 'Pre-Qualification',
          task: 'Screens incoming inquiries on budget, urgency, and case fit before booking partner calendar slots.'
        },
        {
          name: 'AI Document & Onboarding Assistant',
          badge: 'Client Onboarding',
          task: 'Collects intake documents, signs agreements, and sends consultation prep checklists automatically.'
        }
      ]
    },
    'E-commerce': {
      title: 'E-commerce, Brands & Distributors',
      desc: 'Scale online sales while keeping customer support instant and 24/7.',
      marketing: [
        'High-ROI performance advertising focused on measurable return on ad spend',
        'Post-purchase email and SMS flows that turn one-time buyers into repeat clients'
      ],
      agents: [
        {
          name: 'AI Customer Support Specialist',
          badge: '24/7 Support',
          task: 'Resolves shipping inquiries, returns, and product FAQs instantly across web chat, SMS, and email.'
        },
        {
          name: 'AI Cart Recovery & Reactivation Agent',
          badge: 'Revenue Recovery',
          task: 'Follows up with abandoned checkout shoppers and sends personalized re-order reminders based on past orders.'
        }
      ]
    },
    'Other Growing Businesses': {
      title: 'Any Growing Business With Inbound Customers',
      desc: 'Our system adapts to any business that needs more leads and automated front-office operations.',
      marketing: [
        'Custom lead generation campaigns tailored to your exact customer profile',
        'Transparent monthly tracking on every phone call, lead, and dollar spent'
      ],
      agents: [
        {
          name: 'AI Front-Desk & Voice Assistant',
          badge: 'Voice & Phone',
          task: 'Custom-trained on your services, pricing, and business rules to handle incoming inquiries 24/7.'
        },
        {
          name: 'AI Speed-to-Lead & Follow-Up Agent',
          badge: 'Lead Follow-Up',
          task: 'Reaches new web inquiries within 60 seconds and keeps your sales pipeline moving without manual chasing.'
        }
      ]
    }
  };

  const current = details[activeTab];

  return (
    <Section id="industries" className="py-20 scroll-mt-24 bg-gradient-to-b from-[#0d0f1e] via-[#0f1524] to-[#0a0e19] border-t border-white/10 relative overflow-hidden">
      {/* Subtle blue-slate ambient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.07)_0%,transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Who We Help
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Built for Growing Businesses Across Multiple Industries
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Click your industry to see how marketing drives customers in, and which dedicated AI employees handle the work.
          </p>
        </div>

        {/* Tab Buttons: Sleek horizontal swipe chip bar on mobile, centered flex grid on desktop */}
        <div className="relative max-w-6xl mx-auto mb-10 -mx-4 px-4 sm:mx-auto sm:px-0">
          {/* Subtle mobile edge fade indicators */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0d0f1e] to-transparent z-10 sm:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0d0f1e] to-transparent z-10 sm:hidden" />

          {/* Micro swipe hint for mobile */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-gray-400 mb-2.5 sm:hidden">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#31c0de] animate-pulse" />
            <span>Swipe across to view all 6 industries</span>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex items-center sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-0 sm:flex-wrap py-2 snap-x snap-mandatory"
          >
            {industries.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => (tabRefs.current[tab.id] = el)}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`group relative overflow-hidden flex-shrink-0 snap-center flex items-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ease-out transform-gpu cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0f1e] ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#4F46E5] to-[#4338CA] text-white shadow-xl shadow-indigo-600/35 border border-indigo-400/40 -translate-y-0.5 scale-[1.02] hover:shadow-[0_8px_30px_rgba(79,70,229,0.5)] hover:-translate-y-1 hover:scale-[1.04] active:scale-95' 
                      : 'bg-[#121727]/90 text-gray-300 border border-white/10 hover:text-white hover:border-cyan-400/50 hover:bg-[#18223a] hover:shadow-[0_8px_25px_rgba(49,192,222,0.2)] hover:-translate-y-1 hover:scale-[1.03] active:scale-95'
                  }`}
                >
                  {/* Subtle shine sweep on hover */}
                  <span 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" 
                    aria-hidden="true" 
                  />

                  <span 
                    className={`inline-flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'text-white scale-110 group-hover:scale-125 group-hover:rotate-6' 
                        : 'text-[#31c0de] group-hover:scale-125 group-hover:rotate-6 group-hover:text-cyan-300'
                    }`}
                  >
                    {tab.icon}
                  </span>
                  <span className="relative z-10 transition-colors duration-200">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Box - Wide & Spacious */}
        <div className="max-w-6xl mx-auto bg-[#111728]/90 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="mb-8 pb-8 border-b border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {current.title}
            </h3>
            <p className="text-base text-gray-300">
              {current.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Column 1: Marketing */}
            <div className="bg-[#0c101c] border border-white/5 p-7 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block">
                    1. Marketing & Growth Engine
                  </span>
                  <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                    Brings Business In
                  </span>
                </div>

                <div className="space-y-4">
                  {current.marketing.map((item, i) => (
                    <div key={i} className="bg-[#111624] border border-white/5 rounded-xl p-4 flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-200 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Specific AI Staff Deployed */}
            <div className="bg-[#0c101c] border border-white/5 p-7 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] block">
                    2. Dedicated AI Employees Deployed
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    24/7 Coverage
                  </span>
                </div>

                <div className="space-y-4">
                  {current.agents.map((agent, i) => (
                    <div key={i} className="bg-[#111624] border border-white/5 rounded-xl p-4">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                          <UserCheck className="w-4 h-4 text-[#31c0de]" />
                          {agent.name}
                        </span>
                        <span className="text-xs font-semibold text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          {agent.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {agent.task}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Reassurance */}
          <div className="mt-8 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-gray-400">
            <span>We customize both services specifically for your market, service pricing, and customer journey.</span>
            <span className="text-gray-200 font-semibold">Zero software setup required on your end</span>
          </div>

        </div>

      </Container>
    </Section>
  );
}
