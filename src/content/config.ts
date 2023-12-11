import { z, defineCollection, reference } from "astro:content";

const frame = defineCollection({
  type: "content", 
  schema: () => z.object({
    title: z.string(),
    options: z.array(z.object({
      label: z.string(),
      link: reference("frame").optional(),
    })).optional(),
  }),
});

export const collections = {
  frame,
};
