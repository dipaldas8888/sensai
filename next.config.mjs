// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"], // ✅ allow randomuser images
  },
};

export default nextConfig;
