import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function middleware(req: NextRequest) {
  const getCookies = cookies().get('auth-token');
  if (!getCookies) return NextResponse.redirect(new URL('/login', req.url));
}
export const config = {
  matcher: [
    '/profile',
    '/profile/interesting',
  ]
}