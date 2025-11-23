import { getAuthInfoBySlug } from "@/lib/api/blogs/author-blog";
import AuthorHero from "../comp/AuthorHero";
import { notFound } from "next/navigation";
import { getBlogImageById } from "@/lib/api/blogs/single-blog";
import AuthorPosts from "../comp/AuthorPosts";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const authInfo = await getAuthInfoBySlug(slug);

  // ✅ Correct check
  if (!authInfo || authInfo.length === 0 || slug !== authInfo[0]?.slug) {
    return null;
  }

  const authData = authInfo[0];

  const AuthACF = authData?.acf;

  // ✅ Only show profile if it's enabled and verified
  if (!AuthACF?.profile_page_yes_or_no || !AuthACF?.profile_verified) {
    notFound();
  }
  const AuthorImgId = AuthACF?.profile_image;

  const AuthImgUrl = await getBlogImageById(AuthorImgId);
  const AuthId = authData?.id;
  const AuthName = AuthACF?.profile_name;
  const AuthDesg = AuthACF?.profile_position;
  const AuthAbout = AuthACF?.profile_about;

  return (
    <section>
      <div
        className="max-w-[820px] mx-auto w-full mb-5 clear-both relative"
        style={{
          boxShadow: `0 0 1px 0 rgba(0, 0, 0, .08), 0 2px 2px 0 rgba(0, 0, 0, .16)`,
        }}
      >
        <AuthorHero
          imgUrl={AuthImgUrl}
          AuthName={AuthName}
          AuthDesg={AuthDesg}
          AuthAbout={AuthAbout}
        />
      </div>
      <div
        className="max-w-[820px] mx-auto w-full mb-5 clear-both relative"
        style={{
          boxShadow: `0 0 1px 0 rgba(0, 0, 0, .08), 0 2px 2px 0 rgba(0, 0, 0, .16)`,
        }}
      >
        <AuthorPosts authId={AuthId} />
      </div>
    </section>
  );
};

export default page;
