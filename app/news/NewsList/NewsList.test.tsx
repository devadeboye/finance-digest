import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewsList from ".";

// Mock the hooks and modules
jest.mock("@/lib/hooks/use-news", () => ({
	useGeneralNews: jest.fn(),
	newsKeys: {
		general: () => ["news", "general"],
	},
}));

jest.mock("@tanstack/react-virtual", () => ({
	useVirtualizer: jest.fn(),
}));

jest.mock("@/lib/api/news-api", () => ({
	newsApi: {
		getGeneralNews: jest.fn(),
	},
}));

// Import mocks after jest.mock
import { useGeneralNews } from "@/lib/hooks/use-news";
import { useVirtualizer } from "@tanstack/react-virtual";

// Create a wrapper with QueryClient
const createWrapper = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: { retry: false },
			mutations: { retry: false },
		},
	});

	const Wrapper = ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);

	Wrapper.displayName = "TestWrapper";
	return Wrapper;
};

describe("NewsList", () => {
	const mockNews = [
		{
			id: 1,
			headline: "Market Update: Tech Stocks Rally",
			datetime: 1705665600,
			image: "https://example.com/image1.jpg",
			url: "https://example.com/article1",
			source: "MarketWatch",
		},
		{
			id: 2,
			headline: "Federal Reserve Announces Policy Changes",
			datetime: 1705665600,
			image: "https://example.com/image2.jpg",
			url: "https://example.com/article2",
			source: "CNBC",
		},
	];

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders loading skeleton when loading", () => {
		(useGeneralNews as jest.Mock).mockReturnValue({
			data: undefined,
			isLoading: true,
			error: null,
		});

		(useVirtualizer as jest.Mock).mockReturnValue({
			getVirtualItems: () => [],
		});

		render(<NewsList />, { wrapper: createWrapper() });

		// Check for loading skeleton
		const skeletonItems = screen.getAllByTestId("skeleton-item");
		expect(skeletonItems).toHaveLength(8);
	});

	it("renders error message when there is an error", () => {
		(useGeneralNews as jest.Mock).mockReturnValue({
			data: undefined,
			isLoading: false,
			error: { message: "Failed to fetch news" },
		});

		(useVirtualizer as jest.Mock).mockReturnValue({
			getVirtualItems: () => [],
		});

		render(<NewsList />, { wrapper: createWrapper() });

		expect(screen.getByText("Error: Failed to fetch news")).toBeInTheDocument();
	});

	it("renders news cards when data is loaded", () => {
		(useGeneralNews as jest.Mock).mockReturnValue({
			data: mockNews,
			isLoading: false,
			error: null,
		});

		(useVirtualizer as jest.Mock).mockReturnValue({
			getVirtualItems: () => [
				{ index: 0, start: 0, size: 250 },
				{ index: 1, start: 250, size: 250 },
			],
		});

		render(<NewsList />, { wrapper: createWrapper() });

		// Check that news cards are rendered
		expect(
			screen.getByText("Market Update: Tech Stocks Rally")
		).toBeInTheDocument();
		expect(
			screen.getByText("Federal Reserve Announces Policy Changes")
		).toBeInTheDocument();
		expect(screen.getByText("MarketWatch")).toBeInTheDocument();
		expect(screen.getByText("CNBC")).toBeInTheDocument();
	});

	it("filters out news items without url or image", () => {
		const invalidNews = [
			...mockNews,
			{
				id: 3,
				headline: "Invalid News Item",
				datetime: 1705665600,
				image: "", // No image
				url: "", // No URL
				source: "InvalidSource",
			},
		];

		(useGeneralNews as jest.Mock).mockReturnValue({
			data: invalidNews,
			isLoading: false,
			error: null,
		});

		(useVirtualizer as jest.Mock).mockReturnValue({
			getVirtualItems: () => [
				{ index: 0, start: 0, size: 250 },
				{ index: 1, start: 250, size: 250 },
			],
		});

		render(<NewsList />, { wrapper: createWrapper() });

		// Should only render valid news items
		expect(
			screen.getByText("Market Update: Tech Stocks Rally")
		).toBeInTheDocument();
		expect(
			screen.getByText("Federal Reserve Announces Policy Changes")
		).toBeInTheDocument();
		expect(screen.queryByText("Invalid News Item")).not.toBeInTheDocument();
	});
});
