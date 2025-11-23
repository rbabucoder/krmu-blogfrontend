import { getRecentPosts } from "@/lib/api/blogs/main-blog";
import Link from "next/link";
import CommonBlogSidebarSearchField from "./CommonBlogSidebarSearchField";
import NoPaperForm from "./NoPaperForm";

const CommonBlogRightSidebar = async () => {
  const recentPosts = await getRecentPosts();

  return (
    <aside className="bg-[url(/blogs/sidebarBanner.webp)] bg-cover bg-center bg-no-repeat p-5 overflow-hidden rounded-xl">
      <div>
        <CommonBlogSidebarSearchField />
      </div>
      <div>
        <h4 className="text-white my-5 text-[32px]">Recent Posts</h4>
      </div>
      <section className="min-h-[255px] max-h-[255px] overflow-auto scroll-style-1 mb-[50px]">
        {recentPosts &&
          recentPosts?.map((post, i) => {
            return (
              <article
                key={i}
                className="text-white text-lg leading-8 pt-5 pb-2.5 border-t border-white relative before:content-[''] before:h-2.5 before:w-6 before:bg-white
              before:max-w-2.5 before:min-w-2.5 before:rounded-full before:absolute pl-5 before:left-0 before:top-[30px] line-clamp-3 overflow-hidden"
              >
                <Link
                  href={`/${post?.slug}`}
                  dangerouslySetInnerHTML={{
                    __html: post?.title?.rendered,
                  }}
                />
              </article>
            );
          })}
      </section>
      <NoPaperForm />
    </aside>
  );
};

export default CommonBlogRightSidebar;
