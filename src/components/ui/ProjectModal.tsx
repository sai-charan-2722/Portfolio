"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, Github, ExternalLink, Check } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { coverGradients } from "./ProjectCard";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ background: "var(--bg-overlay)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border-subtle bg-background-secondary p-8"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-5 top-5 rounded-lg p-1.5 text-text-muted transition-colors hover:bg-background-tertiary hover:text-white"
        >
          <X size={22} />
        </button>

        {/* Cover banner */}
        <div
          className="mb-6 flex h-32 items-center justify-center rounded-xl"
          style={{ background: coverGradients[project.coverAccent] }}
        >
          <span className="select-none font-mono text-5xl font-bold text-white/15">
            {project.shortName}
          </span>
        </div>

        <h3
          id="project-modal-title"
          className="text-3xl font-bold gradient-text font-display"
        >
          {project.title}
        </h3>
        <p className="mt-2 text-text-secondary">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1 text-xs font-medium text-accent-green">
            <Check size={13} /> {project.status}
          </span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-accent-purple/50 px-4 py-2 text-sm font-medium text-accent-purple-light transition-all hover:bg-accent-purple/10"
            >
              <Github size={16} /> GitHub →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/30"
            >
              <ExternalLink size={16} /> Live Demo →
            </a>
          )}
        </div>

        {/* Overview */}
        <section className="mt-8">
          <h4 className="mb-2 text-sm font-mono uppercase tracking-widest text-accent-purple">
            Overview
          </h4>
          <p className="leading-relaxed text-text-secondary">
            {project.longDescription}
          </p>
        </section>

        {/* Features */}
        <section className="mt-6">
          <h4 className="mb-3 text-sm font-mono uppercase tracking-widest text-accent-purple">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex gap-2 text-sm leading-relaxed text-text-secondary"
              >
                <Check
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-accent-cyan"
                />
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mt-6">
          <h4 className="mb-3 text-sm font-mono uppercase tracking-widest text-accent-purple">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-3 py-1 text-xs text-accent-cyan-light"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
