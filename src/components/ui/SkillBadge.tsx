import type { CSSProperties } from "react";
import BrandIcon from "./BrandIcon";
import { getSkillIcon, readableIconColor } from "@/lib/skillIcons";

export default function SkillBadge({ name }: { name: string }) {
  const icon = getSkillIcon(name);
  // Glow tinted to the skill's brand color (readable variant), cyan fallback.
  const glow = icon ? readableIconColor(icon.hex) : "#67E8F9";
  return (
    <span
      style={{ "--glow": glow } as CSSProperties}
      className="flex cursor-default items-center gap-2 rounded-xl border border-border-subtle bg-background-tertiary px-3 py-2 text-sm text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--glow)] hover:text-white hover:shadow-[0_6px_18px_-6px_var(--glow)]"
    >
      {icon ? (
        <BrandIcon name={name} />
      ) : (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-purple-light" />
      )}
      {name}
    </span>
  );
}
