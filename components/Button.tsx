interface ButtonProps {
	label: string;
}

export default function Button({ label }: ButtonProps) {
	return (
		<button className="bg-primary text-white px-16 py-2.5 rounded-3xl font-bold text-xl">
			{label}
		</button>
	);
}
