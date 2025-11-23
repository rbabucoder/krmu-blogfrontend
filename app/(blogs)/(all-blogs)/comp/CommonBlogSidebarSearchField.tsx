"use client";

import { krmBlogURL } from "@/app/constant";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import Image from "next/image";

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  _embedded?: {
    ["wp:featuredmedia"]?: Array<{
      source_url: string;
    }>;
  };
}

const CommonBlogSidebarSearchField = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Fetch results from WordPress REST API
  const fetchSearchResults = async (q: string) => {
    if (!q.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${krmBlogURL}/wp-json/wp/v2/posts?search=${encodeURIComponent(
          q
        )}&_embed&per_page=5&_fields=id,slug,title.rendered,_embedded`
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  // Debounce search
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchSearchResults(query);
    }, 500);
    return () => clearTimeout(delay);
  }, [query]);



  return (
    <div className="relative">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-md mx-auto w-full"
      >
        <label htmlFor="default-search" className="sr-only">
          Search
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="search"
            id="default-search"
            value={query}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            onChange={(e) => setQuery(e.target.value)}
            className="block w-full p-4 ps-10 text-sm bg-transparent border border-gray-300 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Blogs"
          />
        </div>
      </form>

      {/* Search Results Dropdown */}
      {showResults && (
        <div className="absolute z-10 bg-white w-full p-4 mt-2 max-h-64 overflow-y-auto rounded-lg shadow-md">
          {loading && <p className="text-gray-500 text-sm">Searching...</p>}

          {!loading && results.length === 0 && query && (
            <p className="text-gray-500 text-sm">No results found.</p>
          )}

          {results.map((post) => {
            // const thumbnail =
            //   post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

            return (
              <Link
                key={post.id}
                href={`/${post.slug}`}
                className="flex justify-between items-center border-b border-gray-200 py-2 hover:bg-gray-50 transition"
              >
                <div
                  className="text-gray-800 text-sm font-medium pr-3"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                {/* {thumbnail ? (
                  <Image
                    src={thumbnail}
                    alt={post.title.rendered}
                    width={50}
                    height={50}
                    className="rounded-md object-cover w-[50px] h-[50px] flex-shrink-0"
                  />
                ) : (
                  <div className="w-[50px] h-[50px] bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500">
                    No Image
                  </div>
                )} */}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CommonBlogSidebarSearchField;
