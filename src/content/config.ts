import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string().optional(),
    company: z.string().optional(),
    role: z.string(),
    timeline: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    image: z.string().optional(),
    heroImage: z.string().optional(),
    publishedDate: z.date(),
    outcome: z.string().optional(),
    comingSoon: z.boolean().optional(),
  }),
});

export const collections = {
  'case-studies': caseStudiesCollection,
};