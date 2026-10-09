# ISHE Congress 2027 website

Astro site for the congress of the International Society for Human Ethology, Bogotá, 5–9 July 2027. Static output, deployed on Netlify. Maintained by Juan David Leongómez (local host), who edits content in Markdown and knows little HTML and CSS.

## Commands

Use pnpm, never npm or yarn (the lockfile is `pnpm-lock.yaml`).

- `pnpm dev`: local server
- `pnpm build`: production build to `dist/`
- `pnpm check`: type check

## How it is organised

- `src/data/site.ts`: congress name, dates, URL, contact email, `indexable` flag, list of sections.
- `src/content.config.ts`: schemas for all content.
- `src/content/pages/<section>/<page>.md`: every page. Folder = section, file name = address, `index.md` = section front page. One catch-all route (`src/pages/[...slug].astro`) renders them with `src/layouts/Page.astro`.
- `src/content/news/`, `src/content/speakers/`: news posts and plenary speakers. Files starting with `_` are ignored.
- `src/data/week.yaml`, `src/data/key-dates.yaml`: the week at a glance and key dates.
- `src/lib/nav.ts`: builds every menu from the pages collection. Menus are never written by hand.
- `src/components/Blocks.astro`: maps the `include` / `includeFirst` front matter to components.
- `src/styles/tokens.css`: all design tokens. `src/styles/global.css`: all other CSS. No CSS framework, no scoped styles.

## Rules

- Content changes belong in Markdown or YAML. Do not move text into components.
- Keep it simple for a non-developer: no new dependencies, integrations or client-side JavaScript without asking first. The site currently ships no JavaScript.
- New kinds of repeated content get a collection and a block, following the existing pattern (schema in `content.config.ts`, component in `src/components/`, entry in `Blocks.astro`).
- New colours or sizes go in `tokens.css` first.
- Dates in content are read as UTC. Always format them through `src/lib/dates.ts`.
- The visual identity is pending. The palette and the hero line (`Ridge.astro`) are placeholders, so keep design changes confined to tokens and components.

## Writing style for site text

- British English, sentence case headings, plain and direct.
- No em dashes inside sentences. Use commas or parentheses.
- State things directly. Avoid "not X, but Y" constructions.
- Never present something unconfirmed as decided. Use `status: preliminary` or `status: soon`, and wording such as "to be announced".
- Do not publish supplier names, prices from quotes, budget figures, or the hotel name before the organisers confirm them.
- Facts that can go out of date (transport, visas, taxes, prices) need a source. Record anything unverified in `LAUNCH-CHECKLIST.md`.

## Known state

Written without access to the package registry: `pnpm install`, `pnpm check` and `pnpm build` have never been run. Expect small fixes on the first run (package versions, type errors). An empty `speakers` collection logs a warning during build, which is expected.