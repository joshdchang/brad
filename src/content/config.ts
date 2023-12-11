// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const frameCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    options: z.array(z.object({
      label: z.string(),
      reference: reference("frames"),
    })),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  frames: frameCollection,
};
