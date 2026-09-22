// Built using Hyperiux Vault: https://vault.hyperiux.com

"use client";

import React, { useEffect, useRef, useState, type ComponentPropsWithoutRef, type CSSProperties, type PointerEvent } from "react";
import { ArrowRight } from "lucide-react";

const DEFAULT_HREF = "#";
const COMPACT_LAYOUT_BREAKPOINT = 1280;
const ANIMATION_DURATION_MS = 450;

export interface ArrowFillButtonOwnProps {
  btnText?: string;
  label?: string; // alias for btnText
  children?: React.ReactNode;
  href?: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "primary" | "secondary";
  bgColor?: string;
  textColor?: string;
  fillBgColor?: string;
  fillTextColor?: string;
  hoverFillBgColor?: string;
  hoverFillTextColor?: string;
  arrowColor?: string;
  hoverArrowColor?: string;
  animationDuration?: number;
  fillOnHover?: boolean;
}

export type ArrowFillButtonProps = ArrowFillButtonOwnProps & Omit<ComponentPropsWithoutRef<'a'>, keyof ArrowFillButtonOwnProps>;

export function ArrowFillButton({
  btnText,
  label,
  children,
  href = DEFAULT_HREF,
  className = "",
  size = "default",
  variant = "default",

  bgColor,
  textColor,
  fillBgColor,
  fillTextColor,
  hoverFillBgColor,
  hoverFillTextColor,
  arrowColor,
  hoverArrowColor,

  ...props
}: ArrowFillButtonProps) {
  const displayText = btnText || label || (typeof children === "string" ? children : "Hover Me");
  const [isReady, setIsReady] = useState(false);
  const [isCompactLayout, setIsCompactLayout] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const releaseTimeoutRef = useRef<number | null>(null);

  const sizeConfig = {
    sm: {
      height: "h-9 min-h-[36px]",
      padding: "pl-4 pr-11",
      fontSize: "text-xs",
      iconCircle: "1.65rem",
      iconRight: "0.25rem",
      iconSize: "size-3.5",
    },
    default: {
      height: "h-11 min-h-[44px]",
      padding: "pl-5 sm:pl-6 pr-14 sm:pr-16",
      fontSize: "text-sm",
      iconCircle: "2.1rem",
      iconRight: "0.35rem",
      iconSize: "size-4",
    },
    lg: {
      height: "h-12 sm:h-[52px] min-h-[48px] sm:min-h-[52px]",
      padding: "pl-6 sm:pl-7 pr-16 sm:pr-18",
      fontSize: "text-sm sm:text-base",
      iconCircle: "2.35rem",
      iconRight: "0.4rem",
      iconSize: "size-4 sm:size-4.5",
    },
  }[size] || {
    height: "h-11 min-h-[44px]",
    padding: "pl-5 sm:pl-6 pr-14 sm:pr-16",
    fontSize: "text-sm",
    iconCircle: "2.1rem",
    iconRight: "0.35rem",
    iconSize: "size-4",
  };

  const variantDefaults = {
    primary: {
      bgColor: "#2563eb",
      textColor: "#ffffff",
      fillBgColor: "#38bdf8",
      fillTextColor: "#070b16",
      arrowColor: "#070b16",
      hoverArrowColor: "#070b16",
      className: "border-blue-400/40 shadow-xl shadow-blue-600/30",
    },
    secondary: {
      bgColor: "#121622",
      textColor: "#f4f4f5",
      fillBgColor: "#31c0de",
      fillTextColor: "#09090b",
      arrowColor: "#09090b",
      hoverArrowColor: "#09090b",
      className: "border-white/15 hover:border-white/30 shadow-md",
    },
    default: {
      bgColor: "#141824",
      textColor: "#ffffff",
      fillBgColor: "#31c0de",
      fillTextColor: "#09090b",
      arrowColor: "#09090b",
      hoverArrowColor: "#09090b",
      className: "border-white/15 hover:border-white/30 shadow-md",
    },
  }[variant];

  const finalBgColor = bgColor ?? variantDefaults.bgColor;
  const finalTextColor = textColor ?? variantDefaults.textColor;
  const finalFillBgColor = fillBgColor ?? variantDefaults.fillBgColor;
  const finalFillTextColor = fillTextColor ?? variantDefaults.fillTextColor;
  const finalHoverFillBgColor = hoverFillBgColor ?? finalFillBgColor;
  const finalHoverFillTextColor = hoverFillTextColor ?? finalFillTextColor;
  const finalArrowColor = arrowColor ?? variantDefaults.arrowColor ?? finalFillTextColor;
  const finalHoverArrowColor = hoverArrowColor ?? variantDefaults.hoverArrowColor ?? finalHoverFillTextColor;

  const usesUtilityBackground =
    className.includes("bg-") ||
    className.includes("from-") ||
    className.includes("via-") ||
    className.includes("to-");

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${COMPACT_LAYOUT_BREAKPOINT - 1}px)`
    );

    const syncCompactLayout = (event: MediaQueryList | MediaQueryListEvent) => {
      const matches = "matches" in event ? event.matches : ((event as any).currentTarget as MediaQueryList).matches;
      setIsCompactLayout(matches);

      if (!matches) {
        setIsPressed(false);
      }
    };

    syncCompactLayout(mediaQuery);
    mediaQuery.addEventListener("change", syncCompactLayout);

    return () => {
      mediaQuery.removeEventListener("change", syncCompactLayout);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (releaseTimeoutRef.current) {
        window.clearTimeout(releaseTimeoutRef.current);
      }
    };
  }, []);

  const clearPressedState = () => {
    if (releaseTimeoutRef.current) {
      window.clearTimeout(releaseTimeoutRef.current);
    }

    releaseTimeoutRef.current = window.setTimeout(() => {
      setIsPressed(false);
      releaseTimeoutRef.current = null;
    }, ANIMATION_DURATION_MS);
  };

  const handlePointerDown = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerDown?.(event);

    if (!isCompactLayout || event.pointerType === "mouse") {
      return;
    }

    if (releaseTimeoutRef.current) {
      window.clearTimeout(releaseTimeoutRef.current);
      releaseTimeoutRef.current = null;
    }

    setIsPressed(true);
  };

  const handlePointerUp = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerUp?.(event);

    if (!isCompactLayout || event.pointerType === "mouse") {
      return;
    }

    clearPressedState();
  };

  const handlePointerCancel = (event: PointerEvent<HTMLAnchorElement>) => {
    props.onPointerCancel?.(event);

    if (!isCompactLayout || event.pointerType === "mouse") {
      return;
    }

    clearPressedState();
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if ((!href || href === "#") && props.onClick) {
      event.preventDefault();
    }
    props.onClick?.(event);
  };

  return (
    <a
      href={href}
      {...props}
      onClick={handleClick}
      data-pressed={isPressed ? "true" : "false"}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className={`group relative inline-flex ${sizeConfig.height} w-fit min-w-fit max-w-none cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[var(--btn-bg)] ${sizeConfig.padding} whitespace-nowrap font-bold ${sizeConfig.fontSize} leading-none [text-rendering:geometricPrecision] shadow-md transition-all active:scale-[0.98] select-none ${
        usesUtilityBackground ? "" : "bg-[var(--btn-bg)]"
      } text-[var(--btn-text)] ${variantDefaults.className} ${className}`}
      style={{
        "--btn-bg": finalBgColor,
        "--btn-text": finalTextColor,
        "--btn-fill-bg": finalFillBgColor,
        "--btn-fill-text": finalFillTextColor,
        "--btn-fill-bg-hover": finalHoverFillBgColor,
        "--btn-fill-text-hover": finalHoverFillTextColor,
        "--btn-arrow": finalArrowColor,
        "--btn-arrow-hover": finalHoverArrowColor,
        "--icon-circle": sizeConfig.iconCircle,
        "--icon-right": sizeConfig.iconRight,
        "--circle-inset-y": "calc((100% - var(--icon-circle)) / 2)",
      } as CSSProperties & Record<string, string | number>}
    >
      <span className="relative z-[1] pb-px">{displayText}</span>

      {/* Expanding Background Circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-[2] rounded-full bg-[var(--btn-fill-bg)] inset-[var(--circle-inset-y)_var(--icon-right)_var(--circle-inset-y)_calc(100%-var(--icon-right)-var(--icon-circle))] transition-all duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:bg-[var(--btn-fill-bg-hover)] group-hover:inset-0 group-data-[pressed=true]:bg-[var(--btn-fill-bg-hover)] group-data-[pressed=true]:inset-0"
      />

      {/* Inverted Color Text revealed on hover */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-[2] flex items-center justify-center ${sizeConfig.padding} text-[var(--btn-fill-text)] [clip-path:inset(var(--circle-inset-y)_var(--icon-right)_var(--circle-inset-y)_calc(100%-var(--icon-right)-var(--icon-circle)))] transition-all duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:text-[var(--btn-fill-text-hover)] group-hover:[clip-path:inset(0_0_0_0)] group-data-[pressed=true]:text-[var(--btn-fill-text-hover)] group-data-[pressed=true]:[clip-path:inset(0_0_0_0)]`}
      >
        <span className="relative z-[1] pb-px whitespace-nowrap">{displayText}</span>
      </div>

      {/* Arrow Badge Container */}
      <span
        className="pointer-events-none absolute right-[var(--icon-right)] top-1/2 z-[3] inline-flex h-[var(--icon-circle)] w-[var(--icon-circle)] shrink-0 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-[var(--btn-fill-bg)] text-[var(--btn-arrow)] transition-colors duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:bg-[var(--btn-fill-bg-hover)] group-hover:text-[var(--btn-arrow-hover)] group-data-[pressed=true]:bg-[var(--btn-fill-bg-hover)] group-data-[pressed=true]:text-[var(--btn-arrow-hover)] shadow-sm"
        aria-hidden="true"
      >
        <ArrowRight
          className={`absolute left-1/2 top-1/2 ${sizeConfig.iconSize} translate-x-[-170%] -translate-y-1/2 origin-center scale-0 text-current transition-transform duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:scale-100 group-data-[pressed=true]:-translate-x-1/2 group-data-[pressed=true]:-translate-y-1/2 group-data-[pressed=true]:scale-100`}
          strokeWidth={2.5}
        />

        <ArrowRight
          className={`absolute left-1/2 top-1/2 ${sizeConfig.iconSize} -translate-x-1/2 -translate-y-1/2 origin-center text-current transition-transform duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:translate-x-[70%] group-hover:-translate-y-1/2 group-hover:scale-0 group-data-[pressed=true]:translate-x-[70%] group-data-[pressed=true]:-translate-y-1/2 group-data-[pressed=true]:scale-0`}
          strokeWidth={2.5}
        />
      </span>
    </a>
  );
}

export default ArrowFillButton;
