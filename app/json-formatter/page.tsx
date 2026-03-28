'use client';
import { useState } from 'react';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const format = () => {
    try {
      if (!input.trim()) { setError('JSON을 입력하세요.'); return; }
      const parsed = JSON.parse(input);
      setResult(JSON.stringify(parsed, null, 2));
      setError('');
    } catch {
      setError('올바른 JSON 형식이 아닙니다. Syntax Error를 확인하세요.');
      setResult('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
        <header className="mb-3">
          <h2 className="text-3xl font-black text-gray-950 tracking-tighter">📦 JSON 포맷터 & 뷰어</h2>
        </header>
        <p className="text-gray-500 mb-8 text-base">지저분한 JSON 데이터를 사람이 읽기 쉬운 구조로 자동 정렬하고 문법을 검사합니다.</p>

        <textarea
          className="w-full h-56 p-5 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-400 outline-none font-mono text-sm leading-relaxed transition-all mb-5 placeholder:text-gray-400"
          placeholder='{"id": 1, "status": "ok", "message": "정렬할 JSON 데이터를 여기에 입력하세요..."}'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        <button onClick={format} className="w-full bg-emerald-600 text-white py-4 rounded-xl font-extrabold hover:bg-emerald-700 transition active:scale-95 shadow-lg shadow-emerald-100 text-base mb-6">
          JSON 정렬 및 뷰어 실행 (Format / Beautify)
        </button>
        
        {error && <p className="mt-2 text-red-500 font-bold text-center bg-red-50 py-2.5 rounded-lg border border-red-100 mb-6">{error}</p>}
        
        {/* 결과 코드 뷰어 디자인 대폭 개선 */}
        {result && (
          <div className="mt-10 animate-in slide-in-from-top-3 duration-500">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Formatted Output</span>
              <button 
                onClick={() => navigator.clipboard.writeText(result)} 
                className="text-sm text-emerald-600 font-bold hover:text-emerald-800 transition active:scale-95"
              >
                전체 결과 복사하기
              </button>
            </div>
            <pre className="p-7 bg-gray-950 text-emerald-400 rounded-3xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner shadow-gray-900 border border-gray-800">
              {result}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}