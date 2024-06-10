import { subpages } from "@/data/subpages";
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
    const data = subpages;
    return data.filter((sub) => (sub.parent == page)).map((sub) => ({ subpage: sub.slug }));
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export default SubpageLayout;
