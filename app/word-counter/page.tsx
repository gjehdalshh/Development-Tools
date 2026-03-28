'use client';

import { useState, useEffect } from 'react';
import AdFit from 'app/components/AdFit';
import { dictionaries, LangType } from '../lib/dictionaries';

export default function WordCounter() {
  const [lang, setLang] = useState<LangType>('en');
  const [text, setText] = useState('');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as LangType;
    if (Object.keys(dictionaries).includes(browserLang)) {
      setLang(browserLang);
    }
  }, []);

  const d = dictionaries[lang]?.word || dictionaries['en'].word;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* 상단 광고 */}
      <div className="mb-8 flex justify-center border-b pb-4">
        <div className="text-center">
          <AdFit />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* 입력 섹션 */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{d.title}</h2>
              <p className="text-sm text-slate-500">{d.sub}</p>
            </div>
            <button 
              onClick={() => setText('')} 
              className="text-xs font-semibold text-slate-400 hover:text-red-500 underline underline-offset-4"
            >
              {d.clear}
            </button>
          </div>
          
          <textarea
            className="w-full h-[500px] p-6 border border-slate-300 rounded-lg focus:ring-0 focus:border-slate-900 outline-none text-base font-mono leading-relaxed bg-white shadow-inner"
            placeholder={d.placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* 사이드바 */}
        <div className="w-full lg:w-72">
          <div className="sticky top-24 space-y-4">
            <div className="p-6 border border-slate-200 rounded-lg bg-white">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{d.stat}</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-slate-500 mb-1">{d.charSpace}</div>
                  <div className="text-4xl font-mono font-bold text-slate-900">{text.length.toLocaleString()}</div>
                </div>
                <div className="pt-6 border-t border-slate-100">
                  <div className="text-sm text-slate-500 mb-1">{d.charNoSpace}</div>
                  <div className="text-4xl font-mono font-bold text-slate-900">{text.replace(/\s+/g, '').length.toLocaleString()}</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg text-xs leading-relaxed text-slate-500">
              <h4 className="font-bold text-slate-700 mb-2">{d.guideTitle}</h4>
              <p>{d.guideDesc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 SEO 설명 영역 (지역화 완료) */}
      <article className="mt-12 pt-10 border-t border-slate-100 text-slate-600 leading-relaxed text-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4 tracking-tight">{d.seoTitle}</h3>
        <p className="mb-4">{d.seoDesc}</p>
        <ul className="list-disc ml-5 space-y-2 text-slate-500 font-medium">
          {d.seoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}