import { auth } from "@/../auth";
// See "Matching Paths" below to learn more

const loginPath = "./auth/sigin";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== loginPath) {
    const newUrl = new URL(loginPath, req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|auth.js|manifest|public).*)",
  ],
};
