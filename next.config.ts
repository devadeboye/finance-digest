import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: [
			"finnhub.io",
			"static2.finnhub.io",
			"image.cnbcfm.com",
			"sc.cnbcfm.com",
			"reuters.com",
			"www.reuters.com",
			"images.reuters.com",
			"bloomberg.com",
			"www.bloomberg.com",
			"assets.bwbx.io",
			"images.wsj.net",
			"ft.com",
			"www.ft.com",
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
};

export default nextConfig;
