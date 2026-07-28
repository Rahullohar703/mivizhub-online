import React, { useState } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function StrategyModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: "Construction & Builders",
    rolesNeeded: ["AI Receptionist", "AI Sales Assistant"],
    name: "",
    email: "",
    company: ""
  });

  if (!isOpen) return null;

  const toggleRole = (role) => {
    setFormData(prev => {
      const exists = prev.rolesNeeded.includes(role);
      if (exists) {
        return { ...prev, rolesNeeded: prev.rolesNeeded.filter(r => r !== role) };
      } else {
        return { ...prev, rolesNeeded: [...prev.rolesNeeded, role] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#60A5FA', '#111111']
      });
    } catch (err) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white border border-[#ECECEC] rounded-3xl shadow-xl overflow-hidden p-6 sm:p-8 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#ECECEC]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs">
              M
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#111111]">Book Free Strategy Call</h3>
              <p className="text-xs text-[#666666]">Design Your Custom AI Workforce</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-[#FAFAFA] text-[#666666] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-semibold uppercase text-[#2563EB] tracking-wider">Step 1 of 2</span>
              <h4 className="text-lg font-bold text-[#111111] mt-0.5">Select Industry & Roles</h4>
            </div>

            {/* Industry choices */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#111111]">Industry:</label>
              <div className="grid grid-cols-2 gap-2">
                {["Architects", "Interior Designers", "Builders", "Generator Dealers", "Real Estate", "Contractors"].map((ind) => (
                  <button
                    type="button"
                    key={ind}
                    onClick={() => setFormData({ ...formData, industry: ind })}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                      formData.industry === ind
                        ? 'bg-[#2563EB] text-white border-[#2563EB] font-semibold'
                        : 'bg-[#FAFAFA] text-[#111111] border-[#ECECEC] hover:bg-[#F3F3F3]'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Employee selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#111111]">AI Employees Needed:</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "AI Receptionist", "AI Sales Assistant",
                  "AI Estimator", "AI Support",
                  "AI Project Coordinator", "AI Follow-Up Assistant"
                ].map((role) => {
                  const isSelected = formData.rolesNeeded.includes(role);
                  return (
                    <button
                      type="button"
                      key={role}
                      onClick={() => toggleRole(role)}
                      className={`p-2 rounded-xl text-xs border flex items-center justify-between transition-all ${
                        isSelected 
                          ? 'bg-blue-50 border-[#2563EB] text-[#2563EB] font-semibold' 
                          : 'bg-[#FAFAFA] border-[#ECECEC] text-[#666666]'
                      }`}
                    >
                      <span className="text-[11px]">{role}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#2563EB]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-semibold uppercase text-[#2563EB] tracking-wider">Step 2 of 2</span>
              <h4 className="text-lg font-bold text-[#111111] mt-0.5">Your Details</h4>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[#111111] block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Robert Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#FAFAFA] border border-[#ECECEC] text-xs text-[#111111] focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#111111] block mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="robert@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#FAFAFA] border border-[#ECECEC] text-xs text-[#111111] focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#111111] block mb-1">Company Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Smith & Sons Construction"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#FAFAFA] border border-[#ECECEC] text-xs text-[#111111] focus:outline-none focus:border-[#2563EB]"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-full bg-[#FAFAFA] text-[#111111] text-xs font-semibold border border-[#ECECEC]"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm Booking</span>
                <Check className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>

            <h4 className="text-2xl font-bold text-[#111111]">Call Confirmed!</h4>
            <p className="text-xs text-[#666666] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. We've sent details to <strong>{formData.email}</strong> to review custom AI workforce options for <strong>{formData.company}</strong>.
            </p>

            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#111111] hover:bg-[#222222] text-white text-xs font-semibold"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
