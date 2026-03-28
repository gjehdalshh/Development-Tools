'use client';

import { useState } from 'react';

export default function Home() {
  // --- 상태 관리 ---
  const [text, setText] = useState('');
  const [base64Input, setBase64Input] = useState('');
  const [base64Result, setBase64Result] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [jsonResult, setJsonResult] = useState('');
  const [jsonError, setJsonError] = useState('');

  // --- 공통 복사 함수 ---
  const handleCopy = async (targetText: string) => {
    if (!targetText) return;
    try {
      await navigator.clipboard.writeText(targetText);
      alert('클립보드에 복사되었습니다! ✨');
    } catch (err) {
      alert('복사 실패!');
    }
  };

  // --- 변환 로직 ---
  const handleEncode = () => { try { setBase64Result(btoa(base64Input)); } catch { setBase64Result('Error: Invalid string'); } };
  const handleDecode = () => { try { setBase64Result(atob(base64Input)); } catch { setBase64Result('Error: Invalid Base64'); } };
  const handleFormatJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonResult(JSON.stringify(parsed, null, 2));
      setJsonError('');
    } catch (e) {
      setJsonError('올바른 JSON 형식이 아닙니다.');
      setJsonResult('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* 헤더 섹션 */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            🛠️ DevTool Box
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            개발자와 작성자를 위한 빠르고 안전한 온라인 도구 모음입니다. 모든 연산은 브라우저에서 안전하게 처리됩니다.
          </p>
        </header>

        <div className="space-y-16">
          
          {/* 도구 1: 글자수 세기 */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">✍️ 실시간 글자수 세기</h2>
              <button 
                onClick={() => handleCopy(text)}
                className="text-sm px-4 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 font-semibold transition-colors"
              >
                전체 복사
              </button>
            </div>
            <textarea
              className="w-full h-48 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
              placeholder="여기에 텍스트를 입력하거나 붙여넣으세요..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-4 flex gap-6 text-base font-medium text-gray-600 border-b pb-6">
              <span>공백 포함: <b className="text-blue-600 text-xl">{text.length}</b>자</span>
              <span>공백 제외: <b className="text-blue-600 text-xl">{text.replace(/\s+/g, '').length}</b>자</span>
            </div>
            
            {/* SEO 텍스트: 글자수 세기 */}
            <article className="mt-6 text-gray-500 text-sm leading-relaxed">
              <h3 className="font-bold text-gray-700 mb-2 underline decoration-blue-200">글자수 세기 도구가 필요한 이유</h3>
              <p>
                자기소개서 작성, 네이버 블로그 포스팅, 유튜브 설명란 등 각종 플랫폼에는 <strong>글자수 제한</strong>이 존재합니다. 
                본 도구는 별도의 회원가입 없이 실시간으로 정확한 글자수를 계산해줍니다. 
                공백 포함 및 제외 기능을 통해 맞춤형 분량 조절이 가능하며, 보안을 위해 입력 데이터는 서버로 전송되지 않습니다.
              </p>
            </article>
          </section>

          {/* 도구 2: Base64 변환 */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 transition-all hover:shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 Base64 인코더 / 디코더</h2>
            <textarea
              className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-mono"
              placeholder="변환할 문자열을 입력하세요..."
              value={base64Input}
              onChange={(e) => setBase64Input(e.target.value)}
            />
            <div className="flex gap-3 mt-4 border-b pb-8">
              <button onClick={handleEncode} className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-sm">인코딩 (Encode)</button>
              <button onClick={handleDecode} className="flex-1 bg-gray-800 text-white py-3 rounded-xl font-bold hover:bg-gray-900 transition-all shadow-sm">디코딩 (Decode)</button>
            </div>
            {base64Result && (
              <div className="mt-6 p-5 bg-indigo-50 rounded-xl border border-indigo-100 relative group animate-in fade-in duration-300">
                <button 
                  onClick={() => handleCopy(base64Result)}
                  className="absolute right-3 top-3 bg-white border border-indigo-200 px-3 py-1 rounded-md text-xs font-bold text-indigo-600 hover:bg-indigo-100 transition-opacity shadow-sm"
                >
                  결과 복사
                </button>
                <div className="text-xs font-bold text-indigo-400 mb-2 uppercase tracking-wider">Result</div>
                <code className="text-sm text-indigo-900 break-all leading-relaxed font-mono">{base64Result}</code>
              </div>
            )}

            {/* SEO 텍스트: Base64 */}
            <article className="mt-8 text-gray-500 text-sm leading-relaxed">
              <h3 className="font-bold text-gray-700 mb-2 underline decoration-indigo-200">Base64 인코딩 및 디코딩 활용 방법</h3>
              <p>
                <strong>Base64</strong>는 바이너리 데이터를 텍스트 기반 시스템(JSON, XML, HTML 등)에서 안전하게 전송하기 위한 인코딩 방식입니다. 
                웹 개발 시 이미지 데이터를 데이터 URL로 변환하거나, 인증 토큰을 처리할 때 자주 사용됩니다. 
                본 도구를 사용하면 복잡한 환경 설정 없이도 즉시 문자열을 인코딩하거나 원래의 텍스트로 복원할 수 있습니다.
              </p>
            </article>
          </section>

          {/* 도구 3: JSON 포맷터 */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 transition-all hover:shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">📦 JSON 포맷터</h2>
            <p className="text-gray-500 mb-6 text-sm italic">지저분한 JSON 데이터를 사람이 읽기 쉬운 구조로 자동 정렬합니다.</p>
            <textarea
              className="w-full h-48 p-4 font-mono text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder='{"id":1,"status":"ok","message":"Hello World"}'
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
            />
            <button 
              onClick={handleFormatJson}
              className="w-full mt-4 bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-50/50 text-lg"
            >
              JSON 정렬하기 (Beautify)
            </button>
            {jsonError && <p className="mt-3 text-sm text-red-500 font-bold text-center bg-red-50 py-2 rounded-lg">{jsonError}</p>}
            {jsonResult && (
              <div className="mt-8 animate-in slide-in-from-bottom-2 duration-500">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Formatted Output</span>
                  <button onClick={() => handleCopy(jsonResult)} className="text-sm text-emerald-600 font-bold hover:text-emerald-800 transition-colors">전체 결과 복사</button>
                </div>
                <pre className="p-6 bg-gray-900 text-emerald-400 rounded-2xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner border border-gray-800">
                  {jsonResult}
                </pre>
              </div>
            )}

            {/* SEO 텍스트: JSON */}
            <article className="mt-10 pt-6 border-t border-gray-100 text-gray-500 text-sm leading-relaxed">
              <h3 className="font-bold text-gray-700 mb-2 underline decoration-emerald-200">온라인 JSON 포맷터의 중요성</h3>
              <p>
                API 응답 값이나 설정 파일을 다룰 때 JSON은 필수적인 데이터 형식입니다. 하지만 압축된 JSON 코드는 가독성이 매우 떨어집니다. 
                <strong>JSON Beautifier</strong>를 사용하면 들여쓰기(Indentation)를 자동으로 적용하여 계층 구조를 한눈에 파악할 수 있습니다. 
                본 도구는 유효성 검사(Validation) 기능도 포함되어 있어 JSON 문법 오류를 찾는 데 유용합니다.
              </p>
            </article>
          </section>

        </div>

        {/* 푸터 섹션 */}
        <footer className="mt-24 pb-12 text-center text-gray-400 text-sm border-t pt-8">
          <p>&copy; 2026 DevTool Box. All rights reserved.</p>
          <p className="mt-2 text-xs">본 서비스는 어떠한 사용자 데이터도 수집하거나 저장하지 않습니다.</p>
        </footer>
      </div>
    </div>
  );
}