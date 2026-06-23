"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { projects, personalInfo } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const activeProject = projects.find((p) => p.id === openId) ?? null;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader index="04. projects" title="My" accent="Work" />

      {/* Featured row */}
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {featured.map((p) => (
          <ProjectCard key={p.id} project={p} featured onOpen={setOpenId} />
        ))}
      </div>

      {/* Other projects row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {others.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setOpenId} />
        ))}
      </div>

      {/* More on GitHub */}
      <div className="mt-12 text-center">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border-subtle px-6 py-3 text-text-secondary transition-all hover:border-accent-purple/40 hover:text-white"
        >
          <Github size={18} />
          See more on GitHub
          <ArrowRight size={16} />
        </a>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setOpenId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
