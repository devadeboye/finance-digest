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
		<div className="flex flex-row gap-4 w-full md:flex-col p-2">
			<div className="w-[100px] h-[100px] flex-shrink-0 md:w-auto md:h-auto">
				<Image
					src={thumbnail}
					alt={title}
					className="object-cover w-full h-full"
					width={100}
					height={100}
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
