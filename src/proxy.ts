import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const url = request.nextUrl;

  // Exclude static paths, API routes, and login route
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname === '/login' ||
    url.pathname === '/robots.txt' ||
    url.pathname.startsWith('/favicon.ico') ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|gif|ics)$/)
  ) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get('site-auth');

  if (authCookie?.value !== 'authenticated') {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
