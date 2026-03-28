'use client';

import { useState, useEffect } from 'react';
import AdFit from 'app/components/AdFit';
import { dictionaries, LangType } from '../lib/dictionaries';
import { Pipette, Copy, RotateCcw } from 'lucide-react';

export default function ColorPicker() {
  const [lang, setLang] = useState<LangType>('en');
  const [color, setColor] = useState('#6366f1'); // 기본값: Indigo 500

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as LangType;
    if (Object.keys(dictionaries).includes(browserLang)) {
      setLang(browserLang);
    }
  }, []);

  const d = dictionaries[lang]?.color || dictionaries['en'].color;

  // HEX를 RGB로 변환하는 함수
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-slate-900 antialiased font-sans">
      {/* 🚀 상단 광고 */}
      <div className="mb-8 flex justify-center border-b border-slate-100 pb-4">
        <div className="text-center"><AdFit /></div>
      </div>

      <header className="mb-10 text-center lg:text-left">
        <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight italic">{d.title}</h2>
        <p className="text-sm text-slate-400 mt-1 font-medium">{d.sub}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* [왼쪽] 색상 선택 섹션 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-8">
          <div className="space-y-4">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] block">
              {d.select}
            </label>
            <div className="relative group">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full h-64 rounded-2xl cursor-pointer bg-white border-8 border-slate-50 shadow-inner overflow-hidden appearance-none"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <Pipette className="w-12 h-12 text-white drop-shadow-md" />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setColor('#6366f1')}
              className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-600 py-3 rounded-xl font-bold text-xs uppercase transition-all"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>
        </div>

        {/* [오른쪽] 코드 결과 섹션 */}
        <div className="space-y-6">
          {/* HEX 섹션 */}
          <div className="p-8 border border-blue-100 rounded-3xl bg-blue-50/30 shadow-inner">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-widest">{d.hex}</span>
              <button 
                onClick={() => copyToClipboard(color.toUpperCase())}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="text-4xl font-mono font-black text-slate-900 tracking-tight">
              {color.toUpperCase()}
            </div>
          </div>

          {/* RGB 섹션 */}
          <div className="p-8 border border-emerald-100 rounded-3xl bg-emerald-50/30 shadow-inner">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest">{d.rgb}</span>
              <button 
                onClick={() => copyToClipboard(hexToRgb(color))}
                className="text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="text-4xl font-mono font-black text-slate-900 tracking-tight">
              {hexToRgb(color)}
            </div>
          </div>

          {/* 🛠 요청하신 미리보기 박스 삭제 완료 */}
        </div>
      </div>

      {/* 하단 가이드 섹션 - 기존 UI 유지 */}
      <article className="pt-10 border-t border-gray-100 text-gray-600 leading-relaxed text-sm mt-16">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{d.guideTitle}</h3>
        <p className="mb-4">
          {d.guideDesc} {d.hex} 및 {d.rgb} 값을 즉시 추출하여 프로젝트에 바로 적용할 수 있습니다.
        </p>
        <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-700 text-xs font-semibold inline-block">
          Tip: 복사 버튼을 누르면 클립보드에 즉시 저장되어 붙여넣기 할 수 있습니다.
        </div>
      </article>
    </div>
  );
}