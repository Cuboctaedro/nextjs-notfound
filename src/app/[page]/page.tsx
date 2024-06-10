import { pages } from "@/data/pages"

interface PageProps {
    params: { page: string }
}

const Page = async ({
    params,
}: PageProps) => {
    const pageData = pages.find((p) => (p.slug == params.page));

    if (pageData) {
        return (
            <div>
                <h1>{pageData.title}</h1>
                <p>slug: {pageData.slug}</p>
            </div>
        )
    };

    return null;
};

export default Page;
