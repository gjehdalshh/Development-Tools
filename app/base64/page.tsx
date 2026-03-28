'use client';
import { useState } from 'react';

export default function Base64Tool() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleAction = (type: 'en' | 'de') => {
    try {
      setResult(type === 'en' ? btoa(input) : atob(input));
    } catch {
      alert('올바른 형식이 아닙니다. 입력을 확인하세요.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12">
        <h2 className="text-3xl font-black text-gray-950 tracking-tighter mb-8">🔗 Base64 인코더/디코더</h2>
        
        <textarea
          className="w-full h-40 p-6 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 outline-none font-mono mb-6 transition-all"
          placeholder="변환할 텍스트를 입력하세요..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        <div className="flex gap-4 mb-10">
          <button onClick={() => handleAction('en')} className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-black hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">인코딩</button>
          <button onClick={() => handleAction('de')} className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-black hover:bg-gray-800 transition shadow-lg shadow-gray-200">디코딩</button>
        </div>

        {result && (
          <div className="p-8 bg-gray-950 rounded-3xl border border-gray-800 relative group mb-12">
            <div className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-[0.2em]">Result</div>
            <code className="text-indigo-400 break-all font-mono leading-relaxed">{result}</code>
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