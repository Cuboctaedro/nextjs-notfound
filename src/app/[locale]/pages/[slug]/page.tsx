import { Locale } from "@/data/locales";
import { pages } from "@/data/pages";

interface PageProps {
    params: { slug: string, locale: Locale }
}

const Page = async ({
    params,
}: PageProps) => {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/pages`);
    // const data = await response.json();

    const pageData = pages.find((p: any) => (p.slug == params.slug));

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

export async function generateStaticParams() {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/pages`);
    // const data = await response.json();

    return pages.map((p: any) => ({ slug: p.slug }));
}

export const dynamicParams = false;
