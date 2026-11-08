import React, { useState } from 'react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ArrowFillButton } from './ui/arrow-fill-button';
import { 
  HardHat, 
  Compass, 
  Building, 
  Wrench, 
  ShieldCheck, 
  Factory, 
  Truck,
  CheckCircle2
} from 'lucide-react';

export default function SectionIndustries({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      id: "construction",
      name: "Construction & Design-Build",
      icon: <HardHat className="w-4 h-4" />,
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
      icon: <Compass className="w-4 h-4" />,
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
      icon: <Building className="w-4 h-4" />,
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
      icon: <Wrench className="w-4 h-4" />,
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
      icon: <ShieldCheck className="w-4 h-4" />,
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
      icon: <Factory className="w-4 h-4" />,
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
      icon: <Truck className="w-4 h-4" />,
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
    <Section id="industries" className="py-24 bg-white border-b border-slate-200 text-slate-900 relative">
      <Container className="max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 block mb-2">
            Targeted Industry Sectors
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-heading">
            Industry Expertise Meets Practical Growth Solutions.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We work with businesses across the built environment, industrial sectors, and operations-heavy industries.
          </p>
        </div>

        {/* Tab Buttons Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {industries.map((ind, idx) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{ind.icon}</span>
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Active Industry Detail Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              {current.icon}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                {current.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Tailored growth, digital presence, and operational automation for:
              </p>
            </div>
          </div>

          {/* Subsectors 2-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            {current.subsectors.map((sub, i) => (
              <div 
                key={i}
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-2.5 text-sm text-slate-800 shadow-2xs font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{sub}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <ArrowFillButton 
              onClick={() => onOpenBooking ? onOpenBooking(`Solutions for ${current.name}`) : null}
              btnText="Explore Solutions for My Industry"
              size="default"
              bgColor="#0f172a"
              textColor="#ffffff"
              fillBgColor="#2563eb"
              fillTextColor="#ffffff"
              arrowColor="#ffffff"
              hoverArrowColor="#ffffff"
              className="w-full sm:w-auto shadow-sm"
            />
          </div>
        </div>

      </Container>
    </Section>
  );
}
