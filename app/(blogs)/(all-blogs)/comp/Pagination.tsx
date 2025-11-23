"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  totalPages: number;
  pageNumbers: (number | string)[];
};

export default function Pagination({ currentPage, totalPages, pageNumbers }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams(); // 👈 detect URL change

  const handlePageChange = (page: number) => {
    setLoading(true);
    router.push(`?page=${page}`);
    // window.scrollTo({ top: 0, behavior: "smooth" }); // optional nice UX
  };

  // 👇 whenever the URL query changes, hide loader
  useEffect(() => {
    setLoading(false);
  }, [searchParams]);

  return (
    <div className="flex items-center gap-2 mt-8 flex-wrap">
      {currentPage > 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          &lt; Prev
        </button>
      )}

      {pageNumbers.map((num, idx) =>
        num === "…" ? (
          <span key={idx} className="px-3 py-1">…</span>
        ) : (
          <button
            key={idx}
            onClick={() => handlePageChange(Number(num))}
            className={`px-3 py-1 border ${
              num === currentPage
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        )
      )}

      {currentPage < totalPages && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Next &gt;
        </button>
      )}

      {loading && (
        <Image src="/preloader/preloader.gif" width={18} height={18} alt="Preloader" />
      )}
    </div>
  );
}
