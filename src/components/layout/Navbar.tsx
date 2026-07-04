"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Menu, X, Mail } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const hidden = useScrollDirection(80);
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden && !menuOpen ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 h-16 border-b"
        style={{
          background: "rgba(2, 8, 23, 0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "rgba(124,58,237,0.15)",
        }}
      >
        <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display text-2xl font-bold gradient-text"
            aria-label="Back to top"
          >
            SC
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isActive
                        ? "text-white"
                        : "text-text-secondary hover:text-white",
                    )}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-brand"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="icon-link hidden sm:block"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="icon-link hidden sm:block"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send Email"
              className="icon-link hidden sm:block"
            >
              <Mail size={20} />
            </a>
            <a
              href="#contact"
              className="hidden rounded-xl bg-gradient-brand px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/30 md:inline-block"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="text-white md:hidden"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{
            background: "rgba(2, 8, 23, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl font-semibold text-text-secondary transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-xl bg-gradient-brand px-6 py-3 font-medium text-white"
          >
            Hire Me
          </a>
          <div className="mt-4 flex gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="icon-link"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="icon-link"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send Email"
              className="icon-link"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
