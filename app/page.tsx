import Link from 'next/link';

export default function Home() {
  const tools = [
    { 
      title: "✍️ 실시간 글자수 세기", 
      desc: "자기소개서, 블로그 포스팅 등 분량을 실시간으로 확인하고 조절하세요. 공백 포함/제외 기능을 지원합니다.", 
      href: "/word-counter", 
      color: "from-blue-500 to-cyan-400",
      btnColor: "bg-blue-600 hover:bg-blue-700"
    },
    { 
      title: "🔗 Base64 인코더/디코더", 
      desc: "텍스트를 Base64 형식으로 인코딩하거나, 인코딩된 문자열을 원래의 텍스트로 안전하게 복원합니다.", 
      href: "/base64", 
      color: "from-indigo-600 to-purple-500",
      btnColor: "bg-indigo-600 hover:bg-indigo-700"
    },
    { 
      title: "📦 JSON 포맷터 & 뷰어", 
      desc: "한 줄로 된 복잡한 JSON 데이터를 계층 구조로 깔끔하게 정렬하고 유효성을 즉시 검사합니다.", 
      href: "/json-formatter", 
      color: "from-emerald-600 to-teal-500",
      btnColor: "bg-emerald-600 hover:bg-emerald-700"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <header className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-gray-950 tracking-tighter leading-[1.1] mb-6">
          작업 시간을 단축하는<br /> <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">스마트한 개발 도구</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
          설치나 로그인이 필요 없습니다. 필요한 도구를 선택해 즉시 작업을 시작하세요.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100/50 hover:-translate-y-2">
            <h2 className="text-2xl font-bold mb-4 text-gray-950 group-hover:text-indigo-600 transition-colors">{tool.title}</h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10 h-24">{tool.desc}</p>
            <div className={`inline-flex items-center gap-2 text-white px-6 py-3 rounded-2xl font-bold text-sm ${tool.btnColor} transition-all shadow-md shadow-gray-100`}>
              시작하기 <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}