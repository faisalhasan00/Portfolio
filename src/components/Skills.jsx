import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Code,
  Globe,
  Brain,
  Settings,
  Database,
  Cloud,
  Wrench,
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'Python', 'Java'],
      color: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-500/10 to-cyan-600/10',
    },
    {
      title: 'Frameworks',
      icon: Globe,
      skills: ['React', 'Next.js', 'Node.js'],
      color: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-500/10 to-emerald-600/10',
    },
    {
      title: 'AI Tools',
      icon: Brain,
      skills: ['OpenAI API', 'LangChain', 'Hugging Face'],
      color: 'from-teal-500 to-teal-600',
      bgGradient: 'from-teal-500/10 to-teal-600/10',
    },
    {
      title: 'Automation',
      icon: Settings,
      skills: [
        'Puppeteer',
        'n8n',
        'Playwright',
        'BeautifulSoup',
        'Selenium',
      ],
      color: 'from-cyan-500 to-emerald-500',
      bgGradient: 'from-cyan-500/10 to-emerald-500/10',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'Firebase'],
      color: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
    },
    {
      title: 'Cloud / Hosting',
      icon: Cloud,
      skills: ['Hostinger', 'VPS', 'GitHub', 'Vercel'],
      color: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-500/10 to-cyan-500/10',
    },
    {
      title: 'Other Tools',
      icon: Wrench,
      skills: ['Postman', 'REST APIs', 'GitHub Actions'],
      color: 'from-cyan-400 to-emerald-400',
      bgGradient: 'from-cyan-400/10 to-emerald-400/10',
    },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const SkillCard = ({ category, index, isInView }) => {
  const Icon = category.icon

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm hover:border-cyan-400/50 dark:hover:border-cyan-500/50 transition-all duration-300`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -8 }}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

      <div className="relative z-10">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 shadow-lg`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r ${category.color} text-white shadow-md hover:shadow-lg transition-all duration-200`}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills

