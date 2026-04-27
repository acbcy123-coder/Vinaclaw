import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { 
  Download, 
  Monitor, 
  Apple, 
  Play, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Plus, 
  Minus,
  ChevronRight,
  MessageSquare,
  Sparkles,
  MousePointer2,
  Box,
  Languages
} from 'lucide-react';

// --- Translations ---

const translations = {
  en: {
    nav: {
      features: "Features",
      skills: "Interaction",
      faq: "FAQ",
      download: "Download Now"
    },
    hero: {
      caption: "The Future of Sentient Desktop AI",
      title: "Your Visual",
      titleAccent: "AI Lifeform.",
      desc: "Interact, customize, and evolve with Vinaclaw. A sentient companion powered by high-performance OpenClaw logic.",
      winDownload: "Windows Download",
      macDownload: "macOS (Coming Soon)",
      version: "v1.04 Stable",
      engine: "OpenClaw Core"
    },
    video: {
      caption: "Sentient Intelligence",
      title: "Visualization &",
      titleAccent: "Lobster Integration",
      desc: "Experience the harmony between Vinaclaw's expressive visuals and the raw power of OpenClaw system logic.",
      preview: "LIVE PREVIEW // VINACLAW_V1.04"
    },
    personality: {
      caption: "Sentient UI",
      title: "Interface That",
      titleAccent: "Feels Breathing.",
      desc: "Vinaclaw adapts to your workflow. It gazes at your active window, reacts to system events, and provides a visual anchor for your productivity.",
      vEngine: "Visual Engine",
      iLayer: "Interaction Layer",
      sFeedback: "Sentient Feedback"
    },
    features: {
      caption: "Core Logic",
      title: "OpenClaw",
      titleAccent: "Lobster Engine",
      desc: "Integrated with OpenClaw architecture for hardware-level peripheral synthesis and contextual spatial awareness.",
      f1Title: "AI Brain",
      f1Desc: "Deep integration with local neural networks for instantaneous reasoning and complex decision management.",
      f2Title: "Hyper-Real Logic",
      f2Desc: "Context-aware processing that understands your desktop environment at a structural level.",
      f3Title: "Secure Layer",
      f3Desc: "Encrypted local-first architecture ensuring your interactions never compromise your privacy."
    },
    skills: {
      caption: "Interactive Personalization",
      title: "Mascot Design &",
      titleAccent: "Interaction.",
      desc: "Every skill comes with a unique visual presence. We design interactive mascots that bring your AI capabilities to life with expressive animations and motion logic.",
      s1: "MOTION SYNTHESIS",
      s2: "EMOTIONAL RENDERING",
      s3: "DYNAMIC RESPONSE",
      explore: "CUSTOM CLIENT SOLUTIONS",
      deploy: "Request Custom Design",
      skillInjector: "MOTION_LAB_V2"
    },
    faq: {
      caption: "The Ecosystem",
      title: "Universal",
      titleAccent: "Synthesis.",
      app1Title: "Hardware Logic",
      app1Desc: "Syncs with peripherals for spatial depth.",
      app2Title: "Vision Processing",
      app2Desc: "Advanced structural desktop recognition.",
      app3Title: "Skill Injection",
      app3Desc: "Hot-swappable AI capabilities for pros.",
      app4Title: "Team Relay",
      app4Desc: "Collaborate with other Vinaclaw users.",
      q1: "How does the Lobster function work?",
      a1: "It synchronizes Vinaclaw visuals with peripheral hardware and structural desktop logic, creating a unified sentient experience.",
      q2: "Can I design my own agent image?",
      a2: "Yes, full custom skinning is available in the Pro Skill editor. You can define every pixel of your companion's appearance.",
      q3: "Is OpenClaw integration secure?",
      a3: "Absolutely. OpenClaw uses local-first processing, ensuring your desktop data remains private and secure on your hardware.",
      q4: "Status of the MacBook release?",
      a4: "The structural core for macOS is complete. We are currently polishing the visual synthesis layer for a Q3 release."
    },
    footer: {
      copy: "© 2024 VINACLAW ECOSYSTEM • POWERED BY OPENCLAW",
      docs: "Docs",
      privacy: "Privacy",
      status: "Status: Online"
    }
  },
  zh: {
    nav: {
      features: "功能特性",
      skills: "形象与互动",
      faq: "常见问题",
      download: "立即下载"
    },
    hero: {
      caption: "桌面类人智能体的未来",
      title: "您的视觉化",
      titleAccent: "AI 生命体。",
      desc: "与 Vinaclaw 一起互动、定制和进化。由高性能 OpenClaw 逻辑驱动的有感知能力的桌面伙伴。",
      winDownload: "Windows 下载",
      macDownload: "macOS (即将推出)",
      version: "v1.04 稳定版",
      engine: "OpenClaw 内核"
    },
    video: {
      caption: "有感知的智能",
      title: "可视化与",
      titleAccent: "龙虾逻辑集成",
      desc: "体验 Vinaclaw 表现力丰富的视觉效果与 OpenClaw 系统逻辑强大动力之间的和谐统一。",
      preview: "实时预览 // VINACLAW_V1.04"
    },
    personality: {
      caption: "有感知的 UI",
      title: "赋予界面",
      titleAccent: "呼吸感。",
      desc: "Vinaclaw 适应您的工作流。它关注您的活动窗口，对系统事件做出反应，并为您的高效工作提供视觉锚点。",
      vEngine: "视觉引擎",
      iLayer: "交互层",
      sFeedback: "感知反馈"
    },
    features: {
      caption: "核心逻辑",
      title: "OpenClaw",
      titleAccent: "龙虾引擎",
      desc: "集成了 OpenClaw 架构，用于硬件级外设合成和上下文空间感知。",
      f1Title: "AI 大脑",
      f1Desc: "与本地神经网络深度集成，实现瞬时推理和复杂的决策管理。",
      f2Title: "超现实逻辑",
      f2Desc: "感知上下文的处理，从结构层面理解您的桌面环境。",
      f3Title: "安全层",
      f3Desc: "加密的本地优先架构，确保您的交互永远不会泄露隐私。",
    },
    skills: {
      caption: "交互式个性化",
      title: "形象设计与",
      titleAccent: "深度互动。",
      desc: "每一个技能都配有独特的视觉呈现。我们设计可互动的智能体形象，通过丰富的表情动画与动效逻辑让您的 AI 功能焕发生机。",
      s1: "动效合成",
      s2: "情感渲染",
      s3: "动态响应",
      explore: "客户定制方案",
      deploy: "申请定制设计",
      skillInjector: "动效实验室_V2"
    },
    faq: {
      caption: "生态系统",
      title: "通用",
      titleAccent: "综合体。",
      app1Title: "硬件逻辑",
      app1Desc: "与外设同步以增加空间深度。",
      app2Title: "视觉处理",
      app2Desc: "高级结构化桌面识别。",
      app3Title: "技能注入",
      app3Desc: "面向专业人士的热插拔 AI 功能。",
      app4Title: "团队中继",
      app4Desc: "与其他 Vinaclaw 用户协作。",
      q1: "龙虾功能是如何运作的？",
      a1: "它将 Vinaclaw 的视觉效果与外设硬件和结构化桌面逻辑同步，创造出统一的有感知体验。",
      q2: "我可以设计自己的智能体形象吗？",
      a2: "是的，Pro Skill 编辑器中提供完整的自定义外观功能。您可以定义伙伴外观的每一个像素。",
      q3: "OpenClaw 集成安全吗？",
      a3: "绝对安全。OpenClaw 采用本地优先处理，确保您的桌面数据在您的硬件上保持私密且安全。",
      q4: "MacBook 版本的发布状态？",
      a4: "macOS 的结构核心已经完成。我们目前正在完善视觉合成层，预计第三季度发布。"
    },
    footer: {
      copy: "© 2024 VINACLAW 生态系统 • 由 OPENCLAW 驱动",
      docs: "文档",
      privacy: "隐私",
      status: "状态：在线"
    }
  }
};

// --- Components ---

const Navbar = ({ lang, setLang, t }: { lang: 'en' | 'zh', setLang: (l: 'en' | 'zh') => void, t: any }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass h-20 flex items-center justify-between px-6 md:px-12">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-fuchsia-500 rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center">
        <span className="text-xl font-black text-white">V</span>
      </div>
      <span className="font-display font-bold text-2xl tracking-tight">Vinaclaw</span>
    </div>
    <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-400">
      <a href="#features" className="hover:text-cyan-400 transition-colors">{t.nav.features}</a>
      <a href="#skills" className="hover:text-cyan-400 transition-colors">{t.nav.skills}</a>
      <a href="#faq" className="hover:text-cyan-400 transition-colors">{t.nav.faq}</a>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
        <button 
          onClick={() => setLang('zh')}
          className={`px-3 py-1 rounded text-[10px] font-black tracking-widest transition-all ${lang === 'zh' ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'text-slate-500 hover:text-slate-300'}`}
        >
          ZH
        </button>
        <button 
          onClick={() => setLang('en')}
          className={`px-3 py-1 rounded text-[10px] font-black tracking-widest transition-all ${lang === 'en' ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'text-slate-500 hover:text-slate-300'}`}
        >
          EN
        </button>
      </div>
      <a href="#download" className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-bold hover:scale-105 shadow-lg shadow-white/5 transition-all">
        {t.nav.download}
      </a>
    </div>
  </nav>
);

const Section = ({ id, children, className = "" }: { id: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`section-padding min-h-screen flex flex-col justify-center ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800 py-4">
      <button 
        className="w-full flex items-center justify-between text-left font-bold py-4 hover:text-cyan-400 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden text-slate-400 text-sm leading-relaxed"
          >
            <div className="pb-6 pt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('zh');
  const t = translations[lang];

  return (
    <div className="selection:bg-cyan-500/30 selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      {/* 1. Hero Section - Download Way */}
      <Section id="download" className="bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/10 blur-[120px] -ml-64 -mb-64"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-caption">{t.hero.caption}</span>
            <h1 className="heading-1 mb-10">
              {t.hero.title} <br/>
              <span className="inline-block px-4 py-2 mt-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-2xl text-white">
                {t.hero.titleAccent}
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-white/10">
                <Monitor className="w-6 h-6" />
                <span>{t.hero.winDownload}</span>
              </button>
              <div className="relative group">
                <button className="flex items-center justify-center gap-3 bg-slate-900/50 border border-slate-800 text-slate-500 px-10 py-5 rounded-2xl font-bold text-lg cursor-not-allowed w-full">
                  <Apple className="w-6 h-6" />
                  <span>{t.hero.macDownload}</span>
                </button>
              </div>
            </div>
            <div className="mt-12 flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> {t.hero.version}</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> {t.hero.engine}</span>
            </div>
          </div>
          <div className="relative flex justify-center">
            <motion.div 
              className="w-80 h-80 md:w-[500px] md:h-[500px] bg-slate-900 rounded-[60px] flex items-center justify-center relative shadow-2xl border border-slate-800 overflow-hidden"
              animate={{ 
                scale: [1, 1.01, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 blur-[60px]"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-800/80 backdrop-blur-md rounded-[40px] shadow-2xl p-8 flex flex-col items-center justify-center border border-white/5">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-tr from-cyan-400 to-fuchsia-500 rounded-full mb-6 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Sparkles className="text-white w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <h3 className="font-display font-black text-2xl md:text-3xl mb-1">VINACLAW</h3>
                  <div className="flex gap-2">
                    <span className="bg-cyan-500/20 text-cyan-400 text-[10px] px-2.5 py-1 rounded-full font-bold tracking-tighter uppercase">Status: Online</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* 2. Video Intro Section */}
      <Section id="video" className="bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-caption">{t.video.caption}</span>
          <h2 className="heading-2 mb-8 text-white">{t.video.title} <span className="gradient-text">{t.video.titleAccent}</span></h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            {t.video.desc}
          </p>
          <div className="relative group aspect-video bg-slate-950 rounded-[40px] overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
            
            <button className="relative z-10 w-24 h-24 bg-white text-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-white/20">
              <Play className="w-10 h-10 ml-2" />
            </button>
            
            <div className="absolute bottom-8 left-8 text-left">
              <div className="text-cyan-400 font-mono text-xs mb-1 tracking-widest uppercase">{t.video.preview}</div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* 3. Personality Section */}
      <Section id="interaction" className="bg-slate-950">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 w-40 bg-slate-900 rounded-3xl shadow-sm p-6 flex flex-col justify-between border border-slate-800">
                  <Sparkles className="text-cyan-400 w-8 h-8" />
                  <div className="text-sm font-bold text-slate-400">{t.personality.vEngine}</div>
                </div>
                <div className="h-64 w-40 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl shadow-lg shadow-cyan-500/20 p-6 flex flex-col justify-between">
                  <MousePointer2 className="w-8 h-8 text-white" />
                  <div className="text-sm font-black text-white uppercase tracking-wider">{t.personality.iLayer}</div>
                </div>
              </div>
              <div className="space-y-4 translate-y-8">
                <div className="h-64 w-40 bg-slate-800 rounded-3xl shadow-lg p-6 flex flex-col justify-between border border-slate-700">
                  <MessageSquare className="w-8 h-8 text-fuchsia-400" />
                  <div className="text-sm font-bold text-slate-300">Chat Logic</div>
                </div>
                <div className="h-48 w-40 bg-slate-900 rounded-3xl shadow-sm p-6 flex flex-col justify-between border border-slate-800 text-slate-500">
                  <Sparkles className="w-8 h-8" />
                  <div className="text-sm font-bold">{t.personality.sFeedback}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-caption">{t.personality.caption}</span>
            <h2 className="heading-2 mb-8 text-white">{t.personality.title} <br/><span className="gradient-text">{t.personality.titleAccent}</span></h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              {t.personality.desc}
            </p>
            <div className="space-y-4">
              {[
                { title: t.personality.vEngine, icon: <Box className="w-4 h-4 text-cyan-400" /> },
                { title: t.personality.iLayer, icon: <Sparkles className="w-4 h-4 text-fuchsia-400" /> },
                { title: t.personality.sFeedback, icon: <Sparkles className="w-4 h-4 text-indigo-400" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                  {item.icon}
                  <span className="font-bold tracking-tight">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      {/* 4. AI & Openclaw Section */}
      <Section id="features" className="bg-slate-900/40">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-caption">{t.features.caption}</span>
          <h2 className="heading-2 mb-6 text-white text-5xl">{t.features.title} <span className="gradient-text">{t.features.titleAccent}</span></h2>
          <p className="text-xl text-slate-400">
            {t.features.desc}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Cpu className="w-8 h-8" />, 
              title: t.features.f1Title, 
              desc: t.features.f1Desc,
              color: "cyan"
            },
            { 
              icon: <Zap className="w-8 h-8" />, 
              title: t.features.f2Title, 
              desc: t.features.f2Desc,
              color: "fuchsia"
            },
            { 
              icon: <ShieldCheck className="w-8 h-8" />, 
              title: t.features.f3Title, 
              desc: t.features.f3Desc,
              color: "indigo"
            }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="p-10 bg-slate-900/60 border border-slate-800 rounded-[40px] hover:border-slate-700 transition-all shadow-xl"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                feature.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' : 
                feature.color === 'fuchsia' ? 'bg-fuchsia-500/20 text-fuchsia-400' : 'bg-indigo-500/20 text-indigo-400'
              }`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* 5. Skills Section */}
      <Section id="skills" className="bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-full bg-cyan-500/5 blur-[120px] rounded-full"></div>
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-caption">{t.skills.caption}</span>
            <h2 className="heading-2 mb-8 text-white">{t.skills.title} <br/><span className="gradient-text">{t.skills.titleAccent}</span></h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              {t.skills.desc}
            </p>
            
            <button className="flex items-center gap-3 text-cyan-400 font-black uppercase text-[11px] tracking-[0.3em] hover:gap-6 transition-all">
              <span>{t.skills.explore}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
              {[
                { 
                  label: "Orbital Focus", 
                  anim: { rotate: 360 }, 
                  transition: { duration: 10, repeat: Infinity, ease: "linear" },
                  color: "bg-cyan-500",
                  id: "motion-1"
                },
                { 
                  label: "Pulse Response", 
                  anim: { scale: [1, 1.2, 1] }, 
                  transition: { duration: 2, repeat: Infinity },
                  color: "bg-fuchsia-500",
                  id: "motion-2"
                },
                { 
                  label: "Vortex logic", 
                  anim: { skew: [0, 10, -10, 0] }, 
                  transition: { duration: 3, repeat: Infinity },
                  color: "bg-indigo-500",
                  id: "motion-3"
                },
                { 
                  label: "Float Synth", 
                  anim: { y: [0, -15, 0] }, 
                  transition: { duration: 4, repeat: Infinity },
                  color: "bg-white",
                  id: "motion-4"
                }
              ].map((item, i) => (
                <div key={i} id={item.id} className="relative group aspect-square bg-slate-900 border border-white/10 rounded-[32px] p-6 flex flex-col justify-between overflow-hidden hover:border-white/20 transition-all">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-black tracking-widest text-slate-600 uppercase">{item.label}</span>
                    <Sparkles className="w-3 h-3 text-slate-700" />
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative">
                      <div className={`absolute inset-0 ${item.color} blur-[30px] opacity-20`}></div>
                      <motion.div 
                        animate={item.anim}
                        transition={item.transition}
                        className={`w-12 h-12 ${item.color} rounded-2xl shadow-lg relative z-10`}
                      ></motion.div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="h-1 bg-white/5 rounded-full w-full"></div>
                    <div className="h-1 bg-white/5 rounded-full w-2/3"></div>
                  </div>
                </div>
              ))}
              
              <div className="col-span-2 mt-2">
                <button className="w-full bg-white text-black py-5 rounded-3xl font-black uppercase text-xs tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/5">
                  {t.skills.deploy}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* 6. Applications & FAQ Section */}
      <Section id="faq" className="bg-slate-900/20">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-caption">{t.faq.caption}</span>
            <h2 className="heading-2 mb-12 text-white">{t.faq.title} <span className="gradient-text">{t.faq.titleAccent}</span></h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: t.faq.app1Title, desc: t.faq.app1Desc },
                { title: t.faq.app2Title, desc: t.faq.app2Desc },
                { title: t.faq.app3Title, desc: t.faq.app3Desc },
                { title: t.faq.app4Title, desc: t.faq.app4Desc }
              ].map((app, i) => (
                <div key={i} className="group p-8 rounded-[32px] border border-slate-800 bg-slate-900/40 hover:border-cyan-500/30 transition-all">
                  <h4 className="font-extrabold mb-3 group-hover:text-cyan-400 transition-colors text-lg tracking-tight uppercase tracking-wider text-xs">{app.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <span className="text-caption">General Inquiry</span>
            <h2 className="heading-2 mb-12 text-white">Common Questions</h2>
            <div className="space-y-2">
              <FAQItem 
                question={t.faq.q1} 
                answer={t.faq.a1}
              />
              <FAQItem 
                question={t.faq.q2} 
                answer={t.faq.a2}
              />
              <FAQItem 
                question={t.faq.q3} 
                answer={t.faq.a3}
              />
              <FAQItem 
                question={t.faq.q4} 
                answer={t.faq.a4}
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Footer */}
      <footer className="border-t border-slate-800 py-16 px-12 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-fuchsia-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-white font-black text-sm">V</span>
            </div>
            <span className="font-display font-black text-xl tracking-tighter">VINACLAW</span>
          </div>
          <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
            {t.footer.copy}
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors uppercase text-[10px] font-black tracking-widest">{t.footer.docs}</a>
            <a href="#" className="text-slate-500 hover:text-fuchsia-400 transition-colors uppercase text-[10px] font-black tracking-widest">{t.footer.privacy}</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest">{t.footer.status}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

