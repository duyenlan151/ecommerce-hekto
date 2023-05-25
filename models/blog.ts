export interface BlogModel {
  id: string | number;
  title: string;
  desc: string;
  thumbnail: Array<string>;
  author: string;
  date: Date | string;
}
