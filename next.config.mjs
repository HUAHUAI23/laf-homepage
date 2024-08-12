/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // trailingSlash: true, // 输出 index.html
  // basePath: '/sealaf',
  // output: 'export',   // 输出静态站点
  eslint: {
    // 不完全忽略 ESLint，但在构建时只报告错误
    // ignoreDuringBuilds: false,

    // 在构建时完全忽略 ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 允许 TypeScript 警告，但不允许错误
    // ignoreBuildErrors: false,

    // 在构建时完全忽略 TypeScript 错误
    ignoreBuildErrors: true,
  },
}

export default nextConfig
