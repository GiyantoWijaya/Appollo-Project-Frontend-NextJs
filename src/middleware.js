import { NextResponse } from 'next/server';

export function middleware(request) {
  const userToken = request.cookies.get('userId')?.value;
  //   console.log(userToken);
  if (!userToken) {
    return NextResponse.redirect(new URL('/authentication/login', request.url));
  }
}
export const config = {
  matcher: ['/home', '/gamecatalog', '/gameplay/:path*', '/profile/:path*'],
};
