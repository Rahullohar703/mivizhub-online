import React from 'react';

export default function BusinessOutcomesSection() {
  const outcomes = [
    {
      stat: "100%",
      label: "Never Miss Another Lead",
      desc: "Every inbound telephone call, text, or web form inquiry is answered immediately day or night."
    },
    {
      stat: "24/7",
      label: "Always Available",
      desc: "Your digital workforce operates 365 days a year without overtime pay or holiday coverage gaps."
    },
    {
      stat: "10x",
      label: "Faster Response",
      desc: "Engage prospective clients within 2 seconds before they leave your website or call competitors."
    },
    {
      stat: "20+ Hrs",
      label: "Less Manual Work",
      desc: "Reclaim over 20 hours per week per employee from repetitive phone tag and quote administration."
    },
    {
      stat: "38%",
      label: "More Closed Deals",
      desc: "Persistent automated follow-up sequences prevent proposals from stalling without staff effort."
    }
  ];

  return (
    <section id="outcomes" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            Business Outcomes
          </h2>
          <p className="text-base text-[#666666]">
            Clear, measurable results that directly impact your company's revenue and team sanity.
          </p>
        </div>

        {/* Statistic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="card-clean p-6 rounded-3xl text-center flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#2563EB] tracking-tight block mb-2 font-heading">
                  {item.stat}
                </span>
                <h3 className="text-base font-bold text-[#111111] mb-2">
                  {item.label}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
