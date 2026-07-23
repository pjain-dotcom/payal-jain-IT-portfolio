import SectionHeading from "@/components/SectionHeading";
import { achievements } from "@/content/resume";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-accent-soft/40">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <SectionHeading eyebrow="Impact" title="Headline Achievements" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a) => (
            <div
              key={a.detail}
              className="rounded-xl border border-border bg-paper p-5"
            >
              <p className="font-serif text-3xl text-ink">{a.metric}</p>
              <p className="mb-2 text-xs font-semibold tracking-wide text-accent uppercase">
                {a.label}
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                {a.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
