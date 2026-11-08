import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
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
import SectionCaseStudiesPreview from './components/SectionCaseStudiesPreview';
import SectionBlogPreview from './components/SectionBlogPreview';
import SectionCredentials from './components/SectionCredentials';
import SectionPricing from './components/SectionPricing';
import SectionFAQ from './components/SectionFAQ';
import SectionCTA from './components/SectionCTA';
import Footer from './components/Footer';
import GrowthPage from './pages/GrowthPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import CaseStudyPage from './pages/CaseStudyPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';

import { getBookingUrl } from './config/booking';

function HomePage({ onOpenBooking }) {
  useEffect(() => {
    document.title = "MivizHub | Growth & AI Automation for Industry";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "We help construction, real estate, engineering, manufacturing, and operations-heavy businesses attract better customers, convert more enquiries, and streamline everyday operations."
      );
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.mivizhub.online/');
  }, []);

  return (
    <main id="main-content" className="bg-[#f8fafc] text-slate-900">
      {/* 01. Hero Section */}
      <SectionHero onOpenBooking={onOpenBooking} />

      {/* 02. Trust & Positioning: You Know Your Industry. We Help You Grow Within It. */}
      <SectionTrust />

      {/* 03. Problem Section: You’re Busy Running Your Business. But Is Your Business Growing? */}
      <SectionProblems />

      {/* 04. Core Solutions: 01 Digital Presence | 02 Growth & Leads | 03 AI Automation */}
      <SectionServices onOpenBooking={onOpenBooking} />

      {/* 05. Combined Offer: The MivizHub Growth & Operations System */}
      <SectionDifferentiator onOpenBooking={onOpenBooking} />

      {/* 06. Verified Client Case Studies Preview (In-Page Navigation to /casestudy) */}
      <SectionCaseStudiesPreview onOpenBooking={onOpenBooking} />

      {/* 07. Industries: Built Environment, Industrial & Operations */}
      <SectionIndustries onOpenBooking={onOpenBooking} />

      {/* 08. Why MivizHub: We Understand That Every Industry Operates Differently */}
      <SectionCredentials />

      {/* 09. How It Works: Simple to Start. Built Around Your Business */}
      <SectionHowItWorks onOpenBooking={onOpenBooking} />

      {/* 10. Industry Insights & Practical Guides Preview (In-Page Navigation to /blog) */}
      <SectionBlogPreview />

      {/* 11. Frequently Asked Questions */}
      <SectionFAQ />

      {/* 12. Final Call to Action */}
      <SectionCTA onOpenBooking={onOpenBooking} />
    </main>
  );
}

export default function App() {
  const handleOpenBooking = (context) => {
    const url = getBookingUrl(context);
    window.open(url, "_blank");
  };

  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-blue-600 selection:text-white min-h-screen">
      <ScrollToTop />
      <Navbar onOpenBooking={handleOpenBooking} />
      <Routes>
        <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
        <Route path="/growth" element={<GrowthPage onOpenBooking={handleOpenBooking} />} />
        <Route path="/blog" element={<BlogPage onOpenBooking={handleOpenBooking} />} />
        <Route path="/blog/:slug" element={<BlogPostPage onOpenBooking={handleOpenBooking} />} />
        <Route path="/casestudy" element={<CaseStudyPage onOpenBooking={handleOpenBooking} />} />
        <Route path="/casestudies" element={<Navigate to="/casestudy" replace />} />
        <Route path="/casestudy/:slug" element={<CaseStudyDetailPage onOpenBooking={handleOpenBooking} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
}


