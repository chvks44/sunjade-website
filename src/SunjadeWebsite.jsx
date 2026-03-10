import { useState, useEffect, useRef, createContext, useContext } from "react";

// ── CONSTANTS ──
const C = {
  crimson: "#C8102E",
  crimsonDark: "#A00D24",
  gold: "#D4AF37",
  goldLight: "#FFB81C",
  dark: "#1A1A1A",
  charcoal: "#2D2D2D",
  grey: "#6B7280",
  lightGrey: "#F7F7F8",
  cream: "#FFFDF8",
  white: "#FFFFFF",
  blue: "#1E3A5F",
};

// ── LANGUAGE CONTEXT ──
const LangContext = createContext("en");
const useLang = () => useContext(LangContext);

// ── TRANSLATIONS ──
const T = {
  nav: {
    en: { home: "Home", whyChina: "Why China", programs: "Programs", scholarships: "Scholarships", universities: "Universities", process: "Process", contact: "Contact", apply: "Apply Now" },
    zh: { home: "首页", whyChina: "为什么选择中国", programs: "课程项目", scholarships: "奖学金", universities: "合作大学", process: "申请流程", contact: "联系我们", apply: "立即申请" },
  },
  hero: {
    en: {
      tag: "Your Gateway to Chinese Education",
      title1: "Study in China with ",
      titleBrand: "Sunjade",
      titleEnd: "",
      desc: "Unlock world-class education at top Chinese universities. Affordable tuition, scholarships available, and exceptional career prospects in the growing Sino-African market.",
      cta1: "Start Your Journey →",
      cta2: "▷ Explore Programs",
      stats: [
        { num: "400+", label: "Partner Universities" },
        { num: "30,000+", label: "Programs Available" },
        { num: "6,000+", label: "Scholarships" },
        { num: "15,000+", label: "Students Placed" },
      ],
      future: "Your Future Awaits",
      cities: "Beijing • Shanghai • Guangzhou • Chengdu",
      success: "98% Success Rate",
      successSub: "Application approval",
    },
    zh: {
      tag: "通往中国教育的大门",
      title1: "与",
      titleBrand: "Sunjade",
      titleEnd: "一起留学中国",
      desc: "在中国顶尖大学获得世界一流教育。学费实惠，提供奖学金，在不断发展的中非市场中拥有卓越的职业前景。",
      cta1: "开启留学之旅 →",
      cta2: "▷ 探索课程",
      stats: [
        { num: "400+", label: "合作大学" },
        { num: "30,000+", label: "可选课程" },
        { num: "6,000+", label: "奖学金名额" },
        { num: "15,000+", label: "已录取学生" },
      ],
      future: "你的未来在这里",
      cities: "北京 · 上海 · 广州 · 成都",
      success: "98% 录取率",
      successSub: "申请通过率",
    },
  },
  whyChina: {
    en: {
      tag: "Why China?",
      title1: "The Smart Choice for ",
      titleHL: "Nigerian Students",
      titleEnd: "",
      sub: "China's higher education system is the world's largest, with quality rapidly ascending to global prominence. Here's why Nigerian students are choosing China.",
      reasons: [
        { icon: "🎓", title: "World-Class Academics", desc: "Tsinghua & Peking rank global top 30. Engineering, CS, medicine, and business programs rival the best Western universities — at a fraction of the cost." },
        { icon: "💰", title: "Unbeatable Value", desc: "Annual costs are just 1/3 to 1/2 of the UK and 1/4 to 1/3 of the USA. Full scholarships cover tuition, accommodation, and monthly living stipends." },
        { icon: "🚀", title: "Strategic Career Advantage", desc: "With Belt & Road and China-Africa partnerships expanding, graduates fluent in Mandarin with Chinese degrees have unmatched career prospects in Nigeria and globally." },
        { icon: "🛡️", title: "Safe & Vibrant Society", desc: "China has one of the lowest crime rates globally, with modern infrastructure, excellent public transport, and welcoming international student communities." },
      ],
      compare: [
        { label: "vs UK Tuition", value: "3-5x cheaper" },
        { label: "vs USA Tuition", value: "3-18x cheaper" },
        { label: "Annual Cost", value: "$5,500–$13,800" },
        { label: "Scholarship Coverage", value: "Up to 100%" },
      ],
    },
    zh: {
      tag: "为什么选择中国？",
      title1: "",
      titleHL: "尼日利亚学生",
      titleEnd: "的明智选择",
      sub: "中国拥有世界最大的高等教育体系，教育质量迅速跻身全球前列。以下是尼日利亚学生选择中国的原因。",
      reasons: [
        { icon: "🎓", title: "世界一流学术水平", desc: "清华大学和北京大学位列全球前30名。工程、计算机科学、医学和商科课程可与最好的西方大学媲美——费用却只是其中的一小部分。" },
        { icon: "💰", title: "无与伦比的性价比", desc: "年费用仅为英国的1/3至1/2，美国的1/4至1/3。全额奖学金涵盖学费、住宿和每月生活津贴。" },
        { icon: "🚀", title: "战略性职业优势", desc: "随着一带一路和中非合作不断扩大，精通中文并拥有中国学位的毕业生在尼日利亚和全球都拥有无可比拟的职业前景。" },
        { icon: "🛡️", title: "安全而充满活力的社会", desc: "中国是全球犯罪率最低的国家之一，拥有现代化基础设施、优秀的公共交通和热情的国际学生社区。" },
      ],
      compare: [
        { label: "对比英国学费", value: "便宜3-5倍" },
        { label: "对比美国学费", value: "便宜3-18倍" },
        { label: "年费用", value: "$5,500–$13,800" },
        { label: "奖学金覆盖", value: "最高100%" },
      ],
    },
  },
  programs: {
    en: {
      tag: "Programs",
      title1: "Programs & ",
      titleHL: "Admission Requirements",
      sub: "From language courses to doctoral research — find the perfect program for your goals and qualifications.",
      education: "Education: ",
      age: "Age Limit: ",
      language: "Language: ",
      items: [
        { icon: "📝", level: "Language Program", duration: "6 months – 1 year", desc: "Learn Mandarin Chinese from scratch or improve your HSK level. Ideal preparation for degree programs.", req: "No prior Chinese required", age: "No limit" },
        { icon: "📘", level: "Foundation/Pre-University", duration: "6–12 months", desc: "Bridge program combining language and academic preparation. Graduates typically proceed directly to degree programs.", req: "High school diploma", age: "No limit" },
        { icon: "📕", level: "Undergraduate (Bachelor's)", duration: "4 years", desc: "Full degree programs taught in English or Chinese across engineering, medicine, business, CS, and more.", req: "WAEC/NECO ≥70% or Grade B", age: "Under 25" },
        { icon: "📗", level: "Master's Degree", duration: "2–3 years", desc: "Advanced coursework and research options. English-taught programs widely available.", req: "Bachelor's Degree ≥75% (2:1)", age: "Under 35" },
        { icon: "📙", level: "Doctoral (PhD)", duration: "3–4 years", desc: "Fully funded research programs with monthly stipends. Ideal for academics and researchers.", req: "Master's Degree + Research Plan", age: "Under 40" },
      ],
    },
    zh: {
      tag: "课程项目",
      title1: "课程项目与",
      titleHL: "入学要求",
      sub: "从语言课程到博士研究——找到适合您目标和资质的完美项目。",
      education: "学历要求：",
      age: "年龄限制：",
      language: "语言要求：",
      items: [
        { icon: "📝", level: "语言课程", duration: "6个月–1年", desc: "从零开始学习中文或提高HSK水平。是学位课程的理想预备课程。", req: "无需中文基础", age: "无限制" },
        { icon: "📘", level: "预科课程", duration: "6–12个月", desc: "语言和学术预备相结合的桥梁课程。毕业后通常可直接进入学位课程。", req: "高中毕业证书", age: "无限制" },
        { icon: "📕", level: "本科（学士学位）", duration: "4年", desc: "涵盖工程、医学、商科、计算机科学等领域的英语或中文授课全日制学位课程。", req: "WAEC/NECO ≥70%", age: "25岁以下" },
        { icon: "📗", level: "硕士学位", duration: "2–3年", desc: "高级课程和研究选择。英语授课课程广泛提供。", req: "学士学位 ≥75%", age: "35岁以下" },
        { icon: "📙", level: "博士学位", duration: "3–4年", desc: "全额资助的研究项目，含月度津贴。适合学术研究人员。", req: "硕士学位 + 研究计划", age: "40岁以下" },
      ],
    },
  },
  scholarships: {
    en: {
      tag: "Financial Support",
      title1: "Scholarship ",
      titleHL: "Opportunities",
      sub: "Access over 6,000 scholarships — we help maximize your chances of full funding.",
      benefits: "Benefits:",
      channels: "Channels: ",
      coverage: "Coverage: ",
      types: [
        { icon: "🏛️", name: "CSC Government Scholarship", coverage: "Full or Partial", benefits: ["Full tuition waiver", "Free accommodation", "Living allowance: ₦560k–₦790k/month", "Comprehensive medical insurance"], channels: "Embassy Channel (Type A) or University Channel (Type B)", color: C.crimson },
        { icon: "🏢", name: "Provincial/City Scholarships", coverage: "Partial", benefits: ["Partial tuition coverage", "One-time living subsidy: ₦1.1M–₦6.8M"], channels: "Beijing, Shanghai, Jiangsu, Zhejiang, Guangdong Provincial Governments", color: C.blue },
        { icon: "🎓", name: "University Scholarships", coverage: "Full or Partial", benefits: ["President's / Excellence scholarships for top students", "China-Africa & Belt and Road special quotas", "Department-specific funded positions"], channels: "Direct application through universities", color: "#7C3AED" },
        { icon: "🏭", name: "Corporate Scholarships", coverage: "Varies", benefits: ["Huawei 'Seeds for the Future'", "CCECC & StarTimes scholarships", "Often include internship opportunities"], channels: "IT, Engineering, Telecom, Media students", color: "#059669" },
      ],
    },
    zh: {
      tag: "资金支持",
      title1: "奖学金",
      titleHL: "机会",
      sub: "获取超过6,000个奖学金——我们帮助您最大化获得全额资助的机会。",
      benefits: "福利：",
      channels: "申请渠道：",
      coverage: "覆盖范围：",
      types: [
        { icon: "🏛️", name: "CSC中国政府奖学金", coverage: "全额或部分", benefits: ["全额学费减免", "免费住宿", "生活津贴：约¥3,000–¥3,500/月", "综合医疗保险"], channels: "使馆渠道（A类）或大学渠道（B类）", color: C.crimson },
        { icon: "🏢", name: "省/市奖学金", coverage: "部分", benefits: ["部分学费减免", "一次性生活补贴：¥10,000–¥60,000"], channels: "北京、上海、江苏、浙江、广东省政府", color: C.blue },
        { icon: "🎓", name: "大学奖学金", coverage: "全额或部分", benefits: ["校长奖学金/优秀学生奖学金", "中非合作与一带一路专项名额", "院系特定资助名额"], channels: "直接向大学申请", color: "#7C3AED" },
        { icon: "🏭", name: "企业奖学金", coverage: "不等", benefits: ["华为'未来种子'计划", "CCECC和StarTimes奖学金", "通常包含实习机会"], channels: "IT、工程、电信、传媒专业学生", color: "#059669" },
      ],
    },
  },
  universities: {
    en: {
      tag: "Partner Institutions",
      title1: "Top Universities & ",
      titleHL: "Programs",
      sub: "Popular programs chosen by Nigerian students — matched to Nigeria's development priorities and career opportunities.",
      departments: [
        { field: "🛢️ Petroleum Engineering", unis: [{ name: "China University of Petroleum, Beijing", city: "Beijing" }, { name: "China University of Petroleum (East China)", city: "Qingdao" }, { name: "Southwest Petroleum University", city: "Chengdu" }] },
        { field: "📡 Telecommunications Engineering", unis: [{ name: "Beijing University of Posts & Telecommunications", city: "Beijing" }, { name: "University of Electronic Science & Technology", city: "Chengdu" }, { name: "Xidian University", city: "Xi'an" }] },
        { field: "🏥 Public Health & Medicine", unis: [{ name: "Peking University (School of Public Health)", city: "Beijing" }, { name: "Fudan University (School of Public Health)", city: "Shanghai" }, { name: "Sun Yat-sen University", city: "Guangzhou" }] },
        { field: "💻 Computer Science & AI", unis: [{ name: "Tsinghua University", city: "Beijing" }, { name: "Zhejiang University", city: "Hangzhou" }, { name: "Shanghai Jiao Tong University", city: "Shanghai" }] },
      ],
    },
    zh: {
      tag: "合作院校",
      title1: "顶尖大学与",
      titleHL: "热门专业",
      sub: "尼日利亚学生热门选择的课程——与尼日利亚的发展优先事项和职业机会相匹配。",
      departments: [
        { field: "🛢️ 石油工程", unis: [{ name: "中国石油大学（北京）", city: "北京" }, { name: "中国石油大学（华东）", city: "青岛" }, { name: "西南石油大学", city: "成都" }] },
        { field: "📡 通信工程", unis: [{ name: "北京邮电大学", city: "北京" }, { name: "电子科技大学", city: "成都" }, { name: "西安电子科技大学", city: "西安" }] },
        { field: "🏥 公共卫生与医学", unis: [{ name: "北京大学（公共卫生学院）", city: "北京" }, { name: "复旦大学（公共卫生学院）", city: "上海" }, { name: "中山大学", city: "广州" }] },
        { field: "💻 计算机科学与人工智能", unis: [{ name: "清华大学", city: "北京" }, { name: "浙江大学", city: "杭州" }, { name: "上海交通大学", city: "上海" }] },
      ],
    },
  },
  process: {
    en: {
      tag: "How It Works",
      title1: "Application ",
      titleHL: "Process",
      sub: "From your first consultation to arriving at your Chinese university — we handle everything.",
      steps: [
        { num: "01", title: "Consultation & Assessment", time: "1–2 weeks", desc: "One-on-one evaluation of your academic background (WAEC/NECO/degree), language level, career interests, and budget. We provide initial university recommendations." },
        { num: "02", title: "Document Preparation", time: "2–4 weeks", desc: "Prepare and notarize all required materials: transcripts, passport, language certificates, personal statement, recommendation letters, medical report, and police clearance." },
        { num: "03", title: "Application Submission", time: "Oct–Jun", desc: "We handle online applications, liaise with universities, and track your application status. CSC embassy applications open as early as December." },
        { num: "04", title: "Admission & Visa", time: "Upon offer", desc: "Receive your admission letter and JW201/JW202 form. We guide you through X1/X2 student visa application at the Chinese Embassy in Abuja or Lagos Consulate." },
        { num: "05", title: "Pre-Departure & Arrival", time: "Jun–Aug", desc: "Attend our pre-departure briefing covering culture, safety, finance, and packing. We arrange airport pickup and assist with registration, accommodation, and residence permit." },
      ],
    },
    zh: {
      tag: "申请流程",
      title1: "申请",
      titleHL: "流程",
      sub: "从首次咨询到抵达中国大学——我们为您处理一切。",
      steps: [
        { num: "01", title: "咨询与评估", time: "1–2周", desc: "一对一评估您的学术背景（WAEC/NECO/学位）、语言水平、职业兴趣和预算，并提供初步大学推荐。" },
        { num: "02", title: "材料准备", time: "2–4周", desc: "准备并公证所有所需材料：成绩单、护照、语言证书、个人陈述、推荐信、体检报告和无犯罪记录证明。" },
        { num: "03", title: "提交申请", time: "10月–6月", desc: "我们负责在线申请、与大学联络并跟踪您的申请状态。CSC使馆渠道申请最早12月开放。" },
        { num: "04", title: "录取与签证", time: "收到录取通知后", desc: "收到录取通知书和JW201/JW202表格。我们指导您在阿布贾中国大使馆或拉各斯领事馆申请X1/X2学生签证。" },
        { num: "05", title: "行前准备与抵达", time: "6–8月", desc: "参加我们的行前说明会，涵盖文化、安全、财务和行李准备。我们安排机场接机并协助注册、住宿和居留许可。" },
      ],
    },
  },
  campus: {
    en: {
      tag: "Student Life",
      title1: "Life on a ",
      titleHL: "Chinese Campus",
      titleEnd: "",
      items: [
        { icon: "⚽", title: "Student Clubs & Societies", desc: "Martial arts, calligraphy, dance, football, basketball, esports, entrepreneurship, and the African Students Union." },
        { icon: "🏊", title: "World-Class Facilities", desc: "Gyms, swimming pools, athletic fields — free or heavily subsidized for students at most universities." },
        { icon: "💼", title: "Part-Time Work", desc: "After your first year, work up to 8 hours/week during term and full-time during holidays. Common roles: translation, tutoring, and internships." },
        { icon: "🌍", title: "Global Community", desc: "International cultural festivals, food fairs, and travel excursions — connect with students from 150+ countries." },
      ],
      workTitle: "Part-Time Work Rules",
      workRules: [
        { label: "Minimum age", value: "18 years" },
        { label: "Eligibility", value: "After 1 year of study" },
        { label: "Term-time limit", value: "8 hours/week" },
        { label: "Holidays", value: "Full-time permitted" },
        { label: "Approval", value: "School authorization required" },
      ],
    },
    zh: {
      tag: "校园生活",
      title1: "",
      titleHL: "中国大学",
      titleEnd: "的校园生活",
      items: [
        { icon: "⚽", title: "学生社团", desc: "武术、书法、舞蹈、足球、篮球、电子竞技、创业以及非洲学生联合会。" },
        { icon: "🏊", title: "世界级设施", desc: "大多数大学为学生提供免费或大幅补贴的健身房、游泳池和运动场。" },
        { icon: "💼", title: "兼职工作", desc: "入学一年后，学期内每周可工作8小时，假期可全职工作。常见岗位：翻译、辅导和实习。" },
        { icon: "🌍", title: "国际社区", desc: "国际文化节、美食节和旅行活动——与来自150多个国家的学生交流。" },
      ],
      workTitle: "兼职工作规定",
      workRules: [
        { label: "最低年龄", value: "18岁" },
        { label: "资格", value: "入学满一年后" },
        { label: "学期内上限", value: "每周8小时" },
        { label: "假期", value: "可全职工作" },
        { label: "审批", value: "需学校授权" },
      ],
    },
  },
  contact: {
    en: {
      futureTag: "Your future awaits",
      title1: "Don't Just Dream It.",
      title2: "Study It.",
      desc: "Fill in the short form and our team will reach out to you with personalized guidance on programs, scholarships, and next steps.",
      email: "Email",
      instagram: "Instagram",
      perks: "Full scholarships • Zero tuition • Free accommodation • Monthly stipend • Visa support • Airport pickup",
      formTitle: "Get Started Today",
      formSub: "Fill in your details and we'll reach out to guide you through the process.",
      fullName: "Full Name",
      emailLabel: "Email Address",
      whatsapp: "WhatsApp Number",
      country: "Country",
      program: "Program Interest",
      optional: "(optional)",
      selectCountry: "Select your country",
      selectProgram: "Select a program level",
      goals: "Tell Us About Your Academic Goals",
      goalsPlaceholder: "e.g. I'd like to study Computer Science at a top university in Beijing. I'm interested in AI research and would love to find a scholarship that covers tuition...",
      submit: "Submit — We'll Reach Out →",
      submitting: "Submitting...",
      privacy: "Your information is safe with us. We'll only use it to contact you about studying in China.",
      thankYou: "Thank You",
      thankYouMsg: "We've received your details and will reach out to you shortly via WhatsApp or email with personalized program recommendations.",
      errorGeneral: "Something went wrong. Please try again or email us directly at info@sunjade.com",
      errorConnection: "Connection error. Please check your internet and try again.",
      errName: "Please enter your full name",
      errEmail: "Please enter your email",
      errEmailInvalid: "Please enter a valid email",
      errWhatsapp: "Please enter your WhatsApp number",
      errCountry: "Please select your country",
      programOptions: ["Language Program", "Foundation / Pre-University", "Undergraduate (Bachelor's)", "Master's Degree", "Doctoral (PhD)", "Not Sure Yet"],
      namePlaceholder: "e.g. Chinedu Okafor",
      emailPlaceholder: "e.g. chinedu@email.com",
      whatsappPlaceholder: "e.g. +234 801 234 5678",
    },
    zh: {
      futureTag: "你的未来在这里",
      title1: "不要只是梦想，",
      title2: "去实现它。",
      desc: "填写简短表格，我们的团队将为您提供关于课程、奖学金和下一步行动的个性化指导。",
      email: "电子邮件",
      instagram: "Instagram",
      perks: "全额奖学金 · 零学费 · 免费住宿 · 每月津贴 · 签证支持 · 机场接机",
      formTitle: "立即开始",
      formSub: "填写您的信息，我们将与您联系并指导您完成申请流程。",
      fullName: "姓名",
      emailLabel: "电子邮箱",
      whatsapp: "WhatsApp号码",
      country: "国家",
      program: "感兴趣的课程",
      optional: "（选填）",
      selectCountry: "选择您的国家",
      selectProgram: "选择课程级别",
      goals: "告诉我们您的学术目标",
      goalsPlaceholder: "例如：我想在北京的顶尖大学学习计算机科学。我对人工智能研究很感兴趣，希望能找到一个涵盖学费的奖学金……",
      submit: "提交 — 我们会联系您 →",
      submitting: "提交中...",
      privacy: "您的信息是安全的。我们只会用它来联系您关于留学中国的事宜。",
      thankYou: "谢谢您",
      thankYouMsg: "我们已收到您的信息，将尽快通过WhatsApp或电子邮件与您联系，提供个性化的课程推荐。",
      errorGeneral: "出了点问题，请重试或直接发送邮件至 info@sunjade.com",
      errorConnection: "连接错误，请检查网络后重试。",
      errName: "请输入您的姓名",
      errEmail: "请输入您的电子邮箱",
      errEmailInvalid: "请输入有效的电子邮箱",
      errWhatsapp: "请输入您的WhatsApp号码",
      errCountry: "请选择您的国家",
      programOptions: ["语言课程", "预科课程", "本科（学士学位）", "硕士学位", "博士学位", "暂不确定"],
      namePlaceholder: "例如：张明",
      emailPlaceholder: "例如：zhangming@email.com",
      whatsappPlaceholder: "例如：+86 138 0000 0000",
    },
  },
  footer: {
    en: { brand: "Sunjade Education", location: "Lagos, Nigeria • China Offices", copy: "© 2026 Sunjade Education. All rights reserved.", tagline: "Study in China by Sunjade — Your Bridge to a Global Future" },
    zh: { brand: "Sunjade教育", location: "尼日利亚拉各斯 · 中国办公室", copy: "© 2026 Sunjade Education. 版权所有。", tagline: "Sunjade留学中国 — 通往全球未来的桥梁" },
  },
};

const NAV_IDS = ["home", "why-china", "programs", "scholarships", "universities", "process", "contact"];

// ── REUSABLE COMPONENTS ──
function Section({ id, bg = C.white, children }) {
  return (
    <section id={id} style={{ background: bg, padding: "80px 0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>{children}</div>
    </section>
  );
}

function SectionTag({ text, color = C.crimson }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
      <span style={{ fontSize: 13, fontWeight: 600, color, letterSpacing: 1, textTransform: "uppercase", fontFamily: "system-ui" }}>{text}</span>
    </div>
  );
}

function SectionTitle({ children, sub, center }) {
  return (
    <div style={{ marginBottom: 40, textAlign: center ? "center" : "left" }}>
      <h2 style={{ fontSize: 38, fontWeight: 700, color: C.dark, lineHeight: 1.2, margin: 0, fontFamily: "'Georgia', serif" }}>{children}</h2>
      {sub && <p style={{ fontSize: 16, color: C.grey, marginTop: 12, lineHeight: 1.6, maxWidth: center ? 600 : "none", margin: center ? "12px auto 0" : "12px 0 0" }}>{sub}</p>}
    </div>
  );
}

function Card({ children, style = {}, hover }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: C.white, borderRadius: 12, border: "1px solid #E5E7EB", padding: 28, transition: "all 0.3s ease",
        ...(hovered && hover ? { transform: "translateY(-4px)", boxShadow: "0 12px 32px rgba(0,0,0,0.08)" } : {}), ...style }}>
      {children}
    </div>
  );
}

function Btn({ children, primary, onClick, style = {} }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: primary ? "14px 32px" : "12px 28px",
        background: primary ? (h ? C.crimsonDark : C.crimson) : "transparent", color: primary ? C.white : C.dark,
        border: primary ? "none" : "1.5px solid #D1D5DB", borderRadius: 8, fontSize: 15, fontWeight: 600,
        cursor: "pointer", transition: "all 0.2s", fontFamily: "system-ui", ...style }}>
      {children}
    </button>
  );
}

// ── LANGUAGE TOGGLE ──
function LangToggle({ lang, setLang }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={() => setLang(lang === "en" ? "zh" : "en")} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", padding: "5px 12px", borderRadius: 20,
        background: h ? `${C.crimson}18` : `${C.crimson}0D`, border: `1px solid ${C.crimson}20`, transition: "all 0.2s", userSelect: "none" }}>
      <span style={{ fontSize: 14 }}>{lang === "en" ? "🇨🇳" : "🇬🇧"}</span>
      <span style={{ fontSize: 12, fontWeight: 600, color: C.crimson, fontFamily: "system-ui" }}>
        {lang === "en" ? "中文" : "English"}
      </span>
    </div>
  );
}

// ── NAVBAR ──
function Navbar({ activeSection, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const n = T.nav[lang];
  const labels = [n.home, n.whyChina, n.programs, n.scholarships, n.universities, n.process, n.contact];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)", borderBottom: scrolled ? "1px solid #E5E7EB" : "1px solid transparent", transition: "all 0.3s" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.crimson, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 700, fontSize: 16, fontFamily: "Georgia" }}>S</div>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.dark, fontFamily: "Georgia" }}>Sunjade</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_IDS.map((id, i) => (
            <a key={id} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }} href={`#${id}`}
              style={{ padding: "6px 12px", fontSize: 13.5, fontWeight: 500, color: activeSection === id ? C.crimson : C.grey,
                textDecoration: "none", borderRadius: 6, transition: "all 0.2s", fontFamily: "system-ui",
                background: activeSection === id ? `${C.crimson}0D` : "transparent", whiteSpace: "nowrap" }}>
              {labels[i]}
            </a>
          ))}
          <LangToggle lang={lang} setLang={setLang} />
          <Btn primary onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ marginLeft: 8, padding: "8px 20px", fontSize: 13, borderRadius: 20, whiteSpace: "nowrap" }}>
            {n.apply}
          </Btn>
        </div>
      </div>
    </nav>
  );
}

// ── HERO ──
function Hero() {
  const lang = useLang();
  const t = T.hero[lang];
  return (
    <section id="home" style={{ background: C.white, paddingTop: 64 }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "80px 24px 60px", display: "flex", gap: 60, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 480px" }}>
          <SectionTag text={t.tag} />
          <h1 style={{ fontSize: 52, fontWeight: 700, color: C.dark, lineHeight: 1.1, margin: "0 0 20px", fontFamily: "'Georgia', serif" }}>
            {t.title1}<span style={{ color: C.crimson }}>{t.titleBrand}</span>{t.titleEnd || ""}
          </h1>
          <p style={{ fontSize: 17, color: C.grey, lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>{t.desc}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            <Btn primary onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>{t.cta1}</Btn>
            <Btn onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}>{t.cta2}</Btn>
          </div>
          <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
            {t.stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.dark, fontFamily: "Georgia" }}>{s.num}</div>
                <div style={{ fontSize: 12, color: C.grey, fontFamily: "system-ui" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: "1 1 400px", position: "relative", minHeight: 360 }}>
          <div style={{ borderRadius: 20, width: "100%", height: 340, position: "relative", overflow: "hidden" }}>
            <img
              src="/images/sysu-guangzhou-campus.png"
              alt="Sun Yat-sen University, Guangzhou — one of Sunjade's partner universities"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => { e.target.style.display = "none"; e.target.parentElement.style.background = `linear-gradient(135deg, ${C.crimson}15, ${C.crimson}05)`; e.target.parentElement.innerHTML += '<div style="display:flex;align-items:center;justify-content:center;height:100%;"><div style="text-align:center"><div style="font-size:72px;margin-bottom:8px">🇨🇳</div><div style="font-size:18px;font-weight:600;color:#1A1A1A">Your Future Awaits</div><div style="font-size:13px;color:#6B7280;margin-top:4px">Beijing • Shanghai • Guangzhou • Chengdu</div></div></div>'; }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 20px 16px", background: "linear-gradient(transparent, rgba(0,0,0,0.65))" }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.white }}>Sun Yat-sen University</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>Guangzhou, China — Est. 1924</div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: -10, right: 20, background: C.white, borderRadius: 12, padding: "12px 20px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#ECFDF5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>✓</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.dark }}>{t.success}</div>
              <div style={{ fontSize: 11, color: C.grey }}>{t.successSub}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── WHY CHINA ──
function WhyChina() {
  const lang = useLang();
  const t = T.whyChina[lang];
  return (
    <Section id="why-china" bg={C.lightGrey}>
      <SectionTag text={t.tag} />
      <SectionTitle sub={t.sub}>{t.title1}<span style={{ color: C.crimson }}>{t.titleHL}</span>{t.titleEnd || ""}</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {t.reasons.map((r, i) => (
          <Card key={i} hover>
            <div style={{ fontSize: 36, marginBottom: 16 }}>{r.icon}</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.dark, marginBottom: 8 }}>{r.title}</h3>
            <p style={{ fontSize: 14, color: C.grey, lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
          </Card>
        ))}
      </div>
      <div style={{ marginTop: 40, background: `linear-gradient(135deg, ${C.crimson}, ${C.crimsonDark})`, borderRadius: 16, padding: "32px 40px", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
        {t.compare.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: C.white }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── PROGRAMS ──
function Programs() {
  const lang = useLang();
  const t = T.programs[lang];
  return (
    <Section id="programs">
      <SectionTag text={t.tag} />
      <SectionTitle sub={t.sub}>{t.title1}<span style={{ color: C.crimson }}>{t.titleHL}</span></SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {t.items.map((p, i) => (
          <Card key={i} hover style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: 32, minWidth: 48 }}>{p.icon}</div>
            <div style={{ flex: "1 1 300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: C.dark, margin: 0 }}>{p.level}</h3>
                <span style={{ fontSize: 12, color: C.crimson, background: `${C.crimson}0D`, padding: "3px 10px", borderRadius: 12, fontWeight: 600 }}>{p.duration}</span>
              </div>
              <p style={{ fontSize: 14, color: C.grey, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
            <div style={{ flex: "0 0 240px", display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontSize: 12, color: C.grey }}><span style={{ fontWeight: 600, color: C.dark }}>{t.education}</span>{p.req}</div>
              <div style={{ fontSize: 12, color: C.grey }}><span style={{ fontWeight: 600, color: C.dark }}>{t.age}</span>{p.age}</div>
              <div style={{ fontSize: 12, color: C.grey }}><span style={{ fontWeight: 600, color: C.dark }}>{t.language}</span>HSK 4-5 / IELTS 6.0+</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ── SCHOLARSHIPS ──
function Scholarships() {
  const lang = useLang();
  const t = T.scholarships[lang];
  return (
    <Section id="scholarships" bg={C.lightGrey}>
      <SectionTag text={t.tag} />
      <SectionTitle sub={t.sub}>{t.title1}<span style={{ color: C.crimson }}>{t.titleHL}</span></SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {t.types.map((s, i) => (
          <Card key={i} hover style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.color}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.icon}</div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: C.dark, margin: 0 }}>{s.name}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                  <span style={{ color: C.goldLight, fontSize: 12 }}>★</span>
                  <span style={{ fontSize: 12, color: C.grey }}>{t.coverage}{s.coverage}</span>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.dark, marginBottom: 8 }}>{t.benefits}</div>
              {s.benefits.map((b, j) => (
                <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 4 }}>
                  <span style={{ color: s.color, fontSize: 8, marginTop: 5 }}>●</span>
                  <span style={{ fontSize: 13, color: C.grey, lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "auto", padding: "10px 12px", background: C.lightGrey, borderRadius: 8, fontSize: 12, color: C.grey }}>
              <span style={{ fontWeight: 600 }}>{t.channels}</span>{s.channels}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ── UNIVERSITIES ──
function Universities() {
  const lang = useLang();
  const t = T.universities[lang];
  return (
    <Section id="universities">
      <SectionTag text={t.tag} />
      <SectionTitle sub={t.sub}>{t.title1}<span style={{ color: C.crimson }}>{t.titleHL}</span></SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {t.departments.map((d, i) => (
          <Card key={i} hover>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginBottom: 16 }}>{d.field}</h3>
            {d.unis.map((u, j) => (
              <div key={j} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderTop: j > 0 ? "1px solid #F3F4F6" : "none" }}>
                <span style={{ fontSize: 13, color: C.dark, fontWeight: 500 }}>{u.name}</span>
                <span style={{ fontSize: 11, color: C.grey, background: C.lightGrey, padding: "2px 8px", borderRadius: 4 }}>{u.city}</span>
              </div>
            ))}
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ── PROCESS ──
function Process() {
  const lang = useLang();
  const t = T.process[lang];
  return (
    <Section id="process" bg={C.lightGrey}>
      <SectionTag text={t.tag} />
      <SectionTitle sub={t.sub}>{t.title1}<span style={{ color: C.crimson }}>{t.titleHL}</span></SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
        <div style={{ position: "absolute", left: 27, top: 40, bottom: 40, width: 2, background: `linear-gradient(${C.crimson}, ${C.goldLight})` }} />
        {t.steps.map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start", padding: "20px 0", position: "relative" }}>
            <div style={{ minWidth: 56, height: 56, borderRadius: "50%", background: i === 4 ? C.goldLight : C.crimson,
              color: i === 4 ? C.dark : C.white, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 700, fontFamily: "system-ui", zIndex: 1, boxShadow: `0 4px 12px ${i === 4 ? C.goldLight : C.crimson}30` }}>{s.num}</div>
            <Card style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.dark, margin: 0 }}>{s.title}</h3>
                <span style={{ fontSize: 12, color: C.crimson, background: `${C.crimson}0D`, padding: "3px 10px", borderRadius: 12, fontWeight: 600 }}>{s.time}</span>
              </div>
              <p style={{ fontSize: 13.5, color: C.grey, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── CAMPUS LIFE ──
function CampusLife() {
  const lang = useLang();
  const t = T.campus[lang];
  return (
    <Section id="campus-life">
      <div style={{ display: "flex", gap: 48, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ flex: "1 1 300px" }}>
          <SectionTag text={t.tag} />
          <SectionTitle>{t.title1}<span style={{ color: C.crimson }}>{t.titleHL}</span>{t.titleEnd || ""}</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {t.items.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ fontSize: 24, minWidth: 36 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.dark, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: C.grey, lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: "1 1 340px" }}>
          <div style={{ background: `linear-gradient(135deg, ${C.crimson}10, ${C.goldLight}15)`, borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.dark, marginBottom: 20 }}>{t.workTitle}</h3>
            {t.workRules.map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 4 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                <span style={{ fontSize: 13, color: C.grey }}>{r.label}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.dark }}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ── CONTACT / INQUIRY FORM ──
function Contact() {
  const lang = useLang();
  const t = T.contact[lang];
  const [form, setForm] = useState({ fullName: "", email: "", whatsapp: "", country: "", program: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});

  const FORMSPREE_ID = "meeraoog";

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = t.errName;
    if (!form.email.trim()) e.email = t.errEmail;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.errEmailInvalid;
    if (!form.whatsapp.trim()) e.whatsapp = t.errWhatsapp;
    if (!form.country) e.country = t.errCountry;
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          "Full Name": form.fullName, "Email": form.email, "WhatsApp Number": form.whatsapp,
          "Country": form.country, "Program Interest": form.program || "Not specified",
          "Academic Goals": form.message || "Not provided",
          "_subject": `New Sunjade Inquiry from ${form.fullName} (${form.country})`,
        }),
      });
      if (res.ok) { setSubmitted(true); } else { setSubmitError(t.errorGeneral); }
    } catch (err) { setSubmitError(t.errorConnection); } finally { setSubmitting(false); }
  };

  const inputStyle = (field) => ({
    width: "100%", padding: "14px 16px", fontSize: 15, fontFamily: "system-ui",
    border: errors[field] ? "2px solid #EF4444" : "2px solid rgba(255,255,255,0.15)",
    borderRadius: 10, background: "rgba(255,255,255,0.08)", color: C.white, outline: "none",
    transition: "all 0.2s", boxSizing: "border-box",
  });
  const labelStyle = { display: "block", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: 6, fontFamily: "system-ui" };
  const countries = ["Nigeria", "Ghana", "Kenya", "South Africa", "Cameroon", "Tanzania", "Uganda", "Ethiopia", "Rwanda", "Senegal", "Ivory Coast", "Zimbabwe", "Other"];

  return (
    <section id="contact" style={{ background: `linear-gradient(135deg, ${C.dark}, #1A0A14)`, padding: "80px 0" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", gap: 60, flexWrap: "wrap", alignItems: "center" }}>
          {/* Left side */}
          <div style={{ flex: "1 1 400px" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🇨🇳</div>
            <div style={{ fontSize: 14, color: C.goldLight, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16, fontFamily: "system-ui" }}>{t.futureTag}</div>
            <h2 style={{ fontSize: 42, fontWeight: 700, color: C.white, lineHeight: 1.2, margin: "0 0 8px", fontFamily: "Georgia" }}>{t.title1}</h2>
            <h2 style={{ fontSize: 42, fontWeight: 700, color: C.goldLight, lineHeight: 1.2, margin: "0 0 24px", fontFamily: "Georgia" }}>{t.title2}</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 440, margin: "0 0 36px" }}>{t.desc}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[{ icon: "📧", label: t.email, value: "info@sunjade.com" }, { icon: "📸", label: t.instagram, value: "@studyinchinabysunjade" }].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1 }}>{c.label}</div>
                    <div style={{ fontSize: 15, color: C.white, fontWeight: 600 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(255,255,255,0.04)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{t.perks}</div>
            </div>
          </div>

          {/* Right side — form */}
          <div style={{ flex: "1 1 380px" }}>
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 36, backdropFilter: "blur(8px)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "32px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#059669", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 28 }}>✓</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: C.white, margin: "0 0 8px", fontFamily: "Georgia" }}>{t.thankYou}, {form.fullName.split(" ")[0]}!</h3>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{t.thankYouMsg}</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: C.white, margin: "0 0 4px", fontFamily: "Georgia" }}>{t.formTitle}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: "0 0 28px", lineHeight: 1.5 }}>{t.formSub}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div>
                      <label style={labelStyle}>{t.fullName} *</label>
                      <input type="text" placeholder={t.namePlaceholder} value={form.fullName}
                        onChange={(e) => { setForm({ ...form, fullName: e.target.value }); setErrors({ ...errors, fullName: undefined }); }}
                        style={inputStyle("fullName")} onFocus={(e) => e.target.style.borderColor = C.crimson}
                        onBlur={(e) => e.target.style.borderColor = errors.fullName ? "#EF4444" : "rgba(255,255,255,0.15)"} />
                      {errors.fullName && <div style={{ fontSize: 12, color: "#EF4444", marginTop: 4 }}>{errors.fullName}</div>}
                    </div>
                    <div>
                      <label style={labelStyle}>{t.emailLabel} *</label>
                      <input type="email" placeholder={t.emailPlaceholder} value={form.email}
                        onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                        style={inputStyle("email")} onFocus={(e) => e.target.style.borderColor = C.crimson}
                        onBlur={(e) => e.target.style.borderColor = errors.email ? "#EF4444" : "rgba(255,255,255,0.15)"} />
                      {errors.email && <div style={{ fontSize: 12, color: "#EF4444", marginTop: 4 }}>{errors.email}</div>}
                    </div>
                    <div>
                      <label style={labelStyle}>{t.whatsapp} *</label>
                      <input type="tel" placeholder={t.whatsappPlaceholder} value={form.whatsapp}
                        onChange={(e) => { setForm({ ...form, whatsapp: e.target.value }); setErrors({ ...errors, whatsapp: undefined }); }}
                        style={inputStyle("whatsapp")} onFocus={(e) => e.target.style.borderColor = C.crimson}
                        onBlur={(e) => e.target.style.borderColor = errors.whatsapp ? "#EF4444" : "rgba(255,255,255,0.15)"} />
                      {errors.whatsapp && <div style={{ fontSize: 12, color: "#EF4444", marginTop: 4 }}>{errors.whatsapp}</div>}
                    </div>
                    <div>
                      <label style={labelStyle}>{t.country} *</label>
                      <select value={form.country} onChange={(e) => { setForm({ ...form, country: e.target.value }); setErrors({ ...errors, country: undefined }); }}
                        style={{ ...inputStyle("country"), appearance: "none", cursor: "pointer", color: form.country ? C.white : "rgba(255,255,255,0.4)" }}>
                        <option value="" style={{ color: C.dark }}>{t.selectCountry}</option>
                        {countries.map(c => <option key={c} value={c} style={{ color: C.dark }}>{c}</option>)}
                      </select>
                      {errors.country && <div style={{ fontSize: 12, color: "#EF4444", marginTop: 4 }}>{errors.country}</div>}
                    </div>
                    <div>
                      <label style={labelStyle}>{t.program} <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.35)" }}>{t.optional}</span></label>
                      <select value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })}
                        style={{ ...inputStyle("program"), appearance: "none", cursor: "pointer", color: form.program ? C.white : "rgba(255,255,255,0.4)" }}>
                        <option value="" style={{ color: C.dark }}>{t.selectProgram}</option>
                        {t.programOptions.map((p, i) => <option key={i} value={p} style={{ color: C.dark }}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>{t.goals} <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.35)" }}>{t.optional}</span></label>
                      <textarea placeholder={t.goalsPlaceholder} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={4} style={{ ...inputStyle("message"), resize: "vertical", minHeight: 100 }}
                        onFocus={(e) => e.target.style.borderColor = C.crimson} onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.15)"} />
                    </div>
                    <button onClick={handleSubmit} disabled={submitting}
                      style={{ width: "100%", padding: "16px", background: submitting ? C.grey : C.crimson, color: C.white,
                        border: "none", borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: submitting ? "not-allowed" : "pointer",
                        fontFamily: "system-ui", letterSpacing: 0.5, boxShadow: submitting ? "none" : `0 8px 32px ${C.crimson}40`,
                        transition: "all 0.2s", opacity: submitting ? 0.7 : 1 }}
                      onMouseEnter={(e) => { if (!submitting) e.target.style.background = C.crimsonDark; }}
                      onMouseLeave={(e) => { if (!submitting) e.target.style.background = C.crimson; }}>
                      {submitting ? t.submitting : t.submit}
                    </button>
                    {submitError && <div style={{ fontSize: 13, color: "#EF4444", textAlign: "center", padding: "8px 12px", background: "rgba(239,68,68,0.1)", borderRadius: 8 }}>{submitError}</div>}
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textAlign: "center", lineHeight: 1.4 }}>{t.privacy}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ──
function Footer() {
  const lang = useLang();
  const t = T.footer[lang];
  return (
    <footer style={{ background: "#0D0D0D", padding: "40px 0 24px", borderTop: `1px solid ${C.crimson}30` }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.crimson, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 700, fontSize: 14, fontFamily: "Georgia" }}>S</div>
            <span style={{ fontSize: 16, fontWeight: 700, color: C.white, fontFamily: "Georgia" }}>{t.brand}</span>
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{t.location}</div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{t.copy}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{t.tagline}</div>
        </div>
      </div>
    </footer>
  );
}

// ── MAIN APP ──
export default function SunjadeWebsite() {
  const [activeSection, setActiveSection] = useState("home");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_IDS.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <LangContext.Provider value={lang}>
      <div style={{ fontFamily: "'Georgia', serif", background: C.white, color: C.dark }}>
        <Navbar activeSection={activeSection} lang={lang} setLang={setLang} />
        <Hero />
        <WhyChina />
        <Programs />
        <Scholarships />
        <Universities />
        <Process />
        <CampusLife />
        <Contact />
        <Footer />
      </div>
    </LangContext.Provider>
  );
}
