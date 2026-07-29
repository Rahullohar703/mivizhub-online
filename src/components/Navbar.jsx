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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brandAccent text-white flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              M
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-textMain">
              MivizHub
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#why-ai" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">Why AI Staffing?</a>
            <a href="#employees" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">AI Employees</a>
            <a href="#pricing" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">Pricing</a>
            <a href="#how-it-works" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">How it works</a>
            <a href="#demo" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">Demo</a>
            <a href="#faq" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">FAQs</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button onClick={onOpenBooking} variant="primary">
              BOOK A DEMO
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
          className="md:hidden absolute top-20 left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-surfaceBorder shadow-2xl px-6 py-8 flex flex-col gap-6"
        >
          <a href="#why-ai" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-textMain">Why AI Staffing?</a>
          <a href="#employees" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-textMain">AI Employees</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-textMain">Pricing</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-textMain">How it works</a>
          <a href="#demo" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-textMain">Demo</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-textMain">FAQs</a>
          
          <div className="pt-4 mt-2 border-t border-surfaceBorder">
            <Button onClick={() => { setIsMobileMenuOpen(false); onOpenBooking(); }} variant="primary" className="w-full">
              BOOK A DEMO
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
