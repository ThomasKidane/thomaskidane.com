import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const url = request.nextUrl

  // If subdomain starts with covert., rewrite to /covert
  if (host.split(':')[0].startsWith('covert.')) {
    if (!url.pathname.startsWith('/covert')) {
      url.pathname = '/covert'
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|.*\.[^/]+$).*)'],
}


