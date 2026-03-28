/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 반드시 추가: 정적 사이트 배포용
  images: {
    unoptimized: true, // 반드시 추가: Cloudflare Pages 호환용
  },
};

export default nextConfig;