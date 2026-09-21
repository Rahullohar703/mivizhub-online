import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, Layers, Briefcase, Tag, ListOrdered, HelpCircle, ArrowRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AntiMetalButton } from '@/components/ui/anti-metal-button';


export default function Navbar({ onOpenBooking }) {
  const location = useLocation();
  const isGrowthPage = location.pathname === '/growth';
  
  const [activeTab, setActiveTab] = useState(isGrowthPage ? 'Marketing & Growth' : 'AI Workforce');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync activeTab whenever route changes
  useEffect(() => {
    if (location.pathname === '/growth') {
      setActiveTab('Marketing & Growth');
    } else {
      setActiveTab('AI Workforce');
    }
  }, [location.pathname]);

  // Home navigation items (Pricing removed as requested: pricing is on /growth)
  const homeNavItems = [
    { name: 'AI Workforce', url: '#ai-staffing', isRoute: false, icon: Users },
    { name: 'Marketing & Growth', url: '/growth', isRoute: true, icon: TrendingUp },
    { name: 'Why Both', url: '#differentiator', isRoute: false, icon: Layers },
    { name: 'Industries', url: '#industries', isRoute: false, icon: Briefcase },
    { name: 'Process', url: '#how-it-works', isRoute: false, icon: ListOrdered },
    { name: 'FAQ', url: '#faq', isRoute: false, icon: HelpCircle },
  ];

  // Growth navigation items (Includes Pricing)
  const growthNavItems = [
    { name: 'AI Workforce', url: '/', isRoute: true, icon: Users },
    { name: 'Marketing & Growth', url: '/growth', isRoute: true, icon: TrendingUp },
    { name: 'How We Work', url: '#how-we-work', isRoute: false, icon: Layers },
    { name: 'Pricing', url: '#pricing', isRoute: false, icon: Tag },
    { name: 'Methodology', url: '#methodology', isRoute: false, icon: ListOrdered },
    { name: 'Why Us', url: '#differentiation', isRoute: false, icon: Briefcase },
    { name: 'FAQ', url: '#faq', isRoute: false, icon: HelpCircle },
  ];

  const navItems = isGrowthPage ? growthNavItems : homeNavItems;

  const handleCtaClick = () => {
    if (isGrowthPage) {
      const pricingEl = document.getElementById('pricing');
      if (pricingEl) {
        pricingEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        onOpenBooking();
      }
    } else {
      onOpenBooking();
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none">
      
      {/* Floating Modern Pill Container */}
      <nav 
        aria-label="Main Navigation"
        className="w-[calc(100%-2rem)] sm:w-auto max-w-md sm:max-w-fit rounded-full bg-[#0c0c12]/90 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] px-4 sm:px-5 py-2 flex items-center justify-between sm:justify-start gap-3 sm:gap-4 lg:gap-6 pointer-events-auto transition-colors"
      >
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={() => setActiveTab('AI Workforce')}
          className="flex items-center gap-1.5 pl-1 select-none group"
        >
          <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight">
            <span className="text-white group-hover:text-gray-100 transition-colors">Miviz</span>
            <span className="text-[#31c0de]">Hub</span>
          </span>
          {isGrowthPage && (
            <span className="hidden sm:inline-flex text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-[#31c0de]/10 text-[#31c0de] border border-[#31c0de]/20 ml-1 font-bold">
              Growth
            </span>
          )}
        </Link>

        {/* Desktop Tubelight Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] p-1 rounded-full">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;

            const content = (
              <>
                <span className="relative z-10">{item.name}</span>
                {/* Tubelight Lamp Glow Effect */}
                {isActive && (
                  <motion.div
                    layoutId="tubelight-lamp-glow"
                    className="absolute inset-0 w-full bg-[#31c0de]/15 rounded-full z-0"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }}
                  >
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#31c0de] rounded-t-full shadow-[0_0_12px_#31c0de]" />
                  </motion.div>
                )}
              </>
            );

            const linkClasses = cn(
              "relative cursor-pointer text-xs xl:text-sm font-semibold px-3.5 py-1.5 rounded-full transition-colors",
              isActive ? "text-white font-bold" : "text-gray-300 hover:text-white",
              item.name === 'Marketing & Growth' && !isGrowthPage && "text-[#31c0de] hover:text-[#5ce1e6]"
            );

            if (item.isRoute) {
              return (
                <Link
                  key={item.name}
                  to={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={linkClasses}
                >
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={linkClasses}
              >
                {content}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <AntiMetalButton
            onClick={handleCtaClick}
            label={isGrowthPage ? "Get Started" : "Book a call"}
            size="sm"
            className="hidden sm:inline-flex rounded-full shadow-md shadow-blue-500/10"
          />


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
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden w-full max-w-sm mt-2 rounded-2xl bg-[#0c101a]/95 border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8)] p-5 flex flex-col gap-2 pointer-events-auto"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              const itemClass = cn(
                "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors",
                isActive ? "bg-[#31c0de]/10 text-[#31c0de] font-bold" : "text-gray-200 hover:text-white hover:bg-white/10"
              );

              if (item.isRoute) {
                return (
                  <Link
                    key={item.name}
                    to={item.url}
                    onClick={() => {
                      setActiveTab(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={itemClass}
                  >
                    <Icon size={18} className={isActive ? "text-[#31c0de]" : "text-gray-400"} />
                    <span>{item.name}</span>
                  </Link>
                );
              }

              return (
                <a 
                  key={item.name}
                  href={item.url} 
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMobileMenuOpen(false);
                  }} 
                  className={itemClass}
                >
                  <Icon size={18} className={isActive ? "text-[#31c0de]" : "text-gray-400"} />
                  <span>{item.name}</span>
                </a>
              );
            })}
            
            <div className="pt-3 mt-1 border-t border-white/10 flex justify-center">
              <AntiMetalButton 
                onClick={() => { setIsMobileMenuOpen(false); handleCtaClick(); }} 
                label={isGrowthPage ? "Get Started" : "Book a call"}
                className="w-full h-11 rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

