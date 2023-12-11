import { z, defineCollection } from "astro:content";

const frame = defineCollection({
  type: "content", 
  schema: () => z.object({
    title: z.string(),
  }),
});

export const collections = {
  frame,
};
