'use client';

import { Locale } from "@/data/locales";
import { useParams } from "next/navigation";

export const NotFoundContent = () => {
    const params = useParams<{ locale: Locale }>();

    return (
        <div>
            <h1>{params.locale == 'en' ? 'Not found' : 'No encontrada'}</h1>
        </div>

    )
}