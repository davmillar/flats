import { z, defineCollection } from 'astro:content';

const baseCollection = defineCollection({
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = {
  'base': baseCollection,
};