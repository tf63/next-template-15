import path from "node:path"

export default (plop) => {
	plop.setHelper("extractFilename", (filePath) => path.basename(filePath))

	plop.setGenerator("component", {
		description: "Create a new component",
		prompts: [
			{
				type: "input",
				name: "path",
				message: "Please enter the component path (e.g. features/sample/sample-button)",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/{{path}}/{{kebabCase (extractFilename path)}}.tsx",
				templateFile: "templates/components/component.tsx.hbs",
			},
			{
				type: "add",
				path: "src/{{path}}/{{kebabCase (extractFilename path)}}.spec.tsx",
				templateFile: "templates/components/component.spec.tsx.hbs",
			},
			{
				type: "add",
				path: "src/{{path}}/{{kebabCase (extractFilename path)}}.stories.tsx",
				templateFile: "templates/components/component.stories.tsx.hbs",
			},
		],
	})
}
