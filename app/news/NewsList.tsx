import NewsCard from "./NewsCard";

export default function NewsList() {
	return (
		<div className="flex flex-col gap-4 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{/* news cards */}
			<NewsCard
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				date="2021-01-01"
				thumbnail="/assets/images/news-1.png"
				link="https://www.google.com"
				source="Source 1"
			/>

			<NewsCard
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				date="2021-01-01"
				thumbnail="/assets/images/news-1.png"
				link="https://www.google.com"
				source="Source 1"
			/>

			<NewsCard
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				date="2021-01-01"
				thumbnail="/assets/images/news-1.png"
				link="https://www.google.com"
				source="Source 1"
			/>

			<NewsCard
				title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				date="2021-01-01"
				thumbnail="/assets/images/news-1.png"
				link="https://www.google.com"
				source="Source 1"
			/>
		</div>
	);
}
