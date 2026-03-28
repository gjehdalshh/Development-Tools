import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "URL 인코더/디코더 - Dev Toolbox",
  description: "한글이나 특수문자가 포함된 URL을 안전하게 인코딩하거나 디코딩하세요.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }