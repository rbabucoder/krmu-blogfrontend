// import { FETCH_STRAPI_URL } from "@/app/constant";
import { krmBlogURL } from "@/app/constant";
import {
  AllBlogCategoriesResponse,
  BlogImageIdResponse,
  SingleBlogResponse,
} from "@/lib/types/blogs/single-blog";

export async function getSingleBlogDataBySlug(
  slug: string = ""
): Promise<SingleBlogResponse> {
  const res = await fetch(
    // `${FETCH_STRAPI_URL}/api/single-blogs?filters[blog_slug][$eq]=${slug}&fields[0]=title&fields[1]=blog_slug&populate[featured_image][populate]=*&populate[single_blog][on][blog.single-blog-component][populate][fields][0]=single_blog_content&populate[single_blog][on][blog.single-blog-component][populate][faqs][populate]=*`,
    `${krmBlogURL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Single Blog");
  const json: SingleBlogResponse = await res.json();
  return json;
}

// {
//   filters: {
//     blog_slug: {
//       $eq: "is-cat-exam-tough",
//     },
//   },
//   fields: ["title", "blog_slug"],
//   populate: {
//   featured_image: {
//    populate: '*'
//   },
//     single_blog: {
//       on: {
//         "blog.single-blog-component": {
//           populate: {
//             fields:['single_blog_content'],
//             faqs: {
//               populate: '*'
//             }
//           }
//         }
//       }
//     }
//   }
// }

export async function getAllBlogCategories(): Promise<AllBlogCategoriesResponse> {
  const res = await fetch(
    `${krmBlogURL}/wp-json/wp/v2/categories?per_page=100&_fields=id,name,slug,taxonomy`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Single Blog");
  const json: AllBlogCategoriesResponse = await res.json();
  return json;
}

export async function getBlogImageById(imgId: number): Promise<string> {
  if (!imgId) throw new Error("Image ID is required");

  const res = await fetch(
    `${krmBlogURL}/wp-json/wp/v2/media/${imgId}?_fields=guid`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch image by ID");
  }

  const json: BlogImageIdResponse = await res.json();

  return json?.guid?.rendered ?? "";
}

export async function getBlogImageByIdClientComp(id: number) {
  const res = await fetch(`${krmBlogURL}/wp-json/wp/v2/media/${id}`);
  const json = await res.json();
  return json.source_url;
}
