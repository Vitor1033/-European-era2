import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;

  if (!body || typeof body.email !== "string" || typeof body.fullName !== "string") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // eslint-disable-next-line no-console
  console.log("[apply:student]", body);

  return NextResponse.json({ ok: true });
}

