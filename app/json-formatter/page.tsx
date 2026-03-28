'use client';
import { useState } from 'react';
import AdFit from 'app/components/AdFit';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const format = () => {
    try { setResult(JSON.stringify(JSON.parse(input), null, 2)); } catch { alert('Invalid JSON Syntax.'); }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 🚀 상단 광고 배치 (제목 위) */}
      <div className="mb-8 flex justify-center border-b pb-4">
        <div className="text-center">
          <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest">Advertisement</p>
          <AdFit />
        </div>
      </div>
      
      <header className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase tracking-tighter">JSON Formatter</h2>
        <p className="text-sm text-slate-400 font-medium mt-1">Beautify and Validate JSON structures</p>
      </header>

      <textarea
        className="w-full h-56 p-5 border border-slate-300 rounded focus:border-slate-900 outline-none font-mono text-sm bg-slate-50/30 mb-4"
        placeholder='{"key": "value", "array": [1, 2, 3]}'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
      <button onClick={format} className="w-full bg-slate-900 text-white py-3.5 font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition rounded mb-8">Format JSON</button>

      {result && (
        <pre className="p-6 bg-slate-50 border border-slate-200 rounded text-slate-700 text-sm font-mono overflow-x-auto leading-relaxed mb-12">
          {result}
        </pre>
      )}

      <article className="pt-10 border-t border-gray-100 text-gray-600 leading-relaxed text-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4">온라인 JSON 포맷터의 활용</h3>
          <p>복잡하게 엉킨 API 응답 데이터를 가독성 있게 정렬합니다. 2-space 들여쓰기를 표준으로 제공합니다.</p>
          <p className="mb-4">
            API 응답 결과가 한 줄로 뭉쳐있어 구조 파악이 어려울 때, 본 <strong>JSON 포맷터</strong>를 사용하면 가독성이 극대화됩니다. 자동 들여쓰기 기능을 통해 데이터의 계층 구조를 한눈에 확인하세요.
          </p>
          <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-700 text-xs font-semibold">
            Tip: 문법 오류가 있을 경우 경고창을 통해 잘못된 부분을 바로 확인할 수 있습니다.
          </div>
        </article>
    </div>
  );
}