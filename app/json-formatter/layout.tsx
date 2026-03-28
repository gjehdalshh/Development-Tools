import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "JSON 포맷터/뷰어 - Dev Toolbox",
  description: "복잡한 JSON 코드를 보기 좋게 정렬하고 문법 오류를 체크해주는 도구입니다. 깔끔한 가독성을 제공합니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // 자식 요소(page.tsx의 내용)를 그대로 전달만 합니다.
  return <>{children}</>;
}