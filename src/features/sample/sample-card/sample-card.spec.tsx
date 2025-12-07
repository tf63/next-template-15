import { render } from "@testing-library/react"
import { describe, it } from "vitest"
import { SampleCard } from "./sample-card"

describe("SampleCard", () => {
	it("renders SampleCard component", () => {
		render(<SampleCard text="SampleCard Component" />)
	})
})
