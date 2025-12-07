type Props = {
	buttonElement: React.ReactNode
	text: string
}

export function SampleBoard({ buttonElement, text }: Props) {
	return (
		<div className="flex flex-col gap-2">
			<p>{text}</p>
			{buttonElement}
		</div>
	)
}
