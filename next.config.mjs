/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: "build",
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    loader: "default",
    path: "/public/images",
  },
};

export default nextConfig;
