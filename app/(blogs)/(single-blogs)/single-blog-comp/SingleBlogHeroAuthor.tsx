import Link from "next/link";
import SingleBlogAuthorImage from "./SingleBlogAuthorImage";

type Props = {
  authorName: string;
  desg: string;
  imgId: number;
  authorSlug: string;
};

const SingleBlogHeroAuthor = ({
  authorName,
  desg,
  imgId,
  authorSlug,
}: Props) => {
  return (
    <div className="single_blog_author_container">
      <div className="single_blog_author_image">
        {/* <Image
          src="/blogs/singleblogAuthor.jpg"
          width={50}
          height={50}
          alt=""
        /> */}

        {imgId && <SingleBlogAuthorImage imgId={imgId} />}
      </div>
      <div className="single_blog_author_info">
        <span className="author_name">
          <Link href={`/author/${authorSlug}`} target="_blank">
            {authorName}
          </Link>
        </span>
        <span className="author_designation">{desg}</span>
      </div>
    </div>
  );
};

export default SingleBlogHeroAuthor;
