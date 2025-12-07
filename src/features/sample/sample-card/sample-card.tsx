type Props = { text: string }

export function SampleCard({ text }: Props) {
	return (
		<div className="w-full rounded-xl bg-emerald-300 p-5">
			<p className="text-center">{text}</p>
		</div>
	)
}
