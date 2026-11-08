import React, { useState } from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { Check } from 'lucide-react';

export default function SectionIndustries({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      id: "construction",
      name: "Construction & Design-Build",
      emoji: "🏗️",
      gradient: "from-amber-500 to-orange-600",
      shadow: "shadow-amber-500/30",
      subsectors: [
        "Design & Build Companies",
        "General Contractors",
        "Civil Contractors",
        "Residential & Commercial Builders",
        "Turnkey Construction Companies",
        "Renovation & Remodeling Businesses"
      ]
    },
    {
      id: "architecture",
      name: "Architecture & Engineering",
      emoji: "📐",
      gradient: "from-indigo-600 to-purple-600",
      shadow: "shadow-indigo-500/30",
      subsectors: [
        "Architecture Firms",
        "Interior Design Firms",
        "MEP Consultants",
        "Structural Consultants",
        "Civil Engineering Consultants",
        "Project Management Consultants"
      ]
    },
    {
      id: "real-estate",
      name: "Real Estate & Property",
      emoji: "🏢",
      gradient: "from-blue-600 to-cyan-500",
      shadow: "shadow-blue-500/30",
      subsectors: [
        "Real Estate Developers",
        "Property Development Companies",
        "Real Estate Agencies",
        "Commercial Real Estate Businesses",
        "Property Management Companies",
        "Industrial & Warehouse Developers"
      ]
    },
    {
      id: "specialty",
      name: "Specialty Contractors & Building Systems",
      emoji: "⚡",
      gradient: "from-cyan-600 to-teal-600",
      shadow: "shadow-cyan-500/30",
      subsectors: [
        "HVAC & Mechanical Contractors",
        "Plumbing & Electrical Contractors",
        "Solar EPC Companies",
        "Roofing & Siding Contractors",
        "Fire & Safety Contractors",
        "Waterproofing & Building Systems Companies"
      ]
    },
    {
      id: "facility",
      name: "Facility Management & Field Services",
      emoji: "🛡️",
      gradient: "from-emerald-500 to-teal-600",
      shadow: "shadow-emerald-500/30",
      subsectors: [
        "Facility Management Companies",
        "Commercial Cleaning",
        "Pest Control",
        "Landscaping",
        "Building Maintenance",
        "Security & Restoration Services"
      ]
    },
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial",
      emoji: "🏭",
      gradient: "from-violet-600 to-indigo-600",
      shadow: "shadow-violet-500/30",
      subsectors: [
        "Construction Material Manufacturers",
        "Industrial Equipment Manufacturers",
        "Aluminium, Glass & Steel Businesses",
        "Fabrication Companies",
        "Building Product Suppliers",
        "Industrial Distributors"
      ]
    },
    {
      id: "logistics",
      name: "Logistics & Supply Chain",
      emoji: "🚚",
      gradient: "from-sky-600 to-blue-600",
      shadow: "shadow-sky-500/30",
      subsectors: [
        "Logistics Companies",
        "Freight & Transportation",
        "Construction Logistics",
        "Equipment Rental",
        "Warehousing",
        "Supply Chain Businesses"
      ]
    }
  ];

  const current = industries[activeTab];

  return (
    <Section id="industries" className="py-24 bg-white/75 backdrop-blur-sm border-b border-slate-200/80 text-slate-900 relative overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />

      <Container className="max-w-6xl relative z-10 px-4 sm:px-6">
        
        {/* Section Header with Consistent Typography */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 shadow-2xs">
            <span>🏭</span>
            <span>Targeted Industry Sectors</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Industry Expertise Meets <span className="text-blue-600">Practical Growth Solutions.</span>
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We work with businesses across the built environment, industrial sectors, and operations-heavy industries.
          </p>
        </div>

        {/* Tab Buttons Pill Bar with Real Emojis (Mobile Optimized Wrapping) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 max-w-5xl mx-auto">
          {industries.map((ind, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/25 ring-2 ring-blue-500 scale-102'
                    : 'bg-white hover:bg-slate-100 border-2 border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <span className="text-base sm:text-lg">{ind.emoji}</span>
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Detail Card with Real Emoji */}
        <div className="relative group max-w-4xl mx-auto mb-12">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-15 blur-sm group-hover:opacity-25 transition duration-500" />

          <div className="relative bg-slate-50/80 border-2 border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl">
            {/* Sector Header with Large Emoji */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-7 pb-5 border-b border-slate-200">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center flex-shrink-0 shadow-lg ${current.shadow} text-3xl group-hover:scale-105 transition-transform duration-300`}>
                {current.emoji}
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                  {current.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal">
                  Tailored growth, digital presence, and operational automation for:
                </p>
              </div>
            </div>

            {/* Subsectors Checklist Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {current.subsectors.map((sub, i) => (
                <div 
                  key={i}
                  className="bg-white hover:bg-blue-50/50 border-2 border-slate-200/90 hover:border-blue-300 rounded-xl px-4 py-3 flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-semibold shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default group/item"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="group-hover/item:text-blue-900 transition-colors">{sub}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center pt-2">
              <ArrowFillButton 
                onClick={() => onOpenBooking ? onOpenBooking(`Solutions for ${current.name}`) : null}
                btnText="Explore Solutions for My Industry"
                size="lg"
                bgColor="#0f172a"
                textColor="#ffffff"
                fillBgColor="#2563eb"
                fillTextColor="#ffffff"
                arrowColor="#ffffff"
                hoverArrowColor="#ffffff"
                className="w-full sm:w-auto shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-300"
              />
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}
