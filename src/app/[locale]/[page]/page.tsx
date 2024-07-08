import { Locale } from "@/data/locales";

interface PageProps {
    params: { page: string, locale: Locale }
}

const Page = async ({
    params,
}: PageProps) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/pages`);
    const data = await response.json();

    const pageData = data.pages.find((p: any) => (p.slug == params.page));

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
