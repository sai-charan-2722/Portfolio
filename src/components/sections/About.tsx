"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import {
  aboutText,
  metrics,
  personalInfo,
  stackTags,
} from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import MetricCard from "@/components/ui/MetricCard";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import { revealUp, revealUpDelayed } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-4 px-6 py-16 md:py-16">
      <SectionHeader index="02. about" title="About" accent="Me" />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        {/* Left: avatar + status + metrics */}
        <motion.div {...revealUp} className="flex flex-col items-center">
          {/* Avatar */}
          <div className="relative h-[200px] w-[200px]">
            <div className="avatar-ring absolute inset-0 animate-spin-slow rounded-full" />
            <div
              className="absolute inset-[4px] flex items-center justify-center rounded-full bg-gradient-brand"
              style={{ boxShadow: "0 0 60px rgba(124,58,237,0.3)" }}
            >
              <span className="font-display text-5xl font-bold text-white">
                SC
              </span>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <AvailabilityBadge />
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background-tertiary px-3 py-1.5 text-sm text-text-secondary">
              <MapPin size={14} /> Hyderabad, IN
            </span>
          </div>

          {/* Metrics 2x2 */}
          <div className="mt-8 grid w-full max-w-sm grid-cols-2 gap-4">
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </motion.div>

        {/* Right: bio + stack */}
        <motion.div {...revealUpDelayed}>
          {aboutText.map((p, i) => (
            <p
              key={i}
              className="mb-4 leading-relaxed text-text-secondary"
            >
              {p}
            </p>
          ))}

          <p className="mb-3 mt-6 font-mono text-xs uppercase tracking-widest text-accent-purple">
            My Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {stackTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border-subtle bg-background-tertiary px-3 py-1 text-xs text-accent-purple-light"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-outline"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-1 text-accent-cyan-light transition-colors hover:text-white"
            >
              View Projects <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
