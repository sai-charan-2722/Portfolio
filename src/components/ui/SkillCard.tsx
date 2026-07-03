"use client";

import { Monitor, Server, Layers, Wrench, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  monitor: Monitor,
  server: Server,
  layers: Layers,
  wrench: Wrench,
};

// Distinct accent per category so the four cards aren't all-purple.
const accentMap: Record<string, { icon: string; hoverBorder: string }> = {
  monitor: {
    icon: "text-accent-purple-light",
    hoverBorder: "hover:border-accent-purple/40",
  },
  server: { icon: "text-accent-cyan", hoverBorder: "hover:border-accent-cyan/40" },
  layers: { icon: "text-accent-green", hoverBorder: "hover:border-accent-green/40" },
  wrench: { icon: "text-accent-amber", hoverBorder: "hover:border-accent-amber/40" },
};

interface SkillCardProps {
  name: string;
  icon: string;
  skills: string[];
}

export default function SkillCard({ name, icon, skills }: SkillCardProps) {
  const Icon = iconMap[icon] ?? Monitor;
  const accent = accentMap[icon] ?? accentMap.monitor;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={cn("card-glass rounded-2xl p-6 transition-colors", accent.hoverBorder)}
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-subtle">
          <Icon className={cn("h-5 w-5", accent.icon)} />
        </div>
        <h3 className="text-lg font-semibold text-white font-display">{name}</h3>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill) => (
          <motion.div key={skill} variants={staggerItem}>
            <SkillBadge name={skill} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
