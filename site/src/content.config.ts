import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * ONE COLLECTION, TWO SHAPES.
 *
 * The collection predates the September 2026 research series and already held
 * placeholder scaffolding keyed on `published` / `vertical`. The series adds a
 * second shape keyed on `piece` — research pieces with a separate research
 * date, a hero, front-matter FAQs and a draft flag.
 *
 * Rather than fork the collection, the schema accepts both and the refinement
 * below enforces whichever shape a file declares. `piece` is the discriminator:
 * present means a research piece, absent means legacy scaffolding.
 */

/** A date, or the literal placeholder a draft carries until it is published. */
const SET_ON_PUBLISH = 'SET_ON_PUBLISH';
const publishDate = z.union([z.literal(SET_ON_PUBLISH), z.coerce.date()]);

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),

      /* ---- legacy placeholder scaffolding ---- */
      published: z.coerce.date().optional(),
      updated: z.coerce.date().optional(),
      vertical: z.string().optional(),
      /**
       * Placeholder scaffolding, not real research. Excluded from the sitemap,
       * the RSS feed and search indexing. Delete the file to remove it — no
       * other change required anywhere.
       */
      placeholder: z.boolean().default(false),
      sources: z.array(z.object({ label: z.string(), url: z.string().url().optional() })).default([]),

      /* ---- September 2026 research series ---- */
      /** Position in the series. Its presence marks the file as a piece. */
      piece: z.number().int().positive().optional(),
      /** When the measurement ran. Fixed; never the publication date. */
      researchDate: z.coerce.date().optional(),
      /** SET_ON_PUBLISH until the draft flag comes off. */
      datePublished: publishDate.optional(),
      /** Equals datePublished at launch; moves only when the text changes. */
      dateModified: publishDate.optional(),
      heroImage: z.string().optional(),
      heroAlt: z.string().optional(),
      /**
       * Rendered by the layout as both the visible FAQ section and the
       * FAQPage JSON-LD, so the page and the schema cannot drift apart.
       */
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      /** Drafts are excluded from the build, the index, the sitemap and RSS. */
      draft: z.boolean().default(false),
    })
    .superRefine((d, ctx) => {
      const req = (field: string, value: unknown) => {
        if (value === undefined || value === null || value === '') {
          ctx.addIssue({ code: z.ZodIssueCode.custom, path: [field], message: `${field} is required on a research piece` });
        }
      };

      if (d.piece === undefined) {
        // Legacy scaffolding.
        req('published', d.published);
        req('vertical', d.vertical);
        return;
      }

      req('researchDate', d.researchDate);
      req('datePublished', d.datePublished);
      req('dateModified', d.dateModified);
      req('heroImage', d.heroImage);
      req('heroAlt', d.heroAlt);

      /**
       * THE BUILD MUST FAIL IF A PUBLISHED PIECE STILL CARRIES THE PLACEHOLDER.
       * A draft may carry it — that is what it is for — but the moment `draft`
       * comes off, a real date has to go on. Without this the series could ship
       * with "SET_ON_PUBLISH" in its own Article schema.
       */
      if (!d.draft) {
        for (const f of ['datePublished', 'dateModified'] as const) {
          if (d[f] === SET_ON_PUBLISH) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: [f],
              message:
                `${f} is still ${SET_ON_PUBLISH} on a non-draft piece. ` +
                `Set it to the date this piece goes live, or put draft: true back on.`,
            });
          }
        }
      }
    }),
});

export const collections = { research };
