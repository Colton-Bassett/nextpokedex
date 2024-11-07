import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "./lib/utils";

export async function middleware(req: NextRequest) {
  if ((await isAuthenticated(req)) === false) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }
}

export const config = {
  matcher: "/admin/:path*",
};
