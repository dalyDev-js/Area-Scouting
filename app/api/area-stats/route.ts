import { NextResponse } from "next/server";
import { generateMockStats } from "@/lib/mockData";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.coordinates) {
    return NextResponse.json(
      { error: "No coordinates provided" },
      { status: 400 },
    );
  }

  // Simulate API delay like a real backend
  await new Promise((resolve) => setTimeout(resolve, 800));

  const stats = generateMockStats();

  return NextResponse.json(stats, { status: 200 });
}
