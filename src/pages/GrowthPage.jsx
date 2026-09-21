import React, { useEffect } from 'react';
import GrowthHero from '../components/growth/GrowthHero';
import GrowthProblem from '../components/growth/GrowthProblem';
import GrowthHowWeWork from '../components/growth/GrowthHowWeWork';
import GrowthPricing from '../components/growth/GrowthPricing';
import GrowthMethodology from '../components/growth/GrowthMethodology';
import GrowthDifferentiation from '../components/growth/GrowthDifferentiation';
import GrowthAIBridge from '../components/growth/GrowthAIBridge';
import GrowthFAQ from '../components/growth/GrowthFAQ';
import GrowthFinalCTA from '../components/growth/GrowthFinalCTA';

export default function GrowthPage({ onOpenBooking }) {
  // Update Document Title and Meta Description for SEO
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marketing & Growth Services for Small Businesses | Mivizhub";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Build your online presence, improve search visibility, create strategic content and generate more opportunities with Mivizhub Marketing & Growth."
      );
    }
  }, []);

  const handleSelectPlan = (planType) => {
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBooking(planType);
    }
  };

  return (
    <main id="main-content">
      {/* 1. Hero Section */}
      <GrowthHero onOpenBooking={onOpenBooking} onSelectPlan={handleSelectPlan} />

      {/* 2. Problem Section */}
      <GrowthProblem />

      {/* 3. How We Work (Understanding before Content) */}
      <GrowthHowWeWork />

      {/* 4. Productized Pricing ($250 Presence & $500 Growth) */}
      <GrowthPricing onOpenBooking={onOpenBooking} />

      {/* 5. Methodology (01 Understand -> 05 Optimize) */}
      <GrowthMethodology />

      {/* 6. Differentiation (Research before Creation) */}
      <GrowthDifferentiation />

      {/* 7. AI Workforce Bridge (Grow -> Automate) */}
      <GrowthAIBridge />

      {/* 8. FAQ */}
      <GrowthFAQ />

      {/* 9. Final CTA & Brand Concept */}
      <GrowthFinalCTA onOpenBooking={onOpenBooking} onSelectPlan={handleSelectPlan} />
    </main>
  );
}
