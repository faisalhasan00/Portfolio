import { useState, useRef, useEffect } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal, ArrowUpRight, MessageSquare, PhoneCall, Cpu, Database, Terminal, Zap } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const scrollContainerRef = useRef(null)
  const [viewMode, setViewMode] = useState('carousel') // 'carousel' | 'grid'
  const [activeFilter, setActiveFilter] = useState('All')
  const [isPaused, setIsPaused] = useState(false)

  const filters = ['All', 'AI & Automations', 'Full-Stack & Mobile', 'Scraping & APIs']

  const projects = [
    {
      title: 'GateLink – Smart Society Management Platform',
      badge: 'Live & Mobile App',
      category: 'Full-Stack & Mobile',
      description: 'All-in-one residential society management platform with visitor gate pass tracking, automated RWA maintenance billing, resident directory, instant emergency alerts, and complaint resolution. Built for web and secure, scalable mobile app using AI-assisted engineering workflows.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Mobile App', 'AI-Assisted Dev', 'Secure & Scalable'],
      live: 'https://society-sphere-two.vercel.app/',
      image: '/gatelink-preview.png',
    },
    {
      title: 'TapMenu',
      badge: 'Live Platform',
      category: 'Full-Stack & Mobile',
      description: 'Smart digital QR menu platform for restaurants allowing real-time dish updates, pricing controls, and contactless ordering.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      live: 'https://tapmenu.in',
      image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Ftapmenu.in?w=900',
    },
    {
      title: 'RewardSphere – Cashback & Rewards Platform',
      badge: 'Live Platform',
      category: 'Full-Stack & Mobile',
      description: "India's premier cashback, coupon, and deal aggregation platform featuring real-time affiliate tracking, live cashback tickers, multi-store coupon engines (Amazon, Flipkart, Myntra, Ajio), and automated wallet payout management.",
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Affiliate APIs'],
      live: 'https://reward-sphere.vercel.app/',
      image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Freward-sphere.vercel.app%2F?w=900',
    },
    {
      title: 'QuickPrepp – Crack Your Dream Job with AI',
      badge: 'Live AI App',
      category: 'AI & Automations',
      description: 'AI-powered learning and interview preparation platform that curates video courses into structured learning modules with AI quizzes, personalized practice, and real-time feedback.',
      tech: ['Next.js', 'Node.js', 'MySQL', 'OpenAI API', 'YouTube API'],
      live: 'https://quickprepp-frontend.vercel.app/',
      image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fquickprepp-frontend.vercel.app?w=900',
    },
    {
      title: 'WhatsApp Automation System',
      badge: 'Open Source',
      category: 'Scraping & APIs',
      description: 'Automated notification engine with webhook trigger processing and custom message formatting pipelines.',
      tech: ['Node.js', 'Express', 'WhatsApp Cloud API', 'Webhooks'],
      github: 'https://github.com/filemyrtiofficial-stack/whatsapp-message-tigger-automatically',
      customGraphic: {
        icon: MessageSquare,
        title: 'WhatsApp Cloud API Engine',
        tag: 'Webhook Trigger Pipeline',
        code: 'POST /v1/messages/webhook\nStatus: 200 OK • Trigger Dispatched\nPayload: {"event": "notification_sent"}',
        gradient: 'from-emerald-950 via-teal-950 to-zinc-950',
        border: 'border-emerald-500/30',
        glow: 'bg-emerald-500/20',
        textAccent: 'text-emerald-400',
      },
    },
    {
      title: 'Callmint – AI Voice & Telephony Automation',
      badge: 'AI Telephony',
      category: 'AI & Automations',
      description: 'Intelligent AI voice and call automation platform built for conversational agents, automated call routing, transcription, and real-time smart telephony workflows.',
      tech: ['Node.js', 'Express', 'OpenAI API', 'Webhooks', 'Voice AI'],
      github: 'https://github.com/faisalhasan00/Callmint',
      customGraphic: {
        icon: PhoneCall,
        title: 'Callmint AI Voice Agent',
        tag: 'Telephony & Realtime AI',
        code: 'const agent = new VoiceAI({ model: "realtime" });\nagent.connectStream(activeCall);\n// Latency: 140ms • Streaming 24/7',
        gradient: 'from-indigo-950 via-purple-950 to-zinc-950',
        border: 'border-purple-500/30',
        glow: 'bg-purple-500/20',
        textAccent: 'text-purple-400',
      },
    },
    {
      title: 'CompeteAI – Competitor Intelligence Engine',
      badge: 'AI Intelligence',
      category: 'AI & Automations',
      description: 'AI-driven competitor monitoring and intelligence platform that tracks market trends, analyzes competitor product offerings, and generates actionable strategic insights.',
      tech: ['React', 'Node.js', 'OpenAI API', 'Python', 'Web Scraping'],
      github: 'https://github.com/faisalhasan00/CompeteAI',
      customGraphic: {
        icon: Cpu,
        title: 'CompeteAI Market Radar',
        tag: 'Competitor Intelligence',
        code: 'await engine.analyzePricing({\n  target: "E-Commerce Market",\n  accuracy: "99.4%"\n});',
        gradient: 'from-blue-950 via-cyan-950 to-zinc-950',
        border: 'border-cyan-500/30',
        glow: 'bg-cyan-500/20',
        textAccent: 'text-cyan-400',
      },
    },
    {
      title: 'CatalogGenerator – Automated Catalog Builder',
      badge: 'Scraping & Automation',
      category: 'Scraping & APIs',
      description: 'Automated data extraction and catalog generation pipeline that scrapes multi-source product listings and compiles ready-to-publish digital catalogs.',
      tech: ['Node.js', 'Puppeteer', 'Python', 'Data Scraping', 'Automation'],
      github: 'https://github.com/faisalhasan00/catlogGenerator-Automation',
      customGraphic: {
        icon: Database,
        title: 'Automated Catalog Engine',
        tag: 'High-Speed Web Scraper',
        code: 'const catalog = await scraper.extract({\n  pages: 50, format: "PDF & CSV",\n  items: 1240\n});',
        gradient: 'from-amber-950 via-orange-950 to-zinc-950',
        border: 'border-amber-500/30',
        glow: 'bg-amber-500/20',
        textAccent: 'text-amber-400',
      },
    },
    {
      title: 'Shreyans E-Commerce Store',
      badge: 'Frontend',
      category: 'Full-Stack & Mobile',
      description: 'Responsive online shopping experience with product catalog, cart system, and smooth checkout flow.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      live: 'https://shreyansse.netlify.app/',
      image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fshreyansse.netlify.app?w=900',
    },
  ]

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  // Auto-scroll loop
  useEffect(() => {
    if (viewMode !== 'carousel' || isPaused) return

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' })
        }
      }
    }, 3200)

    return () => clearInterval(interval)
  }, [viewMode, isPaused])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' })
    }
  }

  const renderProjectCard = (project, isCarousel = false) => {
    const GraphicIcon = project.customGraphic?.icon

    return (
      <div
        key={project.title}
        className={`bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-gray-400 hover:shadow-lg transition-all duration-300 flex flex-col ${
          isCarousel ? 'w-[320px] sm:w-[360px] flex-shrink-0' : 'w-full'
        }`}
      >
        {/* Preview: Custom Terminal Graphic OR Live Screenshot */}
        {project.customGraphic ? (
          <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.customGraphic.gradient} border-b border-gray-100 p-5 flex flex-col justify-between text-white overflow-hidden select-none`}>
            {/* Glow Accent */}
            <div className={`absolute -top-12 -right-12 w-32 h-32 ${project.customGraphic.glow} rounded-full blur-2xl pointer-events-none`} />

            {/* Window Controls */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/10 ${project.customGraphic.textAccent}`}>
                {project.customGraphic.tag}
              </span>
            </div>

            {/* Code / Command Display */}
            <div className="my-auto z-10 space-y-1.5 font-mono">
              <div className="flex items-center gap-2">
                {GraphicIcon && <GraphicIcon className={`w-4 h-4 ${project.customGraphic.textAccent}`} />}
                <p className="text-xs font-bold text-white tracking-tight">{project.customGraphic.title}</p>
              </div>
              <pre className="text-[11px] leading-relaxed text-zinc-300 bg-black/40 p-2 rounded-lg border border-white/5 whitespace-pre-wrap font-mono">
                {project.customGraphic.code}
              </pre>
            </div>

            {/* Status Footer */}
            <div className="flex items-center justify-between text-[11px] font-mono z-10 pt-1 border-t border-white/10">
              <span className="text-zinc-400 flex items-center gap-1 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active System
              </span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[10px] font-semibold">
                {project.badge}
              </span>
            </div>
          </div>
        ) : (
          <div className="relative aspect-[16/10] bg-gray-100 border-b border-gray-100 overflow-hidden group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.live || 'https://github.com/faisalhasan00')}?w=900`
              }}
            />

            {/* Category Pill Tag */}
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-black border border-gray-200 text-xs font-medium shadow-sm">
                {project.badge}
              </span>
            </div>
          </div>
        )}

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2.5">
            <h3 className="text-xl font-semibold text-black leading-snug tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-normal line-clamp-3">
              {project.description}
            </p>
          </div>

        <div className="space-y-4 pt-2">
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2 pt-2 border-t border-gray-100 text-sm font-medium">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition"
              >
                <span>Live App</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-gray-300 text-black hover:border-black transition"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-t border-gray-200">
      <div className="space-y-10">
        {/* Section Header (Kent C. Dodds style) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              Featured Work & Projects
            </h2>
            <p className="text-lg text-gray-600">
              Web platforms, AI tools, and automation pipelines built for real users
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-3">
            {/* View Switcher Button */}
            <button
              onClick={() => setViewMode(viewMode === 'carousel' ? 'grid' : 'carousel')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-300 hover:border-black text-black font-medium text-sm transition"
            >
              {viewMode === 'carousel' ? (
                <>
                  <LayoutGrid className="w-4 h-4" />
                  <span>See All Projects ({projects.length})</span>
                </>
              ) : (
                <>
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Auto Slider View</span>
                </>
              )}
            </button>

            {/* Next / Previous Controls */}
            {viewMode === 'carousel' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollLeft}
                  className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-black hover:border-black transition"
                  title="Previous project"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollRight}
                  className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-black hover:border-black transition"
                  title="Next project"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filter Pills (When in Grid Mode) */}
        {viewMode === 'grid' && (
          <div className="flex flex-wrap gap-2 pt-2 border-b border-gray-200 pb-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeFilter === filter
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* Horizontal Carousel OR Grid */}
        {viewMode === 'carousel' ? (
          <div
            className="relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Scrollable Track */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {projects.map((project) => renderProjectCard(project, true))}
            </div>

            {/* Bottom helper info */}
            <div className="flex items-center justify-between pt-2 text-sm text-gray-500">
              <span>Showing {projects.length} featured applications</span>
              <button
                onClick={() => setViewMode('grid')}
                className="text-black font-medium underlined"
              >
                Switch to full grid view →
              </button>
            </div>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => renderProjectCard(project, false))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
