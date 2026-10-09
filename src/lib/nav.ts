import { getCollection, type CollectionEntry } from 'astro:content';
import { sections, type SectionId } from '../data/site';

export type PageEntry = CollectionEntry<'pages'>;

// "bogota/index" and "bogota" are the same page: the section's front page.
export function pageSlug(id: string): string {
  return id.replace(/\/index$/, '');
}

export function pageHref(id: string): string {
  return `/${pageSlug(id)}/`;
}

export function sectionOf(id: string): string {
  return pageSlug(id).split('/')[0];
}

function isSectionFront(id: string): boolean {
  return !pageSlug(id).includes('/');
}

export interface NavSection {
  id: SectionId;
  label: string;
  href: string;
  pages: PageEntry[];
}

// The whole menu: each section with its pages, front page first,
// then by "order", then alphabetically.
export async function getNav(): Promise<NavSection[]> {
  const all = await getCollection('pages', ({ data }) => !data.hidden);
  return sections.map((section) => {
    const pages = all
      .filter((page) => sectionOf(page.id) === section.id)
      .sort((a, b) => {
        if (isSectionFront(a.id) !== isSectionFront(b.id)) return isSectionFront(a.id) ? -1 : 1;
        return a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);
      });
    return { id: section.id, label: section.label, href: `/${section.id}/`, pages };
  });
}

export function menuTitle(page: PageEntry): string {
  return page.data.navTitle ?? page.data.title;
}
