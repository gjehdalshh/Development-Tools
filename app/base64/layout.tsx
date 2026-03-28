import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Base64 변환기 - Dev Toolbox",
  description: "텍스트를 Base64로 인코딩하거나 디코딩하는 빠른 온라인 도구입니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}