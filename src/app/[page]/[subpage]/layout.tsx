import { subpages } from "@/data/subpages";

interface SubpageLayoutProps {
    children: React.ReactNode
    params: { page: string, subpage: string }
}

const SubpageLayout = async ({
    children,
    params,
}: SubpageLayoutProps) => {
    return (
        <div id="subpage-layout">
            {children}
        </div>
    );
};

export async function generateStaticParams({
    params: { page },
}: {
    params: { page: string }
}) {
    const data = subpages;
    return data.filter((sub) => (sub.parent == page)).map((sub) => ({ subpage: sub.slug }));
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export default SubpageLayout;
