// import { BlogFeaturedMedia } from "./single-blog";

import { ImageAsset } from "../phd-programmes";

export type MainBlogResponse = MainBlogs[];

export interface MainBlogs {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  featured_media: number;
  // _embedded: {
  //   "wp:featuredmedia"?: BlogFeaturedMedia[];
  // };
  excerpt: {
    rendered: string;
  };
}

export type BlogSEOShareImage = {
  id: number;
  documentId: string;
  url: string;
};

export type BlogSEO = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  canonical: string | null;
  metaKeyword: string | null;
  noIndex: boolean;
  tags: string | null;
  shareImage: ImageAsset | null;
  title?: string | null;
};

export type BlogData = {
  id: number;
  documentId: string;
  Title: string;
  blog_seo: BlogSEO;
};

export type BlogCategoryData = {
  id: number;
  documentId: string;
  Title: string;
  blog_category_seo: BlogSEO;
};

export type BlogPageSEOResponse = {
  data: BlogData;
  meta: Record<string, unknown>;
};
export type BlogCategoryPageSEOResponse = {
  data: BlogCategoryData;
  meta: Record<string, unknown>;
};
