import React from 'react';
import { Link } from 'react-router-dom';
import Container from './ui/Container';
import { ArrowFillButton } from './ui/arrow-fill-button';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 relative">
      <Container className="max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                Miviz<span className="text-blue-500">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-4">
              Growth &amp; AI Operations for Construction, Real Estate, and Operations-Heavy Industries.
            </p>
            <div className="text-xs text-slate-500 font-medium">
              Industry understanding • Growth systems • Smarter operations
            </div>
          </div>

          {/* Solutions / Quick Links */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Solutions
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="/#solutions" className="hover:text-white transition-colors">Digital Presence</a>
              </li>
              <li>
                <a href="/#solutions" className="hover:text-white transition-colors">Lead Generation</a>
              </li>
              <li>
                <a href="/#solutions" className="hover:text-white transition-colors">AI Automation</a>
              </li>
              <li>
                <a href="/#system" className="hover:text-white transition-colors">Business Operations</a>
              </li>
              <li>
                <Link to="/growth" className="hover:text-blue-400 transition-colors">Marketing &amp; Growth Plans</Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Get In Touch
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-400 mb-6">
              <li>
                <button onClick={onOpenBooking} className="text-blue-400 hover:underline text-left cursor-pointer">
                  Book a Strategy Call →
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Common FAQs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Team</a>
              </li>
            </ul>
            <div>
              <ArrowFillButton 
                btnText="Book Strategy Call" 
                onClick={onOpenBooking} 
                bgColor="#1e293b"
                textColor="#ffffff"
                fillBgColor="#2563eb"
                fillTextColor="#ffffff"
                arrowColor="#ffffff"
                hoverArrowColor="#ffffff"
                className="border-slate-700"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} MivizHub. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-slate-400 transition-colors">Contact</a>
            <span className="text-slate-700">•</span>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span className="text-slate-700">•</span>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
