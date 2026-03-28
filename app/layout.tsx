import './globals.css';
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "DevToolBox - Essential Web Developer Tools",
  description: "Free online tools for developers: Word Counter, Base64, JSON Formatter, and more. Secure and fast.",
  keywords: "developer tools, word counter, base64, json formatter, unit converter",
  verification: {
    google: "0Cy2QTxrzg754h6Qbziqu5izT9t6hXmHU9o_mvZeDTo",
    other: {
      "naver-site-verification": "b5730e361190fb13b33f46e4dedb848516feb1c7",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      {/* 클라이언트 로직을 담당하는 ClientLayout으로 body 이하를 감쌉니다 */}
      <ClientLayout>
        {children}

        {/* GA4 측정 ID가 있을 때만 실행 */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </ClientLayout>
    </html>
  );
}