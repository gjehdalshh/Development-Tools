import Link from 'next/link';

export default function Home() {
  const tools = [
    { 
      title: "✍️ 실시간 글자수 세기", 
      desc: "자기소개서, 블로그 포스팅 등 분량을 실시간으로 확인하고 조절하세요.", 
      href: "/word-counter", 
      color: "from-blue-500 to-cyan-400",
      btnColor: "bg-blue-600 hover:bg-blue-700"
    },
    { 
      title: "🔗 Base64 인코더/디코더", 
      desc: "이진 데이터를 텍스트로, 텍스트를 이진 데이터로 안전하게 변환합니다.", 
      href: "/base64", 
      color: "from-indigo-600 to-purple-500",
      btnColor: "bg-indigo-600 hover:bg-indigo-700"
    },
    { 
      title: "📦 JSON 포맷터 & 뷰어", 
      desc: "복잡한 JSON 데이터를 계층 구조로 깔끔하게 정리하고 유효성을 검사합니다.", 
      href: "/json-formatter", 
      color: "from-emerald-600 to-teal-500",
      btnColor: "bg-emerald-600 hover:bg-emerald-700"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <header className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-500">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-950 tracking-tighter leading-tight mb-5">
          개발자를 위한<br /> <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">가장 간편한 도구함</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          회원가입 없이 브라우저에서 즉시 사용하세요. 모든 데이터는 안전하게 로컬에서만 처리됩니다.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <Link 
            key={tool.href} 
            href={tool.href} 
            className="group relative bg-white p-9 rounded-3xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-100/70 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute -top-3 left-9 h-1 bg-gradient-to-r ${tool.color} w-24 rounded-full`}></div>
            <h2 className="text-2xl font-bold mb-3.5 text-gray-950 tracking-tight group-hover:text-indigo-600 transition-colors">
              {tool.title}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 h-20 overflow-hidden">
              {tool.desc}
            </p>
            <div className={`inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl font-bold text-sm ${tool.btnColor} shadow-md shadow-gray-100`}>
              바로 사용하기
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}