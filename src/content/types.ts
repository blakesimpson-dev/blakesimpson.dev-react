// Fields named body, details or instructions hold Markdown

export interface Link {
  label: string;
  href: string;
}

export interface Blurb {
  avatar?: string;
  heading?: string;
  body: string;
}

export interface ProgressiveImage {
  src: string;
  compressedSrc: string;
}

export interface Logo {
  name: string;
  src: string;
  compressedSrc?: string;
}

export interface ProjectImage extends ProgressiveImage {
  alt: string;
  thumbSrc: string;
}

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

// A video when url is set, otherwise the shader
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
  cv: Link;
  menu: {title: string};
  frame: {
    copyright: string;
    copyrightShort: string;
    instructions: string;
    repository: ImageLink;
  };
  gameboy: {title: string};
}
