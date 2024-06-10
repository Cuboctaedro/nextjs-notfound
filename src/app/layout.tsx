
interface RootLayoutProps {
    children: React.ReactNode
}


const RootLayout = async ({
    children,
}: RootLayoutProps) => {

    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
