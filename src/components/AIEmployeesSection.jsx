import React, { useState } from 'react';
import { PhoneCall, TrendingUp, Calculator, LifeBuoy, CalendarCheck, RefreshCw, ArrowRight, Check } from 'lucide-react';
import EmployeeDetailModal from './EmployeeDetailModal';

export const AI_EMPLOYEE_CARDS = [
  {
    id: "receptionist",
    title: "AI Receptionist",
    avatar: "AR",
    bullets: ["Answers calls.", "Books appointments.", "Works 24/7."],
    desc: "Answers incoming calls within 2 seconds with natural speech, answers caller questions, and books meetings directly into your calendar.",
    outcome: "100% call response rate — day, night, and weekends.",
    details: {
      responsibilities: [
        "Answers inbound telephone calls within 2 seconds",
        "Takes caller messages and collects project specs",
        "Schedules meetings directly into team Google / Outlook calendars",
        "Dispatches SMS and WhatsApp confirmation notes"
      ]
    }
  },
  {
    id: "sales",
    title: "AI Sales Assistant",
    avatar: "AS",
    bullets: ["Qualifies leads.", "Follows up.", "Updates CRM."],
    desc: "Engages web form inquiries and calls, evaluates project timelines and budgets, and nurtures prospective clients until closing.",
    outcome: "10x faster first response to new incoming inquiries.",
    details: {
      responsibilities: [
        "Responds to web inquiries & form submissions in seconds",
        "Evaluates project budget, location, and timeframe",
        "Sends quote follow-ups via WhatsApp and Email",
        "Logs structured contact data directly into your software"
      ]
    }
  },
  {
    id: "estimator",
    title: "AI Estimator",
    avatar: "AE",
    bullets: ["Collects requirements.", "Creates estimates.", "Schedules meetings."],
    desc: "Parses client spec requirements and blueprints, calculates baseline material costs, and drafts branded PDF quotes for approval.",
    outcome: "Reduces proposal turnaround time from 3 days to 15 minutes.",
    details: {
      responsibilities: [
        "Extracts room dimensions and material requirements from forms/PDFs",
        "Calculates baseline material & labor rate breakdowns",
        "Generates clean PDF proposal estimates",
        "Notifies senior estimators when custom approval is needed"
      ]
    }
  },
  {
    id: "support",
    title: "AI Support",
    avatar: "SU",
    bullets: ["Answers FAQs.", "Resolves customer queries.", "Escalates issues."],
    desc: "Provides immediate answers to common client questions regarding job progress, service policies, and maintenance schedules 24/7.",
    outcome: "Resolves 70%+ of client questions with zero team delay.",
    details: {
      responsibilities: [
        "Answers routine questions about schedules & invoices",
        "Processes maintenance and repair service requests",
        "Escalates emergency breakdown calls to field managers",
        "Maintains complete notes of every conversation"
      ]
    }
  },
  {
    id: "coordinator",
    title: "AI Project Coordinator",
    avatar: "PC",
    bullets: ["Coordinates vendors.", "Tracks progress.", "Updates schedules."],
    desc: "Keeps subcontractors, site leads, and material suppliers aligned on daily milestones with zero double-booking or scheduling friction.",
    outcome: "Keeps active job sites running smoothly without trade delays.",
    details: {
      responsibilities: [
        "Sends daily site schedule updates to subcontractors",
        "Tracks equipment rental delivery and return dates",
        "Verifies daily site progress via simple SMS updates",
        "Flags schedule bottlenecks before they cause delays"
      ]
    }
  },
  {
    id: "followup",
    title: "AI Follow-Up Assistant",
    avatar: "FA",
    bullets: ["Never lets a lead go cold.", "Re-engages quotes.", "Secures renewals."],
    desc: "Monitors outstanding proposals and unclosed quotes, sending polite, personalized follow-ups until the deal is confirmed.",
    outcome: "Recovers 15-25% of stalled quotes otherwise forgotten.",
    details: {
      responsibilities: [
        "Tracks unclosed proposals and sent estimates",
        "Executes polite follow-up messages across email & WhatsApp",
        "Re-engages past clients for annual service renewals",
        "Books follow-up review calls with your sales leads"
      ]
    }
  }
];

export default function AIEmployeesSection({ onOpenBooking }) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <section id="ai-employees" className="py-24 bg-[#FAFAFA] border-t border-[#ECECEC]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            Meet Your AI Employees
          </h2>
          <p className="text-base text-[#666666]">
            Select the digital team members your business needs today. Deploy in 48 hours.
          </p>
        </div>

        {/* 6 Simple Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_EMPLOYEE_CARDS.map((emp) => (
            <div
              key={emp.id}
              className="card-clean p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] font-bold text-sm flex items-center justify-center border border-blue-100">
                    {emp.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-[#111111]">
                    {emp.title}
                  </h3>
                </div>

                {/* Bullets */}
                <div className="space-y-2 mb-6">
                  {emp.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-[#111111]">
                      <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Short Description */}
                <p className="text-xs text-[#666666] leading-relaxed mb-6">
                  {emp.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#ECECEC] space-y-4">
                <div className="text-xs">
                  <span className="text-[#666666] block text-[11px] uppercase tracking-wider font-medium mb-0.5">Business Outcome:</span>
                  <span className="font-semibold text-[#111111]">{emp.outcome}</span>
                </div>

                <button
                  onClick={() => setSelectedEmployee(emp)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FAFAFA] hover:bg-[#F0F0F0] text-[#111111] text-xs font-semibold border border-[#ECECEC] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#666666]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Learn More Modal */}
      {selectedEmployee && (
        <EmployeeDetailModal
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
          onOpenBooking={() => {
            setSelectedEmployee(null);
            onOpenBooking();
          }}
        />
      )}
    </section>
  );
}
