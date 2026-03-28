'use client';

import Link from 'next/link';
import { 
  Type, 
  Hash, 
  Braces, 
  Link as LinkIcon, 
  Lock, 
  Ruler, 
  Palette 
} from 'lucide-react';

export default function Home() {
  const tools = [
    {
      title: "글자수 세기",
      desc: "공백 포함/제외 글자수와 단어 수를 실시간으로 계산합니다.",
      href: "/word-counter",
      icon: <Type className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Base64 변환",
      desc: "텍스트 데이터를 Base64 포맷으로 표준 인코딩 및 디코딩을 수행합니다.",
      href: "/base64",
      icon: <Hash className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "JSON 포맷터",
      desc: "복잡한 구조의 JSON 데이터를 정렬하고 구문 오류를 검사하여 가독성을 높입니다.",
      href: "/json-formatter",
      icon: <Braces className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "URL 인코더",
      desc: "URL 예약 문자와 특수 기호를 RFC 표준에 맞게 안전하게 변환합니다.",
      href: "/url-encoder",
      icon: <LinkIcon className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "비밀번호 생성",
      desc: "사용자 정의 규칙에 따라 보안 강도가 높은 무작위 문자열을 생성합니다.",
      href: "/password-generator",
      icon: <Lock className="w-6 h-6" />,
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "단위 변환 (PX/REM)",
      desc: "CSS(PX/REM), 데이터 크기, 시간 등 개발 실무에 필요한 단위를 즉시 변환합니다.",
      href: "/unit-converter",
      icon: <Ruler className="w-6 h-6" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "색상 코드 변환",
      desc: "HEX와 RGB 색상 코드를 변환하고 미리보기를 제공합니다.",
      href: "/color-converter",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* 히어로 섹션 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          모든 개발 도구를 한곳에서
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          복잡한 설치 없이 브라우저에서 즉시 사용하는 가벼운 개발자 도구 모음입니다. 
          모든 데이터는 서버에 저장되지 않고 클라이언트에서 안전하게 처리됩니다.
        </p>
      </div>

      {/* 도구 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link 
            key={tool.href} 
            href={tool.href}
            className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-900 hover:shadow-xl transition-all duration-300"
          >
            <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              {tool.icon}
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              {tool.desc}
            </p>
          </Link>
        ))}
      </div>

      {/* 하단 안내 섹션 (SEO용) */}
      <div className="mt-24 p-8 bg-slate-900 rounded-3xl text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">왜 DevToolBox인가요?</h3>
            <ul className="space-y-3 text-slate-300">
              <li>• 🚀 **Zero Latency**: 서버 통신 없는 즉각적인 결과 확인</li>
              <li>• 🔒 **Privacy First**: 어떠한 데이터도 외부로 전송하지 않음</li>
              <li>• 📱 **Responsive**: 모바일과 태그릿에서도 완벽한 인터페이스</li>
              <li>• 🆓 **100% Free**: 모든 도구를 무료로 제한 없이 사용</li>
            </ul>
          </div>
          <div className="text-slate-400 text-sm border-l border-slate-700 pl-8">
            <p>
              DevToolBox는 개발 생산성을 높이기 위해 만들어진 오픈 프로젝트입니다. 
              일상적인 인코딩, 포맷팅, 유닛 변환 작업을 더 빠르고 안전하게 수행하세요. 
              우리는 사용자 경험을 해치지 않는 깔끔한 환경을 지향합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}