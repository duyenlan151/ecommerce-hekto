export interface Image {
  ID: string | number;
  title: string;
  bgImg: string;
  url: string;
  description: string;
}

export type ActionCommon = 'add' | 'edit' | 'delete';
