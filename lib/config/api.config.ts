const getApiUrl = (): string => {
	const apiUrl = process.env.NEXT_PUBLIC_FINNHUB_API_URL;

	if (!apiUrl) {
		console.warn(
			"NEXT_PUBLIC_FINNHUB_API_URL is not defined, falling back to localhost:4000"
		);
		return "http://localhost:4000";
	}
	return apiUrl;
};

export const API_CONFIG = {
	BASE_URL: getApiUrl(),
	TOKEN: process.env.NEXT_PUBLIC_FINNHUB_API_KEY,
	ENDPOINTS: {
		// news endpoints
		NEWS: {
			GENERAL: "/news?category=general",
		},
	},

	TIMEOUT: 10000, // 10 seconds
	RETRY_ATTEMPTS: 3,
} as const;

export const buildApiUrl = (endpoint: string): string => {
	return `${API_CONFIG.BASE_URL}${endpoint}&token=${API_CONFIG.TOKEN}`;
};

export default API_CONFIG;
