import { cn } from "@/lib/utils";

/** Green "available" pill used in the Hero and About sections. */
export default function AvailabilityBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium",
        className
      )}
      style={{
        background: "rgba(16,185,129,0.12)",
        border: "1px solid rgba(16,185,129,0.3)",
        color: "#10B981",
      }}
    >
      <span className="h-2 w-2 animate-pulse rounded-full bg-accent-green" />
      Available for Opportunities
    </span>
  );
}
