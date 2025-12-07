type Props = { text: string }

export function SampleBoardHeader({ text }: Props) {
	return (
		<div className="font-bold">
			<p>{text}</p>
		</div>
	)
}
