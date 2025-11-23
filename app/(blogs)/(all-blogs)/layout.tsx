import { ReactNode } from "react";
import CommonBlogHeroSection from "./comp/CommonBlogHeroSection";
import CommonBlogSidebar from "./comp/CommonBlogSidebar";
import CommonBlogRightSidebar from "./comp/CommonBlogRightSidebar";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <CommonBlogHeroSection />
      <section className="py-[60px] px-4">
        <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDEBAR */}
          <aside className="w-full lg:w-1/5 order-2 lg:order-1">
            <CommonBlogSidebar />
          </aside>

          {/* MAIN CONTENT */}
          <main className="w-full lg:w-3/5 order-1 lg:order-2 min-h-screen">
            {children}
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="w-full lg:w-1/5 order-3">
            <CommonBlogRightSidebar />
          </aside>
        </div>
      </section>
    </>
  );
};

export default layout;
