/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static export (SSG)
  trailingSlash: true, // Adds trailing slashes to URLs
  images: {
    unoptimized: true, // Required for next/image in static export
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;