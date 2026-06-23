import BrandIcon from "./BrandIcon";
import { getSkillIcon } from "@/lib/skillIcons";

export default function SkillBadge({ name }: { name: string }) {
  const hasIcon = !!getSkillIcon(name);
  return (
    <span className="flex cursor-default items-center gap-2 rounded-xl border border-border-subtle bg-background-tertiary px-3 py-2 text-sm text-text-secondary transition-all hover:border-accent-cyan/40 hover:text-white">
      {hasIcon ? (
        <BrandIcon name={name} />
      ) : (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-purple-light" />
      )}
      {name}
    </span>
  );
}
