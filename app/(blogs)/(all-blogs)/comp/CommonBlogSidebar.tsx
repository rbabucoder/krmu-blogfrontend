import { getAllBlogCategories } from "@/lib/api/blogs/single-blog";
import { Check } from "lucide-react";
import Link from "next/link";

// ===============================
// 🎯 SHOW OR HIDE CATEGORIES HERE
// ===============================

// ✔ SHOW ONLY these categories (by slug)
const HIDE_CATEGORIES: string[] = [
  "general",
  "medical-and-allied-science",
  "school-of-management-and-commerce",
  "travel-and-tourism",
  "education",
  "uncategorized",
  // Add more slugs you want to show...
];

const CommonBlogSidebar = async () => {
  const allCategories = await getAllBlogCategories();

  return (
    <aside
      className="bg-cover bg-center bg-no-repeat p-5 overflow-hidden rounded-xl"
      style={{
        background: `url(/sidebarBanner.webp)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h4 className="mb-5 text-white text-[32px]">Blog Categories</h4>

      <ul>
        {allCategories
          ?.filter(
            (cat) =>
              cat?.name && !HIDE_CATEGORIES.includes(cat?.slug.toLowerCase())
          )
          .map((cat, i) => (
            <li key={i} className="flex items-center gap-3 py-1.5">
              <div>
                <span className="bg-black w-[27px] h-[27px] flex items-center justify-center rounded-full">
                  <Check className="text-white" strokeWidth={4} size={16} />
                </span>
              </div>

              <Link
                href={`/all-categories/${cat.slug}`}
                className="text-white text-base"
                dangerouslySetInnerHTML={{ __html: cat.name }}
                target="_blank"
              />
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default CommonBlogSidebar;
