import { Locale } from "@/config/languages-config"

interface LocaleLayoutProps {
    children: React.ReactNode
    params: { locale: Locale }
}


const LocaleLayout = async ({
    children,
    params,
}: LocaleLayoutProps) => {

    return (
        <div id="locale-layout">{children}</div>
    );
};

export async function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'es' },
    ];
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export default LocaleLayout;
