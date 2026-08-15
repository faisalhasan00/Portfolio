import { useRef } from 'react'
import { Code, Cpu, Database, Wrench } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java (Core & Advanced)', 'JavaScript (ES6+)', 'Python', 'SQL', 'HTML5 & CSS3'],
    },
    {
      title: 'Frontend & Mobile Engineering',
      icon: Code,
      skills: ['React.js', 'Next.js', 'Mobile App (Capacitor/PWA)', 'AI-Assisted Mobile Dev', 'Secure & Scalable Architecture', 'Tailwind CSS', 'Framer Motion', 'RESTful APIs'],
    },
    {
      title: 'Backend & AI Automations',
      icon: Cpu,
      skills: ['Node.js', 'Express.js', 'Java Backend (Spring/OOP)', 'Puppeteer', 'Playwright', 'n8n Workflows', 'OpenAI API'],
    },
    {
      title: 'Databases & Infrastructure',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'Firebase', 'Supabase', 'Hostinger VPS', 'Domain & DNS', 'Git & GitHub', 'Postman'],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-t border-gray-200">
      <div className="space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600">
            Languages, frameworks, and modern tools I leverage to build production applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className="bg-white rounded-3xl border border-gray-200 p-8 space-y-5 hover:border-gray-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-black tracking-tight">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
