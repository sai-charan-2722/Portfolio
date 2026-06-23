import { useEffect, useState } from "react";

/**
 * Returns whether the navbar should be hidden.
 * Hides on scroll down (past a threshold), shows on scroll up.
 */
export function useScrollDirection(threshold = 50): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastY) > 5) {
        setHidden(currentY > lastY && currentY > threshold);
        lastY = currentY;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return hidden;
}
