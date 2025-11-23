import Image from "next/image";
import { getBlogImageById } from "@/lib/api/blogs/single-blog";

type Props = {
  imgId: number;
};

const SingleBlogAuthorImage = async ({ imgId }: Props) => {
  const imgUrl = await getBlogImageById(imgId);

  if (!imgUrl) return null; // ✅ properly handle missing image

  return (
    <div className="flex items-center gap-2">
      {imgUrl && (
        <Image
          src={imgUrl}
          width={50}
          height={50}
          alt="Author Image"
          className="rounded-full object-cover"
        />
      )}
    </div>
  );
};

export default SingleBlogAuthorImage;
