import { render, screen, fireEvent } from "@testing-library/react";
import NewsCard from "./index";

describe("NewsCard", () => {
	const mockProps = {
		title: "Market Update: Tech Stocks Rally",
		date: 1705665600, // Jan 19, 2024
		thumbnail: "https://example.com/image.jpg",
		link: "https://example.com/article",
		source: "MarketWatch",
	};

	it("renders news card with correct content", () => {
		render(<NewsCard {...mockProps} />);

		// Check title
		expect(screen.getByText(mockProps.title)).toBeInTheDocument();

		// Check source
		expect(screen.getByText(mockProps.source)).toBeInTheDocument();

		// Check date formatting
		expect(screen.getByText("Jan 19, 2024")).toBeInTheDocument();

		// Check link
		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("href", mockProps.link);
		expect(link).toHaveAttribute("target", "_blank");
		expect(link).toHaveAttribute("rel", "noopener noreferrer");

		// Check image
		const image = screen.getByRole("img");
		expect(image).toHaveAttribute("alt", mockProps.title);
		expect(image).toHaveAttribute("src");
	});

	it("shows fallback when image fails to load", () => {
		render(<NewsCard {...mockProps} />);

		// Initially shows image
		const image = screen.getByRole("img");
		expect(image).toBeInTheDocument();

		// Simulate image error
		fireEvent.error(image);

		// Should show fallback message
		expect(screen.getByText("Image unavailable")).toBeInTheDocument();
		expect(screen.queryByRole("img")).not.toBeInTheDocument();
	});
});
