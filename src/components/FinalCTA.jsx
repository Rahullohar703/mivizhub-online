import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA({ onOpenBooking }) {
  return (
    <section className="py-24 bg-white border-t border-[#ECECEC]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        
        <div className="card-accent p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-blue-50/50 to-white">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            Ready to Hire Your First AI Employee?
          </h2>

          <p className="text-lg text-[#666666] mb-8 max-w-xl mx-auto">
            Let's build a workforce that never sleeps—so your business can respond faster, close more deals, and grow.
          </p>

          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 mx-auto"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
