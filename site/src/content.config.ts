import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    vertical: z.string(),
    /**
     * Placeholder scaffolding, not real research. Excluded from the sitemap,
     * the RSS feed and search indexing. Delete the file to remove it — no
     * other change required anywhere.
     */
    placeholder: z.boolean().default(false),
    sources: z.array(z.object({ label: z.string(), url: z.string().url().optional() })).default([]),
  }),
});

export const collections = { research };
