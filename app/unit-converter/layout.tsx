import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "PX to REM 변환기 - Dev Toolbox",
  description: "웹 디자인 시 필수적인 PX와 REM 단위를 상호 변환해주는 도구입니다.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }