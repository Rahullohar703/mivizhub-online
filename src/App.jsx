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
import SectionFAQ from './components/SectionFAQ';
import SectionCTA from './components/SectionCTA';
import Footer from './components/Footer';

export default function App() {
  const handleOpenBooking = () => {
    window.open("https://calendly.com/mivizhub/30min", "_blank");
  };

  return (
    <div className="bg-[#08080a] font-sans antialiased text-textMain selection:bg-[#31c0de] selection:text-black min-h-screen relative overflow-x-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-vignette opacity-80 pointer-events-none z-0" />
      
      {/* Ambient Color Glows at Strategic Scroll Depths */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] glow-cyan opacity-40 blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-[30%] -left-60 w-[700px] h-[500px] glow-indigo opacity-30 blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[60%] -right-60 w-[700px] h-[500px] glow-purple opacity-25 blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] glow-cyan opacity-35 blur-[120px] pointer-events-none z-0" />

      {/* Navigation */}
      <div className="relative z-20">
        <Navbar onOpenBooking={handleOpenBooking} />
      </div>

      <main id="main-content" className="relative z-10">
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

        {/* 13. Frequently Asked Questions */}
        <SectionFAQ />

        {/* 14. Final Call to Action */}
        <SectionCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

    </div>
  );
}
