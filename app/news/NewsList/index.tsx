"use client";

import { useRef, useEffect, useState } from "react";
import NewsCard from "@/components/NewsCard";
import { useGeneralNews, newsKeys } from "@/lib/hooks/use-news";
import { useQueryClient } from "@tanstack/react-query";
import { newsApi } from "@/lib/api/news-api";

const ITEMS_PER_PAGE = 20;

export default function NewsList() {
	const queryClient = useQueryClient();
	const { data: news, isLoading, error } = useGeneralNews();
	const [currentPage, setCurrentPage] = useState(1);
	const containerRef = useRef<HTMLDivElement>(null);

	// Prefetch news data
	useEffect(() => {
		queryClient.prefetchQuery({
			queryKey: newsKeys.general(),
			queryFn: newsApi.getGeneralNews,
		});
	}, [queryClient]);

	// Filter valid news items (with url and image)
	const validNews = Array.isArray(news)
		? news.filter((news) => {
				// Check if URL and image exist
				const hasValidUrl = news.url && news.url.trim() !== "";
				const hasValidImage = news.image && news.image.trim() !== "";

				// Additional check for common image domains that might fail
				const isReliableImage =
					hasValidImage &&
					(news.image.includes("static2.finnhub.io") ||
						news.image.includes("reuters.com") ||
						news.image.includes("bloomberg.com") ||
						news.image.includes("wsj.net") ||
						news.image.includes("ft.com"));

				return hasValidUrl && (hasValidImage || isReliableImage);
		  })
		: [];

	// Calculate pagination
	const totalPages = Math.ceil(validNews.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;

	// Load all items up to current page for smooth scrolling
	const allNewsToShow = validNews.slice(0, endIndex);

	const handleScroll = () => {
		if (!containerRef.current) return;

		const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
		const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

		// Load more when user scrolls to 80% of the content
		if (scrollPercentage > 0.8 && currentPage < totalPages) {
			setCurrentPage((prev) => prev + 1);
		}
	};

	if (isLoading)
		return (
			<div className="flex flex-col gap-4 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-pulse">
				{[...Array(8)].map((_, i) => (
					<div
						key={i}
						className="h-[250px] bg-[#111] rounded-lg"
						data-testid="skeleton-item"
					/>
				))}
			</div>
		);

	if (error) return <div>Error: {error.message}</div>;

	return (
		<div
			ref={containerRef}
			className="h-[calc(100vh-200px)] overflow-auto scroll-smooth px-4 md:px-10"
			onScroll={handleScroll}
		>
			<div className="flex flex-col gap-4 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{allNewsToShow.map((news) => (
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

			{/* Loading indicator */}
			{currentPage < totalPages && (
				<div className="flex justify-center py-8">
					<div className="text-secondary">Loading more news...</div>
				</div>
			)}
		</div>
	);
}
