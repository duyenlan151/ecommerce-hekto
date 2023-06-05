export type PageData = {
  title: string;
  description: string;
  image?: string;
  keywords: string;
  breadcrumb?: string;
  suffix?: string;
  currentURL?: string;
  previewImage?: string;
};

export type PageMeta = {
  home?: PageData;
  login: PageData;
  // stats: PageData;
  utilities: PageData;
  blogs: PageData;
  bookmark: PageData;
  certificates: PageData;
  projects: PageData;
  about: PageData;
  privacy: PageData;
  snippets: PageData;
  ['404']: PageData;
  [key: string]: any;
};
