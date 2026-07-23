import { aiCallout } from "@/content/resume";

export default function AICallout() {
  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-10">
      <div className="rounded-2xl border border-accent/30 bg-accent-soft/50 px-6 py-8 sm:px-10 sm:py-10">
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          What&apos;s Next
        </p>
        <h3 className="font-serif text-2xl text-ink">{aiCallout.heading}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
          {aiCallout.body}
        </p>
      </div>
    </section>
  );
}
