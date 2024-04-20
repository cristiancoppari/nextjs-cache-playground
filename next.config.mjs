/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cloudflare-ipfs.com",
      },
      {
        hostname: "cdn2.thecatapi.com",
      },
    ],
  },
};

export default nextConfig;
