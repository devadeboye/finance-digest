import { useQuery } from "@tanstack/react-query";
import { newsApi } from "../api/news-api";

export const newsKeys = {
	all: ["news"] as const,
	general: () => [...newsKeys.all, "general"] as const,
};

export const useGeneralNews = () => {
	return useQuery({
		queryKey: newsKeys.general(),
		queryFn: newsApi.getGeneralNews,
	});
};
