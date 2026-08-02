import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    kind: z.enum(['case-study', 'playground']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    year: z.number().optional(),
    status: z.enum(['shipped', 'demo', 'learning', 'wip']).default('demo'),
  }),
});

export const collections = { projects };
