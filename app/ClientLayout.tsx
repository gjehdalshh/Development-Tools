'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Menu, X } from 'lucide-react'; // 메뉴 아이콘 추가
import { dictionaries, LangType } from './lib/dictionaries';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LangType>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 모바일 메뉴 상태

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as LangType;
    if (Object.keys(dictionaries).includes(browserLang)) {
      setLang(browserLang);
    }
  }, []);

  const d = dictionaries[lang];
  const nav = d.nav;

  // 메뉴 아이템 배열 (경로와 아이콘/이름 매칭)
  const menuItems = [
    { name: nav.word, href: '/word-counter' },
    { name: nav.b64, href: '/base64' },
    { name: nav.json, href: '/json-formatter' },
    { name: nav.url, href: '/url-encoder' },
    { name: nav.pw, href: '/password-generator' },
    { name: nav.unit, href: '/unit-converter' },
    { name: nav.color, href: '/color-converter' },
  ];

  return (
    <body className="bg-white min-h-screen text-slate-900 antialiased font-sans">
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* 로고 */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded bg-slate-900 text-white font-bold text-sm text-center">DT</span>
                <span className="font-bold text-lg tracking-tight uppercase italic">DevToolBox</span>
              </Link>

              {/* 데스크탑 메뉴 */}
              <div className="hidden xl:flex items-center gap-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-tight"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* 언어 전환 버튼 */}
              <button 
                onClick={() => {
                  const langs: LangType[] = ['ko', 'en', 'ja', 'zh'];
                  setLang(langs[(langs.indexOf(lang) + 1) % langs.length]);
                }}
                className="flex items-center gap-2 text-[10px] font-bold text-slate-400 border border-slate-200 px-3 py-1.5 rounded-full hover:bg-slate-50 transition-all uppercase tracking-widest"
              >
                <Globe className="w-3 h-3" /> {lang}
              </button>

              {/* 모바일 메뉴 버튼 */}
              <button 
                className="xl:hidden p-2 text-slate-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 모바일 확장 메뉴 */}
        {isMenuOpen && (
          <div className="xl:hidden border-t border-slate-100 bg-white py-4 px-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-lg uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="border-t border-slate-100 bg-slate-50 py-12 text-center mt-20">
        <p className="text-slate-400 text-xs">{d.home.footerDesc}</p>
        <p className="mt-4 text-slate-300 text-[10px] uppercase tracking-widest">&copy; 2026 DevToolBox</p>
      </footer>
    </body>
  );
}