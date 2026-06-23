"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { aiBadge, skillCategories } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillCard from "@/components/ui/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader index="03. skills" title="My" accent="Tech Stack" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.name} {...cat} />
        ))}
      </div>

      {/* AI callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mt-6 rounded-2xl border border-accent-purple/30 bg-gradient-subtle p-6"
      >
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background-secondary/60">
            <Sparkles className="h-5 w-5 text-accent-purple-light" />
          </div>
          <h3 className="text-xl font-semibold gradient-text font-display">
            {aiBadge.heading}
          </h3>
        </div>
        <p className="leading-relaxed text-text-secondary">{aiBadge.body}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {aiBadge.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3 py-1 text-xs text-accent-purple-light"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
