"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { CoverAccent, Project } from "@/data/portfolio";

export const coverGradients: Record<CoverAccent, string> = {
  teal: "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(6,182,212,0.2))",
  purple: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(245,158,11,0.2))",
  cyan: "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(124,58,237,0.2))",
  amber: "linear-gradient(135deg, rgba(245,158,11,0.3), rgba(124,58,237,0.2))",
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onOpen: (id: string) => void;
}

export default function ProjectCard({
  project,
  featured = false,
  onOpen,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onOpen(project.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project.id);
        }
      }}
      aria-label={`View details for ${project.title}`}
      className="card-glass group cursor-pointer overflow-hidden rounded-2xl transition-shadow hover:shadow-xl hover:shadow-purple-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple"
    >
      {/* Cover */}
      <div
        className={`relative overflow-hidden ${featured ? "h-60" : "h-52"}`}
        style={{ background: coverGradients[project.coverAccent] }}
      >
        {/* Browser chrome dots */}
        <div className="absolute left-3 top-3 z-10 flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/60" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <span className="h-3 w-3 rounded-full bg-green-500/60" />
        </div>

        {featured && (
          <span className="absolute left-3 top-9 z-10 rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-white">
            Featured
          </span>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute right-3 top-3 z-10 rounded-full bg-accent-green/90 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-accent-green"
          >
            Live ↗
          </a>
        )}

        {/* Big watermark short name */}
        <div className="absolute inset-0 flex items-center justify-center pt-8">
          <span className="select-none font-mono text-6xl font-bold text-white/10">
            {project.shortName}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-accent-purple/20 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-accent-purple-light font-display">
            {project.title}
          </h3>
          <div className="flex flex-shrink-0 gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="icon-link"
                title="GitHub"
                aria-label={`${project.title} on GitHub`}
              >
                <Github size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="icon-link"
                title="Live Demo"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-2.5 py-1 text-xs text-accent-cyan-light"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
