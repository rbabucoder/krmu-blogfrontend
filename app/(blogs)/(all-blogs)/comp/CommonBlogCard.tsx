import { getBlogImageById } from "@/lib/api/blogs/single-blog";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
  // imgUrl: string;
  imgId: number;
};
const CommonBlogCard = async ({ title, excerpt, slug, imgId }: Props) => {
  const imgUrl = await getBlogImageById(imgId);

  if (!imgUrl) return null;

  return (
    <div className="w-full">
      <Link
        href={`/${slug}`}
        className="block w-full rounded-[24px]"
        style={{
          boxShadow: `0px 0px 6px 0px #c6dcfd`,
        }}
        target="_blank"
      >
        <div className="p-2.5">
          <div>
            {imgUrl && (
              <Image
                src={imgUrl}
                width={426}
                height={284}
                alt=""
                className="rounded-[24px] h-auto w-full"
                sizes="(max-width: 768px) 100vw, 426px"
              />
            )}
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: title,
              }}
              className="text-[#093475] mt-2.5 mb-[15px] text-lg font-bold leading-[1.2]"
            />

            <div
              dangerouslySetInnerHTML={{
                __html: excerpt,
              }}
              className="mb-5"
            />

            <span className="text-lg font-normal text-[#093475] block">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CommonBlogCard;
