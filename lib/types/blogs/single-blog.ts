import { YoastHeadJson } from "@/lib/constants/yoastMeta";
import { StrapiMedia } from "../common";

export interface SingleBlogComponent {
  __component: "blog.single-blog-component";
  id: number;
  single_blog_content: string; // HTML string from Strapi Rich Text
  faqs: FAQS[];
}

export interface FAQS {
  id: number;
  ques: string;
  answer: string;
}

export interface Blog {
  id: number;
  documentId: string;
  title?: string;
  blog_slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured_image?: StrapiMedia;
  single_blog: SingleBlogComponent[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// export interface BlogResponse {
//   data: Blog[];
//   meta: {
//     pagination: Pagination;
//   };
// }

export type SingleBlogResponse = BlogPostContent[];

export type BlogPostContent = {
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  _embedded: {
    author: BlogAuthor[];
    "wp:featuredmedia"?: BlogFeaturedMedia[];
  };
  yoast_head_json: YoastHeadJson;
  featured_media: number;
};

export type BlogOgImage = {
  width: number;
  height: number;
  url: string;
  type: string;
};

export type BlogRobot = {
  index: string;
  follow: string;
};

export type BlogAuthor = {
  id: number;
  name: string;
  // url: string;
  slug: string;
  // description?: string;
  // avatar_urls?: {
  //   [size: string]: string;
  // };
  acf: AuthorACF;
};

export type AuthorACF = {
  profile_image: number;
  profile_position: string;
  profile_about: string;
  profile_verified: string;
  profile_page_yes_or_no: string;
  profile_name: string;
};

export type BlogFeaturedMedia = {
  id: number;
  date: string;
  source_url?: string;
  alt_text?: string;
  media_type?: string;
  mime_type?: string;
};

export type AllBlogCategoriesResponse = AllBlogCategories[];

export type AllBlogCategories = {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
};

export type BlogImageIdResponse = {
  guid: {
    rendered: string;
  };
};
