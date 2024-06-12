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
        <html>
            <body>
        <div id="locale-layout">{children}</div>
        </body>
        </html>
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
