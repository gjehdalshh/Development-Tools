import './globals.css';
import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Dev Toolbox",
  description: "개발자를 위한 유용한 도구 모음",
  verification: {
    google: "OCy2QTxrzg754h6QbziQu5iZT9t6hXmHU9o_mVzeDTo", 
    other: {
      "naver-site-verification": "b5730e361190fb13b33f46e4dedb848516feb1c7",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white min-h-screen text-slate-900 antialiased font-sans">
        <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded bg-slate-900 text-white font-bold text-sm">DT</span>
                <span className="font-bold text-lg tracking-tight text-slate-900 uppercase">DevToolBox</span>
              </Link>
              <div className="hidden md:flex items-center gap-1">
                <Link href="/word-counter" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all">글자수 세기</Link>
                <Link href="/base64" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all">Base64 변환</Link>
                <Link href="/json-formatter" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all">JSON 포맷터</Link>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">v1.0.0 Stable</div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-slate-100 bg-slate-50 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 text-sm italic">Built for Developers, by Developers.</div>
            <div className="text-slate-400 text-xs text-center md:text-right leading-loose">
              <p>&copy; 2026 DevToolBox. All rights reserved.</p>
              <p>No data is stored on our servers. 100% Client-side processing.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}