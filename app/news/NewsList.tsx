"use client";

import { useRef, useEffect } from "react";
import NewsCard from "./NewsCard";
import { useGeneralNews, newsKeys } from "@/lib/hooks/use-news";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useQueryClient } from "@tanstack/react-query";
import { newsApi } from "@/lib/api/news-api";

export default function NewsList() {
	const queryClient = useQueryClient();
	const { data: news, isLoading, error } = useGeneralNews();
	const parentRef = useRef<HTMLDivElement>(null);

	// Prefetch news data
	useEffect(() => {
		queryClient.prefetchQuery({
			queryKey: newsKeys.general(),
			queryFn: newsApi.getGeneralNews,
		});
	}, [queryClient]);

	// Filter valid news items (with url and image)
	const validNews = Array.isArray(news)
		? news.filter((news) => news.url && news.image)
		: [];

	console.log("Total news items:", news?.length);
	console.log("Valid news items:", validNews.length);

	// Set up virtualizer with optimized settings
	const virtualizer = useVirtualizer({
		count: validNews.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 100,
		overscan: 20,
	});

	const virtualItems = virtualizer.getVirtualItems();
	console.log("Virtual items:", virtualItems.length);

	if (isLoading)
		return (
			<div className="flex flex-col gap-4 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-pulse">
				{[...Array(8)].map((_, i) => (
					<div key={i} className="h-[250px] bg-[#111] rounded-lg" />
				))}
			</div>
		);

	if (error) return <div>Error: {error.message}</div>;

	return (
		<div
			ref={parentRef}
			className="h-[calc(100vh-200px)] overflow-auto scroll-smooth px-4 md:px-10"
		>
			<div className="flex flex-col gap-4 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{virtualItems.map((virtualItem) => {
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
