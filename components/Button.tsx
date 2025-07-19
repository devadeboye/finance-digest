interface ButtonProps {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
}

export default function Button({ label, onClick, disabled }: ButtonProps) {
	return (
		<button
			className="bg-primary text-white px-16 py-2.5 rounded-3xl font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed"
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
}
