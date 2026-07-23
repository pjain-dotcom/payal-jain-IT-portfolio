import SectionHeading from "@/components/SectionHeading";
import { earlierExperience, experience } from "@/content/resume";
import { renderRich } from "@/lib/richText";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
      <SectionHeading eyebrow="Career" title="Experience" />
      <div className="space-y-10 border-l border-border pl-8">
        {experience.map((role) => (
          <div key={`${role.org}-${role.period}`} className="relative">
            <span className="absolute top-1.5 -left-[2.28rem] h-3 w-3 rounded-full border-2 border-accent bg-paper" />
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">
              {role.period}
            </p>
            <h3 className="mt-1 font-serif text-xl text-ink">
              {role.title} · {role.org}
            </h3>
            <p className="text-sm text-ink-muted">{role.location}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
              {role.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{renderRich(b)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="relative">
          <span className="absolute top-1.5 -left-[2.28rem] h-3 w-3 rounded-full border-2 border-border bg-paper" />
          <p className="text-xs font-semibold tracking-wide text-ink-muted uppercase">
            Earlier Experience
          </p>
          <div className="mt-2 space-y-2">
            {earlierExperience.map((e) => (
              <p key={e.org} className="text-sm text-ink-muted">
                <span className="font-medium text-ink">{e.org}</span>
                {e.title ? ` — ${e.title}` : ""} ({e.period})
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
