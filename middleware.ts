import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip login page — it should always be accessible
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Protect all other admin routes: check if session cookie exists
  const sessionCookie = request.cookies.get('sapp-admin-session');

  if (!sessionCookie?.value) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
