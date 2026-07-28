import React from 'react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-darkBg text-gray-400 border-t border-white/10 py-16 text-xs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-electricBlue text-white flex items-center justify-center font-bold text-xs shadow-[0_0_15px_rgba(0,102,255,0.5)]">
                M
              </div>
              <span className="font-bold text-lg text-white">MivizHub</span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm">
              Build Your Digital Workforce. Hire AI Employees that answer customers, qualify leads, and perform real business roles 24/7.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 font-medium">
            <a href="#ai-employees" className="hover:text-white transition-colors">Solutions</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <button onClick={onOpenBooking} className="text-electricBlue hover:underline font-semibold">
              Book Strategy Call
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© 2026 MivizHub Inc. All rights reserved.</p>
          <p>Hire AI Employees That Work 24/7.</p>
        </div>

      </div>
    </footer>
  );
}
