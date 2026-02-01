export const API_CONFIG = {
	BASE_URL: "/api/proxy",
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
	return `${API_CONFIG.BASE_URL}${endpoint}`;
};

export default API_CONFIG;
