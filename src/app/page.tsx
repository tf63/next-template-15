import { SampleBlock } from "../features/sample/sample-block/sample-block"

export default function Page() {
	return (
		<main className="space-y-4 p-4">
			<h1 className="text-2xl font-bold">Hello, Next.js!</h1>
			<p className="text-foreground">This is a sample page using Tailwind CSS.</p>

			<SampleBlock />
		</main>
	)
}
