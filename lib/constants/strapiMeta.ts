import type { Metadata } from "next";
import { BlogSEO } from "../types/blogs/main-blogs";
import * as cheerio from "cheerio";

function decodeHtml(str: string = "") {
  const $ = cheerio.load(str);
  return $.root().text(); // This decodes any &amp; &lt; etc.
}

function cleanTitle(str: string = "") {
  const $ = cheerio.load(str);
  let title = $.root().text(); // decode &amp; etc.

  // remove "Archives" or "Archives -" or "- Archives"
  title = title
    .replace(/Archives\s*/i, "")
    .replace(/\s*-\s*Archives/i, "")
    .replace(/Archives/i, "")
    .trim();

  return title;
}



export function strapiSeoToMetadata(seo: BlogSEO): Metadata {
  let title = decodeHtml(seo.metaTitle ?? seo.title ?? "");
  title = cleanTitle(seo.metaTitle ?? seo.title ?? "");

  return {
    title,
    description: seo.metaDescription ?? "",
    keywords: seo.metaKeyword ?? "",

    alternates: {
      canonical: seo.canonical ?? "",
    },

    robots: {
      index: !seo.noIndex,
      follow: true,
    },

    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: seo.canonical ?? "",
      images: seo.shareImage
        ? [
            {
              url: `${process.env.NEXT_PUBLIC_STRAPI_URL}${seo.shareImage.url}`,
            },
          ]
        : [],
    },
  };
}
