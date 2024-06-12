import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const data = await [
        {
            title: 'Page A',
            slug: 'page-a'
        },
        {
            title: 'Page B',
            slug: 'page-b'
        },
        {
            title: 'Page C',
            slug: 'page-c'
        }
    ];

    return NextResponse.json(data);
}