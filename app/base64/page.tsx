'use client';
import { useState } from 'react';

export default function Base64Tool() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const encode = () => { try { setResult(btoa(input)); } catch { alert('변환 불가한 문자열입니다. (ASCII만 지원)'); } };
  const decode = () => { try { setResult(atob(input)); } catch { alert('올바른 Base64 형식이 아닙니다.'); } };

  return (
    <div className="max-w-5xl mx-auto px-6 animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
        <header className="mb-8">
          <h2 className="text-3xl font-black text-gray-950 tracking-tighter">🔗 Base64 인코더 / 디코더</h2>
          <p className="text-gray-500 mt-1">텍스트를 안전한 전송 형식으로 인코딩하거나 복원하세요.</p>
        </header>

        <textarea
          className="w-full h-40 p-5 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 outline-none font-mono text-base transition-all mb-5"
          placeholder="변환할 문자열을 입력하세요..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        {/* 버튼 디자인 업그레이드 */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 pb-8 border-b border-gray-100">
          <button onClick={encode} className="flex-1 bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition active:scale-95 shadow-lg shadow-indigo-100">
            인코딩 (TEXT → B64)
          </button>
          <button onClick={decode} className="flex-1 bg-gray-900 text-white py-3.5 rounded-xl font-bold hover:bg-gray-800 transition active:scale-95 shadow-lg shadow-gray-200">
            디코딩 (B64 → TEXT)
          </button>
        </div>

        {/* 결과 박스 디자인 대폭 개선 */}
        {result && (
          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 relative group animate-in slide-in-from-top-3 duration-300">
            <button 
              onClick={() => navigator.clipboard.writeText(result)} 
              className="absolute right-3 top-3 bg-white/10 text-white px-3 py-1.5 rounded-md text-xs font-bold hover:bg-white/20 transition opacity-0 group-hover:opacity-100"
            >
              결과 복사
            </button>
            <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">변환 결과</div>
            <code className="text-sm text-gray-100 break-all leading-relaxed font-mono">{result}</code>
          </div>
        )}
      </div>
    </div>
  );
}