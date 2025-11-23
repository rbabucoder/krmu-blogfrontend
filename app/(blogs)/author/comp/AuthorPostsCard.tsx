"use client";
import { useEffect, useState } from "react";
import { getBlogImageByIdClientComp } from "@/lib/api/blogs/single-blog";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  imgId: number;
  date: string;
  slug: string;
};

const AuthorPostsCard = ({ title, imgId, date, slug }: Props) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    getBlogImageByIdClientComp(imgId).then((url) => setImgUrl(url));
  }, [imgId]);

  const postDate = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });


  return (
    <Link
      href={`/${slug}`}
      className="flex flex-col md:flex-row gap-2.5 md:gap-5 mb-5 md:h-[172px] border-b border-[#d2d2d2] pb-5"
      target="_blank"
    >
      <div className="md:w-2/5">
        {imgUrl ? (
          <Image
            src={imgUrl}
            width={300}
            height={300}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <Skeleton className="w-full h-[151px] rounded-none" />
        )}
      </div>
      <div className="md:w-3/5">
        {title ? (
          <h3
            className="font-semibold text-sm sm:text-xl md:text-2xl leading-[1.2] mb-2.5 text-[#1048c3]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        ) : (
          <Skeleton className="w-full h-10" />
        )}
        {postDate ? (
          <p className="text-[#666] text-xs sm:text-sm">{postDate}</p>
        ) : (
          <Skeleton className="w-[80px] h-3" />
        )}
      </div>
    </Link>
  );
};

export default AuthorPostsCard;
