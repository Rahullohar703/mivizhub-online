"use client";

import React from "react";
import { ArrowFillButton, type ArrowFillButtonProps } from "./arrow-fill-button";

export interface AntiMetalButtonProps extends ArrowFillButtonProps {
  label?: string;
  size?: "sm" | "default" | "lg";
  accentFrom?: string;
  accentTo?: string;
  dotColor?: string;
}

export const AntiMetalButton = React.forwardRef<
  HTMLAnchorElement,
  AntiMetalButtonProps
>(({ label, children, ...props }, ref) => {
  return (
    <ArrowFillButton
      ref={ref as any}
      variant="primary"
      btnText={label || (typeof children === "string" ? children : undefined)}
      {...props}
    >
      {children}
    </ArrowFillButton>
  );
});

AntiMetalButton.displayName = "AntiMetalButton";

export default AntiMetalButton;
