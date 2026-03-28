export type LangType = 'ko' | 'en' | 'ja' | 'zh';

export const dictionaries = {
  ko: {
    nav: { word: "글자수 세기", b64: "Base64 변환", json: "JSON 포맷터", url: "URL 인코더", pw: "비밀번호 생성", unit: "단위 변환", color: "색상 코드" },
    home: { title: "Web Developer Toolbox", desc: "설치 없이 브라우저에서 즉시 실행되는 가벼운 개발자 도구 모음입니다.", footerDesc: "모든 데이터는 서버 저장 없이 브라우저에서 안전하게 처리됩니다." },
    word: { 
      title: "글자수 세기", sub: "텍스트 분량을 실시간으로 분석합니다.", clear: "전체 삭제", placeholder: "분석할 텍스트를 입력하세요...", charSpace: "공백 포함", charNoSpace: "공백 제외", stat: "통계", guideTitle: "이용 가이드", guideDesc: "본 도구는 자소서, 블로그 포스팅 등 정밀한 분량 확인이 필요한 문서 작성에 최적화되어 있습니다.",
      seoTitle: "온라인 글자수 세기가 필요한 이유", seoDesc: "자기소개서나 블로그 포스팅 작성 시 글자수 제한은 매우 중요한 요소입니다.", seoList: ["SEO 최적화 분량 확인", "취업 자소서 정밀 체크", "SNS 마케팅 글자수 제한 최적화"]
    },
    base64: { 
      title: "Base64 변환기", sub: "데이터를 즉시 인코딩하거나 디코딩하세요.", placeholder: "데이터를 입력하세요...", encode: "인코딩", decode: "디코딩", output: "변환 결과", guideTitle: "Base64 활용 가이드", guideDesc1: "8비트 이진 데이터를 텍스트 시스템에서 안전하게 전송하기 위한 방식입니다.", guideDesc2: "브라우저 내에서 안전하게 작동하여 데이터 유출 걱정이 없습니다.", invalid: "올바르지 않은 입력 형식입니다."
    },
    json: { 
      title: "JSON 포맷터", sub: "JSON 구조를 시각적으로 정렬하고 유효성을 검사합니다.", placeholder: '{"key": "value"}', format: "JSON 정렬", invalid: "유효하지 않은 JSON 형식입니다.", 
      seoTitle: "온라인 JSON 포맷터의 활용", 
      seoDesc1: "API 응답 데이터를 표준 2-space 들여쓰기로 가독성 있게 정렬합니다.",
      seoDesc2: "한 줄로 뭉쳐있는 복잡한 구조를 한눈에 파악할 수 있게 도와줍니다.",
      seoTip: "Tip: 문법 오류가 있을 경우 경고창을 통해 위치를 확인할 수 있습니다."
    },
    url: { title: "URL 인코더/디코더", sub: "URL 특수문자를 안전하게 변환합니다.", placeholder: "URL을 입력하세요...", encode: "인코딩", decode: "디코딩", guideTitle: "URL 인코딩의 필요성", guideDesc: "데이터 손실 방지를 위해 특수기호를 퍼센트(%) 형식으로 변환합니다." },
    pw: { title: "비밀번호 생성기", sub: "강력하고 안전한 비밀번호를 즉시 생성합니다.", length: "길이", upper: "대문자", number: "숫자", symbol: "특수문자", generate: "번호 생성", copy: "복사", guideTitle: "보안 가이드", guideDesc: "생성된 비밀번호는 어디에도 저장되지 않으며 즉시 사용 가능합니다." },
    unit: { title: "단위 변환기", sub: "다양한 단위를 쉽고 빠르게 변환합니다.", length: "길이", weight: "무게", temp: "온도", input: "입력값", output: "결과값", guideTitle: "단위 변환 안내", guideDesc: "일상 및 업무에서 자주 쓰이는 핵심 단위 변환을 지원합니다." },
    color: { title: "색상 코드 피커", sub: "HEX, RGB 색상 코드를 확인하고 변환합니다.", hex: "HEX 코드", rgb: "RGB 코드", select: "색상 선택", guideTitle: "색상 도구 활용", guideDesc: "디자인 및 웹 개발 시 필요한 색상값을 직관적으로 추출합니다." }
  },
  en: {
    nav: { word: "Word Count", b64: "Base64", json: "JSON Formatter", url: "URL Encoder", pw: "Password", unit: "Unit Conv", color: "Color Code" },
    home: { title: "Web Developer Toolbox", desc: "Lightweight developer tools that run instantly in your browser.", footerDesc: "All data is processed securely in your browser." },
    word: { 
      title: "Word Counter", sub: "Analyze text length in real-time.", clear: "Clear All", placeholder: "Enter text to analyze...", charSpace: "Chars (with space)", charNoSpace: "No Spaces", stat: "Statistics", guideTitle: "Usage Guide", guideDesc: "Optimized for checking the length of blog posts, social media, or documents.",
      seoTitle: "Why use an Online Word Counter?", seoDesc: "Character limits are crucial for resumes, blog posts, and social media.", seoList: ["SEO Optimization", "Resume Check", "Social Media Limits"]
    },
    base64: { title: "Base64 Converter", sub: "Encode or Decode data instantly.", placeholder: "Enter data...", encode: "Encode", decode: "Decode", output: "Output", guideTitle: "Base64 Guide", guideDesc1: "Represents binary data in an ASCII string format.", guideDesc2: "Runs entirely in your browser.", invalid: "Invalid input format." },
    json: { 
      title: "JSON Formatter", sub: "Beautify and validate your JSON.", placeholder: '{"key": "value"}', format: "Format JSON", invalid: "Invalid JSON format.",
      seoTitle: "Online JSON Formatting",
      seoDesc1: "Organize complex API response data for better readability.",
      seoDesc2: "Provides standard 2-space indentation for clear structure.",
      seoTip: "Tip: Alerts will help you identify syntax errors."
    },
    url: { title: "URL Encoder/Decoder", sub: "Safely convert characters in URLs.", placeholder: "Enter URL...", encode: "Encode", decode: "Decode", guideTitle: "Why URL Encoding?", guideDesc: "Converts characters into a safe format for web transmission." },
    pw: { title: "Password Generator", sub: "Generate secure passwords instantly.", length: "Length", upper: "Uppercase", number: "Numbers", symbol: "Symbols", generate: "Generate", copy: "Copy", guideTitle: "Security Guide", guideDesc: "Passwords are generated locally and never stored on servers." },
    unit: { title: "Unit Converter", sub: "Convert various units quickly.", length: "Length", weight: "Weight", temp: "Temperature", input: "Input", output: "Output", guideTitle: "Unit Guide", guideDesc: "Supports essential units for daily and professional use." },
    color: { title: "Color Code Picker", sub: "Convert HEX and RGB color codes.", hex: "HEX", rgb: "RGB", select: "Select Color", guideTitle: "Color Tool", guideDesc: "Extract color values for design and development." }
  },
  ja: {
    nav: { word: "文字数カウント", b64: "Base64変換", json: "JSON整形", url: "URL変換", pw: "パスワード生成", unit: "単位変換", color: "カラーコード" },
    home: { title: "Web Developer Toolbox", desc: "ブラウザで即座に使える軽量な開発者向けツールセットです。", footerDesc: "すべてのデータはサーバーに保存されず、安全に処理されます。" },
    word: { title: "文字数カウント", sub: "リアルタイムでテキスト量を解析します。", clear: "すべて消去", placeholder: "解析するテキストを入力してください...", charSpace: "文字数 (空白込)", charNoSpace: "文字数 (空白無)", stat: "統計", guideTitle: "利用ガイド", guideDesc: "ブログ記事や書類の作成に最適な文字数チェックツールです。", seoTitle: "文字数カウントの重要性", seoDesc: "SNSやブログ投稿の制限確認に役立ちます。", seoList: ["SEO最適化", "採用書類のチェック", "SNS投稿の最適化"] },
    base64: { title: "Base64変換", sub: "即座にエンコード・デコードを行います。", placeholder: "データを入力してください...", encode: "エンコード", decode: "デコード", output: "変換結果", guideTitle: "Base64利用ガイド", guideDesc1: "バイナリデータをテキスト形式に安全に変換する方式です。", guideDesc2: "安全にブラウザ内で動作し、外部への流出はありません。", invalid: "形式が正しくありません。" },
    json: { 
      title: "JSON整形ツール", sub: "JSON構造を視覚的に整理し、有効性を確認します。", placeholder: '{"key": "value"}', format: "JSON整形", invalid: "無効なJSON形式です。",
      seoTitle: "オンラインJSON整形の活用",
      seoDesc1: "複雑なAPIレスポンスを読みやすく整理します。標準の2スペースインデントを提供します。",
      seoDesc2: "データ構造を一目で確認できるため、デバッグ効率が向上します。",
      seoTip: "Tip: 構文エラーがある場合は、エラー箇所がアラートで表示されます。"
    },
    url: { title: "URLエンコード/デコード", sub: "URLに含まれる特殊文字を安全に変換します。", placeholder: "URLを入力してください...", encode: "エンコード", decode: "デコード", guideTitle: "URLエンコードの必要性", guideDesc: "データ損失を防ぐため、特殊記호をパーセント(%)形式に変換します。" },
    pw: { title: "パスワード生成", sub: "強力で安全なパスワードを即座に作成します。", length: "長さ", upper: "大文字含", number: "数字含", symbol: "記号含", generate: "パスワード生成", copy: "コピー", guideTitle: "セキュリティ", guideDesc: "生成されたパスワードは保存されず、即時に利用可能です。" },
    unit: { title: "単位変換", sub: "単位を素早く正確に変換します。", length: "長さ", weight: "重さ", temp: "温度", input: "入力", output: "結果", guideTitle: "変換ガイド", guideDesc: "日常や業務で使用される主要な単位をサポートします。" },
    color: { title: "カラーコードピ커", sub: "HEXとRGBコードを確認・変換します。", hex: "HEXコード", rgb: "RGBコード", select: "色を選択", guideTitle: "カラーツール", guideDesc: "デザインや開発に必要な色値を直感的に抽出します。" }
  },
  zh: {
    nav: { word: "字数统计", b64: "Base64转换", json: "JSON格式化", url: "URL编码", pw: "密码生成", unit: "单位转换", color: "颜色代码" },
    home: { title: "Web Developer Toolbox", desc: "无需安装，在浏览器中即刻运行的开发者工具集。", footerDesc: "所有数据均在本地处理，确保隐私安全。" },
    word: { title: "字数统计器", sub: "实时分析文本内容长度。", clear: "全部清空", placeholder: "请输入要分析的文本...", charSpace: "字符数 (含空格)", charNoSpace: "字符数 (不含空格)", stat: "统计信息", guideTitle: "使用指南", guideDesc: "适用于博客文章、简历及社交媒体的内容长度检查。", seoTitle: "为什么需要在线字数统计？", seoDesc: "撰写简历或博客时，字数限制是至关重要的。 ", seoList: ["SEO优化字数检查", "简历长度精确检查", "社交媒体推广优化"] },
    base64: { title: "Base64 转换器", sub: "即时进行数据编码或解码。", placeholder: "请输入数据...", encode: "编码", decode: "解码", output: "转换结果", guideTitle: "Base64 使用指南", guideDesc1: "将二进制数据转换为 ASCII 字符串，以便在文本系统中传输。", guideDesc2: "在浏览器内安全运行，无需担心数据泄露。", invalid: "输入格式无效。" },
    json: { 
      title: "JSON 格式化工具", sub: "可视化整理 JSON 结构并进行校验。", placeholder: '{"key": "value"}', format: "格式化 JSON", invalid: "无效的 JSON 格式。",
      seoTitle: "在线 JSON 格式化的应用",
      seoDesc1: "整理复杂的 API 响应数据，使其更具可读性。提供标准的 2 空格缩进。",
      seoDesc2: "通过层次化显示，您可以快速理清数据结构。",
      seoTip: "Tip: 如果存在语法错误，系统将通过警告窗定位问题。"
    },
    url: { title: "URL 编码/解码", sub: "安全转换 URL 中的特殊字符。", placeholder: "请输入 URL...", encode: "编码", decode: "解码", guideTitle: "URL 编码的作用", guideDesc: "将非 ASCII 字符转换为百分号(%)格式，确保传输安全。" },
    pw: { title: "密码生成器", sub: "即时生成强效安全的密码。", length: "长度", upper: "大写字母", number: "数字", symbol: "特殊符号", generate: "生成密码", copy: "复制", guideTitle: "安全指南", guideDesc: "生成的密码不会存储在服务器上，请放心使用。" },
    unit: { title: "单位转换器", sub: "快速转换各种常用单位。", length: "长度", weight: "重量", temp: "温度", input: "输入", output: "结果", guideTitle: "转换指南", guideDesc: "支持日常及开发工作中常用的核心单位转换。" },
    color: { title: "颜色代码选择器", sub: "查看并转换 HEX 和 RGB 颜色代码。", hex: "HEX 代码", rgb: "RGB 代码", select: "选择颜色", guideTitle: "颜色工具应用", guideDesc: "直관提取设计与开发所需的颜色数值。" }
  }
};