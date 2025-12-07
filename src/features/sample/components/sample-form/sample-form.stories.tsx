import { zodResolver } from "@hookform/resolvers/zod/src/index.js"
import type { Meta, StoryObj } from "@storybook/react"
import { useForm } from "react-hook-form"
import { SampleForm } from "./sample-form"
import { type SampleFormData, sampleFormSchema } from "@/features/sample/lib/validation"

export default {
	title: "Sample/SampleForm",
	component: SampleForm,
} satisfies Meta<typeof SampleForm>

type StoryType = StoryObj<typeof SampleForm> & {
	args?: React.ComponentProps<typeof SampleForm>
}

function FormWrapper({ isPending = false, error }: { isPending?: boolean; error?: string }) {
	const form = useForm<SampleFormData>({
		mode: "onBlur",
		resolver: zodResolver(sampleFormSchema),
		defaultValues: {
			email: "",
		},
	})

	const handleSubmit = (data: SampleFormData) => {
		alert(JSON.stringify(data))
	}

	return <SampleForm form={form} onSubmit={handleSubmit} isPending={isPending} error={error} />
}

export const Default: StoryType = {
	render: () => <FormWrapper />,
}
