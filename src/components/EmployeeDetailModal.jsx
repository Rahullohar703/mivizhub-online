import React from 'react';
import { X, ArrowRight, Check } from 'lucide-react';

export default function EmployeeDetailModal({ employee, onClose, onOpenBooking }) {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white border border-[#ECECEC] rounded-3xl shadow-xl overflow-hidden p-6 sm:p-8 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#ECECEC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] font-bold flex items-center justify-center text-sm">
              {employee.avatar}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111]">{employee.title}</h3>
              <p className="text-xs text-[#666666]">AI Employee Overview</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-[#FAFAFA] text-[#666666] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Outcome */}
        <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2563EB]">Primary Business Impact</span>
          <p className="text-sm font-bold text-[#111111]">{employee.outcome}</p>
        </div>

        {/* Responsibilities */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase text-[#666666] tracking-wider">How It Works For You:</h4>
          <div className="space-y-2">
            {employee.details.responsibilities.map((resp, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#111111] p-2.5 rounded-xl bg-[#FAFAFA] border border-[#ECECEC]">
                <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-1/3 py-3 rounded-full bg-[#FAFAFA] hover:bg-[#F0F0F0] text-[#111111] text-xs font-semibold border border-[#ECECEC]"
          >
            Close
          </button>
          <button
            onClick={onOpenBooking}
            className="w-2/3 py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Hire {employee.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
