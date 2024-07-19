export interface IPost {
  key: number;
  title: string;
  date: string;
  slug: string;
  author: {
    name: string;
  };
  content?: string;
}
