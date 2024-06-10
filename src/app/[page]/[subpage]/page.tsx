import { subpages } from "@/data/subpages";

interface SubPageProps {
    params: { page: string, subpage: string }
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
