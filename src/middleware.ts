import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Locale, locales } from './data/locales';

export function middleware(request: NextRequest) {

    const pathname = request.nextUrl.pathname;

    let newPathname = pathname;

    if (!newPathname.startsWith('/')) {
        newPathname = `/${newPathname}`;
    }

    const pathsegments = newPathname.split('/');

    if (pathsegments.length === 1) {
        newPathname = `${newPathname}/en`;

    } else if (!locales.includes(pathsegments[1] as Locale)) {
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
    matcher: ['/((?!api|favicon.ico|robots.txt|icon.png|apple-icon.png).*)'],
};