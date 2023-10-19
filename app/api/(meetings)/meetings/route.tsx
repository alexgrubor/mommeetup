import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const { userId } = auth();
  const body = await req.json();
  if (!userId)
    return new NextResponse(
      JSON.stringify({
        error: "Unauthorized. You must be logged in to do that",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  const { title, date, location, attendees, notes, time, duration } = body;
  if (!title  || !date || !location)
    return new NextResponse(
      JSON.stringify({
        error: "Missing field which is required",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const adjustedDate = new Date(date);
    adjustedDate.setDate(adjustedDate.getDate() + 1);
    
  const meeting = await prismadb.meeting.create({
    data: {
      title,
      date : adjustedDate,
      notes,
      attendees,
      location, 
      createdBy: userId,
      time, 
      duration
    } as any,
  });

  return new NextResponse(
    JSON.stringify({
      meeting,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}