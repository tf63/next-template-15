import type { Meta, StoryObj } from "@storybook/react"
import { SampleBoardHeader } from "./sample-board-header"

export default {
	title: "Sample/SampleBoardHeader",
	component: SampleBoardHeader,
} satisfies Meta<typeof SampleBoardHeader>

type StoryType = StoryObj<typeof SampleBoardHeader> & {
	args: React.ComponentProps<typeof SampleBoardHeader>
}

export const Default: StoryType = {
	args: { text: "This is Header" },
}
