import { StrapiMedia } from "./common";

export interface DEFAULTSEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
}

export interface GlobalResponse {
  data: {
    id: number;
    documentId: string;
    siteName: string;
    siteDescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    favicon: StrapiMedia;
    defaultSeo: DEFAULTSEO;
  };
}
