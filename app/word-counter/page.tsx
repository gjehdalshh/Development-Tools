'use client';
import { useState } from 'react';
import AdFit from 'app/components/AdFit';

export default function WordCounter() {
  const [text, setText] = useState('');

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* 🚀 상단 광고 배치 (제목 위) */}
      <div className="mb-8 flex justify-center border-b pb-4">
        <div className="text-center">
          <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-widest">Advertisement</p>
          <AdFit />
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 입력 및 기능부 */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Word Counter</h2>
              <p className="text-sm text-slate-500">텍스트 분량을 실시간으로 분석합니다.</p>
            </div>
            <button onClick={() => setText('')} className="text-xs font-semibold text-slate-400 hover:text-red-500 underline underline-offset-4">Clear All</button>
          </div>
          
          <textarea
            className="w-full h-[500px] p-6 border border-slate-300 rounded-lg focus:ring-0 focus:border-slate-900 outline-none text-base font-mono leading-relaxed bg-white shadow-inner"
            placeholder="분석할 텍스트를 입력하세요..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* 결과 통계 사이드바 (웹스러운 정보 배치) */}
        <div className="w-full lg:w-72">
          <div className="sticky top-24 space-y-4">
            <div className="p-6 border border-slate-200 rounded-lg bg-white">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Statistics</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-slate-500 mb-1">공백 포함 (Chars)</div>
                  <div className="text-4xl font-mono font-bold text-slate-900">{text.length}</div>
                </div>
                <div className="pt-6 border-t border-slate-100">
                  <div className="text-sm text-slate-500 mb-1">공백 제외 (No Spaces)</div>
                  <div className="text-4xl font-mono font-bold text-slate-900">{text.replace(/\s+/g, '').length}</div>
                </div>
              </div>
            </div>

            {/* SEO 텍스트 (사이드바에 배치하여 공간 활용) */}
            <div className="p-6 bg-slate-50 rounded-lg text-xs leading-relaxed text-slate-500">
              <h4 className="font-bold text-slate-700 mb-2">Usage Guide</h4>
              <p>본 도구는 자소서, 블로그 포스팅 등 정밀한 분량 확인이 필요한 문서 작성에 최적화되어 있습니다. 실시간으로 글자수를 계산하며 모든 데이터는 로컬 브라우저 세션 내에서만 유지됩니다.</p>
            </div>
          </div>
        </div>
      </div>
      {/* 요청하신 SEO 설명 영역 - 본문 하단 배치 */}
          <article className="mt-12 pt-10 border-t border-slate-100 text-slate-600 leading-relaxed text-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4 tracking-tight">온라인 글자수 세기가 필요한 이유</h3>
            <p className="mb-4">
              자기소개서나 블로그 포스팅, SNS 게시물 작성 시 <strong>글자수 제한</strong>은 매우 중요한 요소입니다. 본 도구는 별도의 설치 없이 브라우저에서 <strong>실시간 글자수 계산</strong>을 도와줍니다.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-slate-500">
              <li><strong>네이버/티스토리 블로그:</strong> SEO를 위한 최적의 포스팅 분량 확인</li>
              <li><strong>대입/취업 자소서:</strong> 기업별 제한 글자수 정밀 체크</li>
              <li><strong>SNS 마케팅:</strong> 인스타그램, 트위터 글자수 제한 최적화</li>
            </ul>
          </article>
    </div>
  );
}