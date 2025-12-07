import { composeStories } from "@storybook/react"
import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import * as stories from "./sample-board.stories"

const { Default } = composeStories(stories)

describe("SampleBoard", () => {
	it("renders SampleBoard component", () => {
		render(<Default />)
	})
})
