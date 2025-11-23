import { getAllBlogsByPerPageOrCategorySlug } from "@/lib/api/blogs/main-blog";
// import CommonBlogSidebar from "./CommonBlogSidebar";
import { MainBlogs } from "@/lib/types/blogs/main-blogs";
import CommonBlogCard from "./CommonBlogCard";
import Pagination from "./Pagination";

type Props = {
  searchParams: Promise<{ page?: string }>;
  slug?: string;
  mainBlogClass: string;
};

const CommonBlogLayout = async ({
  searchParams,
  slug,
  mainBlogClass,
}: Props) => {
  const resolvedSearchParams = await searchParams; // ✅ Await it
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const blogsPerPage = 6;

  const { blogs, totalPages } = await getAllBlogsByPerPageOrCategorySlug(
    blogsPerPage,
    currentPage,
    slug
  );

  // Helper to generate page numbers with ellipses
  const getPageNumbers = (
    total: number,
    current: number,
    delta: number = 2
  ) => {
    const range: (number | string)[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta && i <= current + delta)
      ) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (l) {
        if (Number(i) - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (Number(i) - l !== 1) {
          rangeWithDots.push("…");
        }
      }
      rangeWithDots.push(i);
      l = Number(i);
    }

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers(totalPages, currentPage);

  return (
    <>
      <div className={mainBlogClass || ""}>
        {blogs?.map((blog: MainBlogs, i: number) => (
          <CommonBlogCard
            key={i}
            title={blog?.title?.rendered}
            excerpt={blog?.excerpt?.rendered}
            slug={blog?.slug}
            imgId={blog?.featured_media}
          />
        ))}
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageNumbers={pageNumbers}
      />
    </>
  );
};

export default CommonBlogLayout;
