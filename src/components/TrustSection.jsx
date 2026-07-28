import React from 'react';
import { Building2, Palette, HardHat, Zap, Home, Wrench } from 'lucide-react';

export default function TrustSection() {
  const sectors = [
    { name: "Architects", icon: Building2 },
    { name: "Interior Designers", icon: Palette },
    { name: "Builders", icon: HardHat },
    { name: "Generator Dealers", icon: Zap },
    { name: "Real Estate", icon: Home },
    { name: "Contractors", icon: Wrench },
  ];

  return (
    <section className="py-12 bg-[#FAFAFA] border-y border-[#ECECEC]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#666666] mb-8">
          Designed for businesses like
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {sectors.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-white border border-[#ECECEC] text-sm font-semibold text-[#111111] shadow-2xs"
              >
                <Icon className="w-4 h-4 text-[#2563EB]" />
                <span>{s.name}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
