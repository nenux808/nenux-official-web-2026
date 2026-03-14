"use client";

import { useMemo, useState } from "react";
import { Check, Eye, EyeOff, Shield, Trash2, X } from "lucide-react";

type Review = {
  id: number;
  name: string;
  role: string | null;
  company: string | null;
  rating: number;
  message: string;
  approved: boolean;
  created_at: string;
};

type Props = {
  initialReviews: Review[];
};

export default function AdminReviewsClient({ initialReviews }: Props) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [password, setPassword] = useState("");
  const [busyId, setBusyId] = useState<number | null>(null);
  const [status, setStatus] = useState("");

  const stats = useMemo(() => {
    const approved = reviews.filter((r) => r.approved).length;
    const pending = reviews.length - approved;
    return { total: reviews.length, approved, pending };
  }, [reviews]);

async function approveReview(id: number, approved: boolean) {
  setBusyId(id);
  setStatus("");

  const res = await fetch("/api/admin/reviews/approve", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, approved, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    setStatus(data?.error || "Action failed.");
    setBusyId(null);
    return;
  }

  setReviews((prev) =>
    prev.map((review) =>
      review.id === id ? { ...review, approved } : review
    )
  );
  setBusyId(null);
  setStatus(approved ? "Review approved." : "Review moved back to pending.");
}

async function deleteReview(id: number) {
  const confirmed = window.confirm("Delete this review?");
  if (!confirmed) return;

  setBusyId(id);
  setStatus("");

  const res = await fetch("/api/admin/reviews/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    setStatus(data?.error || "Delete failed.");
    setBusyId(null);
    return;
  }

  setReviews((prev) => prev.filter((review) => review.id !== id));
  setBusyId(null);
  setStatus("Review deleted.");
}

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-10">
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
          <Shield className="h-3.5 w-3.5" />
          Admin Reviews Dashboard
        </div>

        <h1 className="mt-5 text-3xl font-black text-white sm:text-4xl">
          Manage reviews
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Approve, unapprove, and delete reviews without opening Supabase.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Total
            </p>
            <p className="mt-2 text-2xl font-black text-white">{stats.total}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Approved
            </p>
            <p className="mt-2 text-2xl font-black text-cyan-300">
              {stats.approved}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Pending
            </p>
            <p className="mt-2 text-2xl font-black text-yellow-300">
              {stats.pending}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Admin Password
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="mt-3 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/30"
            />
          </div>
        </div>

        {status ? (
          <p className="mt-4 text-sm text-zinc-300">{status}</p>
        ) : null}
      </section>

      <section className="mt-8 grid gap-5">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-bold text-white">{review.name}</h2>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] ${
                      review.approved
                        ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                        : "border border-yellow-400/20 bg-yellow-400/10 text-yellow-300"
                    }`}
                  >
                    {review.approved ? "Approved" : "Pending"}
                  </span>
                  <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-300">
                    {"★".repeat(review.rating)}
                  </span>
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  {[review.role, review.company].filter(Boolean).join(" • ") ||
                    "Client Review"}
                </p>

                <p className="mt-4 leading-7 text-zinc-300">{review.message}</p>

                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  {new Date(review.created_at).toLocaleDateString("en-AU", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {review.approved ? (
                  <button
                    onClick={() => approveReview(review.id, false)}
                    disabled={busyId === review.id}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 disabled:opacity-60"
                  >
                    <EyeOff className="h-4 w-4" />
                    Unapprove
                  </button>
                ) : (
                  <button
                    onClick={() => approveReview(review.id, true)}
                    disabled={busyId === review.id}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02] disabled:opacity-60"
                  >
                    <Check className="h-4 w-4" />
                    Approve
                  </button>
                )}

                <button
                  onClick={() => deleteReview(review.id)}
                  disabled={busyId === review.id}
                  className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm font-medium text-red-300 transition hover:bg-red-400/15 disabled:opacity-60"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}