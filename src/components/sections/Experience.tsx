"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications, experience } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/ui/TimelineItem";
import BrandIcon from "@/components/ui/BrandIcon";
import { getSkillIcon } from "@/lib/skillIcons";
import { revealUp } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-4 px-6 py-16">
      <SectionHeader index="05. experience" title="My" accent="Journey" />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line running through the dots */}
        <div
          aria-hidden="true"
          className="absolute bottom-6 left-6 top-2 w-0.5 -translate-x-1/2 bg-gradient-brand opacity-40"
        />
        {experience.map((item) => (
          <TimelineItem key={`${item.role}-${item.period}`} item={item} />
        ))}
      </div>

      {/* Certifications */}
      <motion.div {...revealUp} className="mt-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-purple">
          Certifications
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-3 rounded-xl bg-background-tertiary p-4"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-subtle">
                {getSkillIcon(cert.icon) ? (
                  <BrandIcon name={cert.icon} className="h-5 w-5" />
                ) : (
                  <Award className="h-5 w-5 text-accent-purple-light" />
                )}
              </div>
              <div className="min-w-0">
                <p
                  title={cert.name}
                  className="truncate text-sm font-medium text-white"
                >
                  {cert.name}
                </p>
                <p title={cert.issuer} className="truncate text-xs text-text-muted">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
