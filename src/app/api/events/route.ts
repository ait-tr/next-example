import { db } from "@/db";
import { eventsTable } from "@/db/schema";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const EventInsertSchema = z.object({
  name: z.string().min(3, "Minimal length is 3"),
  description: z
    .string()
    .max(250, "Description should be less then 250")
    .refine(
      (val) => {
        if (val === "Java is the best language") {
          return false;
        }
        return true;
      },
      { message: "You should learn other languages" }
    ),
});

export async function GET() {
  const events = await db.select().from(eventsTable);
  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // 401 - когда не залогинен например Unauthorized
    // 403 - когда залогинен, но нет нужной роли Forbidden
    const body = await req.json();
    const newEvent = EventInsertSchema.parse(body);
    const [event] = await db.insert(eventsTable).values(newEvent).returning();
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
