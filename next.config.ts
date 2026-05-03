import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,   // هذا هو السطر الجديد الذي يجب إضافته
};

export default nextConfig;