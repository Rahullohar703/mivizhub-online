import React from 'react';
import { Link } from 'react-router-dom';
import Container from './ui/Container';
import { ArrowFillButton } from './ui/arrow-fill-button';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#05070d] pt-16 pb-12 border-t border-white/10 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-surfaceBorder/60">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-heading font-extrabold text-2xl tracking-tight">
                <span className="text-textMain">Miviz</span><span className="text-[#31c0de]">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-textMuted max-w-sm leading-relaxed mb-4">
              Done-for-you growth marketing and 24/7 AI operations for construction, trade pros, and ops-heavy teams. Win more high-value projects without working 80 hours a week.
            </p>
            <div className="text-xs text-textMuted font-medium">
              Contractor Growth Plans • 24/7 Field &amp; Office AI Operations
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-textMain mb-4">
              Platform & Resources
            </h5>
            <ul className="space-y-2 text-sm text-textMuted">
              <li>
                <Link to="/growth" className="hover:text-textMain transition-colors">Marketing & Growth</Link>
              </li>
              <li>
                <Link to="/casestudy" className="hover:text-[#31c0de] transition-colors font-medium">Case Studies</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#31c0de] transition-colors font-medium">Growth & AI Blog</Link>
              </li>
              <li>
                <a href="/#offers" className="hover:text-textMain transition-colors">3 Core Offers</a>
              </li>
              <li>
                <a href="/#ai-staffing" className="hover:text-textMain transition-colors">AI Field Operations</a>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-textMain transition-colors">How It Works</a>
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
            <div className="pt-2">
              <ArrowFillButton 
                btnText="Get Started" 
                onClick={onOpenBooking} 
                bgColor="#141824"
                textColor="#ffffff"
                fillBgColor="#31c0de"
                fillTextColor="#09090b"
                arrowColor="#09090b"
                hoverArrowColor="#09090b"
                className="border-white/10"
              />
            </div>
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
