import { useRef } from 'react'
import { Bot, Code2, Database, Workflow, Smartphone } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)

  const services = [
    {
      icon: Bot,
      title: 'AI & Autonomous Agents',
      description: 'Building custom ChatGPT & OpenAI API integrations, streaming AI chat interfaces, prompt workflows, and retrieval-augmented tools.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps with AI Assistance',
      description: 'Developing secure, scalable cross-platform mobile apps leveraging AI-assisted development workflows to accelerate feature delivery and ensure robust code quality.',
    },
    {
      icon: Code2,
      title: 'Full-Stack Web Engineering',
      description: 'Architecting fast, responsive web applications using React, Next.js, Node.js, Express, Java, MySQL, MongoDB, and Tailwind CSS.',
    },
    {
      icon: Database,
      title: 'Web Scraping & Automations',
      description: 'Developing high-speed headless browser scrapers and automated business pipelines with Puppeteer, Playwright, n8n, and custom REST APIs.',
    },
  ]

  return (
    <section id="services" ref={ref} className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-t border-gray-200">
      <div className="space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
            What I Do & Build
          </h2>
          <p className="text-lg text-gray-600">
            Specialized engineering services to transform ideas into fast, production-ready software
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl border border-gray-200 p-8 space-y-4 hover:border-gray-400 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-black">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-medium text-black tracking-tight">{service.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed font-normal">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
