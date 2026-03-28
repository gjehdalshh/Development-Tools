import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'DevToolBox - 개발자를 위한 온라인 도구 모음',
  description: '글자수 세기, Base64 변환, JSON 포맷터 등 개발과 작업에 필요한 도구를 무료로 사용하세요.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50/50 min-h-screen antialiased text-gray-900 font-sans">
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="p-2.5 rounded-2xl bg-indigo-600 text-white font-black text-xl shadow-indigo-100 shadow-lg group-hover:bg-indigo-700 transition-all">🛠️</span>
              <span className="font-extrabold text-2xl text-gray-950 tracking-tighter">Dev<span className="text-indigo-600">ToolBox</span></span>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-500">
              <Link href="/word-counter" className="hover:text-indigo-600 transition-colors">글자수 세기</Link>
              <Link href="/base64" className="hover:text-indigo-600 transition-colors">Base64 변환</Link>
              <Link href="/json-formatter" className="hover:text-emerald-600 transition-colors">JSON 포맷터</Link>
            </div>
          </div>
        </nav>
        
        <main className="py-12 md:py-16 min-h-[calc(100vh-160px)]">{children}</main>

        <footer className="border-t border-gray-100 bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <p className="font-bold text-gray-900">DevToolBox</p>
              <p className="mt-2 text-sm text-gray-500">모든 도구는 브라우저 내에서 안전하게 실행됩니다.</p>
            </div>
            <div className="text-center md:text-right text-xs text-gray-400">
              <p>&copy; 2026 DevToolBox. All rights reserved.</p>
              <p className="mt-1">개인정보를 수집하거나 서버에 데이터를 저장하지 않습니다.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}