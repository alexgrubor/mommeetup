import { clerkClient } from "@clerk/nextjs/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = body;
    const user = await clerkClient.users.getUser(userId);

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

 
    return new Response(JSON.stringify(user), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}