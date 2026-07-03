import type { Variant } from "framer-motion";

/**
 * Shared scroll-reveal used by section blocks so reveal timing/offset stays
 * consistent across the site. Spread onto a `motion.*` element:
 *   <motion.div {...revealUp}>…</motion.div>
 */
export const revealUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

/** Same as `revealUp` but with a small delay for staggered sibling blocks. */
export const revealUpDelayed = {
  ...revealUp,
  transition: { ...revealUp.transition, delay: 0.1 },
} as const;

/** Parent container that cascades its children in sequence. */
export const staggerContainer = {
  hidden: {} as Variant,
  show: { transition: { staggerChildren: 0.04 } } as Variant,
};

/** Child item paired with `staggerContainer`. */
export const staggerItem = {
  hidden: { opacity: 0, y: 8 } as Variant,
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  } as Variant,
};
