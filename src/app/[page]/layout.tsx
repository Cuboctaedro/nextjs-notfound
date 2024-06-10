import { pages } from "@/data/pages";

interface LayoutProps {
    children: React.ReactNode
    params: { page: string }
}

const PageLayout = async ({
    children,
    params,
}: LayoutProps) => {
    return (
        <div id="page-layout">
            {children}
        </div>
    );
};

export async function generateStaticParams() {
    const data = pages;
    return data.map((p) => ({ page: p.slug }));
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export default PageLayout;
