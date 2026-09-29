/** Every page, in menu order. Home is the desk view with no overlay. */
export const PAGES = ['Home', 'Music', 'Projects', 'About', 'Contact'] as const;

export type PageName = (typeof PAGES)[number];

/** Pages opened from the desk: every page except Home. */
export type OverlayPageName = Exclude<PageName, 'Home'>;

export const OVERLAY_PAGES = PAGES.filter(
  (page): page is OverlayPageName => page !== 'Home',
);

/** Opens a page; Home closes the overlay and returns the camera to the desk. */
export type SetPage = (page: PageName) => void;
