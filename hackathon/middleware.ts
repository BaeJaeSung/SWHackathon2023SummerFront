import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: "test"
  })
  const res = NextResponse.next()
  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url))
  }
  return res
}

export const config = {
  matcher: [
    '/',
  ],
}
