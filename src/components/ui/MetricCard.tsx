"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import type { MetricColor } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const colorMap: Record<MetricColor, string> = {
  purple: "text-accent-purple-light",
  cyan: "text-accent-cyan",
  amber: "text-accent-amber",
  green: "text-accent-green",
};

// Per-color hover border + soft glow so the four cards read as distinct.
const glowMap: Record<MetricColor, string> = {
  purple:
    "hover:border-accent-purple/50 hover:shadow-[0_0_28px_-8px_rgba(124,58,237,0.6)]",
  cyan: "hover:border-accent-cyan/50 hover:shadow-[0_0_28px_-8px_rgba(6,182,212,0.6)]",
  amber:
    "hover:border-accent-amber/50 hover:shadow-[0_0_28px_-8px_rgba(245,158,11,0.6)]",
  green:
    "hover:border-accent-green/50 hover:shadow-[0_0_28px_-8px_rgba(16,185,129,0.6)]",
};

interface MetricCardProps {
  value: string;
  label: string;
  color: MetricColor;
}

export default function MetricCard({ value, label, color }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = usePrefersReducedMotion();

  // Split "30%" / "15+" / "4" into number + suffix so we can count up.
  // Kept as primitives (not the match array) so effect deps stay stable.
  const numMatch = value.match(/[\d.]+/);
  const hasNumber = numMatch !== null;
  const numStr = numMatch ? numMatch[0] : "";
  const target = hasNumber ? parseFloat(numStr) : 0;
  const prefix = hasNumber ? value.slice(0, numMatch!.index) : "";
  const suffix = hasNumber
    ? value.slice((numMatch!.index ?? 0) + numStr.length)
    : "";
  const isFloat = numStr.includes(".");

  const [display, setDisplay] = useState(hasNumber ? "0" : value);

  useEffect(() => {
    if (!hasNumber) return;
    if (reduced) {
      setDisplay(numStr);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) =>
        setDisplay(isFloat ? v.toFixed(1) : Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, reduced, target, isFloat, hasNumber, numStr]);

  return (
    <div
      ref={ref}
      className={cn(
        "card-glass rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1",
        glowMap[color]
      )}
    >
      <div className={cn("font-display text-3xl font-bold", colorMap[color])}>
        {numMatch ? `${prefix}${display}${suffix}` : value}
      </div>
      <div className="mt-1 text-xs text-text-muted">{label}</div>
    </div>
  );
}
