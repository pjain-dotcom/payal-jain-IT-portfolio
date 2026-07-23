import { profile } from "@/content/resume";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/70">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-10 text-center text-sm sm:px-10">
        <p className="font-serif text-lg text-cream">{profile.name}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-cream/40">
          © {new Date().getFullYear()} {profile.name}. Built with Claude Code.
        </p>
      </div>
    </footer>
  );
}
