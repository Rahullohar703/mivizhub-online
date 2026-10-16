import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle2, Building2, MapPin, PhoneCall } from 'lucide-react';
import Container from '../components/ui/Container';
import { CASE_STUDIES, CASE_STUDY_INDUSTRIES } from '../data/caseStudies';
import SEOHead from '../components/SEOHead';

export default function CaseStudyPage({ onOpenBooking }) {
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const filteredStudies = CASE_STUDIES.filter((study) => {
    return selectedIndustry === "All Industries" || study.industry === selectedIndustry;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "MivizHub Client Case Studies & Verified Results",
    "description": "Real business outcomes and ROI case studies from small businesses using MivizHub marketing and AI staffing.",
    "url": "https://www.mivizhub.online/casestudy"
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-24 sm:pt-28 pb-20">
      <SEOHead
        title="Client Case Studies & Verified Results | MivizHub"
        description="See real results from business owners who eliminated missed calls, boosted customer bookings, and cut overhead with MivizHub marketing and AI staffing."
        keywords={["client case studies", "small business AI results", "AI receptionist ROI", "business growth results"]}
        canonicalUrl="https://www.mivizhub.online/casestudy"
        ogType="website"
        jsonLd={jsonLd}
      />

      {/* Header Section */}
      <div className="bg-[#f8fafc] border-b border-gray-200 py-12 sm:py-16">
        <Container className="max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Award size={16} className="text-emerald-700" />
            Verified Client Outcomes & Numbers
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Real Results for Real Businesses
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            See how small and mid-sized business owners solve phone handling, attract qualified customers, and scale their company without hiring more administrative staff.
          </p>

          {/* Aggregate Stat Bar - Clean, White Cards with Strong Contrast */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 block mb-0.5">0 Sec</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Phone Hold Times</span>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 block mb-0.5">100%</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">After-Hours Capture</span>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-cyan-800 block mb-0.5">+38%</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Confirmed Bookings</span>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 block mb-0.5">48 Hours</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Average Setup Time</span>
            </div>
          </div>

          {/* Industry Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {CASE_STUDY_INDUSTRIES.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedIndustry === industry
                    ? "bg-gray-900 text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Case Studies List */}
      <Container className="max-w-5xl mt-12 sm:mt-16">
        <div className="space-y-10">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white border-2 border-gray-200 hover:border-gray-900 rounded-2xl p-6 sm:p-9 transition-all shadow-sm group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Client, Headline, Problem & Solution */}
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs sm:text-sm font-bold px-3 py-1 rounded bg-gray-100 text-gray-900 border border-gray-300 flex items-center gap-1.5">
                      <Building2 size={14} /> {study.industry}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-cyan-50 text-cyan-900 border border-cyan-200">
                      {study.badge}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                      <MapPin size={13} /> {study.location}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 leading-snug">
                    <Link to={`/casestudy/${study.slug}`} className="hover:text-cyan-800 transition-colors">
                      {study.headline}
                    </Link>
                  </h2>

                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    {study.summary}
                  </p>

                  {/* Before vs. With MivizHub Box - High Contrast, Easy to Understand */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-200">
                      <span className="text-rose-900 font-bold text-xs uppercase tracking-wider block mb-1">
                        The Problem Before:
                      </span>
                      <p className="text-sm text-gray-800 leading-relaxed line-clamp-3">
                        {study.theChallenge.trim()}
                      </p>
                    </div>

                    <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
                      <span className="text-emerald-900 font-bold text-xs uppercase tracking-wider block mb-1">
                        With MivizHub:
                      </span>
                      <p className="text-sm text-gray-800 leading-relaxed line-clamp-3">
                        {study.theSolution.trim()}
                      </p>
                    </div>
                  </div>

                  {/* Client Quote */}
                  <blockquote className="border-l-4 border-cyan-600 pl-4 py-1 italic text-sm sm:text-base text-gray-700 mb-6 bg-gray-50/60 rounded-r-lg">
                    "{study.quote.text}"
                    <cite className="block not-italic text-xs sm:text-sm font-bold text-gray-900 mt-2">
                      — {study.quote.author}, {study.quote.role}
                    </cite>
                  </blockquote>

                  <Link
                    to={`/casestudy/${study.slug}`}
                    className="inline-flex items-center gap-2 text-base font-bold text-cyan-800 hover:text-cyan-950 hover:underline"
                  >
                    Read Full Story & Details <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Right Column: Measured Results Card */}
                <div className="lg:col-span-4 bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-4">
                    Measured Results:
                  </span>

                  <div className="space-y-4">
                    {study.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="pb-3 border-b border-gray-200 last:border-b-0 last:pb-0">
                        <span className={`text-2xl sm:text-3xl font-extrabold block mb-0.5 ${stat.highlight ? "text-emerald-700" : "text-gray-900"}`}>
                          {stat.value}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-600 font-medium">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 mt-5 border-t border-gray-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                      Services In Place:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {study.technologiesUsed.slice(0, 3).map((tech, tIdx) => (
                        <span key={tIdx} className="text-xs bg-white text-gray-800 px-2.5 py-1 rounded border border-gray-300 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* High-Converting Bottom Banner */}
        <div className="mt-16 bg-[#f8fafc] border-2 border-gray-300 rounded-2xl p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-800 block mb-2">
              Ready To Solve Your Operational Bottlenecks?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Get Similar Results For Your Business
            </h3>
            <p className="text-base text-gray-700 mb-8 leading-relaxed">
              We can deploy a custom AI receptionist to answer every call and put more customers on your calendar in just 48 to 72 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-black text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} /> Schedule a 30-Minute Consultation
              </button>
              <Link
                to="/blog"
                className="text-base font-semibold text-gray-800 hover:text-black px-6 py-3.5 rounded-xl border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Read Our Business Guides →
              </Link>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}
