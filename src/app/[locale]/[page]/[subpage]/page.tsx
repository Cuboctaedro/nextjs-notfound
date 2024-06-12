import { Locale } from "@/config/languages-config";

interface SubPageProps {
    params: { page: string, subpage: string, locale: Locale }
}

const Subpage = async ({
    params,
}: SubPageProps) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/subpages`);
    const data = await response.json();

    const pageData = data.subpages.find((p: any) => (p.slug == params.subpage));

    if (pageData) {
        return (
            <div>
                <h1>{pageData.title}</h1>
                <p>slug: {pageData.slug}</p>
                <p>parent: {pageData.parent}</p>
            </div>
        )
    };

    return null;
};

export default Subpage;
