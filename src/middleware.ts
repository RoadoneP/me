import { createI18nMiddleware } from "next-international/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ko"],
  defaultLocale: "en",
  urlMappingStrategy: "rewriteDefault",
});

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (!url.pathname.startsWith("/ko") && !url.pathname.startsWith("/en")) {
    url.pathname = `/en${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
