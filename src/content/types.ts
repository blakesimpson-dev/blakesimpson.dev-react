// Shapes of the JSON files in src/content. Fields named body, details or
// instructions hold Markdown, rendered by components/markdown.tsx.

export interface Link {
  label: string;
  href: string;
}

export interface Blurb {
  avatar?: string;
  heading?: string;
  body: string;
}

/** An image with a small placeholder shown while the full image loads. */
export interface ProgressiveImage {
  src: string;
  compressedSrc: string;
}

/** Technology logo; SVGs need no placeholder, so compressedSrc is optional. */
export interface Logo {
  name: string;
  src: string;
  compressedSrc?: string;
}

export interface ProjectImage extends ProgressiveImage {
  alt: string;
  /** Small copy shown in the carousel; src only loads when opened. */
  thumbSrc: string;
}

/** A titled block of Markdown (achievements, work history, education). */
export interface Entry {
  title: string;
  body: string;
}

export interface Reference {
  name: string;
  path: string;
}

export interface AboutContent {
  blurb: Blurb;
  references: Reference[];
  /** Text of the CV button beside the references (the link is SITE.cv). */
  cvLabel: string;
  skills: string[];
  attributes: string[];
  proficiencies: Logo[];
  languages: Logo[];
  achievements: Entry[];
  history: Entry[];
  education: Entry[];
}

export interface Project {
  id: string;
  title: string;
  body: string;
  images: ProjectImage[];
  links: Link[];
}

export interface ProjectsContent {
  blurb: Blurb;
  projects: Project[];
}

/** SoundCloud embed player options shared by every track. */
export interface SoundcloudPlayer {
  width: string;
  height: string;
  color: string;
  hideRelated: boolean;
  showComments: boolean;
  showUser: boolean;
  showReposts: boolean;
  showTeaser: boolean;
}

export interface Track {
  id: string;
  autoPlay: boolean;
  href: string;
  title: string;
}

export interface MusicContent {
  blurb: Blurb;
  player: SoundcloudPlayer;
  tracks: Track[];
}

/** A monitor File menu item: the GLSL shader, or a video when url is set. */
export interface ScreenItem {
  id: number;
  name: string;
  url?: string;
  details: string;
}

export interface ContactContent {
  blurb: Blurb;
}

export interface ImageLink extends Link {
  image: string;
}

export interface SiteContent {
  /** The CV PDF, linked from the frame footer and the About page. */
  cv: Link;
  menu: {title: string; subtitle: string};
  frame: {copyright: string; instructions: string; repository: ImageLink};
  gameboy: {title: string};
}
