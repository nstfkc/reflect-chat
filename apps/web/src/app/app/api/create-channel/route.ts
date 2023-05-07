import { prisma } from "db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { kind, description, name, createdBy } = await req.json();

  const channel = await prisma.channel.create({
    data: {
      kind,
      description,
      name,
      createdBy,
    } as any,
  });

  return NextResponse.json({ success: true, channel });
}
