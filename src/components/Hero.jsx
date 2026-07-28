import React from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { HeroIllustration } from './Illustrations';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="pt-36 pb-20 lg:pt-44 lg:pb-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (7 Cols) */}
          <div className="lg:col-span-7 max-w-2xl">
            
            {/* Soft Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFAFA] border border-[#ECECEC] text-xs font-medium text-[#666666] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>Digital Workforce Platform for Modern Businesses</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#111111] tracking-tight leading-[1.08] mb-6">
              Hire AI Employees That Work 24/7.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#666666] font-normal leading-relaxed mb-10">
              Never miss another lead, answer every customer instantly, automate repetitive work, and give your team more time to grow the business.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#how-it-works"
                className="px-7 py-4 rounded-full bg-[#FAFAFA] hover:bg-[#F3F3F3] text-[#111111] font-semibold text-sm border border-[#ECECEC] transition-all flex items-center justify-center gap-2"
              >
                <span>See How It Works</span>
                <ChevronRight className="w-4 h-4 text-[#666666]" />
              </a>
            </div>

            {/* Minimal Trust Features */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#666666]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2563EB]" />
                <span>Zero Training Friction</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2563EB]" />
                <span>Sub-2 Second Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2563EB]" />
                <span>48-Hour Deployment</span>
              </div>
            </div>

          </div>

          {/* Right Vector Illustration Column (5 Cols) */}
          <div className="lg:col-span-5">
            <HeroIllustration />
          </div>

        </div>

      </div>
    </section>
  );
}
