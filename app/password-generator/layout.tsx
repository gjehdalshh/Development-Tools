import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "비밀번호 생성기 - Dev Toolbox",
  description: "강력하고 안전한 무작위 비밀번호를 즉시 생성하세요.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }