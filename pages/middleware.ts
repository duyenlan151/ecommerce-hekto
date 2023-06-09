import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { handlerCors } from './api/whoami';

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest, res: NextResponse) {
  await handlerCors(req, res);
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
};
