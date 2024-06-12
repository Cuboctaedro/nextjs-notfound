import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const data = [
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

    console.log('Response data:', data);
    return NextResponse.json({ pages: data });
}

export const dynamic = 'force-static';
