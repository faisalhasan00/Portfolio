import { useRef } from 'react'
import { Briefcase, Smartphone, GraduationCap, Cpu, CheckCircle2, Shield, Zap, Sparkles, ArrowUpRight } from 'lucide-react'

const About = () => {
  const ref = useRef(null)

  const cards = [
    {
      icon: Briefcase,
      iconColor: 'bg-amber-500 text-white',
      title: 'Current Role & Impact',
      subtitle: 'Ranazonai Technologies • Jan 2025 – Present',
      points: [
        'Building scalable web applications, custom AI automation workflows, and autonomous bots.',
        'Founder of TapMenu (tapmenu.in), a contactless smart QR ordering system for restaurants.',
        'Managing cloud VPS servers, domains, DNS, and CI/CD automated deployments.',
      ],
    },
    {
      icon: Smartphone,
      iconColor: 'bg-blue-600 text-white',
      title: 'Mobile Apps & AI Acceleration',
      subtitle: 'Secure, Scalable & Cross-Platform',
      points: [
        'Developing full-stack mobile applications using AI-assisted engineering to speed up dev cycles.',
        'Designing secure auth architectures, real-time database sync, and robust API endpoints.',
        'Creator of GateLink (society-sphere-two.vercel.app) with web & mobile management.',
      ],
    },
    {
      icon: GraduationCap,
      iconColor: 'bg-emerald-600 text-white',
      title: 'Education & Specialized Training',
      subtitle: 'Academic & Professional Credentials',
      points: [
        'Bachelor of Computer Applications (BCA) graduate from Osmania University (2024).',
        'Certified in Java Full Stack Engineering from Naresh i Technologies (Core & Adv Java, OOP).',
        'Strong fundamentals in Data Structures, Relational Databases, and RESTful API architecture.',
      ],
    },
    {
      icon: Cpu,
      iconColor: 'bg-purple-600 text-white',
      title: 'Engineering Philosophy',
      subtitle: 'Fast, Maintainable & Production-Ready',
      points: [
        'Core Stack: React, Next.js, Java, JavaScript, Python, Node.js, and OpenAI API.',
        'Heavy focus on automated web scraping (Puppeteer, Playwright) and n8n workflows.',
        'Clean, scalable code architecture built for speed and seamless user experiences.',
      ],
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-t border-gray-200">
      <div className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold">
              <span>⚡ Background & Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              About Mohammed Faisal Hasan
            </h2>
            <p className="text-lg text-gray-600">
              Software Developer & AI Automation Engineer focused on building high-speed digital products
            </p>
          </div>
          <a
            href="https://docs.google.com/document/d/1pmG3vCOcQB9cckcvHcPhCNI_BNllN-XG/edit?usp=drive_link&ouid=110184927717681443848&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 hover:border-black text-black font-semibold text-sm transition self-start sm:self-auto bg-white shadow-sm"
          >
            <span>View Full Resume</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Visual Cards instead of long paragraphs */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="bg-white rounded-3xl border border-gray-200 p-7 sm:p-8 space-y-4 hover:border-gray-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3.5 border-b border-gray-100 pb-4">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm ${card.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{card.title}</h3>
                    <p className="text-xs font-medium text-gray-500 mt-0.5">{card.subtitle}</p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-gray-600 leading-relaxed">
                  {card.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
