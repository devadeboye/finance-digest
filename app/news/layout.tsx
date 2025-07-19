import Image from "next/image";
import Link from "next/link";

export default function NewsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<header className="w-svw py-3 flex justify-center items-center">
				<Link href="/">
					<div className="h-8 md:h-12">
						<Image
							className="h-full w-auto"
							src="/assets/svg/blott-logo.svg"
							alt="Blott Studio Logo"
							width={100}
							height={100}
						/>
					</div>
				</Link>
			</header>
			<main className="px-4 md:px-10">
				<div className="flex flex-col gap-10">
					<h1 className="text-3xl font-bold md:text-5xl md:font-semibold">
						NEWS
					</h1>

					{children}
				</div>
			</main>
		</div>
	);
}
