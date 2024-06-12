import { Locale } from "@/config/languages-config";

interface HomeProps {
    params: { locale: Locale }
}


const HomePage = async ({
    params,
}: HomeProps) => {
   
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default HomePage;
