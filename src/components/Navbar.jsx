import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#ai-employees" },
    { name: "How it Works", href: "#how-it-works" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-darkBg/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-sm' 
        : 'bg-darkBg border-b border-transparent py-5'
    }`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-electricBlue text-white flex items-center justify-center font-extrabold text-sm shadow-[0_0_15px_rgba(0,102,255,0.5)]">
            M
          </div>
          <span className="font-bold text-xl text-white tracking-tight">
            MivizHub
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-full bg-electricBlue hover:bg-blue-600 text-white text-xs font-semibold shadow-[0_0_15px_rgba(0,102,255,0.4)] transition-all flex items-center gap-2"
          >
            <span>Book Free Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cardBg border-b border-white/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-400 hover:text-white py-1.5"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="mt-2 w-full py-3 rounded-full bg-electricBlue hover:bg-blue-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,102,255,0.4)]"
          >
            <span>Book Free Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
}
