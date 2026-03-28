import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dev-toolbox-online.com';

  // 현재 우리 사이트의 주요 경로들입니다.
  const routes = ['', '/word-counter', '/base64', '/json-formatter'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8, // 메인 페이지는 우선순위 1, 나머지는 0.8
    })
  );

  return routes;
}