// Built using Hyperiux Vault: https://vault.hyperiux.com

"use client";

import React, { useEffect, useRef, useState, type ComponentPropsWithoutRef, type CSSProperties, type PointerEvent } from "react";
import { ArrowRight } from "lucide-react";

const DEFAULT_HREF = "#";
const COMPACT_LAYOUT_BREAKPOINT = 1280;
const ANIMATION_DURATION_MS = 450;

export interface ArrowFillButtonOwnProps {
  btnText?: string;
  children?: React.ReactNode;
  href?: string;
  className?: string;
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
  children,
  href = DEFAULT_HREF,
  className = "",

  bgColor = "#141824",
  textColor = "#ffffff",

  fillBgColor = "#31c0de",
  fillTextColor = "#09090b",

  hoverFillBgColor = "#31c0de",
  hoverFillTextColor = "#09090b",

  arrowColor,
  hoverArrowColor,

  ...props
}: ArrowFillButtonProps) {
  const displayText = btnText || (typeof children === "string" ? children : "Hover Me");
  const [isReady, setIsReady] = useState(false);
  const [isCompactLayout, setIsCompactLayout] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const releaseTimeoutRef = useRef<number | null>(null);

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
      className={`group relative inline-flex h-11 sm:h-12 min-h-[44px] sm:min-h-[48px] w-fit min-w-fit max-w-none cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[var(--btn-bg)] pl-6 sm:pl-7 pr-16 sm:pr-18 whitespace-nowrap font-bold text-sm sm:text-base leading-none [text-rendering:geometricPrecision] [--icon-circle:2.1rem] sm:[--icon-circle:2.35rem] [--icon-right:0.35rem] sm:[--icon-right:0.4rem] [--circle-inset-y:calc((100%-var(--icon-circle))/2)] shadow-md transition-all active:scale-[0.98] select-none ${
        usesUtilityBackground ? "" : "bg-[var(--btn-bg)]"
      } text-[var(--btn-text)] ${className}`}
      style={{
        "--btn-bg": bgColor,
        "--btn-text": textColor,
        "--btn-fill-bg": fillBgColor,
        "--btn-fill-text": fillTextColor,
        "--btn-fill-bg-hover": hoverFillBgColor,
        "--btn-fill-text-hover": hoverFillTextColor,
        "--btn-arrow": arrowColor || fillTextColor,
        "--btn-arrow-hover": hoverArrowColor || hoverFillTextColor,
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
        className="pointer-events-none absolute inset-0 z-[2] flex items-center pl-6 sm:pl-7 pr-16 sm:pr-18 text-[var(--btn-fill-text)] [clip-path:inset(var(--circle-inset-y)_var(--icon-right)_var(--circle-inset-y)_calc(100%-var(--icon-right)-var(--icon-circle)))] transition-all duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:text-[var(--btn-fill-text-hover)] group-hover:[clip-path:inset(0_0_0_0)] group-data-[pressed=true]:text-[var(--btn-fill-text-hover)] group-data-[pressed=true]:[clip-path:inset(0_0_0_0)]"
      >
        <span className="relative z-[1] pb-px whitespace-nowrap">{displayText}</span>
      </div>

      {/* Arrow Badge Container */}
      <span
        className="pointer-events-none absolute right-[var(--icon-right)] top-1/2 z-[3] inline-flex h-[var(--icon-circle)] w-[var(--icon-circle)] shrink-0 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-[var(--btn-fill-bg)] text-[var(--btn-arrow)] transition-colors duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:bg-[var(--btn-fill-bg-hover)] group-hover:text-[var(--btn-arrow-hover)] group-data-[pressed=true]:bg-[var(--btn-fill-bg-hover)] group-data-[pressed=true]:text-[var(--btn-arrow-hover)] shadow-sm"
        aria-hidden="true"
      >
        <ArrowRight
          className="absolute left-1/2 top-1/2 size-4 sm:size-4.5 translate-x-[-170%] -translate-y-1/2 origin-center scale-0 text-current transition-transform duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:scale-100 group-data-[pressed=true]:-translate-x-1/2 group-data-[pressed=true]:-translate-y-1/2 group-data-[pressed=true]:scale-100"
          strokeWidth={2.5}
        />

        <ArrowRight
          className="absolute left-1/2 top-1/2 size-4 sm:size-4.5 -translate-x-1/2 -translate-y-1/2 origin-center text-current transition-transform duration-[450ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] motion-reduce:transition-none group-hover:translate-x-[70%] group-hover:-translate-y-1/2 group-hover:scale-0 group-data-[pressed=true]:translate-x-[70%] group-data-[pressed=true]:-translate-y-1/2 group-data-[pressed=true]:scale-0"
          strokeWidth={2.5}
        />
      </span>
    </a>
  );
}

export default ArrowFillButton;
