// pages/_middleware.js
import { NextResponse } from 'next/server';


export async function middleware(request) {


  const { pathname } = request.nextUrl
  

  if(pathname.includes("dashboard") && !(request.cookies.get('next-auth.session-token')?.value)){
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If no conditions are met, just return the response as is
  return NextResponse.next();
}
export const config = {
  matcher: ['/dashboard/:path*'],
}
