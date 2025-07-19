import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
	return (
		<main className="h-svh flex justify-center items-center">
			<div className="flex flex-col justify-between gap-32 lg:w-3/5">
				<div className="flex flex-col gap-10 h-full">
					<div className="text-3xl">Blott Studio</div>

					<div className="text-7xl font-bold">Web Assessment</div>

					<div className="text-3xl font-bold text-secondary">
						Finance Digest
					</div>
				</div>

				{/* cta section */}
				<div className="flex h-full justify-between">
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
							<div className="text-xs semi-bold">Blott.io ltd</div>
							<div className="text-[8px] text-secondary">
								&copy; {new Date().getFullYear()}
								Blott.io ltd. All rights reserved.
							</div>
						</div>
					</div>

					<Button label="Ready" />
				</div>
			</div>
		</main>
	);
}
