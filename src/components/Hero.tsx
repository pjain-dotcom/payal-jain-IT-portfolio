import Image from "next/image";
import { profile } from "@/content/resume";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(185,139,62,0.18),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {profile.title} · {profile.yearsExperience} Years Experience
          </p>
          <h1 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">
            {profile.name}
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-cream/80 sm:text-base">
            {profile.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-navy-deep transition hover:opacity-90"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/30 px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-cream/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-accent/40 sm:h-52 sm:w-52">
            <Image
              src={profile.headshot}
              alt={profile.name}
              fill
              sizes="(min-width: 640px) 13rem, 10rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
