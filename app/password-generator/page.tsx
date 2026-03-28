'use client';

import { useState, useEffect, useCallback } from 'react';
import AdFit from 'app/components/AdFit';
import { dictionaries, LangType } from '../lib/dictionaries';
import { ShieldCheck, Copy, RefreshCw } from 'lucide-react';

export default function PasswordGenerator() {
  const [lang, setLang] = useState<LangType>('en');
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as LangType;
    if (Object.keys(dictionaries).includes(browserLang)) {
      setLang(browserLang);
    }
  }, []);

  const d = dictionaries[lang]?.pw || dictionaries['en'].pw;

  // 비밀번호 생성 로직
  const generatePassword = useCallback(() => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=' ;

    let characters = lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  }, [length, includeUppercase, includeNumbers, includeSymbols]);

  // 초기 로드 시 생성
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
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
        {/* [왼쪽] 설정 섹션 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">{d.length}: <span className="text-blue-600">{length}</span></label>
            </div>
            <input
              type="range"
              min="8"
              max="64"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-950"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { label: d.upper, state: includeUppercase, setState: setIncludeUppercase },
              { label: d.number, state: includeNumbers, setState: setIncludeNumbers },
              { label: d.symbol, state: includeSymbols, setState: setIncludeSymbols },
            ].map((option, idx) => (
              <label key={idx} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                <span className="text-sm font-medium text-slate-600">{option.label}</span>
                <input
                  type="checkbox"
                  checked={option.state}
                  onChange={(e) => option.setState(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-300 text-slate-950 focus:ring-slate-950"
                />
              </label>
            ))}
          </div>

          <button
            onClick={generatePassword}
            className="w-full bg-slate-950 text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition shadow-lg flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" /> {d.generate}
          </button>
        </div>

        {/* [오른쪽] 결과 섹션 (라이트 블루 테마) */}
        <div className="flex flex-col space-y-4 h-full">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" /> Secure Result
            </span>
          </div>
          
          <div className="relative flex-1 min-h-[200px] lg:min-h-[400px] p-8 border border-blue-100 rounded-2xl bg-blue-50/50 shadow-inner flex items-center justify-center">
            <div className="w-full">
              <textarea
                readOnly
                className="w-full bg-transparent text-blue-950 font-mono text-2xl lg:text-3xl font-bold text-center outline-none resize-none break-all"
                value={password}
                rows={3}
              />
              <div className="mt-8 flex justify-center">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition shadow-md uppercase tracking-wider"
                >
                  <Copy className="w-4 h-4" /> {d.copy}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 가이드 섹션 - 기존 레이아웃 유지 */}
      <article className="pt-10 border-t border-gray-100 text-gray-600 leading-relaxed text-sm mt-16">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{d.guideTitle}</h3>
        <p className="mb-4">
          {d.guideDesc} 본 생성기는 대문자, 소문자, 숫자, 특수문자를 조합하여 강력한 보안 등급의 비밀번호를 생성합니다.
        </p>
        <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-700 text-xs font-semibold inline-block">
          Tip: 비밀번호 길이는 최소 12자 이상, 특수문자를 포함하는 것이 보안상 가장 안전합니다.
        </div>
      </article>
    </div>
  );
}