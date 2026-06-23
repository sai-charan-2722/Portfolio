import { getSkillIcon, readableIconColor } from "@/lib/skillIcons";
import { cn } from "@/lib/utils";

interface BrandIconProps {
  name: string;
  className?: string;
  /** Override the fill; defaults to a readable version of the brand color. */
  color?: string;
}

/**
 * Renders a simple-icons brand logo as an inline SVG.
 * Returns null when there is no matching icon (caller can fall back).
 */
export default function BrandIcon({ name, className, color }: BrandIconProps) {
  const icon = getSkillIcon(name);
  if (!icon) return null;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-4 w-4 shrink-0", className)}
      fill={color ?? readableIconColor(icon.hex)}
    >
      <path d={icon.path} />
    </svg>
  );
}
