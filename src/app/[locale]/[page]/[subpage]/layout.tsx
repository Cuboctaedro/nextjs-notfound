import { Locale } from "@/config/languages-config";

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
    params: { page, locale },
}: {
    params: { page: string, locale: Locale }
}) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/subpages`);
    const data = await response.json();
    console.log(data);
    return data.subpages
        .filter((p: any) => (p.parent == page))
        .map((p: any) => ({ subpage: p.slug }));
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export default SubpageLayout;
