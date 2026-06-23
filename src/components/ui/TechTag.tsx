export default function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-2.5 py-1 text-xs text-accent-cyan-light">
      {children}
    </span>
  );
}
