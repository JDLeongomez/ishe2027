import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blocks a page can pull in besides its own text.
const block = z.enum(['week', 'key-dates', 'speakers', 'news', 'colombia-map']);

// Every page of the site: one Markdown file each, in src/content/pages/.
// The folder is the section, the file name is the address.
const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    // Shorter name for menus, if the title is long.
    navTitle: z.string().optional(),
    // One sentence. Shown under the title and used by search engines.
    description: z.string(),
    // Position in the section menu. Lower comes first.
    order: z.number().default(100),
    // ready: nothing special. preliminary: shows a "may change" note.
    // soon: shows an "information will be added" note.
    status: z.enum(['ready', 'preliminary', 'soon']).default('ready'),
    updated: z.coerce.date().optional(),
    // Blocks shown before and after the page text.
    includeFirst: z.array(block).default([]),
    include: z.array(block).default([]),
    // true keeps the page out of menus (it still exists at its address).
    hidden: z.boolean().default(false),
  }),
});

// News posts: src/content/news/YYYY-MM-DD-short-name.md
const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

// Plenary speakers: one file each in src/content/speakers/.
// Files starting with "_" are ignored (see _example.md).
const speakers = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/speakers' }),
  schema: z.object({
    name: z.string(),
    affiliation: z.string(),
    talkTitle: z.string().optional(),
    website: z.string().url().optional(),
    order: z.number().default(100),
  }),
});

// The week at a glance: src/data/week.yaml
const week = defineCollection({
  loader: file('src/data/week.yaml'),
  schema: z.object({
    date: z.coerce.date(),
    note: z.string().optional(),
    items: z.array(
      z.object({
        when: z.string(),
        what: z.string(),
        where: z.string().optional(),
      }),
    ),
  }),
});

// Key dates: src/data/key-dates.yaml
const keyDates = defineCollection({
  loader: file('src/data/key-dates.yaml'),
  schema: z.object({
    label: z.string(),
    // Free text, so it can say "To be announced" or "5–9 July 2027".
    date: z.string(),
    confirmed: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { pages, news, speakers, week, keyDates };
