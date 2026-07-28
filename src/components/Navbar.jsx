import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brandBlack text-white flex items-center justify-center font-bold text-lg">
              M
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-textMain">
              MivizHub
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#employees" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">Employees</a>
            <a href="#industries" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">Industries</a>
            <a href="#how-it-works" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">How it Works</a>
            <a href="#faq" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">FAQ</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button onClick={onOpenBooking} variant="primary">
              Book a Free Chat
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -mr-2 text-textMain"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-lg px-6 py-8 flex flex-col gap-6"
        >
          <a href="#employees" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-textMain">Employees</a>
          <a href="#industries" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-textMain">Industries</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-textMain">How it Works</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-textMain">FAQ</a>
          
          <div className="pt-4 mt-2 border-t border-gray-100">
            <Button onClick={() => { setIsMobileMenuOpen(false); onOpenBooking(); }} variant="primary" className="w-full">
              Book a Free Chat
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
