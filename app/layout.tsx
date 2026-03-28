import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50/50 min-h-screen antialiased text-gray-900 font-sans">
        {/* 상단바 디자인 업그레이드 */}
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="p-2.5 rounded-xl bg-indigo-600 text-white font-black text-xl shadow-sm group-hover:bg-indigo-700 transition-colors">🛠️</span>
              <span className="font-extrabold text-2xl text-gray-950 tracking-tight">Dev<span className="text-indigo-600">ToolBox</span></span>
            </Link>
            <div className="flex items-center gap-6 text-sm font-semibold text-gray-600">
              <Link href="/word-counter" className="hover:text-indigo-600 transition-colors">글자수</Link>
              <Link href="/base64" className="hover:text-indigo-600 transition-colors">Base64</Link>
              <Link href="/json-formatter" className="hover:text-emerald-600 transition-colors">JSON</Link>
            </div>
          </div>
        </nav>
        
        {/* 콘텐츠 영역 */}
        <main className="py-12 md:py-16">{children}</main>

        {/* 푸터 추가 (SEO 및 전문성 향상) */}
        <footer className="border-t border-gray-100 bg-white mt-24">
          <div className="max-w-6xl mx-auto px-6 py-10 text-center text-sm text-gray-500">
            <p>&copy; 2026 DevToolBox. All rights reserved.</p>
            <p className="mt-1.5 text-xs text-gray-400">모든 연산은 브라우저에서 안전하게 처리되며 데이터는 서버에 저장되지 않습니다.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}