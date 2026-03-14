import { Star } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";
import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "@/components/ReviewForm";
import SectionIntro from "@/components/SectionIntro";

type ReviewRow = {
  id: number;
  name: string;
  role: string | null;
  company: string | null;
  rating: number;
  message: string;
  created_at: string;
};

export default async function ReviewsPage() {
   const supabase = getSupabaseClient();
    
  const { data, error } = await supabase
    .from("reviews")
    .select("id, name, role, company, rating, message, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  const reviews: ReviewRow[] = error || !data ? [] : data;

  const average =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
        ).toFixed(1)
      : null;

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-10">
      <section className="rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_top_left,rgba(139,92,246,0.08),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl md:p-8 lg:p-10">
        <SectionIntro
          eyebrow="Client Reviews"
          title="What people say about working with Nenux"
        />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-yellow-300">
            <Star className="h-4 w-4 fill-current" />
            {average ? `${average} average rating` : "No ratings yet"}
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
            {reviews.length} approved review{reviews.length === 1 ? "" : "s"}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h2 className="text-2xl font-black text-white">Published reviews</h2>
          <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
            A growing collection of feedback from people who have worked with me
            across web, systems, and digital brand-focused projects.
          </p>

          <div className="mt-6 grid gap-5">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  name={review.name}
                  role={review.role}
                  company={review.company}
                  rating={review.rating}
                  message={review.message}
                  createdAt={review.created_at}
                />
              ))
            ) : (
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-zinc-400">
                No approved reviews yet. Be the first to leave one.
              </div>
            )}
          </div>
        </div>

        <div>
          <ReviewForm />
        </div>
      </section>
    </main>
  );
}