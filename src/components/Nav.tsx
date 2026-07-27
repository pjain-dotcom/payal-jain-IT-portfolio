const links = [
  { href: "#ai-projects", label: "AI Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-cream/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3 sm:px-10">
        <a href="#" className="font-serif text-sm text-cream">
          Payal Jain M
        </a>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-medium text-cream/80">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
