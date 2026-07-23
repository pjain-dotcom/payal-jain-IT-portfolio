import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/content/resume";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
      <SectionHeading eyebrow="Core Strengths" title="Skills" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <p className="mb-3 text-xs font-semibold tracking-wide text-accent uppercase">
              {group.category}
            </p>
            <div className="space-y-2">
              {group.items.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-lg border border-border bg-paper px-4 py-3 text-sm text-ink"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
