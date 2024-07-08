import { Locale } from "@/data/locales";

interface HomePageProps {
    params: {
        locale: Locale
    }
}

const HomePage = async ({
    params,
}: HomePageProps) => {
   
    return (
        <div>
            <h1>{params.locale == 'en' ? 'Home' : 'Principio'}</h1>
        </div>
    );
}

export default HomePage;
