import { z, defineCollection } from "astro:content";

const frame = defineCollection({
  type: "content", 
  schema: () => z.object({
    title: z.string(),
    options: z.array(z.object({
      label: z.string(),
      frame: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  frame,
};
