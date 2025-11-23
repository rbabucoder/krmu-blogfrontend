import { krmBlogURL } from "@/app/constant";
import { AuthorResponse } from "@/lib/types/blogs/auth-blogs";

export async function getAuthInfoBySlug(authSlug: string = "") {
  const res = await fetch(
    `https://krmangalam.edu.in/blog/wp-json/wp/v2/users?slug=${authSlug}&_fields=id,name,slug,acf.profile_image,acf`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch Author Info");

  const json: AuthorResponse = await res.json();

  return json;
}

// lib/api/blogs/author-blog.ts
export async function getPostsByAuthId(authId: number, page: number = 1) {
  const res = await fetch(
    `${krmBlogURL}/wp-json/wp/v2/posts?author=${authId}&per_page=6&page=${page}&_fields=id,title,featured_media,date,slug`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch posts by author ID");

  const json = await res.json();
  return json;
}

// export async function getPostsByAuthId(authId: number) {
//   const res = await fetch(
//     `${krmBlogURL}/wp-json/wp/v2/posts?${authId}&per_page=1&_fields=id,title,featured_media,date`,
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   );
//   if (!res.ok) throw new Error("Failed to fetch Post By Auth Id");

//   const json: PostByAuthorResponse = await res.json();
//   return json;
// }
