import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SectionHero from './components/SectionHero';
import SectionProblems from './components/SectionProblems';
import SectionSolution from './components/SectionSolution';
import SectionAIEmployees from './components/SectionAIEmployees';
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
    <div className="min-h-screen bg-darkBg text-white selection:bg-electricBlue selection:text-white font-sans antialiased overflow-x-hidden">
      
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        <SectionHero onOpenBooking={handleOpenBooking} />
        <SectionProblems />
        <SectionSolution />
        <SectionAIEmployees onOpenBooking={handleOpenBooking} />
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
