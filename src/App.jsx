import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SectionHero from './components/SectionHero';
import SectionProblems from './components/SectionProblems';
import SectionSolution from './components/SectionSolution';
import SectionAIEmployees from './components/SectionAIEmployees';
import SectionWorkflow from './components/SectionWorkflow';
import SectionIndustries from './components/SectionIndustries';
import SectionOutcomes from './components/SectionOutcomes';
import SectionWhyUs from './components/SectionWhyUs';
import SectionCTA from './components/SectionCTA';
import Footer from './components/Footer';
import StrategyModal from './components/StrategyModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Sticky Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow - Reimagined Emotionally */}
      <main>
        {/* 1. Confidence */}
        <SectionHero onOpenBooking={handleOpenBooking} />

        {/* 2. Frustration */}
        <SectionProblems />

        {/* 3. Relief */}
        <SectionSolution />

        {/* 4. Curiosity */}
        <SectionAIEmployees onOpenBooking={handleOpenBooking} />

        {/* 5. Simplicity */}
        <SectionWorkflow />

        {/* 6. Relevance */}
        <SectionIndustries onOpenBooking={handleOpenBooking} />

        {/* 7. Confidence */}
        <SectionOutcomes />

        {/* 8. Trust */}
        <SectionWhyUs />

        {/* 9. Excitement */}
        <SectionCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Clean Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Strategy Booking Modal */}
      <StrategyModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
      />

    </div>
  );
}
