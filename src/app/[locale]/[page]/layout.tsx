import { Locale } from "@/data/locales";

interface LayoutProps {
    children: React.ReactNode
    params: { page: string, locale: Locale }
}

const PageLayout = async ({
    children,
    params,
}: LayoutProps) => {
    return (
        <>
            {children}
        </>
    );
};

export async function generateStaticParams() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/pages`);
    const data = await response.json();

    return data.pages.map((p: any) => ({ page: p.slug }));
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export default PageLayout;