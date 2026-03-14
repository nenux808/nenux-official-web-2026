type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
}: SectionIntroProps) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      </div>

      {description ? (
        <p className="max-w-xl text-sm leading-6 text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
