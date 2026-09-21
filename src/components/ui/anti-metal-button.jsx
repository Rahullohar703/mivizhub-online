"use client";

import React from "react";
import { cn } from "@/lib/utils";

const DoubleChevron = ({ index, dotColor }) => {
  const base = index * 0.12;
  const dots = [
    { cx: 2, cy: 2, d: 0 },
    { cx: 5, cy: 5, d: 0.05 },
    { cx: 8, cy: 8, d: 0.1 },
    { cx: 5, cy: 11, d: 0.15 },
    { cx: 2, cy: 14, d: 0.2 },
    { cx: 6, cy: 2, d: 0.05 },
    { cx: 9, cy: 5, d: 0.1 },
    { cx: 12, cy: 8, d: 0.15 },
    { cx: 9, cy: 11, d: 0.2 },
    { cx: 6, cy: 14, d: 0.25 },
  ];

  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      aria-hidden="true"
      focusable="false"
      className="shrink-0 overflow-visible"
    >
      <g fill={dotColor}>
        {dots.map((p, i) => (
          <circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r="1"
            className="bd-dot"
            style={{ animationDelay: `${base + p.d}s` }}
          />
        ))}
      </g>
    </svg>
  );
};

export const AntiMetalButton = React.forwardRef(
  (
    {
      className,
      children,
      label,
      size = "default",
      accentFrom = "#38bdf8",
      accentTo = "#2563eb",
      dotColor = "#070b16",
      ...props
    },
    ref
  ) => {
    const content = label ?? children ?? "Book a call";

    // Size-based configurations to ensure smooth CSS animation and zero awkward void
    const sizeConfig = {
      sm: {
        buttonHeight: "h-9",
        sliderWidth: "w-7",
        textPadding: "pl-9 pr-3.5 text-xs",
        chevronCount: 8,
      },
      default: {
        buttonHeight: "h-11",
        sliderWidth: "w-9",
        textPadding: "pl-11 pr-4 text-sm",
        chevronCount: 12,
      },
      lg: {
        buttonHeight: "h-12 sm:h-13",
        sliderWidth: "w-10 sm:w-11",
        textPadding: "pl-12 sm:pl-14 pr-5 sm:pr-6 text-sm sm:text-base",
        chevronCount: 16,
      },
    }[size];

    return (
      <button
        ref={ref}
        className={cn(
          "group/btn relative inline-flex items-center justify-center overflow-hidden rounded-xl transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 cursor-pointer select-none",
          "bg-[linear-gradient(180deg,#1e2330_0%,#0c0f17_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_16px_rgba(37,99,235,0.2)]",
          "border border-blue-500/30 hover:border-blue-400/60",
          sizeConfig.buttonHeight,
          className
        )}
        {...props}
      >
        <style>{`
          @keyframes bd-dot-wave {
            0%, 70%, 100% { opacity: 0.25; transform: scale(0.85); }
            35% { opacity: 1; transform: scale(1); }
          }
          .bd-dot {
            transform-box: fill-box;
            transform-origin: center;
            animation: bd-dot-wave 1.4s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .bd-dot { animation: none; opacity: 1; }
          }
        `}</style>

        {/* Sliding Blue Laser Capsule: Starts with explicit width, animates to full on hover */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute top-1 bottom-1 left-1 z-10 flex items-center justify-start overflow-hidden rounded-lg pl-2 transition-[width] duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/btn:w-[calc(100%-0.5rem)]",
            sizeConfig.sliderWidth
          )}
          style={{
            background: `linear-gradient(180deg, ${accentFrom} 0%, ${accentTo} 100%)`,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -2px 4px rgba(0,0,0,0.2), 0 2px 8px rgba(37,99,235,0.35)",
          }}
        >
          <span className="flex items-center gap-2 flex-shrink-0">
            {Array.from({ length: sizeConfig.chevronCount }).map((_, i) => (
              <DoubleChevron key={i} index={i} dotColor={dotColor} />
            ))}
          </span>
        </span>

        {/* Perfectly centered, balanced text with drop shadow above the slider */}
        <span
          className={cn(
            "relative z-20 flex items-center justify-center font-bold tracking-tight text-white whitespace-nowrap transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
            sizeConfig.textPadding
          )}
        >
          {content}
        </span>
      </button>
    );
  }
);

AntiMetalButton.displayName = "AntiMetalButton";

export default AntiMetalButton;
