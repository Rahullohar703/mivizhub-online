import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SectionHero from './components/SectionHero';
import SectionTrust from './components/SectionTrust';
import SectionProblems from './components/SectionProblems';
import SectionSolution from './components/SectionSolution';
import SectionWhatIs from './components/SectionWhatIs';
import SectionAIEmployees from './components/SectionAIEmployees';
import SectionIndustries from './components/SectionIndustries';
import SectionHowItWorks from './components/SectionHowItWorks';
import SectionBenefits from './components/SectionBenefits';
import SectionSocialProof from './components/SectionSocialProof';
import SectionPricing from './components/SectionPricing';
import SectionFAQ from './components/SectionFAQ';
import SectionCTA from './components/SectionCTA';
import SectionWarning from './components/SectionWarning';
import SectionLeaders from './components/SectionLeaders';
import Footer from './components/Footer';
import StrategyModal from './components/StrategyModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="bg-background font-sans antialiased text-textMain selection:bg-brandPurple selection:text-white">
      
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        <SectionHero onOpenBooking={handleOpenBooking} />
        <SectionTrust />
        <SectionProblems />
        <SectionWhatIs />
        <SectionAIEmployees />
        <SectionIndustries />
        <SectionHowItWorks />
        <SectionBenefits />
        <SectionSocialProof />
        <SectionWarning />
        <SectionLeaders />
        <SectionPricing onOpenBooking={handleOpenBooking} />
        <SectionFAQ />
        <SectionCTA onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      <StrategyModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
      />

    </div>
  );
}
