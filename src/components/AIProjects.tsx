import SectionHeading from "@/components/SectionHeading";
import { aiProjects, aiProjectsIntro } from "@/content/resume";

export default function AIProjects() {
  return (
    <section id="ai-projects" className="bg-accent-soft/40">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <SectionHeading eyebrow="Personal AI Projects" title={aiProjectsIntro.heading} />
        <p className="-mt-6 mb-10 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {aiProjectsIntro.body}
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-xl border border-border bg-paper p-5"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="font-serif text-lg text-ink">{project.title}</h3>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${
                    project.status === "Live"
                      ? "bg-accent text-navy-deep"
                      : "border border-accent/40 text-accent"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2 py-0.5 text-xs text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-accent hover:underline"
                >
                  {project.linkLabel ?? "View"} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
