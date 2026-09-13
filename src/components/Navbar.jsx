import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Container from './ui/Container';

export default function Navbar({ onOpenBooking }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-surfaceBorder transition-all duration-300">
      <Container>
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-2xl tracking-tight">
              <span className="text-textMain">Miviz</span><span className="text-[#31c0de]">Hub</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            <a href="#hero" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">Home</a>
            <a href="#marketing" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">Marketing</a>
            <a href="#ai-staffing" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">AI Staffing</a>
            <a href="#how-it-works" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">How It Works</a>
            <a href="#industries" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">Industries</a>
            <a href="#differentiator" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">About</a>
            <a href="#faq" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">FAQ</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button onClick={onOpenBooking} variant="primary" className="px-6 py-2.5 font-semibold text-sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -mr-2 text-textMain focus:outline-none"
            aria-label="Toggle navigation menu"
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
          className="md:hidden absolute top-20 left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-surfaceBorder shadow-2xl px-6 py-8 flex flex-col gap-5"
        >
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-textMain">Home</a>
          <a href="#marketing" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-textMain">Marketing & Growth</a>
          <a href="#ai-staffing" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-textMain">AI Staffing</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-textMain">How It Works</a>
          <a href="#industries" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-textMain">Industries</a>
          <a href="#differentiator" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-textMain">About</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-textMain">FAQ</a>
          
          <div className="pt-4 mt-2 border-t border-surfaceBorder">
            <Button onClick={() => { setIsMobileMenuOpen(false); onOpenBooking(); }} variant="primary" className="w-full py-3">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
