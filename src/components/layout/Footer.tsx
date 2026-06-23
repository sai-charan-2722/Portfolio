import { navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-primary py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <span className="font-display text-xl font-bold gradient-text">SC</span>

        <p className="text-center text-sm text-text-muted">
          © 2025 U Sai Charan · Designed &amp; Built with ❤️ in Hyderabad
        </p>

        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 h-px bg-gradient-brand opacity-30" />
    </footer>
  );
}
