import SectionHeading from "@/components/SectionHeading";
import { education, technicalSummary, training } from "@/content/resume";

export default function EducationCerts() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
      <SectionHeading eyebrow="Background" title="Education & Technical Summary" />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-serif text-lg text-ink">Education</h3>
          <p className="mt-2 text-sm text-ink">{education.degree}</p>
          <p className="text-sm text-ink-muted">
            {education.school} · {education.date}
          </p>

          <h3 className="mt-8 font-serif text-lg text-ink">
            Training &amp; Certifications
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {training.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-paper px-3 py-1 text-xs text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-ink">Technical Summary</h3>
          <div className="mt-3 space-y-4">
            {technicalSummary.map((t) => (
              <div key={t.label}>
                <p className="mb-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
                  {t.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {t.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-paper px-2.5 py-1 text-xs text-ink-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
