import type { Meta, StoryObj } from "@storybook/react"
import { SampleCard } from "./sample-card"

type SampleCardType = typeof SampleCard

export default {
	title: "Sample/SampleCard",
	component: SampleCard,
} satisfies Meta<SampleCardType>

export const Default: StoryObj<SampleCardType> = {
	args: {
		text: "SampleCard Component",
	},
}
