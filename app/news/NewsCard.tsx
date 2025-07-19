import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
	title: string;
	date: number;
	thumbnail: string;
	link: string;
	source: string;
}

export default function NewsCard({
	title,
	date,
	thumbnail,
	link,
	source,
}: NewsCardProps) {
	const dateString = new Date(date * 1000).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	return (
		<div className="flex flex-row gap-4 w-full md:flex-col p-2 bg-[#111] rounded-lg transition-transform hover:scale-[1.02]">
			<div className="relative w-[100px] h-[100px] flex-shrink-0 md:w-auto md:h-[200px] bg-[#222] rounded-md overflow-hidden">
				<Image
					src={thumbnail}
					alt={title}
					className="object-cover"
					fill
					sizes="(max-width: 768px) 100px, (max-width: 1200px) 50vw, 33vw"
					loading="lazy"
				/>
			</div>

			<div className="flex flex-col gap-2 flex-grow">
				<div className="flex flex-row gap-2 text-sm text-secondary justify-between">
					<div>{source}</div>
					<div>{dateString}</div>
				</div>

				<Link
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="hover:underline"
				>
					<h2 className="text-lg font-bold line-clamp-3">{title}</h2>
				</Link>
			</div>
		</div>
	);
}
