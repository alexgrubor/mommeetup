import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  {
    params,
  }: {
    params: {
      meetingId: string;
    };
  }
) {
  const { userId } = auth();
  if (!userId) return new NextResponse("Unauthorized", { status: 401 });
  if (!params.meetingId) return new NextResponse("Meeting Id is required", { status: 400 });

  // Get the meeting
  const meeting = await prismadb.meeting.findUnique({
    where: {
      id: params.meetingId,
    },
    include: {
      attendees: true,
    },
  });

  if (!meeting) {
    return new NextResponse("Meeting not found", { status: 404 });
  }

  // Create a new attendee
  const newAttendee = await prismadb.attendee.create({
    data: {
      userId,
      meeting: {
        connect: {
          id: meeting.id,
        },
      },
    },
  });

  // Update the meeting's attendees
  const updatedMeeting = await prismadb.meeting.update({
    where: {
      id: meeting.id,
    },
    data: {
      attendees: {
        connect: {
          id: newAttendee.id,
        },
      },
    },
    include: {
      attendees: true,
    },
  });

  return new NextResponse(JSON.stringify(updatedMeeting), { status: 200 });
}
