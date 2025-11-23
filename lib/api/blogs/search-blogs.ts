// File: lib/api/blogs/search-blog.ts

import { krmBlogURL } from "@/app/constant";

export interface WPBlog {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{ source_url: string }>;
  };
}

export async function searchBlogs(
  query: string,
  page: number = 1
): Promise<WPBlog[]> {
  if (!query) return [];

  const url = `${krmBlogURL}/wp-json/wp/v2/posts?search=${encodeURIComponent(
    query
  )}&per_page=6&page=${page}&_embed`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) {
      console.error("Failed to fetch search results:", res.statusText);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error("Error searching blogs:", error);
    return [];
  }
}
