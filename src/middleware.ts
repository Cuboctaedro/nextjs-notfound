import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales } from './data/locales';

export function middleware(request: NextRequest) {

    const pathname = request.nextUrl.pathname;

    let newPathname = pathname;

    if (!newPathname.startsWith('/')) {
        newPathname = `/${newPathname}`;
    }

    const pathsegments = newPathname.split('/');

    if (pathsegments.length === 1) {
        newPathname = `${newPathname}/en`;

    } else if (!locales.includes(pathsegments[1] as 'en' | 'es')) {
        newPathname = `/en${newPathname}`;
    }

    if (newPathname != pathname) {
        const response = NextResponse.redirect(
            new URL(
                newPathname,
                request.url,
            ),
        );
        return response;
    } else {
        const response = NextResponse.next();
        return response;
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemaps.xml|sitemap.xml|sitemap/es.xml|sitemap/en.xml|facebook-catalog.xml|icon.png|apple-icon.png).*)'],
};