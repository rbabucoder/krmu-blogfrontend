import { yoastToMetadata } from "@/lib/constants/yoastMeta";
import {
  getBlogImageById,
  getSingleBlogDataBySlug,
} from "@/lib/api/blogs/single-blog";
import { notFound } from "next/navigation";
import SingleBlogHero from "../single-blog-comp/SingleBlogHero";
import SingleBlogLayout from "../single-blog-comp/SingleBlogLayout";


type Props = {
  params: Promise<{ slug: string }>;
};

// -------------------------------
// ✅ Generate Metadata (Yoast)
// -------------------------------
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const blog = await getSingleBlogDataBySlug(slug);

  if (!blog || !blog[0]?.yoast_head_json) return {};

  return yoastToMetadata(blog[0].yoast_head_json);
}
const page = async ({ params }: Props) => {
  const { slug } = await params;

  const singleBlogData = await getSingleBlogDataBySlug(slug);

  if (!singleBlogData) return notFound();

  const currentSingleBlog = singleBlogData.find((blog) => blog?.slug === slug);

  if (!currentSingleBlog?.title) return notFound();

  // const featuredImageUrl =
  //   currentSingleBlog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const authorSlug = currentSingleBlog?._embedded?.author?.[0]?.slug;

  const featuedImageId = currentSingleBlog?.featured_media;
  const featuredImageUrl = await getBlogImageById(featuedImageId);

  const authorName =
    currentSingleBlog?._embedded?.author?.[0]?.acf?.profile_name;
  const authorDesignation =
    currentSingleBlog?._embedded?.author?.[0]?.acf?.profile_position;
  const publishedDate = currentSingleBlog?.date;
  const authorImageId =
    currentSingleBlog?._embedded?.author?.[0]?.acf?.profile_image;

  return (
    <>
      <SingleBlogHero
        title={currentSingleBlog?.title?.rendered}
        imgUrl={featuredImageUrl ?? ""}
        authorName={authorName}
        date={publishedDate}
        authorDesignation={authorDesignation}
        imgId={authorImageId}
        authorSlug={authorSlug}
      />
      <SingleBlogLayout content={currentSingleBlog?.content?.rendered} />
    </>
  );
};

export default page;
