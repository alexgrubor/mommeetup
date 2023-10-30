import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

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
        const { title, content, subcategory } = body;
        if (!title || !content || !subcategory){
                return new NextResponse(
                        JSON.stringify({
                            error: "Missing parameters",
                        }),
                        {
                            status: 400,
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

        }
        const post = await prismadb.post.create({
                data: {
                        title,
                        content,
                        subcategory,
                        creatorId: userId,

                }
        })
        return new NextResponse(
                JSON.stringify({
                    post,
                }),
                {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
}



