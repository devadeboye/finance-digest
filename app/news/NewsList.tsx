"use client";

import NewsCard from "./NewsCard";
import { useGeneralNews } from "@/lib/hooks/use-news";

export default function NewsList() {
	const { data: news, isLoading, error } = useGeneralNews();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="flex flex-col gap-4 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{Array.isArray(news) &&
				news
					.filter((news) => news.url && news.image)
					.map((news) => (
						<NewsCard
							key={news.id}
							title={news.headline}
							date={news.datetime}
							thumbnail={news.image}
							link={news.url}
							source={news.source}
						/>
					))}
		</div>
	);
}
