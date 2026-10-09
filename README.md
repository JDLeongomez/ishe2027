# ISHE Congress 2027 website

The website of the ISHE Congress 2027 (Bogotá, 5–9 July 2027), built with [Astro](https://astro.build/). Every page is a Markdown file, and the menus build themselves from the files.

> This first version was written without access to the package registry, so it has not been installed or built yet. See "First run" below.

## First run

```sh
pnpm install
pnpm dev      # local preview at http://localhost:4321
pnpm build    # production build in dist/
pnpm check    # type check
```

Node 22 or newer. The project uses pnpm: commit `pnpm-lock.yaml` and do not create a `package-lock.json`.

## Everyday edits

### Change the text of a page

Edit its file in `src/content/pages/`. The folder is the section and the file name is the address:

| File                                        | Address                  |
| ------------------------------------------- | ------------------------ |
| `src/content/pages/bogota/index.md`         | `/bogota/`               |
| `src/content/pages/bogota/where-to-stay.md` | `/bogota/where-to-stay/` |

Update the `updated:` date at the top when you change something that matters.

### Add a page

Create a new `.md` file in the folder of its section. It appears in that section's menu, in the footer and (for the Bogotá section) on the home page.

```md
---
title: Accessibility
description: One sentence. It is shown under the title and used by search engines.
order: 5
status: soon
updated: 2026-10-09
---

The text of the page, in Markdown.
```

| Field                     | What it does                                                                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `title`                   | Page title                                                                                                                       |
| `navTitle`                | Shorter name for menus (optional)                                                                                                |
| `description`             | One sentence under the title                                                                                                     |
| `order`                   | Position in the section menu, lower first                                                                                        |
| `status`                  | `ready` (default), `preliminary` (shows a "may change" note) or `soon` (shows a "coming soon" note and a "soon" tag in the menu) |
| `updated`                 | Date shown as "Last updated"                                                                                                     |
| `includeFirst`, `include` | Blocks shown before or after the text: `week`, `key-dates`, `speakers`, `news`                                                   |
| `hidden`                  | `true` keeps the page out of the menus                                                                                           |

When a placeholder page is ready, write its text and delete the `status: soon` line.

### Add a section

Create a folder in `src/content/pages/` with an `index.md`, then add it to `sections` in `src/data/site.ts`.

### The week at a glance

Edit `src/data/week.yaml`. It feeds the home page and the Programme page.

### Key dates

Edit `src/data/key-dates.yaml`. Set `confirmed: true` when a date is final.

### Post a news item

Create `src/content/news/YYYY-MM-DD-short-name.md`:

```md
---
title: Registration is open
date: 2027-02-01
summary: One or two sentences shown in the news list.
---

The text of the post.
```

Add `draft: true` to keep a post unpublished.

### Add a plenary speaker

Copy `src/content/speakers/_example.md`, rename it and fill it in. The speaker appears on the Plenary speakers page.

### Site-wide settings

`src/data/site.ts` holds the congress name, dates, public address, contact email and the list of sections.

## Deploying on Netlify

1. Push this folder to a GitHub repository (it can be private).
2. In Netlify, choose "Add new site", then "Import an existing project", and pick the repository. The build settings come from `netlify.toml`, and Netlify installs with pnpm because it finds `pnpm-lock.yaml`.
3. In "Site configuration", change the site name to get an address such as `ishe2027.netlify.app`.
4. Every push to the main branch publishes the site. Pull requests get their own preview address.

When the final domain is decided, add it in Netlify ("Domain management") and change `url` in `src/data/site.ts`.

## Keeping it private for now

While `indexable` is `false` in `src/data/site.ts`, every page asks search engines not to index it and `robots.txt` blocks crawlers. Anyone with the address can still open the site, so share the link only with the people who should see it.

Before launch, go through `LAUNCH-CHECKLIST.md`.

## Design

All colours, typefaces and sizes are in `src/styles/tokens.css`. The rest of the styling is in `src/styles/global.css`. The line in the hero (a voice waveform that becomes the profile of the eastern hills) is a placeholder in `src/components/Ridge.astro` until the visual identity is ready.