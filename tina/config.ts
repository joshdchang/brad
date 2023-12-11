import { defineConfig } from "tinacms";
// import { pathToSlug } from "../src/utils/content";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "public",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				name: "frame",
				label: "Frames",
				path: "src/content/frame",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
					{
						type: "object",
						name: "options",
						label: "Options",
						// @ts-expect-error
						itemProps: (item) => {
							// Field values are accessed by item?.<Field name>
							return { label: item.label };
						},
						fields: [
							{
								type: "string",
								name: "label",
								label: "Label",
								isTitle: true,
								required: true,
							},
							{
								type: "reference",
								name: "frame",
								label: "Frame",
								collections: ["frame"],
							},
						],
						list: true,
					},
				],
			},
		],
	},
});
