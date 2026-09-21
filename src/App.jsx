import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SectionHero from './components/SectionHero';
import SectionTrust from './components/SectionTrust';
import SectionProblems from './components/SectionProblems';
import SectionServices from './components/SectionServices';
import SectionDifferentiator from './components/SectionDifferentiator';
import SectionMarketing from './components/SectionMarketing';
import SectionAIStaffing from './components/SectionAIStaffing';
import SectionIndustries from './components/SectionIndustries';
import SectionHowItWorks from './components/SectionHowItWorks';
import SectionOutcomes from './components/SectionOutcomes';
import SectionCaseStudies from './components/SectionCaseStudies';
import SectionCredentials from './components/SectionCredentials';
import SectionPricing from './components/SectionPricing';
import SectionFAQ from './components/SectionFAQ';
import SectionCTA from './components/SectionCTA';
import Footer from './components/Footer';
import GrowthPage from './pages/GrowthPage';

function HomePage({ onOpenBooking }) {
  useEffect(() => {
    document.title = "MivizHub | Business Growth with Marketing & AI Staffing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "MivizHub helps businesses grow with performance-driven marketing and AI-powered staffing — bringing in more customers while taking more work off your plate."
      );
    }
  }, []);

  return (
    <main id="main-content">
      {/* 1. Hero Section */}
      <SectionHero onOpenBooking={onOpenBooking} />

      {/* 2. Platform & Partner Trust Bar */}
      <SectionTrust />

      {/* 3. The Problem Section: Growing a business shouldn't mean doing everything yourself */}
      <SectionProblems />

      {/* 4. Core Services: Marketing & Growth & AI Staffing Overview */}
      <SectionServices />

      {/* 5. Core Differentiator: Bring In More Business. Handle More Business. */}
      <SectionDifferentiator />

      {/* 6. Dedicated Marketing & Growth Deep Dive */}
      <SectionMarketing onOpenBooking={onOpenBooking} />

      {/* 7. Dedicated AI Staffing Deep Dive */}
      <SectionAIStaffing onOpenBooking={onOpenBooking} />

      {/* 8. Who We Help: Broad Industry Categories */}
      <SectionIndustries />

      {/* 9. Simple 3-Step Process */}
      <SectionHowItWorks />

      {/* 10. Outcomes: More Leads, More Time, Lower Overhead, More Growth */}
      <SectionOutcomes />

      {/* 11. Case Studies: Problem -> Solution -> Outcome */}
      <SectionCaseStudies />

      {/* 12. Credentials & Trust Standards */}
      <SectionCredentials />

      {/* 13. Frequently Asked Questions */}
      <SectionFAQ />

      {/* 14. Final Call to Action */}
      <SectionCTA onOpenBooking={onOpenBooking} />
    </main>
  );
}

export default function App() {
  const handleOpenBooking = () => {
    window.open("https://calendly.com/mivizhub/30min", "_blank");
  };

  return (
    <div className="bg-background font-sans antialiased text-textMain selection:bg-brandPurple selection:text-white min-h-screen">
      <Navbar onOpenBooking={handleOpenBooking} />
      <Routes>
        <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
        <Route path="/growth" element={<GrowthPage onOpenBooking={handleOpenBooking} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}


