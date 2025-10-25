// app/api/generate/route.ts
import { NextResponse } from "next/server";
import { generateUI } from "@/lib/gemini";

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const mdx = await generateUI(prompt);
  return NextResponse.json({ mdx });
}
