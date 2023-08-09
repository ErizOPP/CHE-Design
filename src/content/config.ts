import { z, defineCollection } from 'astro:content';

const servicios = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    draft: z.boolean().optional(),
    containImage: z.boolean().optional(),
  }),
});

export const collections = {
    servicios,
};