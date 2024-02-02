import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const secret = process.env.NEXTAUTH_SECRET;
 
export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret });
  const { pathname } = req.nextUrl;

  // Allow requests if the following is true:
  // 1. It's a request for next-auth session & provider fetching
  // 2. The session exists (user is authenticated)
  // 3. It's a request for static files (e.g., images, scripts, stylesheets, etc.)
  if (pathname.includes('/api/auth') || session || pathname.includes('/_next/static')) {
    return NextResponse.next();
  }

  // Redirect to /auth/signIn if not authenticated and not requesting the login page
  if (!session && pathname !== '/auth/signIn') {
    const url = req.nextUrl.clone();
    url.pathname = '/auth/signIn';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}