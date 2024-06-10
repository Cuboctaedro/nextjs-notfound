import { pages } from "@/data/pages";
import { Locale } from "@/config/languages-config";

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

export async function generateStaticParams({
    params: { locale },
}: {
    params: { locale: Locale }
}) {
    const data = pages;
    return data.map((p) => ({ page: p.slug }));
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export default PageLayout;
