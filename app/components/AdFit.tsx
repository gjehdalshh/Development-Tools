'use client';

import { useEffect, useRef } from 'react';

export default function AdFit() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 이미 광고가 로드되었다면 중복 로드를 방지합니다.
    if (!adRef.current || adRef.current.firstChild) return;

    const script = document.createElement('script');
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거 (선택 사항)
      const existingScript = document.querySelector('script[src="//t1.daumcdn.net/kas/static/ba.min.js"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[100px] bg-slate-50/50 rounded-lg border border-dashed border-slate-200 py-4">
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit="DAN-99pk70HXhLHjcmQC" 
        data-ad-width="728"
        data-ad-height="90"
      ></ins>
    </div>
  );
}