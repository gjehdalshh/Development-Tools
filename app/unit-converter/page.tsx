'use client';

import { useState, useEffect } from 'react';
import AdFit from 'app/components/AdFit';
import { dictionaries, LangType } from '../lib/dictionaries';
import { Scale, Ruler, Thermometer, Database, Clock, ArrowRightLeft } from 'lucide-react';

type UnitTab = 'length' | 'weight' | 'temp' | 'data' | 'time';

export default function UnitConverter() {
  const [lang, setLang] = useState<LangType>('en');
  const [activeTab, setActiveTab] = useState<UnitTab>('length');
  
  // 시간 단위는 3개(시, 분, 초)이므로 상태 관리를 객체로 변경하여 확장성 확보
  const [values, setValues] = useState<{ [key: string]: string }>({
    v1: '', v2: '', v3: ''
  });

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as LangType;
    if (Object.keys(dictionaries).includes(browserLang)) {
      setLang(browserLang);
    }
  }, []);

  const d = dictionaries[lang]?.unit || dictionaries['en'].unit;

  // 변환 핵심 로직
  const handleConvert = (val: string, index: number) => {
    const num = parseFloat(val);
    const newValues = { v1: '', v2: '', v3: '' };
    
    if (isNaN(num)) {
      setValues(newValues);
      return;
    }

    if (activeTab === 'time') {
      // 시간 변환 (기준: 초)
      let seconds = 0;
      if (index === 1) seconds = num * 3600;      // 시 -> 초
      else if (index === 2) seconds = num * 60;   // 분 -> 초
      else seconds = num;                         // 초

      setValues({
        v1: index === 1 ? val : (seconds / 3600).toString(),
        v2: index === 2 ? val : (seconds / 60).toString(),
        v3: index === 3 ? val : seconds.toString()
      });
    } else {
      // 기존 2개 단위 변환 로직 (길이, 무게, 온도, 데이터)
      let v1 = '', v2 = '';
      if (activeTab === 'length') {
        v1 = index === 1 ? val : (num * 2.54).toFixed(2);
        v2 = index === 2 ? val : (num / 2.54).toFixed(2);
      } else if (activeTab === 'weight') {
        v1 = index === 1 ? val : (num / 2.20462).toFixed(2);
        v2 = index === 2 ? val : (num * 2.20462).toFixed(2);
      } else if (activeTab === 'temp') {
        v1 = index === 1 ? val : ((num - 32) * 5/9).toFixed(2);
        v2 = index === 2 ? val : ((num * 9/5) + 32).toFixed(2);
      } else if (activeTab === 'data') {
        v1 = index === 1 ? val : (num * 1024).toString();
        v2 = index === 2 ? val : (num / 1024).toFixed(4);
      }
      setValues({ v1, v2, v3: '' });
    }
  };

  const changeTab = (tab: UnitTab) => {
    setActiveTab(tab);
    setValues({ v1: '', v2: '', v3: '' });
  };

  const unitLabels = {
    length: ['cm', 'inch'],
    weight: ['kg', 'lb'],
    temp: ['℃', '℉'],
    data: ['MB', 'GB'],
    time: ['Hour', 'Min', 'Sec']
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-slate-900 antialiased font-sans">
      <div className="mb-8 flex justify-center border-b border-slate-100 pb-4">
        <div className="text-center"><AdFit /></div>
      </div>

      <header className="mb-10 text-center lg:text-left">
        <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight italic">{d.title}</h2>
        <p className="text-sm text-slate-400 mt-1 font-medium">{d.sub}</p>
      </header>

      {/* 카테고리 탭 */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-4 no-scrollbar">
        {[
          { id: 'length', label: d.length, icon: Ruler },
          { id: 'weight', label: d.weight, icon: Scale },
          { id: 'temp', label: d.temp, icon: Thermometer },
          { id: 'data', label: 'Data', icon: Database },
          { id: 'time', label: 'Time', icon: Clock },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => changeTab(tab.id as UnitTab)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === tab.id ? 'bg-slate-950 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-400'
            }`}
          >
            <tab.icon className="w-4 h-4" /> {tab.label}
          </button>
        ))}
      </div>

      {/* 변환 영역 */}
      <div className={`grid gap-4 lg:gap-8 items-center bg-blue-50/30 p-8 lg:p-12 rounded-3xl border border-blue-100 shadow-inner ${activeTab === 'time' ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-[1fr_auto_1fr]'}`}>
        
        {/* 입력 1 (시 / cm / kg / ℃ / MB) */}
        <div className="space-y-3 text-center">
          <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{unitLabels[activeTab][0]}</label>
          <input
            type="number"
            value={values.v1}
            onChange={(e) => handleConvert(e.target.value, 1)}
            placeholder="0"
            className="w-full bg-white border-2 border-transparent focus:border-blue-500 rounded-2xl p-6 text-2xl font-bold text-center outline-none shadow-sm transition-all"
          />
        </div>

        {activeTab !== 'time' && (
          <div className="flex justify-center"><ArrowRightLeft className="text-blue-300 w-5 h-5" /></div>
        )}

        {/* 입력 2 (분 / inch / lb / ℉ / GB) */}
        <div className="space-y-3 text-center">
          <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{unitLabels[activeTab][1]}</label>
          <input
            type="number"
            value={values.v2}
            onChange={(e) => handleConvert(e.target.value, 2)}
            placeholder="0"
            className="w-full bg-white border-2 border-transparent focus:border-blue-500 rounded-2xl p-6 text-2xl font-bold text-center outline-none shadow-sm transition-all"
          />
        </div>

        {/* 입력 3 (시간 탭일 때만 나타나는 '초') */}
        {activeTab === 'time' && (
          <div className="space-y-3 text-center">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{unitLabels[activeTab][2]}</label>
            <input
              type="number"
              value={values.v3}
              onChange={(e) => handleConvert(e.target.value, 3)}
              placeholder="0"
              className="w-full bg-white border-2 border-transparent focus:border-blue-500 rounded-2xl p-6 text-2xl font-bold text-center outline-none shadow-sm transition-all"
            />
          </div>
        )}
      </div>

      <article className="pt-10 border-t border-gray-100 text-gray-600 leading-relaxed text-sm mt-16">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{d.guideTitle}</h3>
        <p className="mb-4">{d.guideDesc} 시간 변환기는 시, 분, 초를 실시간으로 상호 변환하며, 데이터 용량은 1024(Binary) 기준으로 정확하게 계산됩니다.</p>
        <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-700 text-xs font-semibold inline-block">
          Tip: 큰 수치를 입력해도 지수 표기법 없이 정확한 값을 확인할 수 있도록 설계되었습니다.
        </div>
      </article>
    </div>
  );
}