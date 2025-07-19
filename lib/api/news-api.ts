import API_CONFIG, { buildApiUrl } from "../config/api.config";

/**
 * This is the interface for the news data from the API
 * {
        "category": "top news",
        "datetime": 1752876900,
        "headline": "Block is the latest to get an S\u0026P 500 nod, and its stock is climbing",
        "id": 7498901,
        "image": "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",
        "related": "",
        "source": "MarketWatch",
        "summary": "Robinhood misses out on S\u0026P 500 inclusion once again, as Square parent company is chosen to replace Hess.",
        "url": "https://www.marketwatch.com/story/block-is-the-latest-to-get-an-s-p-500-nod-and-its-stock-is-climbing-37295678"
    }
 */

interface News {
	category: string;
	datetime: number;
	headline: string;
	id: number;
	image: string;
	related: string;
	source: string;
	summary: string;
	url: string;
}

export const newsApi = {
	getGeneralNews: async (): Promise<News[]> => {
		const response = await fetch(
			buildApiUrl(API_CONFIG.ENDPOINTS.NEWS.GENERAL)
		);
		return response.json();
	},
};
