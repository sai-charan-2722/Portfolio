import type { MetricColor } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const colorMap: Record<MetricColor, string> = {
  purple: "text-accent-purple-light",
  cyan: "text-accent-cyan",
  amber: "text-accent-amber",
  green: "text-accent-green",
};

interface MetricCardProps {
  value: string;
  label: string;
  color: MetricColor;
}

export default function MetricCard({ value, label, color }: MetricCardProps) {
  return (
    <div className="rounded-xl bg-background-secondary p-4 text-center">
      <div className={cn("text-3xl font-bold font-display", colorMap[color])}>
        {value}
      </div>
      <div className="mt-1 text-xs text-text-muted">{label}</div>
    </div>
  );
}
