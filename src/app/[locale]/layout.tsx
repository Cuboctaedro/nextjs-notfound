import { Locale, locales } from "@/data/locales";
import Link from "next/link";

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
                    <ul>
                        <li>
                            <Link href={`/${params.locale}/pages/page-a`}>Page A</Link>
                        </li>
                        <li>
                            <Link href={`/${params.locale}/pages/page-x`}>Page X</Link>
                        </li>
                    </ul>
                    <div>
                        {children}
                    </div>
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
