import CommonBlogLayout from "../../comp/CommonBlogLayout";
import { strapiSeoToMetadata } from "@/lib/constants/strapiMeta";
import { getCategoryBySlug } from "@/lib/api/blogs/cat-blog";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};
// ---------------------------
// ✅ Metadata
// ---------------------------
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  const seo = category.yoast_head_json;



  if (!seo) return {};

  return strapiSeoToMetadata(seo);
}
const Page = async ({ params, searchParams }: Props) => {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams;

  const { slug } = resolvedParams;

  return (
    <>
      {/* <CommonBlogHeroSection catName={category?.name || "Category"} /> */}
      {/* <CommonBlogHeroSection /> */}
      {/* ✅ pass the resolved object (not Promise) */}
      <CommonBlogLayout
        slug={slug}
        searchParams={resolvedSearchParams}
        mainBlogClass={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"}
      />
    </>
  );
};

export default Page;
