export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}
