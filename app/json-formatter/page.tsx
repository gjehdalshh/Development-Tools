'use client';

import { useState, useEffect } from 'react';
import AdFit from 'app/components/AdFit';
import { dictionaries, LangType } from '../lib/dictionaries';

export default function JsonFormatter() {
  const [lang, setLang] = useState<LangType>('en');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as LangType;
    if (Object.keys(dictionaries).includes(browserLang)) {
      setLang(browserLang);
    }
  }, []);

  const d = dictionaries[lang]?.json || dictionaries['en'].json;

  const handleFormat = () => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      setResult(JSON.stringify(parsed, null, 2));
    } catch (err) {
      alert(d.invalid);
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
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Input JSON</span>
            <button 
              onClick={() => setInput('')}
              className="text-[10px] font-bold text-slate-400 hover:text-red-500 uppercase underline underline-offset-4 tracking-widest transition-colors"
            >
              Clear
            </button>
          </div>
          <textarea
            className="w-full h-[500px] p-6 border border-slate-200 rounded-xl focus:border-slate-950 outline-none font-mono text-base leading-relaxed bg-white shadow-inner transition-colors resize-none"
            placeholder={d.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            onClick={handleFormat}
            className="w-full bg-slate-950 text-white py-4 font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition rounded-xl shadow-lg"
          >
            {d.format}
          </button>
        </div>

        {/* [오른쪽] 결과 섹션 (라이트 블루 테마) */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Formatted Result</span>
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
          <div className="flex-1 h-[500px] lg:h-full p-8 border border-blue-100 rounded-xl bg-blue-50/50 shadow-inner overflow-hidden">
            <textarea
              readOnly
              className="w-full h-full bg-transparent text-blue-950 font-mono text-base outline-none resize-none leading-relaxed placeholder:text-blue-300"
              value={result}
              placeholder="// Clean JSON will appear here..."
            />
          </div>
        </div>
      </div>

      {/* 🛠 요청하신 하단 SEO/가이드 섹션 교체 */}
      <article className="mt-16 pt-10 border-t border-gray-100 text-gray-600 leading-relaxed text-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-4">온라인 JSON 포맷터의 활용</h3>
        <p>복잡하게 엉킨 API 응답 데이터를 가독성 있게 정렬합니다. 2-space 들여쓰기를 표준으로 제공합니다.</p>
        <p className="mb-4">
          API 응답 결과가 한 줄로 뭉쳐있어 구조 파악이 어려울 때, 본 <strong>JSON 포맷터</strong>를 사용하면 가독성이 극대화됩니다. 자동 들여쓰기 기능을 통해 데이터의 계층 구조를 한눈에 확인하세요.
        </p>
        <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-700 text-xs font-semibold inline-block">
          Tip: 문법 오류가 있을 경우 경고창을 통해 잘못된 부분을 바로 확인할 수 있습니다.
        </div>
      </article>
    </div>
  );
}