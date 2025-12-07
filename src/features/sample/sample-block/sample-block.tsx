import { SampleCard } from "../sample-card/sample-card"

type Props = {}

export function SampleBlock({}: Props) {
	return (
		<div className="flex w-full flex-col gap-5">
			<SampleCard text="SampleCard Component" />
		</div>
	)
}
