/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Ensures full Next.js app works on Plesk
  basePath: "", // Keep root paths clean
};

module.exports = nextConfig;
