import React from 'react';
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

export default function App() {
  const handleOpenBooking = () => {
    window.open("https://calendly.com/mivizhub/30min", "_blank");
  };

  return (
    <div className="bg-background font-sans antialiased text-textMain selection:bg-brandPurple selection:text-white min-h-screen">
      
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main id="main-content">
        {/* 1. Hero Section */}
        <SectionHero onOpenBooking={handleOpenBooking} />

        {/* 2. Platform & Partner Trust Bar */}
        <SectionTrust />

        {/* 3. The Problem Section: Growing a business shouldn't mean doing everything yourself */}
        <SectionProblems />

        {/* 4. Core Services: Marketing & Growth & AI Staffing Overview */}
        <SectionServices />

        {/* 5. Core Differentiator: Bring In More Business. Handle More Business. */}
        <SectionDifferentiator />

        {/* 6. Dedicated Marketing & Growth Deep Dive */}
        <SectionMarketing onOpenBooking={handleOpenBooking} />

        {/* 7. Dedicated AI Staffing Deep Dive */}
        <SectionAIStaffing onOpenBooking={handleOpenBooking} />

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

        {/* 13. Transparent Pricing: Presence ($250) & Growth ($500) */}
        <SectionPricing onOpenBooking={handleOpenBooking} />

        {/* 14. Frequently Asked Questions */}
        <SectionFAQ />

        {/* 15. Final Call to Action */}
        <SectionCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

    </div>
  );
}
