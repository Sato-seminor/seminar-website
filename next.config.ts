import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // 静的エクスポートと競合する画像最適化の停止
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
