import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	// Check if the request is for the proxied Finnhub API
	if (request.nextUrl.pathname.startsWith("/api/proxy")) {
		const finnhubUrl =
			process.env.FINNHUB_API_URL || "https://finnhub.io/api/v1";
		const finnhubKey = process.env.FINNHUB_API_KEY;

		if (!finnhubKey) {
			console.error("[Middleware] FINNHUB_API_KEY is not defined");
			return new NextResponse(JSON.stringify({ error: "API Key missing" }), {
				status: 500,
				headers: { "content-type": "application/json" },
			});
		}

		// Extract the path after /api/proxy
		const path = request.nextUrl.pathname.replace(/^\/api\/proxy/, "");
		const searchParams = new URLSearchParams(request.nextUrl.search);
		searchParams.set("token", finnhubKey);
		const targetUrl = new URL(
			`${finnhubUrl}${path}?${searchParams.toString()}`,
		);

		console.log(
			`[Middleware] Proxying ${request.nextUrl.pathname} to ${targetUrl.toString()}`,
		);
		return NextResponse.rewrite(targetUrl);
	}
	return NextResponse.next();
}

export const config = {
	matcher: "/api/proxy/:path*",
};
