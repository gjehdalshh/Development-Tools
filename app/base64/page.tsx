'use client';
import { useState } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Base64 인코더/디코더 - Dev Toolbox",
  description: "텍스트를 Base64 형식으로 변환하거나, Base64 문자열을 원문으로 복구하는 도구입니다. 빠르고 안전한 온라인 변환기입니다.",
};

export default function Base64Tool() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleAction = (type: 'en' | 'de') => {
    try { setResult(type === 'en' ? btoa(input) : atob(input)); } catch { alert('Invalid input format.'); }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">Base64 Converter</h2>
        <p className="text-sm text-slate-400 font-medium mt-1">Encode or Decode data instantly</p>
      </header>

      <div className="space-y-6">
        <textarea
          className="w-full h-40 p-5 border border-slate-300 rounded focus:border-slate-900 outline-none font-mono text-sm bg-slate-50/30"
          placeholder="데이터를 입력하세요..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        <div className="flex -space-x-px">
          <button onClick={() => handleAction('en')} className="flex-1 bg-slate-900 text-white py-3 font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition rounded-l">Encode</button>
          <button onClick={() => handleAction('de')} className="flex-1 bg-white border border-slate-300 text-slate-900 py-3 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition rounded-r">Decode</button>
        </div>

        {result && (
          <div className="p-6 bg-slate-900 rounded">
            <div className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-widest">Output</div>
            <code className="text-slate-100 text-sm break-all font-mono leading-relaxed">{result}</code>
          </div>
        )}

        <article className="pt-10 border-t border-gray-100 text-gray-600 leading-relaxed text-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Base64 변환기 활용 가이드</h3>
          <p className="mb-4">
            <strong>Base64 인코딩</strong>은 8비트 이진 데이터를 텍스트 시스템에서 안전하게 전송하기 위해 ASCII 문자열로 변환하는 방식입니다. 주로 웹 개발에서 이미지 데이터 URI 생성, API 인증 토큰 처리 등에 사용됩니다.
          </p>
          <p>
            본 도구는 데이터 유출 걱정 없이 브라우저 내에서 안전하게 작동하므로 보안이 중요한 문자열 변환에도 안심하고 사용할 수 있습니다.
          </p>
        </article>
      </div>
    </div>
  );
}