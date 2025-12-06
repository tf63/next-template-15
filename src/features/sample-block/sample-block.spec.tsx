import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { SampleBlock } from "./sample-block"

describe("SampleBlock", () => {
	it("renders SampleBlock component", () => {
		render(<SampleBlock />)
	})
})
