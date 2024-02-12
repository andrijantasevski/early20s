import { defineCollection, z } from "astro:content";

const poemCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
  }),
});

export const collections = {
  poemCollection,
};
