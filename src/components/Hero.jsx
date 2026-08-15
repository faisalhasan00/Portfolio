import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Code2, Smartphone, Bot, Cpu, Sparkles, ShieldCheck, Zap, Database, Terminal, CheckCircle2 } from 'lucide-react'

const Hero = () => {
  const highlights = [
    { label: 'Experience', value: '1.5+ Yrs', icon: Zap, color: 'text-amber-500 bg-amber-50 border-amber-200' },
    { label: 'Delivered', value: '20+ Projects', icon: CheckCircle2, color: 'text-blue-500 bg-blue-50 border-blue-200' },
    { label: 'Mobile & Web', value: 'Full-Stack', icon: Smartphone, color: 'text-emerald-500 bg-emerald-50 border-emerald-200' },
    { label: 'AI Assistance', value: 'Automations', icon: Bot, color: 'text-purple-500 bg-purple-50 border-purple-200' },
  ]

  const corePills = [
    { title: 'AI Automation Engineer', bg: 'bg-amber-100 text-amber-900 border-amber-300' },
    { title: 'Full Stack & Mobile Dev', bg: 'bg-blue-100 text-blue-900 border-blue-300' },
    { title: 'Java & Python Specialist', bg: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
    { title: 'Secure & Scalable Architect', bg: 'bg-purple-100 text-purple-900 border-purple-300' },
  ]

  return (
    <div id="home" className="space-y-16 lg:space-y-24 pb-12">
      {/* 1. Main Hero Visual Stage */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pt-6 sm:pt-12 lg:pt-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Vibrant Skill Badges Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2"
            >
              {corePills.map((pill) => (
                <span
                  key={pill.title}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border shadow-sm ${pill.bg}`}
                >
                  {pill.title}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.15]"
            >
              Building fast, scalable <span className="text-orange-600 underline decoration-orange-300 decoration-wavy decoration-2">web & mobile</span> apps with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-powered development</span>.
            </motion.h1>

            {/* Concise Visual Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-700 font-normal leading-relaxed max-w-2xl"
            >
              Software Developer & AI Engineer at <strong>Ranazonai Technologies</strong>. Crafting secure, scalable full-stack web platforms, mobile apps, and autonomous workflows.
            </motion.p>

            {/* Pill CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-8 py-4 text-base font-medium hover:bg-gray-800 transition shadow-sm hover:scale-[1.02]"
              >
                <span>View Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-black text-black px-8 py-4 text-base font-medium transition hover:bg-gray-50"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Highlights Mini-Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
            >
              {highlights.map((h) => {
                const Icon = h.icon
                return (
                  <div
                    key={h.label}
                    className="p-3.5 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between"
                  >
                    <div className={`w-8 h-8 rounded-xl border flex items-center justify-center mb-2 ${h.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-black">{h.value}</p>
                      <p className="text-xs text-gray-500 font-medium">{h.label}</p>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Right Visual Graphic Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md bg-gradient-to-br from-gray-900 via-zinc-900 to-black rounded-3xl p-6 sm:p-7 text-white shadow-2xl border border-zinc-800 relative overflow-hidden">
              {/* Glow Accent */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-zinc-400 font-medium">faisal.engineer.js</span>
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> active
                </span>
              </div>

              {/* Code Feature Display */}
              <div className="space-y-3 font-mono text-xs text-zinc-300 leading-relaxed">
                <p>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = &#123;
                </p>
                <div className="pl-4 space-y-1 text-xs">
                  <p><span className="text-zinc-400">name:</span> <span className="text-amber-300">'Mohammed Faisal Hasan'</span>,</p>
                  <p><span className="text-zinc-400">role:</span> <span className="text-emerald-300">'AI Automation & Full-Stack'</span>,</p>
                  <p><span className="text-zinc-400">mobile:</span> <span className="text-blue-300">'Secure & Scalable Apps (AI-Assisted)'</span>,</p>
                  <p><span className="text-zinc-400">company:</span> <span className="text-orange-300">'Ranazonai Technologies'</span>,</p>
                  <p><span className="text-zinc-400">stack:</span> [<span className="text-cyan-300">'React'</span>, <span className="text-cyan-300">'Next.js'</span>, <span className="text-cyan-300">'Java'</span>, <span className="text-cyan-300">'Python'</span>, <span className="text-cyan-300">'OpenAI'</span>],</p>
                  <p><span className="text-zinc-400">status:</span> <span className="text-emerald-400">'Open for opportunities 🚀'</span></p>
                </div>
                <p>&#125;;</p>
              </div>

              {/* Visual Badges Inside Terminal */}
              <div className="pt-4 mt-4 border-t border-zinc-800 grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 px-2.5 py-1.5 rounded-lg border border-emerald-800/50">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Secure & Scalable</span>
                </div>
                <div className="flex items-center gap-1.5 text-purple-400 bg-purple-950/40 px-2.5 py-1.5 rounded-lg border border-purple-800/50">
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI-Assisted Dev</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Visual Feature Cards (Kent C. Dodds Showcase Strip) */}
      <section id="intro" className="px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md transition space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-black">AI & Autonomous Agents</h3>
            <p className="text-sm text-gray-600">
              Custom ChatGPT integrations, autonomous agent workflows, and intelligent business automations.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md transition space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-black">Mobile Apps (AI-Assisted)</h3>
            <p className="text-sm text-gray-600">
              Cross-platform mobile apps with secure architectures and AI-boosted rapid development.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md transition space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-black">Full-Stack & Java</h3>
            <p className="text-sm text-gray-600">
              Scalable web architectures with React, Next.js, Java, Node.js, and cloud deployments.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
