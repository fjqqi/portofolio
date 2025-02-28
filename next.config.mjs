/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "awsimages.detik.net.id",
        },
      ],
    },
  };
export default nextConfig;
