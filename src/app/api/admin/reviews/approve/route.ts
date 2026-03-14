import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const id = Number(body.id);
    const approved = Boolean(body.approved);
    const password = String(body.password ?? "");

    if (!process.env.ADMIN_DASHBOARD_PASSWORD) {
      return NextResponse.json(
        { error: "Missing ADMIN_DASHBOARD_PASSWORD in .env.local" },
        { status: 500 }
      );
    }

    if (password !== process.env.ADMIN_DASHBOARD_PASSWORD) {
      return NextResponse.json(
        { error: "Invalid admin password." },
        { status: 401 }
      );
    }

    if (!Number.isFinite(id)) {
      return NextResponse.json(
        { error: "Invalid review id." },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("reviews")
      .update({ approved })
      .eq("id", id)
      .select();

    if (error) {
      return NextResponse.json(
        { error: `Supabase update failed: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, data });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unexpected server error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}