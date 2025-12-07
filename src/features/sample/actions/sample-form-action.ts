"use server"

import { redirect } from "next/navigation"
import type { FormResult } from "@/types"

export async function sampleFormAction(): Promise<FormResult> {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	if (Math.random() > 0.5) {
		return {
			ok: false,
			message: "Sample form submission failed. Please try again.",
		}
	}

	redirect("/sign-in")
}
