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
    const url = `${process.env.NEXT_PUBLIC_DOMAIN}/api/pages`;
    console.log(url);
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/pages`);
    console.log(response);
    const data = await response.json();

    return data.map((p: any) => ({ page: p.slug }));
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export default PageLayout;
