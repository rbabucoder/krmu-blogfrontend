import { FETCH_STRAPI_URL, krmBlogURL } from "@/app/constant";
import {
  BlogCategoryPageSEOResponse,
  BlogPageSEOResponse,
  MainBlogResponse,
} from "@/lib/types/blogs/main-blogs";

export async function getAllBlogsByPerPageOrCategorySlug(
  num_of_blogs: number = 6,
  page: number = 1,
  categorySlug?: string
) {
  try {
    const params = new URLSearchParams({
      per_page: String(num_of_blogs),
      page: String(page),
      _fields: "id,slug,title,featured_media,content,excerpt",
    });

    let categoryId: number | null = null;

    // 🟢 Fetch category ID only if slug exists
    if (categorySlug) {
      const catRes = await fetch(
        `${krmBlogURL}/wp-json/wp/v2/categories?slug=${categorySlug}`,
        { next: { revalidate: 300 } } // 5-minute cache
      );

      if (catRes.ok) {
        const cats = await catRes.json();
        if (cats?.length) categoryId = cats[0].id;
      }

      // ❗ Invalid slug → return empty result instantly (faster)
      if (!categoryId) return { blogs: [], totalPages: 0 };
    }

    // If category found, add filter
    if (categoryId) params.append("categories", String(categoryId));

    // 🔥 Optimized single fetch call
    const finalURL = `${krmBlogURL}/wp-json/wp/v2/posts?${params.toString()}`;

    const res = await fetch(finalURL, { next: { revalidate: 300 } }); // 5-minute cache

    if (!res.ok) throw new Error("Failed to fetch blogs");

    const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;
    const blogs = await res.json();

    return { blogs, totalPages };
  } catch (error) {
    console.error("Blog fetch error:", error);
    return { blogs: [], totalPages: 0 };
  }
}

export async function getRecentPosts() {
  const res = await fetch(
    `${krmBlogURL}/wp-json/wp/v2/posts?per_page=20`,
    { next: { revalidate: 60 } } // ISR caching (Next.js)
  );
  if (!res.ok) throw new Error("Failed to fetch recent posts");
  const json: MainBlogResponse = await res.json();
  return json;
}

export async function getBlogPageInfo(): Promise<BlogPageSEOResponse["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/blog?fields[0]=Title&populate[blog_seo][populate][shareImage][fields][0]=url`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch blog page info");

  const json: BlogPageSEOResponse = await res.json();
  return json.data;
}
export async function getBlogCategoryPageInfo(): Promise<
  BlogCategoryPageSEOResponse["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/blog-category?fields[0]=Title&populate[blog_category_seo][populate][shareImage][fields][0]=url`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch blog category page info");

  const json: BlogCategoryPageSEOResponse = await res.json();
  return json.data;
}

// {
//  fields: ['Title'],
//  populate: {
//    blog_seo: {
//     populate: {
//       shareImage: {
//         fields: ['url']
//        }
//     }

//    }
//  }
// }

// export async function getAllBlogsByPerPage(
//   num_of_blogs: number = 6,
//   page: number = 1
// ) {
//   const res = await fetch(
//     `${krmBlogURL}/wp-json/wp/v2/posts?per_page=${num_of_blogs}&page=${page}&_embed`,
//     {
//       next: { revalidate: 60 },
//     }
//   );

//   if (!res.ok) throw new Error("Failed to fetch blogs");

//   const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;
//   const json = await res.json();

//   return { blogs: json, totalPages };
// }

// export async function getAllBlogsByPerPage(
//   num_of_blogs: number = 6,
//   page: number = 1
// ): Promise<MainBlogResponse> {
//   const res = await fetch(
//     // `${krmBlogURL}/wp-json/wp/v2/posts?per_page=${num_of_blogs}&_embed`,
//     `${krmBlogURL}/wp-json/wp/v2/posts?per_page=${num_of_blogs}&page=${page}&_embed`,
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   );
//   if (!res.ok) throw new Error("Failed to fetch Single Blog");
//   const json: MainBlogResponse = await res.json();
//   return json;
// }
