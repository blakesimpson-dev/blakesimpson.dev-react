import about from './about.json';
import contact from './contact.json';
import music from './music.json';
import projects from './projects.json';
import screenItems from './screen_items.json';
import site from './site.json';
import type {
  AboutContent,
  ContactContent,
  MusicContent,
  ProjectsContent,
  ScreenItem,
  SiteContent,
} from './types';

export const ABOUT: AboutContent = about;
export const CONTACT: ContactContent = contact;
export const MUSIC: MusicContent = music;
export const PROJECTS: ProjectsContent = projects;
export const SCREEN_ITEMS = nonEmpty<ScreenItem>(
  screenItems,
  'screen_items.json',
);
export const SITE: SiteContent = site;

/** Checks a list has at least one entry, so its first item is always set. */
function nonEmpty<T>(items: T[], source: string): [T, ...T[]] {
  const [first, ...rest] = items;
  if (first === undefined) {
    throw new Error(`${source} must have at least one entry`);
  }
  return [first, ...rest];
}
