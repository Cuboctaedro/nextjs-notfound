interface LocaleLayoutProps {
    children: React.ReactNode
}


const LocaleLayout = async ({
    children,
}: LocaleLayoutProps) => {

    return (
        <html>
            <body>
                <div id="main-layout">
                    <p>main layout</p>
                    {children}
                </div>
            </body>
        </html>
    );
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export default LocaleLayout;
