import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="h-svh flex justify-center items-center">
			<div className="flex flex-col justify-between gap-32 lg:w-3/5">
				<div className="flex flex-col gap-10 h-full">
					<div className="text-2xl md:text-3xl">Devadeboye</div>

					<div className="text-4xl md:text-7xl font-bold">Finance Digest</div>

					<div className="text-2xl md:text-3xl font-bold text-secondary">
						Curated finance news
					</div>
				</div>

				{/* cta section */}
				<div className="flex h-full flex-col gap-4 md:gap-0 md:flex-row md:justify-between">
					<div className="flex flex-row gap-4">
						{/* logo */}
						<div className="h-8">
							<Image
								className="h-full w-auto"
								src="/assets/svg/blott-logo.svg"
								alt="Blott Studio Logo"
								width={100}
								height={100}
							/>
						</div>

						{/* copyright */}
						<div>
							<div className="text-xs semi-bold">Devadeboye</div>
							<div className="text-[8px] text-secondary">
								&copy; {new Date().getFullYear()} Devadeboye. All rights
								reserved.
							</div>
						</div>
					</div>

					<Link href="/news">
						<Button label="Explore News" />
					</Link>
				</div>
			</div>
		</main>
	);
}
