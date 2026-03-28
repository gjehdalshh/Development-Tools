import { MetadataRoute } from 'next';

// ✅ 이 줄이 누락되면 빌드 에러가 날 수 있습니다.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://dev-toolbox-online.com/sitemap.xml',
  };
}