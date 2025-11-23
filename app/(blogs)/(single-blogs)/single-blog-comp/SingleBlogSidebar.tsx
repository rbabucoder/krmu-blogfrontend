"use client";
import React, { useEffect, useState } from "react";

type Props = {
  content: string;
};

const SingleBlogSidebar = ({ content }: Props) => {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const container = document.querySelector(".krmu_single_blog");
    if (!container) return;

    const h2Elements = container.querySelectorAll("h2");
    const newHeadings = Array.from(h2Elements).map((el, i) => ({
      id: el.id || `heading-${i + 1}`,
      text: el.textContent?.trim() || `Heading ${i + 1}`,
    }));

    setHeadings(newHeadings);
  }, [content]);

  // ✅ Handle smooth scroll with offset
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 100; // adjust based on your fixed header height
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Optional: Highlight the active link
    document
      .querySelectorAll(".single_title_list")
      .forEach((el) => el.classList.remove("active"));
    e.currentTarget.closest(".single_title_list")?.classList.add("active");
  };

  return (
    <div className="krmu_single_blog_sidebar singleblog_sidebar_container sticky top-[100px]">
      <div className="singleblog_sidebar">
        <h3 className="singleblog_title">Blog Content</h3>
        <div className="singleblog_divider"></div>

        <div className="single_title_lists">
          {headings.map((h, i) => (
            <div className="single_title_list" key={h.id}>
              <div className="singleblog_num">{i + 1}</div>
              <h4 className="singleblog_h2_list">
                <a
                  href={`#${h.id}`}
                  onClick={(e) => handleScroll(e, h.id)}
                  className="toc-link"
                >
                  {h.text}
                </a>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogSidebar;
