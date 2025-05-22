import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kuldeep363.github.io",
        pathname: "/assets/**", // adjust if needed
      },
    ],
  },
};

export default nextConfig;
