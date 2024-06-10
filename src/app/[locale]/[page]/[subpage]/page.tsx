import { subpages } from "@/data/subpages";
import { Locale } from "@/config/languages-config";

interface SubPageProps {
    params: { page: string, subpage: string, locale: Locale }
}

const Subpage = async ({
    params,
}: SubPageProps) => {
    const pageData = subpages.find((p) => (p.slug == params.subpage));

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
