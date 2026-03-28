import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "글자수 세기 - Dev Toolbox",
  description: "공백 포함/제외 글자수와 단어 수를 실시간으로 계산해주는 무료 온라인 도구입니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}