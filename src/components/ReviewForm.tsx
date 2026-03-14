"use client";

import { useState } from "react";
import { Send, Star } from "lucide-react";
import { supabase } from "@/lib/supabase";

type FormState = {
  name: string;
  role: string;
  company: string;
  rating: number;
  message: string;
};

const initialState: FormState = {
  name: "",
  role: "",
  company: "",
  rating: 5,
  message: "",
};

export default function ReviewForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const { error } = await supabase.from("reviews").insert([
      {
        name: form.name.trim(),
        role: form.role.trim() || null,
        company: form.company.trim() || null,
        rating: form.rating,
        message: form.message.trim(),
      },
    ]);

    if (error) {
      setStatus({
        type: "error",
        message: "Something went wrong while submitting your review.",
      });
      setSubmitting(false);
      return;
    }

    setStatus({
      type: "success",
      message: "Review submitted successfully. It will appear after approval.",
    });
    setForm(initialState);
    setSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8"
    >
      <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">
        Leave a Review
      </p>
      <h2 className="mt-3 text-2xl font-black text-white">
        Share your experience
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your name"
          required
          className="rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
        />

        <input
          value={form.role}
          onChange={(e) => update("role", e.target.value)}
          placeholder="Your role"
          className="rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
        />

        <input
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          placeholder="Company / brand"
          className="rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40 sm:col-span-2"
        />
      </div>

      <div className="mt-5">
        <p className="mb-3 text-sm font-medium text-zinc-300">Rating</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => update("rating", value)}
              className={`rounded-full border px-3 py-2 transition ${
                form.rating >= value
                  ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
                  : "border-white/10 bg-white/[0.04] text-zinc-500"
              }`}
            >
              <Star className="h-4 w-4 fill-current" />
            </button>
          ))}
        </div>
      </div>

      <textarea
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        placeholder="Write your review..."
        required
        rows={6}
        className="mt-5 w-full rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
      />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {submitting ? "Submitting..." : "Submit Review"}
        </button>

        {status.message ? (
          <p
            className={`text-sm ${
              status.type === "success" ? "text-cyan-300" : "text-red-300"
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}