import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function StopManualWork({ onOpenBooking }) {
  const manualPoints = [
    { title: "Missed Calls & Voicemails", desc: "Phone rings during job site visits, client meetings, or after 5 PM, losing deals to competitors." },
    { title: "Repetitive Quote & Rate Calculations", desc: "Estimators spend hours manually compiling line items from spec sheets and spreadsheets." },
    { title: "Stalled Follow-Ups & Forgotten Leads", desc: "Cold quotes sit in CRM without systematic multi-channel follow-up sequences." },
    { title: "Double Booking & Scheduling Phone Tag", desc: "Back-and-forth emails to confirm a single discovery meeting or site inspection." },
    { title: "Manual CRM & Spreadsheet Data Entry", desc: "Team members spend late nights manually typing call logs and proposal details into software." },
    { title: "Unanswered After-Hours Emergency Calls", desc: "Breakdowns or urgent contractor questions sit unaddressed until the next business morning." }
  ];

  const aiWorkforcePoints = [
    { title: "Instant 24/7 Response Within 2 Seconds", desc: "Every call, text, or web form inquiry is answered immediately by natural human-toned AI Employees." },
    { title: "Automated Blueprint & PDF Scope Extraction", desc: "AI Estimators parse specs and generate branded proposal PDFs in under 15 minutes." },
    { title: "Persistent Multi-Channel Lead Nurturing", desc: "Automated WhatsApp, SMS, and email follow-up sequences re-engage stalled quotes systematically." },
    { title: "Real-Time Direct Calendar Synchronization", desc: "Zero double-booking; meetings booked directly into team calendars with SMS reminders." },
    { title: "Zero-Latency Automated CRM Logging", desc: "Every transcript, project detail, and qualification score is logged into HubSpot/Salesforce instantly." },
    { title: "24/7 Triage & Smart Field Escalation", desc: "Routine FAQs resolved autonomously; emergency breakdown calls routed to on-call technicians." }
  ];

  return (
    <section className="py-24 bg-[#090909] relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-widest mb-4">
            Operational Transformation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            What Your Team <span className="text-gradient-blue">Stops Doing.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Reclaim 20+ hours per week per employee by replacing manual grunt work with autonomous execution.
          </p>
        </div>

        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side: Manual Work (Red / Muted Accent) */}
          <div className="p-8 rounded-2xl bg-[#121013] border border-red-500/20 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Manual Work & Friction</h3>
                  <span className="text-xs font-mono text-red-400 font-medium">Without MivizHub</span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-red-400/80 bg-red-500/10 px-2.5 py-1 rounded border border-red-500/20">
                High Cost • High Stress
              </span>
            </div>

            <div className="space-y-4">
              {manualPoints.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-zinc-200">{item.title}</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: AI Workforce (Electric Blue / Success Accent) */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#141824] to-[#0E111A] border border-[#0066FF]/40 space-y-6 relative overflow-hidden shadow-2xl shadow-[#0066FF]/10">
            <div className="flex items-center justify-between pb-4 border-b border-[#0066FF]/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0066FF] flex items-center justify-center text-white shadow-md shadow-[#0066FF]/30">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Autonomous AI Workforce</h3>
                  <span className="text-xs font-mono text-[#3385FF] font-medium">With MivizHub</span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 font-semibold">
                100% Automated 24/7
              </span>
            </div>

            <div className="space-y-4">
              {aiWorkforcePoints.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3 hover:border-[#0066FF]/40 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-zinc-300 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Bar inside card */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-300">Eliminate manual friction today</span>
              <button
                onClick={onOpenBooking}
                className="py-2.5 px-4 rounded-xl bg-[#0066FF] hover:bg-[#1A75FF] text-white text-xs font-bold shadow-md shadow-[#0066FF]/20 flex items-center gap-1.5 transition-all"
              >
                <span>Automate Operations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
