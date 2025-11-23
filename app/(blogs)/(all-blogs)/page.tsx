import { getBlogPageInfo } from "@/lib/api/blogs/main-blog";
import { strapiSeoToMetadata } from "@/lib/constants/strapiMeta";
import CommonBlogLayout from "./comp/CommonBlogLayout";


type Props = {
  searchParams: Promise<{ page?: string }>;
};
// ---------------------------
// ✅ Metadata
// ---------------------------
export async function generateMetadata() {
  const pageInfo = await getBlogPageInfo();
  const seo = pageInfo.blog_seo;

  if (!seo) return {};

  return strapiSeoToMetadata(seo);
}

const Page = async ({ searchParams }: Props) => {
  return (
    <>
      {/* <CommonBlogHeroSection /> */}
      <CommonBlogLayout searchParams={searchParams} mainBlogClass={"grid grid-cols-1 xl:grid-cols-2 gap-6"} />
    </>
  );
};

export default Page;
