"use client";

type Props = {
  date: string;
};

const SingleBlogDate = ({ date }: Props) => {
  // Convert the ISO date string to a readable format
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <span className="text-[13px] text-white">
      Published On: {formattedDate}
    </span>
  );
};

export default SingleBlogDate;
