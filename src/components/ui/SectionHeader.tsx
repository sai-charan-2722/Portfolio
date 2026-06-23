"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  /** e.g. "02. about" */
  index: string;
  /** Plain leading words, e.g. "About" */
  title: string;
  /** Accent (gradient) word, e.g. "Me" */
  accent: string;
}

export default function SectionHeader({
  index,
  title,
  accent,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-16 text-center"
    >
      {/* <span className="section-label">{`// ${index}`}</span> */}
      <h2 className="text-3xl font-bold text-white md:text-4xl font-display">
        {title} <span className="gradient-text">{accent}</span>
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-brand" />
    </motion.div>
  );
}
