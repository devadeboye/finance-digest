import NewsList from "./NewsList";

export default function News() {
	return (
		<div className="flex flex-col gap-10">
			<h1 className="text-3xl font-bold md:text-5xl md:font-semibold">NEWS</h1>

			<NewsList />
		</div>
	);
}
