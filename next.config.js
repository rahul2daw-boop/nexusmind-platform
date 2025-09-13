/** @type {import("next").NextConfig} */
const nextConfig = {
  // Temporarily bypass ESLint at build time until ESLint v9 migration is complete
  eslint: { ignoreDuringBuilds: true },
  // Remove deprecated/invalid experimental.turbo usage for Next 15
};
export default nextConfig;
