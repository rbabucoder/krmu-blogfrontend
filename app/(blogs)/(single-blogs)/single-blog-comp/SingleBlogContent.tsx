"use client";
import React, { useEffect, useState } from "react";

type Props = {
  content: string;
};

const SingleBlogContent = ({ content }: Props) => {
  const [processedContent, setProcessedContent] = useState<string>("");

  useEffect(() => {
    if (!content) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    // Add id + class to h2 elements
    const h2Elements = Array.from(doc.querySelectorAll("h2"));
    h2Elements.forEach((el, index) => {
      const id = `heading-${index + 1}`;
      el.setAttribute("id", id);
      el.classList.add("toc-target");
    });

    // Fix lazy-loaded images: replace src with data-orig-src
    // const images = Array.from(doc.querySelectorAll("img"));
    // images.forEach((img) => {
    //   const original = img.getAttribute("data-orig-src");
    //   if (original) {
    //     img.setAttribute("src", original);
    //   }
    // });


    // 🖼 Clean & Fix lazy-loaded WordPress images
  const images = Array.from(doc.querySelectorAll("img"));
  images.forEach((img) => {
    const origSrc = img.getAttribute("data-orig-src");
    const dataSrcSet = img.getAttribute("data-srcset");
    const origSizes = img.getAttribute("data-orig-sizes");

    // Replace source if orig exists
    if (origSrc) img.setAttribute("src", origSrc);

    // Replace srcset if exists
    if (dataSrcSet) img.setAttribute("srcset", dataSrcSet);

    // Replace sizes if exists
    if (origSizes) img.setAttribute("sizes", origSizes);

    // Remove lazyload attributes
    img.removeAttribute("data-orig-src");
    img.removeAttribute("data-srcset");
    img.removeAttribute("data-sizes");
    img.removeAttribute("data-orig-sizes");

    // Remove class lazyload only
    const className = img.getAttribute("class");
    if (className) {
      img.setAttribute(
        "class",
        className
          .replace(/lazyload/g, "") // remove lazyload class
          .replace(/\s+/g, " ") // trim extra spaces
          .trim()
      );
    }

    // Remove useless placeholder svg base64 srcset or src
    const currentSrc = img.getAttribute("src");
    if (currentSrc && currentSrc.startsWith("data:image")) {
      img.removeAttribute("src");
    }
    const srcset = img.getAttribute("srcset");
    if (srcset && srcset.startsWith("data:image")) {
      img.removeAttribute("srcset");
    }
  });

    // Wrap all tables with a div having class 'blog-table-responsive'
    const tables = Array.from(doc.querySelectorAll("table"));
    tables.forEach((table) => {
      const wrapper = doc.createElement("div");
      wrapper.className = "blog-table-responsive";
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    setProcessedContent(doc.body.innerHTML);
  }, [content]);

  return (
    <div
      className="w-full p-[15px]"
      style={{ boxShadow: "0px 0px 6px 0px #C6DCFD" }}
    >
      {processedContent ? (
        <div
          className="krmu_single_blog"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      ) : (
        <div
          className="krmu_single_blog"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default SingleBlogContent;
