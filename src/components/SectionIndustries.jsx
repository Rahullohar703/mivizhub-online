import React, { useState, useRef } from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { HardHat, Flame, Wrench, Truck, Building2, Check, UserCheck, Shield, Hammer } from 'lucide-react';

export default function SectionIndustries() {
  const [activeTab, setActiveTab] = useState('General Contracting');
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
    { id: 'General Contracting', name: 'General Contractors & Builders', icon: <HardHat className="w-4 h-4" /> },
    { id: 'Roofing & Siding', name: 'Roofing, Siding & Gutters', icon: <Hammer className="w-4 h-4" /> },
    { id: 'HVAC & Mechanical', name: 'HVAC & Mechanical', icon: <Flame className="w-4 h-4" /> },
    { id: 'Plumbing & Electrical', name: 'Plumbing & Electrical', icon: <Wrench className="w-4 h-4" /> },
    { id: 'Excavation & Concrete', name: 'Excavation & Concrete', icon: <Truck className="w-4 h-4" /> },
    { id: 'Commercial Ops', name: 'Commercial & Facility Ops', icon: <Building2 className="w-4 h-4" /> }
  ];

  const details = {
    'General Contracting': {
      title: 'General Contractors, Custom Home Builders & Remodelers',
      desc: 'Never miss high-dollar renovation and custom build opportunities while managing subs on-site.',
      marketing: [
        'Local SEO and Google Map Pack domination for high-ticket home remodeling and addition projects',
        'Targeted Google Search campaigns targeting homeowners ready to hire licensed general contractors',
        'High-converting portfolio landing pages showcasing past craftsmanship, permits, and customer reviews'
      ],
      agents: [
        {
          name: 'AI Site Receptionist',
          badge: 'Voice & Dispatch',
          task: 'Picks up in 1 ring on noisy jobsites, collects project address & timeline, and schedules on-site walkthroughs.'
        },
        {
          name: 'AI Bid Nurture Specialist',
          badge: 'Estimate Recovery',
          task: 'Sends automated, polite multi-touch follow-ups on open proposals so $20k–$100k+ bids never go cold.'
        }
      ]
    },
    'Roofing & Siding': {
      title: 'Roofing, Storm Restoration & Siding Contractors',
      desc: 'Speed to lead is everything in roofing. Be the first contractor to call back and win the inspection.',
      marketing: [
        'Hyper-local storm response and roof replacement Google Ads triggered in active storm zones',
        'Google Business Profile ranking to capture homeowners searching "emergency roof repair near me"',
        'Automated 5-star review acquisition workflows after every completed roof replacement'
      ],
      agents: [
        {
          name: 'AI Emergency Inspection Dispatcher',
          badge: 'Speed to Lead',
          task: 'Calls web and storm inquiry leads in <60 seconds, qualifies insurance vs. retail, and books drone/ladder inspections.'
        },
        {
          name: 'AI Insurance & Estimate Follow-Up',
          badge: 'Revenue Recovery',
          task: 'Checks in with homeowners awaiting insurance adjuster approvals and nudges pending estimate approvals.'
        }
      ]
    },
    'HVAC & Mechanical': {
      title: 'Residential & Commercial HVAC Contractors',
      desc: 'Capture peak seasonal furnace and AC replacement calls without putting customers on hold.',
      marketing: [
        'High-intent Google Ads targeting urgent AC repair and heat pump system installations',
        'Territory-wide Google Maps ranking across your primary city and surrounding suburbs',
        'Seasonal maintenance agreement campaigns that generate recurring, predictable off-peak revenue'
      ],
      agents: [
        {
          name: '24/7 AI HVAC Dispatcher',
          badge: 'Emergency Triage',
          task: 'Answers after-hours "no AC" and "no heat" emergencies instantly, collects system details, and books diagnostic visits.'
        },
        {
          name: 'AI Service Agreement Coordinator',
          badge: 'Recurring Revenue',
          task: 'Follows up on diagnostic quotes to pitch system replacements and schedules seasonal tune-up visits.'
        }
      ]
    },
    'Plumbing & Electrical': {
      title: 'Plumbing, Drain & Electrical Trade Contractors',
      desc: 'Turn urgent emergency service calls and panel upgrade inquiries into booked technician dispatches.',
      marketing: [
        'Google Local Services Ads (Google Screened) setup to generate pre-qualified call-in leads',
        'Targeted search campaigns for high-margin jobs (whole-home repipes, EV charger and 200A panel upgrades)',
        'Local citation network that outranks regional competitors across all service zip codes'
      ],
      agents: [
        {
          name: 'AI Dispatch & Triage Specialist',
          badge: '1-Ring Voice',
          task: 'Identifies water leaks or electrical hazards, provides safety guidance, and dispatches the on-call tech.'
        },
        {
          name: 'AI Appointment Reminder & Sync',
          badge: 'Calendar & CRM',
          task: 'Syncs appointments with Jobber/Housecall Pro and sends SMS reminders to homeowners, cutting no-shows to 0%.'
        }
      ]
    },
    'Excavation & Concrete': {
      title: 'Excavation, Grading, Concrete & Paving Contractors',
      desc: 'Win large site prep, foundation, and flatwork contracts with builders and commercial developers.',
      marketing: [
        'Commercial B2B search campaigns targeting general contractors and developers seeking site work subs',
        'Local SEO establishing authority for foundation pouring, grading, retaining walls, and asphalt paving',
        'Before-and-after project showcase social campaigns that prove equipment capabilities and scale'
      ],
      agents: [
        {
          name: 'AI Scope & Plan Intake Specialist',
          badge: 'Lead Qualification',
          task: 'Collects parcel details, square footage, civil plans, and grading timeline before notifying your estimator.'
        },
        {
          name: 'AI Subcontractor Coordination Bot',
          badge: 'Field Ops',
          task: 'Automates dispatch notifications for equipment drop-offs, concrete truck deliveries, and crew schedules.'
        }
      ]
    },
    'Commercial Ops': {
      title: 'Commercial Cleaning, Landscaping & Facility Operations',
      desc: 'Land high-margin recurring maintenance agreements and keep field teams synchronized.',
      marketing: [
        'B2B outreach to property managers, HOA boards, and commercial facility directors',
        'High-converting landing pages built specifically for multi-location commercial RFPs',
        'Local search presence targeting commercial groundskeeping, janitorial, and maintenance contracts'
      ],
      agents: [
        {
          name: 'AI RFP & Quote Coordinator',
          badge: 'B2B Intake',
          task: 'Captures facility square footage, cleaning frequency, and bid specs, populating quote drafts instantly.'
        },
        {
          name: 'AI Crew & Schedule Coordinator',
          badge: 'Daily Ops Sync',
          task: 'Handles client rescheduling requests 24/7 and updates crew dispatch sheets without owner intervention.'
        }
      ]
    }
  };

  const current = details[activeTab] || details['General Contracting'];

  return (
    <Section id="industries" className="py-20 scroll-mt-24 bg-gradient-to-b from-[#0c101c] via-[#0e1322] to-[#0a0e19] border-t border-white/10 relative overflow-hidden">
      {/* Subtle midnight-indigo spotlight */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.07)_0%,transparent_70%)] pointer-events-none" />
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#31c0de] block mb-2">
            Tailored For The Trades
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Built Specifically For Construction &amp; Field Ops
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Every trade has unique job workflows, pricing structures, and emergency scenarios. See how MivizHub adapts to yours:
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="max-w-6xl mx-auto mb-12">
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 pt-2 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory justify-start lg:justify-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
                      ? 'bg-gradient-to-r from-[#4F46E5] to-[#4338CA] text-white shadow-xl shadow-indigo-600/35 border border-indigo-400/40 -translate-y-0.5 scale-[1.02] hover:shadow-[0_8px_30px_rgba(79,70,229,0.5)]' 
                      : 'bg-[#121727]/90 text-gray-300 border border-white/10 hover:text-white hover:border-cyan-400/50 hover:bg-[#18223a]'
                  }`}
                >
                  <span 
                    className={`inline-flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'text-white scale-110' 
                        : 'text-[#31c0de] group-hover:scale-110'
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

        {/* Tab Content Box */}
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
            
            {/* Column 1: Marketing Engine */}
            <div className="bg-[#0c101c] border border-white/5 p-7 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block">
                    1. Growth &amp; Local Presence Engine
                  </span>
                  <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                    Brings High-Value Bids In
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

            {/* Column 2: AI Operations Deployed */}
            <div className="bg-[#0c101c] border border-white/5 p-7 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#31c0de] block">
                    2. AI Operations &amp; Dispatch Deployed
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    24/7 Field Coverage
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
            <span>We customize all campaigns and AI voice rules specifically for your trade pricing, service radius, and license coverage.</span>
            <span className="text-gray-200 font-semibold">Zero software setup required on your end</span>
          </div>

        </div>

      </Container>
    </Section>
  );
}
