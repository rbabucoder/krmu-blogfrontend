type Props = {
  catName?: string;
};

const CommonBlogHeroSection = ({ catName }: Props) => {
  return (
    <section className="pt-[140px] pb-[10%] md:py-[14%] px-4 bg-cover bg-no-repeat bg-center" style={{
      background: `url(/mainBlogBanner.webp)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="max-w-[1600px] mx-auto w-full">
        <h1
          className="text-white font-bold text-4xl sm:text-[42px] lg:text-[90px] leading-[1.2]"
          dangerouslySetInnerHTML={{
            __html: catName || "Blogs",
          }}
        />
      </div>
    </section>
  );
};

export default CommonBlogHeroSection;
