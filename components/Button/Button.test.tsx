import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
	const mockOnClick = jest.fn();

	beforeEach(() => {
		mockOnClick.mockClear();
	});

	it("renders button with correct label", () => {
		render(<Button label="Click me" />);

		expect(
			screen.getByRole("button", { name: "Click me" })
		).toBeInTheDocument();
	});

	it("calls onClick when clicked", () => {
		render(<Button label="Click me" onClick={mockOnClick} />);

		const button = screen.getByRole("button");
		fireEvent.click(button);

		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});

	it("does not call onClick when disabled", () => {
		render(<Button label="Click me" onClick={mockOnClick} disabled />);

		const button = screen.getByRole("button");
		fireEvent.click(button);

		expect(mockOnClick).not.toHaveBeenCalled();
	});

	it("applies disabled styles when disabled", () => {
		render(<Button label="Click me" disabled />);

		const button = screen.getByRole("button");
		expect(button).toBeDisabled();
		expect(button).toHaveClass(
			"disabled:opacity-50",
			"disabled:cursor-not-allowed"
		);
	});

	it("renders without onClick prop", () => {
		render(<Button label="Click me" />);

		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
		expect(button).not.toBeDisabled();
	});
});
