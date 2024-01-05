import { z, defineCollection } from 'astro:content';

const defaultCollectionPattern = defineCollection({
    schema: z.object({
        title: z.string(),
        brief: z.string().optional(),
        introducedBy: z.string().optional(),
        introducedDate: z.date().optional(),
        introducedDateText: z.string().optional(),
    }),
});

export const collections = {
  'base': defaultCollectionPattern,
  'modifier': defaultCollectionPattern,
};