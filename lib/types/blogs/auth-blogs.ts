import { AuthorACF } from "./single-blog";

export type AuthorResponse = AuthorInfo[];

export type AuthorInfo = {
  id: number;
  name: string;
  slug: string;
  acf: AuthorACF;
};

export type PostByAuthorResponse = PostByAuthorCard[];

export type PostByAuthorCard = {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  featured_media: number;
};
