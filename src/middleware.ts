import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const localePrefixes = ["/en", "/ko"];

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hasLocalePrefix = localePrefixes.some(
    prefix => url.pathname === prefix || url.pathname.startsWith(`${prefix}/`),
  );

  if (!hasLocalePrefix) {
    url.pathname = `/en${url.pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
