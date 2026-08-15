import { useRef } from 'react'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)

  const experiences = [
    {
      role: 'Software Developer & AI Automation Engineer',
      company: 'Ranazonai Technologies',
      location: 'Remote',
      period: 'Jan 12, 2025 – Present',
      badge: 'Current Role',
      points: [
        'Developing and scaling end-to-end full-stack web applications with React, Next.js, Java, and robust backend architectures.',
        'Building intelligent AI automation tools, autonomous workflow integrations, custom web scrapers, and conversational AI systems.',
        'Managing cloud hosting deployments, Hostinger VPS infrastructure, domain/DNS management, and CI/CD pipelines.',
      ],
    },
    {
      role: 'Full Stack Developer (Part-Time)',
      company: 'TapMenu',
      location: 'Remote / India',
      period: 'March 2024 – December 2024',
      badge: 'Product Founder',
      points: [
        'Engineered a smart digital QR menu platform for restaurants and cafés enabling real-time dish management and contactless menu browsing.',
        'Built full-stack architecture from scratch using Next.js, React, Tailwind CSS, Node.js, and MongoDB.',
        'Deployed and maintained live production web platform at tapmenu.in.',
      ],
    },
  ]

  const education = [
    {
      title: 'Java Full Stack Development Course',
      institution: 'Naresh i Technologies',
      period: 'June 2024 – December 2024',
      badge: 'Certification',
      details: 'Comprehensive hands-on training covering Core Java, Advanced Java, Object-Oriented Programming (OOP), Data Structures, RESTful APIs, and Database Integration.',
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      institution: 'Osmania University',
      period: 'Graduated 2024',
      badge: 'Degree',
      details: 'Specialized in Software Engineering, Web Development, Data Structures, and Database Systems.',
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-t border-gray-200">
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600">
            My professional roles, product experience, and technical training
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-medium text-black">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.role}
                  className="bg-white rounded-3xl border border-gray-200 p-8 space-y-4 hover:border-gray-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">
                      {exp.period}
                    </span>
                    <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                      {exp.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-black leading-snug">{exp.role}</h4>
                    <p className="text-sm font-medium text-gray-600 mt-1">{exp.company} • {exp.location}</p>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside leading-relaxed">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Training */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-medium text-black">
                Education & Training
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.title}
                  className="bg-white rounded-3xl border border-gray-200 p-8 space-y-4 hover:border-gray-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium">
                      {edu.period}
                    </span>
                    <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                      {edu.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-black leading-snug">{edu.title}</h4>
                    <p className="text-sm font-medium text-gray-600 mt-1">{edu.institution}</p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
