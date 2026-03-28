'use client';
import { useState } from 'react';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const format = () => {
    try {
      setResult(JSON.stringify(JSON.parse(input), null, 2));
    } catch {
      alert('올바른 JSON 형식이 아닙니다.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12">
        <h2 className="text-3xl font-black text-gray-950 tracking-tighter mb-8">📦 JSON 포맷터</h2>
        
        <textarea
          className="w-full h-56 p-6 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 outline-none font-mono text-sm mb-6 transition-all"
          placeholder='{"key": "value", "array": [1, 2, 3]}'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        <button onClick={format} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black hover:bg-emerald-700 transition shadow-lg shadow-emerald-100 mb-10">JSON 정렬하기 (Beautify)</button>

        {result && (
          <div className="mb-12">
            <pre className="p-8 bg-gray-950 text-emerald-400 rounded-3xl overflow-x-auto text-sm font-mono leading-relaxed border border-gray-800">
              {result}
            </pre>
          </div>
        )}

        <article className="pt-10 border-t border-gray-100 text-gray-600 leading-relaxed text-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4">온라인 JSON 포맷터가 필요한 순간</h3>
          <p className="mb-4">
            API 응답 결과가 한 줄로 뭉쳐있어 구조 파악이 어려울 때, 본 <strong>JSON 포맷터</strong>를 사용하면 가독성이 극대화됩니다. 자동 들여쓰기 기능을 통해 데이터의 계층 구조를 한눈에 확인하세요.
          </p>
          <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-700 text-xs font-semibold">
            Tip: 문법 오류가 있을 경우 경고창을 통해 잘못된 부분을 바로 확인할 수 있습니다.
          </div>
        </article>
      </div>
    </div>
  );
}