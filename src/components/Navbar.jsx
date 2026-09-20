import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, TrendingUp, Users, Layers, Briefcase, Tag, ListOrdered, HelpCircle, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Marketing', url: '#marketing', icon: TrendingUp },
    { name: 'AI Staffing', url: '#ai-staffing', icon: Users },
    { name: 'Why Both', url: '#differentiator', icon: Layers },
    { name: 'Industries', url: '#industries', icon: Briefcase },
    { name: 'Process', url: '#how-it-works', icon: ListOrdered },
    { name: 'Pricing', url: '#pricing', icon: Tag },
    { name: 'FAQ', url: '#faq', icon: HelpCircle },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none">
      
      {/* Floating Modern Pill Container */}
      <nav 
        aria-label="Main Navigation"
        className="w-[calc(100%-2rem)] sm:w-auto max-w-md sm:max-w-fit rounded-full bg-[#0c0c12]/85 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.55)] px-4 sm:px-5 py-2 flex items-center justify-between sm:justify-start gap-4 sm:gap-5 lg:gap-6 pointer-events-auto transition-all duration-300"
      >
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-1.5 pl-1 select-none group">
          <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight">
            <span className="text-white group-hover:text-gray-100 transition-colors">Miviz</span>
            <span className="text-[#31c0de]">Hub</span>
          </span>
        </a>

        {/* Desktop Tubelight Navigation Links - The Inner Pill Design */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md p-1 rounded-full">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-xs xl:text-sm font-semibold px-4 py-1.5 rounded-full transition-colors",
                  "text-gray-300 hover:text-white",
                  isActive && "text-white bg-white/5",
                )}
              >
                <span>{item.name}</span>

                {/* Tubelight Lamp Glow Effect */}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-[#31c0de]/10 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#31c0de] rounded-t-full shadow-[0_0_12px_#31c0de]">
                      <div className="absolute w-12 h-6 bg-[#31c0de]/25 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-[#31c0de]/25 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-[#31c0de]/30 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs font-semibold rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-md shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Intro Call
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button 
            className="lg:hidden p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Tubelight Dropdown Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden w-full max-w-sm mt-2 rounded-2xl bg-[#0e1628]/95 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-5 flex flex-col gap-2 pointer-events-auto"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <a 
                  key={item.name}
                  href={item.url} 
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMobileMenuOpen(false);
                  }} 
                  className={cn(
                    "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all",
                    isActive ? "bg-[#31c0de]/10 text-[#31c0de]" : "text-gray-200 hover:text-white hover:bg-white/10"
                  )}
                >
                  <Icon size={18} className={isActive ? "text-[#31c0de]" : "text-gray-400"} />
                  <span>{item.name}</span>
                </a>
              );
            })}
            
            <div className="pt-3 mt-1 border-t border-white/10">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onOpenBooking(); }} 
                className="w-full py-2.5 text-center text-sm font-semibold rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Intro Call</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
