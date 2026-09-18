/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://rktnjbvficgdnazuqqok.supabase.co/storage/v1/object/public/cabin-images/*"
      ),
    ],
  },
  // output: "export",
};

module.exports = nextConfig;
