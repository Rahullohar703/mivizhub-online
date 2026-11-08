import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

export default function SectionCaseStudiesPreview() {
  const featuredStudies = [
    {
      slug: "luxury-interior-design-local-seo-ranking",
      emoji: "📐",
      industry: "Architecture & Interior Design",
      badge: "Local SEO & Google Maps",
      plan: "Presence Plan ($250/mo)",
      stat: "+₹8,50,000",
      statLabel: "Signed Project Revenue",
      headline: "Reached #2 Google Map Pack and signed ₹8.5 Lakhs in residential projects with zero ad spend.",
      outcome: "Climbed from unranked to Top 3 across 14 high-intent local keywords in 75 days.",
      roi: "14.1x Cash Return"
    },
    {
      slug: "commercial-services-google-ads-landing-page-cpl",
      emoji: "🏢",
      industry: "Commercial Mechanical & Facilities",
      badge: "Paid Ads & Dedicated Landing Pages",
      plan: "Growth Plan ($500/mo)",
      stat: "+$52,000 ARR",
      statLabel: "Annual Contract Accounts",
      headline: "Cut Google Ads cost-per-lead by 69% ($210 to $64) and secured 5 long-term corporate accounts.",
      outcome: "Replaced generic homepage with conversion-engineered RFP funnel.",
      roi: "34x Retainer Return"
    },
    {
      slug: "b2b-agency-website-redesign-conversion-optimization",
      emoji: "💻",
      industry: "B2B SaaS & Engineering",
      badge: "Website Redesign & Funnels",
      plan: "Presence Plan ($250/mo)",
      stat: "+₹6,80,000",
      statLabel: "Closed Sprint Retainers",
      headline: "Surged website conversion rate from 0.1% to 2.4% with an interactive scope estimator funnel.",
      outcome: "Form fills and booked discovery calls jumped from 2/mo to 19 qualified inquiries.",
      roi: "11.3x Cash Return"
    }
  ];

  return (
    <Section id="case-studies" className="py-24 bg-slate-50/80 border-b border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-6xl relative z-10 px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 shadow-2xs">
            <span>📊</span>
            <span>Verified Client Outcomes</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Real Results for <span className="text-blue-600">Real Businesses</span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            See how operations-heavy businesses transformed unpredictable lead generation into verified project revenue on flat-rate monthly plans.
          </p>
        </div>

        {/* 3 Featured Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14 items-stretch">
          {featuredStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="group bg-white rounded-3xl p-7 border-2 border-slate-200/90 hover:border-blue-400 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative cursor-pointer"
            >
              <Link to={`/casestudy/${study.slug}`} className="flex flex-col h-full justify-between">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                      <span>{study.emoji}</span>
                      <span>{study.industry}</span>
                    </span>
                    <span className="text-xs font-bold font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {study.roi}
                    </span>
                  </div>

                  {/* Primary Stat Highlight */}
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {study.stat}
                    </div>
                    <div className="font-sans text-xs font-bold text-blue-600 uppercase tracking-wider mt-0.5">
                      {study.statLabel}
                    </div>
                    <div className="font-sans text-xs text-slate-400 mt-0.5">
                      Achieved on {study.plan}
                    </div>
                  </div>

                  {/* Headline Story */}
                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {study.headline}
                  </h3>

                  {/* Concrete Key Outcome */}
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{study.outcome}</span>
                  </div>
                </div>

                {/* Footer Link Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  <span>Read Full Case Study</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* In-Page Navigation to Full Case Studies Hub */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/casestudy" className="w-full sm:w-auto">
            <ArrowFillButton 
              btnText="Explore All Verified Case Studies" 
              href="/casestudy" 
              size="lg"
              variant="light"
              className="w-full sm:w-auto shadow-sm hover:shadow-md"
            />
          </Link>
        </div>

      </Container>
    </Section>
  );
}
