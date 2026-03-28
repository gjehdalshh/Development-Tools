'use client';
import { useState } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('전체 텍스트가 복사되었습니다! ✨');
  };

  const charCount = text.length;
  const noSpaceCount = text.replace(/\s+/g, '').length;

  return (
    <div className="max-w-5xl mx-auto px-6 animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-950 tracking-tighter">✍️ 실시간 글자수 세기</h2>
            <p className="text-gray-500 mt-1">자소서, 블로그 등 각종 플랫폼 분량 확인에 사용하세요.</p>
          </div>
          <button 
            onClick={handleCopy} 
            className="px-5 py-2.5 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition active:scale-95 shadow-lg shadow-gray-200"
          >
            결과 복사하기
          </button>
        </header>

        {/* 입력창 디자인 개선 */}
        <div className="relative mb-8">
          <textarea
            className="w-full h-80 p-6 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 outline-none text-lg leading-relaxed transition-all placeholder:text-gray-400"
            placeholder="여기에 텍스트를 입력하거나 붙여넣으세요..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {text && (
            <button onClick={() => setText('')} className="absolute right-4 top-4 text-xs text-gray-400 hover:text-red-500 font-medium">지우기</button>
          )}
        </div>
        
        {/* 결과값 디자인 대폭 개선 */}
        <div className="grid grid-cols-2 gap-6 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
          <div className="text-center bg-white p-5 rounded-xl border shadow-inner shadow-gray-50">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">공백 포함</div>
            <div className="text-5xl font-black text-blue-600 tracking-tight">{charCount}</div>
            <div className="text-sm text-gray-500 mt-1">자</div>
          </div>
          <div className="text-center bg-white p-5 rounded-xl border shadow-inner shadow-gray-50">
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">공백 제외</div>
            <div className="text-5xl font-black text-blue-600 tracking-tight">{noSpaceCount}</div>
            <div className="text-sm text-gray-500 mt-1">자</div>
          </div>
        </div>

        {/* 도움말 섹션 */}
        <article className="mt-12 pt-8 border-t border-gray-100 text-gray-600 leading-relaxed">
          <h3 className="font-bold text-gray-800 mb-2">언제 이 도구를 사용하나요?</h3>
          <p className="text-sm">구글 애드센스 승인을 위한 블로그 포스팅 분량(약 1,000~2,000자)을 확인하거나, 네이버 글자수 제한이 있는 댓글, 각종 플랫폼의 상세 설명란을 작성할 때 사용합니다.</p>
        </article>
      </div>
    </div>
  );
}