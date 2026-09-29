// Site content, bundled from JSON at build time. Edit the JSON files; the
// annotations below type-check them against ./types.
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
export const SCREEN_ITEMS: ScreenItem[] = screenItems;
export const SITE: SiteContent = site;
