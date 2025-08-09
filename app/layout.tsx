import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/contexts/QueryProvider";

const rubik = Rubik({
	variable: "--font-rubik",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Finance Digest - Devadeboye Portfolio",
		template: "%s | Finance Digest",
	},
	description:
		"A portfolio project showcasing curated finance news built with Next.js, React 19, and TanStack Query.",
	keywords: ["finance", "digest", "app", "portfolio", "nextjs", "react"],
	authors: [{ name: "Devadeboye" }],
	creator: "Devadeboye",
	publisher: "Devadeboye",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		title: "Finance Digest - Devadeboye Portfolio",
		description:
			"A portfolio project showcasing curated finance news built with Next.js, React 19, and TanStack Query.",
		siteName: "Finance Digest",
	},
	twitter: {
		card: "summary_large_image",
		title: "Finance Digest - Devadeboye Portfolio",
		description:
			"A portfolio project showcasing curated finance news built with Next.js, React 19, and TanStack Query.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${rubik.variable} antialiased`}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
