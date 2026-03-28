import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "색상 코드 변환기 (HEX/RGB) - Dev Toolbox",
  description: "HEX 색상 코드를 RGB로 변환하고 미리보기를 확인하세요.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }