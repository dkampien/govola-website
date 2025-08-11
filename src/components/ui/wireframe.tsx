"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function WireframeIllustration({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("w-full h-full flex items-center justify-center p-6", className)}>
      <svg
        viewBox="0 0 400 260"
        className="w-full h-full max-h-[320px] text-neutral-300 dark:text-neutral-600"
        role="img"
        aria-label="Wireframe illustration"
        preserveAspectRatio="xMidYMid meet"
      >
        <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="10" width="380" height="240" rx="12" strokeWidth="2" />

          <rect x="22" y="24" width="180" height="16" rx="4" strokeWidth="2" />
          <rect x="22" y="50" width="120" height="12" rx="3" strokeWidth="2" />

          <rect x="210" y="24" width="170" height="50" rx="8" strokeDasharray="6 6" strokeWidth="2" />

          <rect x="22" y="82" width="356" height="80" rx="8" strokeDasharray="6 6" strokeWidth="2" />

          <rect x="22" y="172" width="110" height="56" rx="6" strokeWidth="2" />
          <rect x="142" y="172" width="110" height="56" rx="6" strokeWidth="2" />
          <rect x="262" y="172" width="116" height="56" rx="6" strokeWidth="2" />

          <line x1="34" y1="190" x2="116" y2="190" strokeWidth="2" />
          <line x1="34" y1="204" x2="96" y2="204" strokeWidth="2" />

          <line x1="154" y1="190" x2="226" y2="190" strokeWidth="2" />
          <line x1="154" y1="204" x2="214" y2="204" strokeWidth="2" />

          <line x1="274" y1="190" x2="354" y2="190" strokeWidth="2" />
          <line x1="274" y1="204" x2="334" y2="204" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
} 