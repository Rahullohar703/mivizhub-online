"use client";

import React from "react";
import { ArrowFillButton } from "./arrow-fill-button";

export const AntiMetalButton = React.forwardRef(({ label, children, ...props }, ref) => {
  return (
    <ArrowFillButton
      ref={ref}
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
