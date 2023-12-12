// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
	storage: {
		kind: "local",
	},
	collections: {
		frames: collection({
			label: "Frames",
			slugField: "title",
			path: "src/content/frames/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				content: fields.document({
					label: "Content",
					formatting: true,
					dividers: true,
					links: true,
					images: true,
				}),
				options: fields.array(
					fields.object({
						label: fields.text({ label: "Label" }),
						frame: fields.relationship({
							label: "Frame",
							collection: "frames",
						}),
					}),
					{
						label: "Options",
						itemLabel({ fields }) {
							return fields.label.value;
						},
					},
				),
			},
		}),
	},
});
