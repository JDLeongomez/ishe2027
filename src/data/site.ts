// Everything about the congress that appears in more than one place.
// Change it here and it changes across the whole site.

export const site = {
  name: 'ISHE Congress 2027',
  shortName: 'ISHE 2027',
  city: 'Bogotá',
  country: 'Colombia',

  dates: {
    start: '2027-07-05',
    end: '2027-07-09',
    label: '5–9 July 2027',
  },

  // Public address of the site. Change it when the final domain is decided.
  url: 'https://ishe2027.netlify.app',

  // While this is false, every page asks search engines not to index it
  // and robots.txt blocks crawlers. Set it to true on launch day.
  indexable: false as boolean,

  // Leave empty until there is a congress address. The contact page and
  // the footer show "to be announced" while it is empty.
  contactEmail: '' as string,

  description:
    'The congress of the International Society for Human Ethology, 5–9 July 2027 in Bogotá, Colombia.',

  society: {
    name: 'International Society for Human Ethology',
    shortName: 'ISHE',
    url: 'https://ishe.org/',
  },

  host: {
    name: 'Universidad El Bosque',
    url: 'https://www.unbosque.edu.co/',
    faculty: {
      name: 'Faculty of Psychology',
      url: 'https://www.unbosque.edu.co/programas-academicos/facultad-psicologia',
    },
  },

  group: {
    name: 'Cognitive and Behavioural Sciences',
    shortName: 'CODEC',
    url: 'https://grupo-codec.netlify.app/',
  },

  lab: {
    name: 'Human Behaviour and Evolution Lab',
    shortName: 'EvoCo',
    url: 'https://jdleongomez.info/en/lab/',
  },

  localHost: {
    name: 'Juan David Leongómez',
    url: 'https://jdleongomez.info/',
  },
} as const;

// The main sections, in menu order. Each id is a folder in
// src/content/pages/. A page appears in its section's menu automatically.
export const sections = [
  { id: 'programme', label: 'Programme' },
  { id: 'registration', label: 'Registration' },
  { id: 'venue', label: 'Venue' },
  { id: 'bogota', label: 'Bogotá' },
  { id: 'about', label: 'About' },
] as const;

export type SectionId = (typeof sections)[number]['id'];
