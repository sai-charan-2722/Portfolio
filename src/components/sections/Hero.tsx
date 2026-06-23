"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ChevronDown, ArrowDown } from "lucide-react";
import { personalInfo, typedRoles } from "@/data/portfolio";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const typeSequence = typedRoles.flatMap((role) => [role, 2000]);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.p
          variants={item}
          className="mb-3 font-mono text-lg text-accent-purple-light"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-6xl font-bold text-white md:text-8xl"
        >
          {personalInfo.firstName}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 text-2xl font-medium md:text-3xl font-display"
        >
          <span className="text-text-secondary">I build </span>
          <TypeAnimation
            sequence={typeSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text"
            cursor
          />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="btn-primary inline-flex items-center gap-2">
            View My Work <ArrowDown size={18} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn-outline inline-flex items-center gap-2"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-text-muted transition-colors hover:text-accent-cyan-light"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-text-muted transition-colors hover:text-accent-cyan-light"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send email"
            className="text-text-muted transition-colors hover:text-accent-cyan-light"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 text-text-muted"
      >
        <ChevronDown size={28} className="animate-bounce-slow" />
      </motion.a>
    </section>
  );
}
