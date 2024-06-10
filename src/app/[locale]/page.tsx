import { Locale } from "@/config/languages-config";
import { homeData } from "@/data/home";

interface HomeProps {
    params: { locale: Locale }
}


const HomePage = async ({
    params,
}: HomeProps) => {
    const data = homeData;
    
    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    );
}

export default HomePage;
