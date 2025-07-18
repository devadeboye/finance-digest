import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
	variable: "--font-rubik",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Blott Studio - Finance Digest App",
		template: "%s | Blott Studio",
	},
	description:
		"A finance digest app that helps you stay on top of your finances.",
	keywords: ["finance", "digest", "app", "blott", "studio"],
	authors: [{ name: "Devadeboye" }],
	creator: "Blott Studio",
	publisher: "Blott Studio",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		title: "Blott Studio - Finance Digest App",
		description:
			"A finance digest app that helps you stay on top of your finances.",
		siteName: "Blott Studio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Blott Studio - Finance Digest App",
		description:
			"A finance digest app that helps you stay on top of your finances.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${rubik.variable} antialiased`}>{children}</body>
		</html>
	);
}
