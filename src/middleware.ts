import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Locale, locales } from './data/locales';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
 
    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );
  
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
      const locale = 'en';
  
      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
          request.url,
        ),
      );
    }
  }
  
  export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  };