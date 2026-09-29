export const PAGES = ['Home', 'Music', 'Projects', 'About', 'Contact'] as const;

export type PageName = (typeof PAGES)[number];

export type OverlayPageName = Exclude<PageName, 'Home'>;

export const OVERLAY_PAGES = PAGES.filter(
  (page): page is OverlayPageName => page !== 'Home',
);

export type SetPage = (page: PageName) => void;
