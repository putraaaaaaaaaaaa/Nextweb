import { NextRequest } from "next/server";
import { authMiddleware } from "next-firebase-auth-edge";
import { clientConfig, serverConfig } from "./config";

export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: "/api/sign-in",
    logoutPath: "/api/sign-out",
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    cookieSerializeOptions: serverConfig.cookieSerializeOptions,
    serviceAccount: serverConfig.serviceAccount,
  });
}

export const config = {
  matcher: ["/", "/((?!_next|api|.*\\.).*)", "/api/sign-in", "/api/sign-out"],
};
