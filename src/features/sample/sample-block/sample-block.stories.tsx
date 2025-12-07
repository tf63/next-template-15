import type { Meta, StoryObj } from "@storybook/react"
import { SampleBlock } from "./sample-block"

type SampleBlockType = typeof SampleBlock

export default {
	title: "Sample/SampleBlock",
	component: SampleBlock,
} satisfies Meta<SampleBlockType>

export const Default: StoryObj<SampleBlockType> = {
	args: {},
}
