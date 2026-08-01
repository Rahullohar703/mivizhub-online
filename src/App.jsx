import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SectionHero from './components/SectionHero';
import SectionTrust from './components/SectionTrust';
import SectionProblems from './components/SectionProblems';
import SectionDigitalWorkforce from './components/SectionDigitalWorkforce';
import SectionAdvantages from './components/SectionAdvantages';
import SectionIndustries from './components/SectionIndustries';
import SectionServices from './components/SectionServices';
import SectionHowItWorks from './components/SectionHowItWorks';
import SectionCaseStudies from './components/SectionCaseStudies';
import SectionCredentials from './components/SectionCredentials';
import SectionFAQ from './components/SectionFAQ';
import SectionCTA from './components/SectionCTA';
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
        <SectionDigitalWorkforce />
        <SectionAdvantages />
        <SectionIndustries />
        <SectionServices />
        <SectionHowItWorks />
        <SectionCaseStudies />
        <SectionCredentials />
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
