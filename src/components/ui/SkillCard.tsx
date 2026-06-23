"use client";

import { Monitor, Server, Layers, Wrench, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

const iconMap: Record<string, LucideIcon> = {
  monitor: Monitor,
  server: Server,
  layers: Layers,
  wrench: Wrench,
};

interface SkillCardProps {
  name: string;
  icon: string;
  skills: string[];
}

export default function SkillCard({ name, icon, skills }: SkillCardProps) {
  const Icon = iconMap[icon] ?? Monitor;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card-glass group rounded-2xl p-6 transition-all hover:border-accent-purple/40"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-subtle">
          <Icon className="h-5 w-5 text-accent-purple-light" />
        </div>
        <h3 className="text-lg font-semibold text-white font-display">{name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </motion.div>
  );
}
