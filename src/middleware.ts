import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/config/languages-config';

export function middleware(request: NextRequest) {
    // const pathname = request.nextUrl.pathname;

    // let newPathname = pathname;

    // if (!newPathname.startsWith('/')) {
    //     newPathname = `/${newPathname}`;
    // }

    // const pathsegments = newPathname.split('/');

    // if (pathsegments.length === 1) {
    //     newPathname = `${newPathname}/en`;

    // } else if (!i18n.locales.includes(pathsegments[1] as 'en' | 'es')) {
    //     newPathname = `/en${newPathname}`;
    // }

    // if (newPathname != pathname) {
    //     return NextResponse.redirect(
    //         new URL(
    //             newPathname,
    //             request.url,
    //         ),
    //     );
    // }
}

// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
