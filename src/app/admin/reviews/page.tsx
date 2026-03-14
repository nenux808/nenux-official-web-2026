import { supabaseAdmin } from "@/lib/supabase-admin";
import AdminReviewsClient from "./reviews-client";

export const dynamic = "force-dynamic";

export default async function AdminReviewsPage() {
  const { data, error } = await supabaseAdmin
    .from("reviews")
    .select("id, name, role, company, rating, message, approved, created_at")
    .order("created_at", { ascending: false });

  const reviews = error || !data ? [] : data;

  return <AdminReviewsClient initialReviews={reviews} />;
}