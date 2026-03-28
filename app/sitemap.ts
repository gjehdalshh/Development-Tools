import { MetadataRoute } from 'next';

// ✅ 이 줄을 추가합니다. 정적 내보내기(output: export) 모드에서 필수 설정입니다.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dev-toolbox-online.com';

  const routes = ['', '/word-counter', '/base64', '/json-formatter'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  return routes;
}