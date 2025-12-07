import { composeStories } from "@storybook/react"
import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import * as stories from "./sample-board-header.stories"

const { Default } = composeStories(stories)

describe("SampleBoardHeader", () => {
	it("renders SampleBoardHeader component", () => {
		render(<Default />)
	})
})
