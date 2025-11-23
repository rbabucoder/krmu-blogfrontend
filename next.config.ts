import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  // basePath: "/blog3",
  // assetPrefix: "/blog3/",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "truthful-cabbage-82fd27e8f6.media.strapiapp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.krmangalam.edu.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   basePath: '/krm-2-test',
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
