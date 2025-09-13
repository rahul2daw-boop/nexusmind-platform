/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily skip ESLint at build time to avoid ESLint v9 option errors
  eslint: { ignoreDuringBuilds: true },
  // Remove any experimental.turbo usage (Turbopack config is now top-level "turbopack" if needed)
  // See: https://nextjs.org/docs/messages/invalid-next-config
};
export default nextConfig;
