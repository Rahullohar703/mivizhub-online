import React from 'react';
import Container from './ui/Container';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-background pt-16 pb-12 border-t border-surfaceBorder relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-surfaceBorder/60">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="font-heading font-extrabold text-2xl tracking-tight">
                <span className="text-textMain">Miviz</span><span className="text-[#31c0de]">Hub</span>
              </span>
            </a>
            <p className="text-sm text-textMuted max-w-sm leading-relaxed mb-4">
              Marketing brings more business in. AI staffing helps get the work done. Scale operations and accelerate revenue without the payroll burden.
            </p>
            <div className="text-xs text-textMuted font-medium">
              Marketing & Growth • AI Staffing Solutions
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-textMain mb-4">
              Services & Platform
            </h5>
            <ul className="space-y-2 text-sm text-textMuted">
              <li>
                <a href="#marketing" className="hover:text-textMain transition-colors">Marketing & Growth</a>
              </li>
              <li>
                <a href="#ai-staffing" className="hover:text-textMain transition-colors">AI Staffing</a>
              </li>
              <li>
                <a href="#differentiator" className="hover:text-textMain transition-colors">Core Differentiator</a>
              </li>
              <li>
                <a href="#industries" className="hover:text-textMain transition-colors">Industries We Help</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-textMain transition-colors">How It Works</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-textMain mb-4">
              Get In Touch
            </h5>
            <ul className="space-y-2 text-sm text-textMuted mb-6">
              <li>
                <button onClick={onOpenBooking} className="text-brandAccent hover:underline text-left">
                  Book a Strategy Call →
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-textMain transition-colors">Common FAQs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-textMain transition-colors">Contact Team</a>
              </li>
            </ul>
            <button 
              onClick={onOpenBooking}
              className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-surface border border-surfaceBorder text-textMain hover:border-brandAccent/60 transition-all"
            >
              Get Started
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-textMuted font-medium">
          <div>
            © {new Date().getFullYear()} MivizHub. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Marketing brings business in. AI staffing gets the work done.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
