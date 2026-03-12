import type { NextConfig } from "next";

import { siteBasePath } from "./src/lib/site-config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: siteBasePath,
  assetPrefix: `${siteBasePath}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
