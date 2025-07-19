import Image from "next/image";

export default function NewsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<header className="w-svw py-3 flex justify-center items-center">
				<div className="h-8 md:h-12">
					<Image
						className="h-full w-auto"
						src="/assets/svg/blott-logo.svg"
						alt="Blott Studio Logo"
						width={100}
						height={100}
					/>
				</div>
			</header>
			<main className="px-4 md:px-10">{children}</main>
		</div>
	);
}
