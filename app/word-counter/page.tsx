'use client';
import { useState } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');
  const charCount = text.length;
  const noSpaceCount = text.replace(/\s+/g, '').length;

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12">
        <h2 className="text-3xl font-black text-gray-950 tracking-tighter mb-8">✍️ 실시간 글자수 세기</h2>
        
        <textarea
          className="w-full h-80 p-6 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-400 outline-none text-lg leading-relaxed mb-8 transition-all"
          placeholder="여기에 내용을 입력하세요..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 text-center">
            <div className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">공백 포함</div>
            <div className="text-6xl font-black text-blue-600">{charCount}</div>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">공백 제외</div>
            <div className="text-6xl font-black text-gray-900">{noSpaceCount}</div>
          </div>
        </div>

        {/* SEO 설명 영역 */}
        <article className="pt-10 border-t border-gray-100 text-gray-600 leading-relaxed text-sm md:text-base">
          <h3 className="text-xl font-bold text-gray-800 mb-4">온라인 글자수 세기가 필요한 이유</h3>
          <p className="mb-4">
            자기소개서나 블로그 포스팅, SNS 게시물 작성 시 <strong>글자수 제한</strong>은 매우 중요한 요소입니다. 본 도구는 별도의 설치 없이 브라우저에서 <strong>실시간 글자수 계산</strong>을 도와줍니다.
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li><strong>네이버/티스토리 블로그:</strong> SEO를 위한 최적의 포스팅 분량 확인</li>
            <li><strong>대입/취업 자소서:</strong> 기업별 제한 글자수 정밀 체크</li>
            <li><strong>SNS 마케팅:</strong> 인스타그램, 트위터 글자수 제한 최적화</li>
          </ul>
        </article>
      </div>
    </div>
  );
}