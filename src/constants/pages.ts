/** Every page, in menu order. Home is the desk view with no overlay. */
export const PAGES = ['Home', 'Music', 'Projects', 'About', 'Contact'] as const;

export type Page = (typeof PAGES)[number];

/** Pages opened from the desk: every page except Home. */
export type OverlayPage = Exclude<Page, 'Home'>;

export const OVERLAY_PAGES = PAGES.filter(
  (page): page is OverlayPage => page !== 'Home',
);
