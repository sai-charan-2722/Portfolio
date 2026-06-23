"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import type { ExperienceItem } from "@/data/portfolio";
import TechTag from "./TechTag";

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  code: Code,
  "graduation-cap": GraduationCap,
};

export default function TimelineItem({ item }: { item: ExperienceItem }) {
  const Icon = iconMap[item.icon] ?? Briefcase;
  return (
    <div className="relative flex gap-6 md:gap-12">
      {/* Dot */}
      <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-brand shadow-lg shadow-purple-500/30">
        <Icon className="h-5 w-5 text-white" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="card-glass mb-10 flex-1 rounded-2xl p-6 transition-all hover:border-accent-purple/30"
      >
        <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-white font-display">
            {item.role}
          </h3>
          <span className="rounded-full border border-accent-purple/20 bg-accent-purple/10 px-3 py-1 font-mono text-xs text-accent-purple-light">
            {item.period}
          </span>
        </div>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="font-medium text-accent-cyan">{item.company}</span>
          <span className="text-sm text-text-muted">· {item.location}</span>
        </div>

        <ul className="space-y-2">
          {item.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-text-secondary">
              <span className="mt-1 flex-shrink-0 text-accent-purple">▸</span>
              {b}
            </li>
          ))}
        </ul>

        {item.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
