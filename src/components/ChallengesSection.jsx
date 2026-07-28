import React from 'react';
import { PhoneOff, Clock, FileSpreadsheet } from 'lucide-react';

export default function ChallengesSection() {
  const challenges = [
    {
      title: "Missed Calls",
      desc: "Phone rings while your team is on job sites or after business hours. Inbound prospects get voicemail and immediately call your nearest competitor.",
      icon: PhoneOff
    },
    {
      title: "Slow Follow-Ups",
      desc: "Quotes and project proposals sit unaddressed for days because staff is busy with daily fire-fighting. Cold leads decay without systematic contact.",
      icon: Clock
    },
    {
      title: "Too Much Manual Work",
      desc: "Senior staff spend 15+ hours every week typing data into spreadsheets, answering routine FAQs, and playing appointment scheduling phone tag.",
      icon: FileSpreadsheet
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-4">
            Your Biggest Challenges
          </h2>
          <p className="text-base text-[#666666]">
            Every growing business faces the same administrative bottlenecks that drain time and cost revenue.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-clean p-8 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
