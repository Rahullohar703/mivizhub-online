import React from 'react';

// Hero Illustration: 6 AI Employees collaborating smoothly in a serene modern digital office layout
export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center p-4">
      {/* Background Soft Glow Circle */}
      <div className="absolute inset-4 rounded-full bg-blue-50/60 blur-2xl -z-10" />

      {/* Main Container Card */}
      <div className="w-full h-full bg-white rounded-3xl border border-[#ECECEC] p-6 shadow-xl shadow-slate-200/50 flex flex-col justify-between relative overflow-hidden animate-float">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#ECECEC]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <span className="text-xs font-semibold text-[#111111] tracking-tight">MivizHub Digital Workforce</span>
          </div>
          <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
            6 Employees Active 24/7
          </span>
        </div>

        {/* 6 AI Employees Collaboration Grid Visual */}
        <div className="grid grid-cols-2 gap-3 py-4">
          
          {/* Card 1: AI Receptionist */}
          <div className="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#ECECEC] hover:border-blue-200 transition-colors group">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                AR
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111111]">AI Receptionist</h4>
                <span className="text-[10px] text-emerald-600 font-medium">Answering Calls</span>
              </div>
            </div>
            <div className="w-full bg-white h-1.5 rounded-full overflow-hidden border border-[#ECECEC]">
              <div className="bg-blue-600 h-full w-full rounded-full" />
            </div>
          </div>

          {/* Card 2: AI Sales Assistant */}
          <div className="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#ECECEC] hover:border-blue-200 transition-colors group">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                AS
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111111]">AI Sales Rep</h4>
                <span className="text-[10px] text-blue-600 font-medium">Qualifying Leads</span>
              </div>
            </div>
            <div className="w-full bg-white h-1.5 rounded-full overflow-hidden border border-[#ECECEC]">
              <div className="bg-blue-600 h-full w-4/5 rounded-full" />
            </div>
          </div>

          {/* Card 3: AI Estimator */}
          <div className="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#ECECEC] hover:border-blue-200 transition-colors group">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                AE
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111111]">AI Estimator</h4>
                <span className="text-[10px] text-slate-500 font-medium">Drafting Quote</span>
              </div>
            </div>
            <div className="w-full bg-white h-1.5 rounded-full overflow-hidden border border-[#ECECEC]">
              <div className="bg-blue-600 h-full w-full rounded-full" />
            </div>
          </div>

          {/* Card 4: AI Support */}
          <div className="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#ECECEC] hover:border-blue-200 transition-colors group">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                SU
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111111]">AI Support</h4>
                <span className="text-[10px] text-emerald-600 font-medium">Resolving FAQs</span>
              </div>
            </div>
            <div className="w-full bg-white h-1.5 rounded-full overflow-hidden border border-[#ECECEC]">
              <div className="bg-blue-600 h-full w-3/4 rounded-full" />
            </div>
          </div>

          {/* Card 5: AI Project Coordinator */}
          <div className="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#ECECEC] hover:border-blue-200 transition-colors group">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                PC
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111111]">AI Coordinator</h4>
                <span className="text-[10px] text-slate-500 font-medium">Syncing Schedules</span>
              </div>
            </div>
            <div className="w-full bg-white h-1.5 rounded-full overflow-hidden border border-[#ECECEC]">
              <div className="bg-blue-600 h-full w-full rounded-full" />
            </div>
          </div>

          {/* Card 6: AI Follow-Up Assistant */}
          <div className="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#ECECEC] hover:border-blue-200 transition-colors group">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                FA
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111111]">AI Follow-Up</h4>
                <span className="text-[10px] text-blue-600 font-medium">Nurturing Quotes</span>
              </div>
            </div>
            <div className="w-full bg-white h-1.5 rounded-full overflow-hidden border border-[#ECECEC]">
              <div className="bg-blue-600 h-full w-5/6 rounded-full" />
            </div>
          </div>

        </div>

        {/* Bottom Banner inside illustration */}
        <div className="pt-3 border-t border-[#ECECEC] flex items-center justify-between text-[11px] text-[#666666]">
          <span className="font-medium text-[#111111]">Synchronized Team Flow</span>
          <span className="text-blue-600 font-semibold">Zero Missed Tasks</span>
        </div>

      </div>
    </div>
  );
}
