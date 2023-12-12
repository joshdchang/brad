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
				title: fields.slug({ name: { label: "Title" }, slug: { description: "Do not change this slug once you have referenced it from another frame. It will break the connection." } }),
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
							description: "If you leave this blank, the option will link to the welcome page."
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
