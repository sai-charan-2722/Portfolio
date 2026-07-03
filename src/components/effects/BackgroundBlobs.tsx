"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

export default function BackgroundBlobs() {
  const reduced = usePrefersReducedMotion();
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 2px, transparent 3px)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Purple blob */}
      <div
        className={cn(
          "absolute h-[600px] w-[600px] rounded-full",
          !reduced && "animate-float1"
        )}
        style={{
          top: "-20%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />
      {/* Cyan blob */}
      <div
        className={cn(
          "absolute h-[500px] w-[500px] rounded-full",
          !reduced && "animate-float2"
        )}
        style={{
          bottom: "-20%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />
      {/* Subtle centered blob for depth */}
      <div
        className={cn(
          "absolute left-1/2 top-1/3 h-[360px] w-[360px] -translate-x-1/2 rounded-full",
          !reduced && "animate-float1"
        )}
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)",
          filter: "blur(90px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
