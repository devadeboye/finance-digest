"use client";

import { useRef } from "react";
import NewsCard from "./NewsCard";
import { useGeneralNews } from "@/lib/hooks/use-news";
import { useVirtualizer } from "@tanstack/react-virtual";

export default function NewsList() {
	const { data: news, isLoading, error } = useGeneralNews();
	const parentRef = useRef<HTMLDivElement>(null);

	// Filter valid news items (with url and image)
	const validNews = Array.isArray(news)
		? news.filter((news) => news.url && news.image)
		: [];

	// Set up virtualizer
	const virtualizer = useVirtualizer({
		count: validNews.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 150,
		overscan: 5,
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div ref={parentRef} className="h-[calc(100vh-200px)] overflow-auto">
			<div className="flex flex-col gap-4 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{virtualizer.getVirtualItems().map((virtualItem) => {
					const news = validNews[virtualItem.index];
					return (
						<NewsCard
							key={news.id}
							title={news.headline}
							date={news.datetime}
							thumbnail={news.image}
							link={news.url}
							source={news.source}
						/>
					);
				})}
			</div>
		</div>
	);
}
