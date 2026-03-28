'use client';

import { useState, useEffect } from 'react';
import AdFit from 'app/components/AdFit';
import { dictionaries, LangType } from '../lib/dictionaries';

export default function UrlEncoder() {
  const [lang, setLang] = useState<LangType>('en');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as LangType;
    if (Object.keys(dictionaries).includes(browserLang)) {
      setLang(browserLang);
    }
  }, []);

  const d = dictionaries[lang]?.url || dictionaries['en'].url;

  const handleAction = (type: 'encode' | 'decode') => {
    if (!input.trim()) return;
    try {
      setResult(type === 'encode' ? encodeURIComponent(input) : decodeURIComponent(input));
    } catch (err) {
      alert('Invalid URL format.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-slate-900 antialiased font-sans">
      {/* 🚀 상단 광고 배치 */}
      <div className="mb-8 flex justify-center border-b border-slate-100 pb-4">
        <div className="text-center">
          <AdFit />
        </div>
      </div>

      <header className="mb-10 text-center lg:text-left">
        <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight italic">{d.title}</h2>
        <p className="text-sm text-slate-400 mt-1 font-medium">{d.sub}</p>
      </header>

      {/* 좌우 분할 그리드 시스템 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* [왼쪽] 입력 섹션 */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Input URL / Text</span>
            <button 
              onClick={() => setInput('')}
              className="text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase underline underline-offset-4 tracking-widest transition-colors"
            >
              Clear
            </button>
          </div>
          <textarea
            className="w-full h-64 lg:h-[400px] p-6 border border-slate-200 rounded-xl focus:border-slate-950 outline-none font-mono text-base leading-relaxed bg-white shadow-inner transition-colors resize-none"
            placeholder={d.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex gap-3">
            <button 
              onClick={() => handleAction('encode')}
              className="flex-1 bg-slate-950 text-white py-4 font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition rounded-xl shadow-lg"
            >
              {d.encode}
            </button>
            <button 
              onClick={() => handleAction('decode')}
              className="flex-1 bg-white border border-slate-200 text-slate-950 py-4 font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition rounded-xl shadow-md"
            >
              {d.decode}
            </button>
          </div>
        </div>

        {/* [오른쪽] 결과 섹션 (라이트 블루 테마) */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Result</span>
            {result && (
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(result);
                  alert('Copied to clipboard!');
                }}
                className="text-[10px] font-bold text-blue-600 hover:text-blue-800 uppercase underline underline-offset-4 tracking-widest transition-colors"
              >
                Copy
              </button>
            )}
          </div>
          <div className="flex-1 h-64 lg:h-full p-8 border border-blue-100 rounded-xl bg-blue-50/50 shadow-inner overflow-hidden transition-all">
            <textarea
              readOnly
              className="w-full h-full bg-transparent text-blue-950 font-mono text-base outline-none resize-none leading-relaxed placeholder:text-blue-300"
              value={result}
              placeholder="// Output will appear here..."
            />
          </div>
        </div>
      </div>

      {/* 하단 가이드 섹션 - 요청하신 기존 UI 구조 유지 */}
      <article className="pt-10 border-t border-gray-100 text-gray-600 leading-relaxed text-sm mt-16">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{d.guideTitle}</h3>
        <p className="mb-4">
          {d.guideDesc}
        </p>
        <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-700 text-xs font-semibold inline-block">
          Tip: URL에 포함된 특수문자나 한글이 깨질 때 인코딩을 통해 안전하게 변환하세요.
        </div>
      </article>
    </div>
  );
}