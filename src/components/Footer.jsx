import React from 'react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#FAFAFA] text-[#666666] border-t border-[#ECECEC] py-16 text-xs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#ECECEC]">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs">
                M
              </div>
              <span className="font-bold text-lg text-[#111111]">MivizHub</span>
            </div>
            <p className="text-xs text-[#666666] max-w-sm">
              Build Your Digital Workforce. Hire AI Employees that answer customers, qualify leads, and perform real business roles 24/7.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 font-medium">
            <a href="#ai-employees" className="hover:text-[#111111] transition-colors">Solutions</a>
            <a href="#industries" className="hover:text-[#111111] transition-colors">Industries</a>
            <a href="#how-it-works" className="hover:text-[#111111] transition-colors">How It Works</a>
            <a href="#why-mivizhub" className="hover:text-[#111111] transition-colors">Why Us</a>
            <button onClick={onOpenBooking} className="text-[#2563EB] hover:underline font-semibold">
              Book Strategy Call
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#888888]">
          <p>© 2026 MivizHub Inc. All rights reserved.</p>
          <p>Hire AI Employees That Work 24/7.</p>
        </div>

      </div>
    </footer>
  );
}
