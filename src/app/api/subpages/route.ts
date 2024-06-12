export async function GET(request: Request) {
    const data = await [
        {
            title: 'Page D',
            slug: 'page-d',
            parent: 'page-a',
        },
        {
            title: 'Page E',
            slug: 'page-e',
            parent: 'page-a',
        },
        {
            title: 'Page F',
            slug: 'page-f',
            parent: 'page-b',
        },
    ];

    return Response.json(data);
}