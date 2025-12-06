import { expect, test } from "@playwright/test"
import stories from "../test-results/storybook-static/index.json"

const storyInfos = Object.values(stories.entries)
	.filter(({ type }) => type === "story")
	.map((story) => ({
		id: story.id,
		title: story.title,
		name: story.name,
	}))

for (const story of storyInfos) {
	test(`VRT: ${story.title} / ${story.name}`, async ({ page }) => {
		await page.goto(`iframe?id=${story.id}`, {
			waitUntil: "networkidle",
		})
		await page.waitForTimeout(300)
		await page.evaluateHandle("document.fonts.ready")
		await expect(page).toHaveScreenshot(`${story.id}.png`)
	})

	test(`VRT (dark): ${story.title} / ${story.name}`, { tag: ["@dark"] }, async ({ page }) => {
		await page.goto(`iframe?id=${story.id}`, {
			waitUntil: "networkidle",
		})
		await page.waitForTimeout(300)
		await page.evaluateHandle("document.fonts.ready")
		await page.evaluate(() => {
			document.documentElement.classList.add("dark")
		})
		await expect(page).toHaveScreenshot(`${story.id}-dark.png`)
	})
}
