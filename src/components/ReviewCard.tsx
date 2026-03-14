type ReviewCardProps = {
  name: string;
  role?: string | null;
  company?: string | null;
  rating: number;
  message: string;
  createdAt?: string | null;
};

function formatMeta(role?: string | null, company?: string | null) {
  if (role && company) return `${role} • ${company}`;
  if (role) return role;
  if (company) return company;
  return "Client Review";
}

export default function ReviewCard({
  name,
  role,
  company,
  rating,
  message,
  createdAt,
}: ReviewCardProps) {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="mt-1 text-sm text-zinc-400">{formatMeta(role, company)}</p>
        </div>

        <div className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-sm font-medium text-yellow-300">
          {stars}
        </div>
      </div>

      <p className="mt-5 leading-7 text-zinc-300">“{message}”</p>

      {createdAt ? (
        <p className="mt-5 text-xs uppercase tracking-[0.18em] text-zinc-500">
          {new Date(createdAt).toLocaleDateString("en-AU", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      ) : null}
    </article>
  );
}