import React from "react";
import { Raleway } from "next/font/google";
import SingleBlogContent from "./SingleBlogContent";
import SingleBlogSidebar from "./SingleBlogSidebar";
import SingleBlogCategorySidebar from "./SingleBlogCategorySidebar";

// Configure font with fallbacks
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

type Props = {
  content: string;
};

const SingleBlogLayout = ({ content }: Props) => {
  return (
    <main className={`md:p-7 ${raleway.className} relative z-10`}>
      <div className="max-w-[1664px] mx-auto w-full px-5 2xl:px-10 flex flex-col lg:flex-row gap-10 xl:gap-16 relative z-10 scroll-style-1">
        <div className="lg:w-1/5">
          <SingleBlogSidebar content={content} />
        </div>
        <div className="lg:w-3/5">
          <SingleBlogContent content={content} />
        </div>
        <div className="lg:w-1/5">
          <SingleBlogCategorySidebar />
        </div>
      </div>
    </main>
  );
};

export default SingleBlogLayout;
