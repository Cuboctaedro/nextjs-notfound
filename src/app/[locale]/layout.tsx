import { Locale, locales } from "@/data/locales";

interface LocaleLayoutProps {
    children: React.ReactNode
    params: { locale: Locale }
}


const LocaleLayout = async ({
    children,
    params,
}: LocaleLayoutProps) => {

    return (
        <html lang={params.locale}>
            <body>
                <div id="main-layout">
                    <p>main layout</p>
                    {children}
                </div>
            </body>
        </html>
    );
};

export async function generateStaticParams() {
    return locales.map((l) => (
        { locale: l }
    ));
}

export const dynamicParams = false;

export default LocaleLayout;
