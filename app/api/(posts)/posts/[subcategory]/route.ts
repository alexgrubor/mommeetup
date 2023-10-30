
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { subcategory: string } }) {
    const { subcategory } = params;      
    if (!subcategory) {
            return new NextResponse(
                    JSON.stringify({
                            error: "Missing subcategory parameter",
                    }),
                    {
                            status: 400,
                            headers: {
                                    "Content-Type": "application/json",
                            },
                    }
            );
    }
    const posts = await prismadb.post.findMany({
            where: {
                    subcategory: subcategory.toString(),
            },
    });
    return new NextResponse(
            JSON.stringify({
                    posts,
            }),
            {
                    status: 200,
                    headers: {
                            "Content-Type": "application/json",
                    },
            }
    );
}