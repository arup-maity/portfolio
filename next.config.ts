import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   eslint: {
      ignoreDuringBuilds: true,
   },
   images: {
      domains: ['wp.shsarker.xyz', 'aceternity.com'],
   },

};

export default nextConfig;
